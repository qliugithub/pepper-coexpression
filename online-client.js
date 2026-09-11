const worker=new Worker(new URL('./worker.js',import.meta.url),{type:'module'}),pending=new Map();let seq=0;
document.getElementById('status').textContent='正在加载在线数据…';
worker.onmessage=({data})=>{if(data.status){document.getElementById('status').textContent=data.status;return}const item=pending.get(data.id);if(!item)return;pending.delete(data.id);data.error?item.reject(Error(data.error)):item.resolve(data.result)};
worker.onerror=()=>{for(const item of pending.values())item.reject(Error('Online engine failed to load. Refresh or use a current Chrome, Edge, Firefox or Safari browser.'));pending.clear()};
export function onlineRequest(route,p){return new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});worker.postMessage({id,route,p})})}
