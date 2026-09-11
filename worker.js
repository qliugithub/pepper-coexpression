import {initialize,request} from './engine.js';
async function unpack(name,type){const r=await fetch(new URL('./data/'+name,import.meta.url));if(!r.ok)throw Error(`Data download failed (${r.status}): ${name}`);const stream=r.body.pipeThrough(new DecompressionStream('gzip'));const response=new Response(stream);return type==='json'?response.json():response.arrayBuffer()}
const ready=(async()=>{const [meta,buffer]=await Promise.all([unpack('metadata.json.gz','json'),unpack('expression.f64.gz','binary')]);postMessage({status:'正在初始化查询引擎…'});initialize(meta,new Float64Array(buffer))})();
ready.catch(()=>{});
self.onmessage=async({data:{id,route,p}})=>{try{await ready;postMessage({id,result:request(route,p)})}catch(e){postMessage({id,error:e.message})}};
