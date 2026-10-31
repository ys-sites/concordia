const {chromium}=require(process.env.PLAYWRIGHT_PATH || 'playwright');
const fs=require('node:fs'); const assert=require('node:assert/strict');
const source=fs.readFileSync('src/learn/visual3d/catalog.ts','utf8');
const entries=source.split(/\n  \{\s*\n\s*id: /).slice(1).map(s=>{
 const id=s.match(/^'([^']+)'/)?.[1], course=s.match(/courseId: '([^']+)'/)?.[1], lesson=s.match(/lessonId: '([^']+)'/)?.[1];
 return {id,course,lesson};
}).filter(x=>['INDU211','ENGR213','MIAE215'].includes(x.course));
const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
(async()=>{const browser=await chromium.launch({headless:true,args:['--enable-webgl','--enable-unsafe-swiftshader']});try{
 const page=await browser.newPage({viewport:{width:1280,height:900},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const base=process.env.PROOF_URL||'http://127.0.0.1:5173/';
 console.log('TOPICS',entries.length);
 for(const e of entries){
  let start=errors.length;
  const route=`#/learn/${e.course}/${e.lesson}/${e.lesson}.tool-${slug(e.id)}`;
  await page.goto(base+route,{waitUntil:'domcontentloaded'});
  const lab=page.locator('.lx-guided-tutor');await lab.waitFor({timeout:25000});
  await lab.locator('canvas').waitFor({timeout:25000});
  await page.waitForTimeout(2000);
  assert.equal(await lab.locator('.lx-paper-scene').count(),1,`${e.id}: missing paper stage`);
  assert.equal(await lab.getByRole('region',{name:'Guided step-by-step interaction'}).count(),1,`${e.id}: missing guide`);
  assert.equal(await lab.locator('.lx-tutor-playbar input[type=range]').count(),1,`${e.id}: missing primary control`);
  if(await lab.getByText('The 3D equipment could not load.').count()) throw Error(e.id+' equipment load failed');
  if(errors.length>start) throw Error(e.id+' JS errors: '+errors.slice(start).join('; '));
  console.log('OK',e.course,e.id);
  if(['3d:product-layout','3d:mixing-tank','3d:2d-arrays'].includes(e.id)){
   await lab.locator('.lx-cl-stage').screenshot({path:'node_modules/.cache/paper-'+slug(e.id)+'.png'});
  }
 }
 assert.equal(entries.length,18,'unexpected topic count');
 console.log('PASS 18 learner routes');
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exit(1)});
