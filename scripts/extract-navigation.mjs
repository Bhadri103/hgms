import fs from 'node:fs';
import {load} from 'cheerio';
const clean=s=>s.replace(/\s+/g,' ').trim();
function read(file){return load(fs.readFileSync(file,'utf8').replace(/\{("(?:[^"\\]|\\.)*")\}/g,(_,s)=>JSON.parse(s).replaceAll('&','&amp;').replaceAll('<','&lt;')));}
const $=read('src/components/Sidebar.jsx');
function items(list){return list.children('li,menugroup').toArray().flatMap(el=>{const node=$(el),link=node.children('applink').first(),nested=node.children('ul').first();if(!link.length)return nested.length?items(nested):[];return [{label:clean(link.find('[classname=title]').text()||link.text()),href:link.attr('href'),children:nested.length?items(nested):[]}];});}
const sections=[];let current={label:'Overview',items:[]};sections.push(current);
$('ul[classname="main-navigation-menu"]').children().each((i,el)=>{const n=$(el);if(n.attr('classname')==='nav-section-label'){current={label:clean(n.text()),items:[]};sections.push(current);}else {const ul=n.children('ul').first();if(ul.length)current.items.push(...items(ul));else {const a=n.children('applink');if(a.length)current.items.push({label:clean(a.find('[classname=title]').text()),href:a.attr('href'),children:[]});}}});
fs.writeFileSync('src/data/navigation.json',JSON.stringify(sections,null,2));
const h=read('src/pages/home.jsx'),groups=[];
h('tabpane').each((i,el)=>{const group={title:clean(h(el).find('h3').first().text()),items:[]};h(el).find('actionbutton[id^=mc-btn]').each((j,b)=>{const button=h(b),spans=button.children('span');group.items.push({label:clean(spans.last().text()),href:button.closest('applink').attr('href'),referenceValue:clean(spans.first().text())});});if(group.items.length)groups.push(group);});
fs.writeFileSync('src/data/dashboard-reports.json',JSON.stringify(groups,null,2));
console.log(JSON.stringify({navigation:sections.map(s=>[s.label,s.items.length]),reports:groups.map(g=>[g.title,g.items.length])},null,2));
