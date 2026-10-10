import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { load } from 'cheerio';

const root = path.resolve(import.meta.dirname, '../..');
const out = path.resolve(import.meta.dirname, '../reports');
fs.mkdirSync(out, { recursive: true });
export function files(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(path.join(dir, e.name)) : [path.join(dir, e.name)]);
}
const originals = ['ggms', 'ggmsmultigym'].flatMap(dir => files(path.join(root, dir)));
const hashes = Object.fromEntries(originals.map(file => [path.relative(root, file).replaceAll('\\', '/'), crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex')]));
const baseline = path.join(out, 'original-hashes.json');
if (fs.existsSync(baseline)) {
  const old = JSON.parse(fs.readFileSync(baseline));
  const changes = [...new Set([...Object.keys(old), ...Object.keys(hashes)])].filter(key => old[key] !== hashes[key]);
  if (changes.length) throw Error('Original files changed: ' + changes.join(', '));
  console.log(`Verified ${Object.keys(hashes).length} original files are unchanged.`);
} else fs.writeFileSync(baseline, JSON.stringify(hashes, null, 2));
const pages = originals.filter(f => f.includes('ggmsmultigym') && f.endsWith('.html')).map(file => {
  const html = fs.readFileSync(file, 'utf8');
  const $ = load(html);
  const main = $('.main-content').first();
  const area = main.length ? main : $('body');
  return {
    source: path.relative(root, file).replaceAll('\\', '/'),
    title: area.find('h1').first().text().replace(/\s+/g, ' ').trim(),
    fields: area.find('input,select,textarea').map((i, el) => ({ tag: el.name, ...el.attribs, label: $(el).closest('.form-group').find('label').first().text().replace(/\s+/g, ' ').trim() })).get(),
    tables: area.find('table').map((i, el) => ({ id: el.attribs.id, columns: $(el).find('thead th').map((j, th) => $(th).text().replace(/\s+/g, ' ').trim()).get(), rows: $(el).find('tbody tr').length })).get(),
    missingLinks: [...new Set($('[data-unavailable-path]').map((i, el) => $(el).attr('data-unavailable-path')).get())],
    handlers: [...new Set(area.find('*').map((i, el) => Object.entries(el.attribs).filter(([k]) => /^on/.test(k)).map(([k,v]) => v)).get().flat())],
    functions: [...html.matchAll(/function\s+([\w$]+)\s*\(/g)].map(m => m[1]),
    styles: $('style').length,
    hasShell: main.length > 0,
  };
});
fs.writeFileSync(path.join(out, 'source-inventory.json'), JSON.stringify(pages, null, 2));
console.log(`${pages.length} application pages, ${pages.reduce((n,p) => n+p.fields.length,0)} fields, ${pages.reduce((n,p) => n+p.tables.length,0)} tables.`);
console.log(pages.map(p => `${p.source}: ${p.title} | ${p.fields.length} fields | ${p.tables.map(t=>t.columns.join(' / ')).join('; ')}`).join('\n'));
