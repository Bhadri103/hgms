// Development-only authoring tool. Reads original layouts; emits editable native JSX.
// Never imported by the application. No HTML parser or original scripts ship at runtime.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { load } from 'cheerio';

const project = path.resolve(import.meta.dirname, '..');
const reference = path.resolve(project, '..');
const source = path.join(reference, 'ggmsmultigym');
const write = (name, value) => { const file = path.join(project, name); fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, value); };
const walk = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? walk(path.join(dir,e.name)) : [path.join(dir,e.name)]);
const pages = walk(source).filter(f => f.endsWith('.html'));
const known = new Set(pages.map(f => path.relative(source,f).replaceAll('\\','/').replace(/\.html$/, '')));
const byBasename = Object.fromEntries([...known].map(p => [path.posix.basename(p), p]));
const missing = new Map();
const missingAssets = new Set();
const inlineStyles = new Map();
const manifest = [];
const tables = {};
let current = '', tableIndex = 0, formIndex = 0;
let commonComponent = false;
let $;
const clean = s => (s || '').replace(/\s+/g, ' ').trim();
const quote = s => JSON.stringify(s);
function route(value, label = '') {
  if (!value || /^(#|javascript:)/i.test(value)) return value?.startsWith('#') ? value : '#';
  if (/^(https?:|mailto:|tel:)/i.test(value)) {
    if (!/ggms/i.test(value)) return '#';
    value = new URL(value).pathname;
  }
  const [pathname, query] = value.split('?');
  let resolved = path.posix.normalize(path.posix.join(path.posix.dirname(current), pathname)).replace(/^\/+/, '').replace(/\.html?$/, '').replace(/\.php$/, '');
  if (known.has(resolved)) return '/' + resolved + (query ? '?' + query : '');
  const base = path.posix.basename(resolved);
  if (byBasename[base]) return '/' + byBasename[base] + (query ? '?' + query : '');
  const aliases = { add_member_plan: 'membership/upgrade/upgrademembership_plan', add_attendance:'attendance/bulk_attendance', view_member_profile_details:'member_profile/member_profile', gym_qrcode_feature:'attendance_gym_qrcode' };
  if (aliases[base]) return '/' + aliases[base] + (query ? '?' + query : '');
  const key = 'local/' + base;
  if (!missing.has(key)) missing.set(key, { route: key, label: clean(label).replace(/\(unavailable\)/g,'').trim() || base.replaceAll('_',' '), references: [] });
  if (!missing.get(key).references.includes(current)) missing.get(key).references.push(current);
  return '/' + key + (query ? '?' + query : '');
}
function asset(value) {
  if (!value) return '/assets/avatar.svg';
  if (value.startsWith('data:')) return value;
  const rel = path.resolve(source, path.dirname(current), value.split('?')[0]);
  if (rel.startsWith(path.join(reference,'ggms')) && fs.existsSync(rel) && /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/i.test(rel)) {
    const target = 'assets/' + path.relative(path.join(reference,'ggms'),rel).replaceAll('\\','/');
    fs.mkdirSync(path.dirname(path.join(project,'public',target)),{recursive:true});
    fs.copyFileSync(rel,path.join(project,'public',target));
    return '/' + target;
  }
  missingAssets.add(value);
  return /icon\//.test(value) ? '/assets/metric.svg' : '/assets/avatar.svg';
}
function css(value) {
  return value.replace(/@import[^;]+;/g,'').replace(/url\(([^)]+)\)/g,(all, url) => {
    url=url.trim().replace(/^['"]|['"]$/g,'');
    if (url.startsWith('data:') || url.startsWith('#')) return all;
    return `url(${quote(asset(url))})`;
  });
}
const attributeNames = { class:'className', for:'htmlFor', tabindex:'tabIndex', readonly:'readOnly', maxlength:'maxLength', minlength:'minLength', colspan:'colSpan', rowspan:'rowSpan', cellpadding:'cellPadding', cellspacing:'cellSpacing', autocomplete:'autoComplete', autofocus:'autoFocus', enctype:'encType', usemap:'useMap', frameborder:'frameBorder', allowfullscreen:'allowFullScreen', datetime:'dateTime', contenteditable:'contentEditable', srcset:'srcSet', spellcheck:'spellCheck', acceptcharset:'acceptCharset', 'accept-charset':'acceptCharset', formaction:'formAction', inputmode:'inputMode', crossorigin:'crossOrigin', novalidate:'noValidate' };
const booleanAttrs = new Set(['required','disabled','readonly','multiple','autofocus','checked','selected','hidden','controls','autoplay','muted','loop','novalidate']);
const voids = new Set(['input','img','br','hr','meta','link','area','base','col','embed','param','source','track','wbr']);
function emit(el, depth = 0) {
  if (el.type === 'text') { const t = el.data.replace(/\s+/g,' '); return t.trim() ? `{${quote(t)}}` : ''; }
  if (!el.name || ['script','style','link','meta','title','iframe','object','noscript'].includes(el.name)) return '';
  if ($(el).is('.local-unavailable-label')) return '';
  if ($(el).is('.footer')&&!commonComponent) return '';
  if ($(el).is('.capture-card')&&$(el).find('#photoFileInput').length) return '<PhotoCapture />';
  if ($(el).is('.capture-card')&&$(el).find('input[type=file][name^=id]').length) return `<PhotoCapture number={${Number($(el).find('input[type=file]').attr('name').replace('id',''))}} />`;
  if (el.name==='img'&&/QR Code/.test(el.attribs.alt||'')) return '<AttendanceQR />';
  if (el.attribs.id === 'panel-config') return '';
  const attrs = { ...el.attribs };
  if(commonComponent&&attrs.class)attrs.class=attrs.class.replace(/\b(active|open)\b/g,'').trim();
  let tag = el.name;
  let extra = '';
  const renderChildren = () => (el.children || []).map(child => emit(child,depth+1)).filter(Boolean).join('\n');
  if (tag === 'table') {
    const columns = $(el).find('thead tr').last().find('th').map((i,th)=>clean($(th).text())).get();
    if (columns.length > 0 && !$(el).find('input:not([type=checkbox]):not([type=hidden]):not([type=submit]),select,textarea').length) {
      const id = `${current.replace(/\.html$/,'')}:table-${tableIndex++}`;
      tables[id] = { columns, page: current.replace(/\.html$/,''), title: clean($(el).closest('.panel').find('.panel-heading').first().text()) };
      return `<DataTable tableKey=${quote(id)} columns={${JSON.stringify(columns)}} className=${quote(attrs.class || 'table table-striped table-bordered')} />`;
    }
  }
  if (tag === 'canvas') return `<Chart name=${quote(attrs.id || 'chart')} />`;
  if (attrs.id === 'calendar' && !$(el).children().length) return '<BookingCalendar />';
  if (tag === 'form') { tag = 'LocalForm'; extra += ` formKey=${quote(attrs.id || attrs.name || `form-${formIndex++}`)}`; delete attrs.action; delete attrs.method; delete attrs.enctype; delete attrs.onsubmit; }
  if (['input','select','textarea'].includes(tag)) {
    extra += ` as=${quote(tag)}`;
    if (attrs.onchange) extra += ` behavior=${quote(attrs.onchange)}`;
    if (tag==='select') {
      const selected = $(el).find('option[selected]').first();
      if (selected.length) attrs.value = selected.attr('value') ?? selected.text();
    }
    if (tag==='textarea') attrs.value = $(el).text();
    tag='Field';
  }
  if (tag==='a') {
    tag='AppLink';
    if(attrs.onclick) extra += ` behavior=${quote(attrs.onclick)}`;
    attrs.href=route(attrs['data-unavailable-path'] || attrs.href, $(el).text());
    delete attrs['data-unavailable-path']; delete attrs['aria-disabled'];
    if (attrs.title==='This page is unavailable in this local copy') delete attrs.title;
    delete attrs.target;
  }
  if (tag==='button' || (tag==='Field' && /^(submit|button|reset)$/.test(attrs.type))) {
    if(tag==='button'&&!attrs.type)attrs.type=$(el).closest('form').length&&!$(el).closest('a').length?'submit':'button';
    if (tag==='button') tag='ActionButton';
    if (attrs.onclick) extra += ` behavior=${quote(attrs.onclick)}`;
  }
  if ((attrs.class||'').split(/\s+/).includes('modal')) { tag='Modal'; delete attrs['aria-hidden']; delete attrs.style; }
  if (tag==='li' && $(el).children('ul.sub-menu').length) tag='MenuGroup';
  if (tag==='li' && $(el).children('.dropdown-menu').length) tag='Dropdown';
  if ((attrs.class||'').split(/\s+/).includes('tab-pane')) { tag='TabPane'; extra += ` initialActive={${/\bactive\b/.test(attrs.class)}}`; }
  if (tag==='img') attrs.src=asset(attrs.src);
  if (attrs.style) {
    const value=css(attrs.style);
    const name='s-'+crypto.createHash('sha1').update(value).digest('hex').slice(0,10);
    inlineStyles.set(name,value);
    attrs.class=(attrs.class || '')+' '+name;
    delete attrs.style;
  }
  if(attrs.style==='')delete attrs.style;
  if (tag==='Field' && attrs.type==='file') delete attrs.value;
  if (tag==='option') delete attrs.selected;
  if (attrs.class) attrs.class=attrs.class.replace(/\blocal-unavailable\b/g,'').trim();
  const props=Object.entries(attrs).flatMap(([key,value])=>{
    if (/^on/i.test(key) || ['language','align','valign','bgcolor','bordercolor'].includes(key)) return [];
    if (key==='value' && tag==='Field') key='defaultValue';
    if (key==='checked' && tag==='Field') return ['defaultChecked={true}'];
    if (key==='class') key='className';
    if (booleanAttrs.has(key)) return [`${attributeNames[key]||key}={true}`];
    if (key==='width'||key==='height') value=value.replace(/px;?$/,'');
    if (!/^[\w-]+$/.test(key)) return [];
    return [`${attributeNames[key]||key}=${quote(value)}`];
  }).join(' ');
  if (voids.has(el.name) || el.name==='textarea') return `<${tag} ${props}${extra} />`;
  let children=renderChildren();
  // Server-owned member lists become local dummy records instead of copied personal data.
  if (el.name==='select' && $(el).find('option').length>80 && !/dial|country/i.test(attrs.name||attrs.id||'')) children='<option value="">Select Member</option>{members.map(member => <option key={member.id} value={member.id}>{member.name} ({member.id})</option>)}';
  return `<${tag} ${props}${extra}>\n${children}\n</${tag}>`;
}
const imports = `import React from 'react';\nimport { LocalForm, Field, AppLink, ActionButton, Modal, MenuGroup, Dropdown, TabPane, DataTable, Chart, BookingCalendar, PhotoCapture, AttendanceQR } from '@/components/ui';\nimport { members } from '@/data/seed';\n`;
// Static assets and styles are owned by HGMS. No original JavaScript is copied.
for (const file of walk(path.join(reference,'ggms'))) {
  if (!/\.(css|png|jpe?g|gif|svg|woff2?|ttf|eot)$/i.test(file)) continue;
  const dest='public/assets/'+path.relative(path.join(reference,'ggms'),file).replaceAll('\\','/');
  if(file.endsWith('.css')) {
    let content=fs.readFileSync(file,'utf8').replace(/@import\s+url\([^)]*https?[^)]*\)\s*;/g,'');
    content=content.replace(/url\(([^)]+)\)/g,(all,value)=>{
      const name=value.trim().replace(/^['"]|['"]$/g,'').split(/[?#]/)[0];
      if(/^data:/.test(name)) return all;
      const resolved=path.resolve(path.dirname(file),name);
      if(fs.existsSync(resolved) && !resolved.endsWith('.html')) return all;
      return 'none';
    });
    write(dest,content);
  } else { fs.mkdirSync(path.dirname(path.join(project,dest)),{recursive:true}); fs.copyFileSync(file,path.join(project,dest)); }
}
for (const file of pages) {
  current=path.relative(source,file).replaceAll('\\','/'); tableIndex=0; formIndex=0;
  const html=fs.readFileSync(file,'utf8'); $=load(html);
  const main=$('.main-content').first();
  const area=main.length?main:$('body');
  const title=clean(area.find('h1').first().text()) || clean(area.find('h2,h3').first().text()) || current.replace(/\.html$/,'').split('/').at(-1).replaceAll('_',' ');
  let styles=$('style').map((i,s)=>css($(s).text())).get().join('\n');
  const content=area.contents().map((i,el)=>emit(el)).get().join('\n');
  const name=current.replace(/\.html$/,'');
  const bodyClass=($('body').attr('class')||'')+' '+[...new Set([...html.matchAll(/body\.([a-z][\w-]+-page)/g)].map(m=>m[1]))].join(' ');
  manifest.push({path:'/'+name, title, file:'src/pages/'+name+'.jsx', shell:!!main.length, empty:!html.trim(), fields:area.find('input,select,textarea').length,bodyClass});
  if(!html.trim()) continue;
  write('src/pages/'+name+'.jsx', imports+`\nexport default function Page() {\n return <>\n<style>{${quote(styles)}}</style>\n${content}\n</>;\n}\n`);
  if(current==='home.html') {
    commonComponent=true;
    write('src/components/Header.jsx',imports+`\nexport default function Header() { return (${emit($('.header-gloss').first()[0])}); }\n`);
    write('src/components/Sidebar.jsx',imports+`\nexport default function Sidebar() { return (${emit($('.main-navigation').first()[0])}); }\n`);
    write('src/components/Footer.jsx',imports+`\nexport default function Footer() { return (${emit($('.footer').first()[0])}); }\n`);
    commonComponent=false;
    write('src/styles/shell.css',$('style').map((i,s)=>$(s).text()).get().filter(t=>t.includes('.header-gloss') || t.includes('ul.nav-section-card')).map(css).join('\n'));
  }
}
write('src/styles/inline.css',[...inlineStyles].map(([name,value])=>`.${name}{${value}}`).join('\n'));
write('src/data/tables.json',JSON.stringify(tables,null,2));
write('src/data/routes.json',JSON.stringify(manifest,null,2));
write('reports/missing-pages.json',JSON.stringify([...missing.values()],null,2));
write('reports/missing-assets.json',JSON.stringify([...missingAssets],null,2));
write('src/data/missing-routes.json',JSON.stringify([...missing.values()],null,2));
console.log(`Authored ${manifest.filter(m=>!m.empty).length} JSX pages; ${manifest.filter(m=>m.empty).length} empty source files; ${Object.keys(tables).length} local tables; ${missing.size} missing destinations; ${missingAssets.size} unavailable assets.`);
