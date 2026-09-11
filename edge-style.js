// Fixed 0–1 scale across all queries; threshold changes never rescale the same PCC.
export function edgeStyle(pcc,{positive='#2678b5',negative='#d1495b',variable=true}={}){
  const strength=Math.min(1,Math.abs(pcc));
  return {color:pcc<0?negative:positive,width:variable?.7+4.3*strength**3:1.5,opacity:.25+.6*strength,dash:pcc<0?'5 3':''};
}
