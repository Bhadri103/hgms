import test from 'node:test';
import assert from 'node:assert/strict';
const storage=new Map();
globalThis.localStorage={getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)};
const {brand}=await import('../src/config/brand.js');
const legacy={collections:{members:[{id:'old-a',name:'Unisex member',org_id:'1'},{id:'old-b',name:'Move member',org_id:'2'},{id:'legacy',name:'Unassigned'}]},tables:{example:[{id:'a',org_id:'1',cells:['A']},{id:'b',org_id:'2',cells:['B']}]},forms:{draft:{name:'Unisex draft'}},logs:[],edits:{members:{'seed-1':{Name:'Only branch one'}}},deleted:{members:['seed-2']},profile:{name:'Manoj'}};
localStorage.setItem(brand.storageKey,JSON.stringify(legacy));
const repo=await import('../src/services/repository.js');
test('organization migration, separate records, drafts and shared account',()=>{
 assert.equal(repo.readState().organizations.length,3);
 assert.deepEqual(repo.readState().collections.members.map(m=>m.id),['old-a','legacy']);
 assert.equal(JSON.parse(localStorage.getItem(brand.storageKey+'-before-organizations')).collections.members.length,3);
 repo.switchOrganization('2');assert.deepEqual(repo.readState().collections.members.map(m=>m.id),['old-b']);assert.deepEqual(repo.readState().forms,{});assert.deepEqual(repo.readState().edits.members,{});assert.deepEqual(repo.readState().deleted.members,['seed-2']);
 repo.saveRecord('members',{id:'same',name:'Branch two',org_id:'1'});assert.equal(repo.readState().collections.members.at(-1).org_id,'2');
 repo.switchOrganization('1');assert.ok(!repo.readState().collections.members.some(m=>m.id==='same'));assert.equal(repo.readState().forms.draft.name,'Unisex draft');repo.saveRecord('members',{id:'same',name:'Branch one'});
 repo.updateState(s=>({...s,profile:{name:'Updated Manoj'}}));repo.switchOrganization('2');assert.equal(repo.readState().collections.members.find(m=>m.id==='same').name,'Branch two');assert.equal(repo.readState().profile.name,'Updated Manoj');
 const org=repo.addOrganization({name:'Fourth branch'});repo.switchOrganization(org.id);assert.deepEqual(repo.readState().collections,{});assert.deepEqual(repo.readState().tables,{});assert.deepEqual(repo.readState().forms,{});assert.throws(()=>repo.addOrganization({name:'Fourth branch'}));assert.throws(()=>repo.switchOrganization('missing'));
});

test('All Highgrade combines branches without changing their records',()=>{
 repo.switchOrganization('all');
 const combined=repo.readState();
 assert.equal(combined.activeOrganizationId,'all');
 assert.equal(combined.collections.members.filter(m=>m.id==='same').length,2);
 assert.deepEqual(combined.collections.members.filter(m=>m.id==='same').map(m=>m.org_id).sort(),['1','2']);
 assert.ok(combined.tables.example.some(r=>r.org_id==='1'));
 assert.ok(combined.tables.example.some(r=>r.org_id==='2'));
 assert.throws(()=>repo.saveRecord('members',{name:'Ambiguous'}),/Select a Highgrade branch/);
 assert.throws(()=>repo.updateState(s=>({...s,collections:{}})),/Select a Highgrade branch/);
 repo.updateState(s=>({...s,profile:{name:'All view account'}}));
 repo.switchOrganization('1');assert.equal(repo.readState().collections.members.find(m=>m.id==='same').name,'Branch one');
 repo.switchOrganization('2');assert.equal(repo.readState().collections.members.find(m=>m.id==='same').name,'Branch two');
 assert.equal(repo.readState().profile.name,'All view account');
});
