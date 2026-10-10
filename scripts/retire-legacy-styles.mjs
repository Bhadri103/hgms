// One-time migration to the shared Tailwind theme. Only modifies HGMS files.
import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const files=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?files(path.join(dir,e.name)):[path.join(dir,e.name)]);
const inlinePath=path.join(root,'src/styles/inline.css');
const inline=fs.existsSync(inlinePath)?fs.readFileSync(inlinePath,'utf8'):'';
const hidden=new Set([...inline.matchAll(/\.(s-[\w]+)\{([^}]+)\}/g)].filter(([,name,css])=>/display\s*:\s*none/.test(css)).map(m=>m[1]));
let blocks=0,icons=0;
for(const file of files(path.join(root,'src')).filter(f=>f.endsWith('.jsx')&&!f.endsWith('AppIcon.jsx'))){
  let source=fs.readFileSync(file,'utf8');
  source=source.replace(/<style>\{("(?:[^"\\]|\\.)*")\}<\/style>/g,()=>{blocks++;return '';});
  source=source.replace(/className="([^"]*)"/g,(all,classes)=>'className="'+classes.split(/\s+/).map(c=>hidden.has(c)?'hidden':c.startsWith('s-')?'':c).filter(Boolean).join(' ')+'"');
  let changedIcon=false;
  source=source.replace(/<i\b([^>]*?)>\s*<\/i>|<i\b([^>]*?)\/>/g,(_,a,b)=>{changedIcon=true;icons++;return `<AppIcon${a||b} />`;});
  if(changedIcon&&!source.includes("import AppIcon from"))source="import AppIcon from '@/components/AppIcon';\n"+source;
  fs.writeFileSync(file,source);
}
const removed=[];
for(const dir of ['src/styles','public/assets/stylesheet'])for(const file of files(path.join(root,dir)).filter(f=>f.endsWith('.css'))){
  if(!file.startsWith(root+path.sep))throw Error('Refusing to remove a file outside HGMS');
  fs.unlinkSync(file);removed.push(path.relative(root,file));
}
fs.writeFileSync(path.join(root,'reports/tailwind-migration.json'),JSON.stringify({inlineStyleBlocksRemoved:blocks,iconsConverted:icons,retiredStylesheets:removed},null,2));
console.log({blocks,icons,retiredStylesheets:removed.length});
