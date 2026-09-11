// NPG / AAAS endpoints: https://github.com/nanxstats/ggsci/blob/master/R/palettes.R
// White-centered continuous adaptations; Cell is an independently inspired palette.
export const palettes = [
 ['default','默认配色',['#f1f8fb','#79b5d1','#146a9c']],
 ['ylorrd','黄–橙–红 · YlOrRd',['#ffffcc','#fd8d3c','#800026']],
 ['rdbu','蓝–白–红 · RdBu',['#2166ac','#f7f7f7','#b2182b']],
 ['viridis','Viridis · 紫–绿–黄',['#440154','#3b528b','#21918c','#5ec962','#fde725']],
 ['npg','Nature · NPG 渐变',['#4dbbd5','#ffffff','#e64b35']],
 ['aaas','Science · AAAS 渐变',['#3b4992','#ffffff','#ee0000']],
 ['cell','Cell 灵感 · 青–白–紫',['#008b8b','#ffffff','#7b3294']],
 ['custom','自定义：低 / 中 / 高',['#2166ac','#ffffff','#b2182b']]
];
export function interpolate(colors, ratio){
 const p=Math.max(0,Math.min(1,ratio))*(colors.length-1), i=Math.min(colors.length-2,Math.floor(p)), f=p-i;
 const rgb=hex=>hex.slice(1).match(/../g).map(x=>parseInt(x,16));
 const a=rgb(colors[i]),b=rgb(colors[i+1]);
 return '#'+a.map((v,j)=>Math.round(v+(b[j]-v)*f).toString(16).padStart(2,'0')).join('');
}
export function paletteControl(id,onChange){
 const root=document.getElementById(id),key='pepper-palette-'+id;
 let state={name:'default',custom:['#2166ac','#ffffff','#b2182b']},domain=[0,1],unit='TPM',diverging=false;
 try{const saved=JSON.parse(localStorage.getItem(key));if(saved&&palettes.some(p=>p[0]===saved.name)&&Array.isArray(saved.custom)&&saved.custom.length===3&&saved.custom.every(c=>/^#[0-9a-f]{6}$/i.test(c)))state=saved;}catch{}
 const colors=()=>state.name==='custom'?state.custom:state.name==='default'&&diverging?palettes[2][2]:palettes.find(p=>p[0]===state.name)[2];
 const gradient=c=>`linear-gradient(to right,${c.join(',')})`;
 root.className='palette-control';
 root.innerHTML=`<details class="palette-picker"><summary><span>配色</span><i class="palette-swatch"></i><span class="palette-name"></span></summary><div class="palette-options">${palettes.map(p=>`<button type="button" data-palette="${p[0]}" aria-pressed="false"><i class="palette-swatch" style="background:${gradient(p[2])}"></i><span>${p[1]}</span><b aria-hidden="true">✓</b></button>`).join('')}</div></details><div class="palette-custom" hidden>${['低值颜色','中值颜色','高值颜色'].map((label,i)=>`<label>${label}<input type="color" data-stop="${i}" value="${state.custom[i]}"></label>`).join('')}</div><div class="palette-legend"><span class="palette-unit"></span><div class="palette-ramp"></div><div class="palette-ticks"><span></span><span></span><span></span></div></div><details class="palette-source"><summary>配色说明</summary><span>NPG / AAAS 渐变改编自 ggsci 离散配色；Cell 为灵感配色。</span> <a href="https://nanx.me/ggsci/articles/ggsci.html" target="_blank" rel="noopener">ggsci</a></details>`;
 function render(){
  root.querySelector('.palette-name').textContent=palettes.find(p=>p[0]===state.name)[1];
  root.querySelector('summary .palette-swatch').style.background=gradient(colors());
  root.querySelector('.palette-custom').hidden=state.name!=='custom';
  root.querySelectorAll('[data-palette]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.palette===state.name)));
  root.querySelector('.palette-ramp').style.background=gradient(colors());
  root.querySelector('.palette-unit').textContent=unit;
  const ticks=[domain[0],(domain[0]+domain[1])/2,domain[1]];
  root.querySelectorAll('.palette-ticks span').forEach((el,i)=>el.textContent=Number(ticks[i].toPrecision(4)).toString());
 }
 function changed(){try{localStorage.setItem(key,JSON.stringify(state));}catch{}render();onChange();}
 root.querySelectorAll('[data-palette]').forEach(b=>b.onclick=()=>{state.name=b.dataset.palette;root.querySelector('.palette-picker').open=false;changed();});
 root.querySelectorAll('[data-stop]').forEach(input=>input.oninput=()=>{state.custom[Number(input.dataset.stop)]=input.value;changed();});
 root.addEventListener('keydown',e=>{if(e.key==='Escape'){root.querySelector('.palette-picker').open=false;root.querySelector('summary').focus();}});
 render();
 return {scale(min,max,label,z=false){domain=[min,max];unit=label;diverging=z;render();return value=>interpolate(colors(),max===min?0.5:(value-min)/(max-min));}};
}
