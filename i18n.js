// Translate presentation text only. Raw annotation records and gene names are preserved.
const dictionary={
 '在线版首次加载完整表达与注释数据；PCC 在浏览器后台计算，无需本地服务器。原始基因名与人工注释保持原文。':'The first visit loads full expression and annotation data. PCC is calculated in a background worker; no local server is needed. Original gene names and curated annotations are preserved.',
 '正在加载在线数据…':'Loading online data…',
 '正在初始化查询引擎…':'Initializing the query engine…',
'TF 分类依据项目 TF 家族表的精确 ID 匹配；未标注不代表已确认不是 TF。':'TF classification uses exact IDs in the project TF-family table; missing annotation does not establish that a gene is not a TF.',
"伙伴类型":"Partner type",
"全部基因":"All genes",
"仅转录因子（TF）":"Transcription factors only (TF)",
"TF 分类 / 家族":"TF status / family",
"未标注为 TF":"Not annotated as TF",
"无效的基因类型":"Invalid gene type",
"当前查询：仅转录因子伙伴":"Active query: TF partners only",
"当前查询：全部基因伙伴":"Active query: all gene partners",
"◆ 转录因子（TF）　● 未标注为 TF；颜色表示网络层级。TF 筛选作用于伙伴表、网络各层及下载，目标基因始终保留。":"\u25c6 Transcription factor (TF) \u00b7 \u25cf Not annotated as TF; colors indicate network levels. TF filtering applies to partners, all network layers and downloads; the target is always retained.",
'Viridis · 紫–绿–黄':'Viridis · Purple–green–yellow',
"配色":"Palette",
"默认配色":"Default palette",
"黄–橙–红 · YlOrRd":"Yellow\u2013orange\u2013red \u00b7 YlOrRd",
"蓝–白–红 · RdBu":"Blue\u2013white\u2013red \u00b7 RdBu",
"Nature · NPG 渐变":"Nature \u00b7 NPG gradient",
"Science · AAAS 渐变":"Science \u00b7 AAAS gradient",
"Cell 灵感 · 青–白–紫":"Cell inspired \u00b7 Teal\u2013white\u2013purple",
"自定义：低 / 中 / 高":"Custom low / mid / high",
"低值颜色":"Low color",
"中值颜色":"Mid color",
"高值颜色":"High color",
"配色说明":"Palette notes",
"NPG / AAAS 渐变改编自 ggsci 离散配色；Cell 为灵感配色。":"NPG / AAAS gradients adapt ggsci discrete colors; Cell is an inspired palette.",
'在线数据 · 22 组织 × 3 重复':'Online data · 22 tissues × 3 replicates',
'辣椒基因共表达查询':'Pepper gene co-expression',
'辣椒基因共表达 · Local Atlas':'Pepper co-expression · Local Atlas',
'正在加载数据…':'Loading data…','准备查询':'Ready to query','基因 ID':'Gene ID',
'表达模式':'Expression mode','66 样本 · PCC66':'66 samples · PCC66','22 组织均值 · PCC22':'22 tissue means · PCC22',
'相关阈值 |PCC|':'Threshold |PCC|','相关方向':'Correlation sign','正相关':'Positive','负相关':'Negative','正 / 负相关':'Positive / negative',
'查询共表达':'Query co-expression','共表达网络':'Co-expression network',
'橙色：目标 · 蓝色：一层 · 紫色：二层':'Orange: target · Blue: first layer · Purple: second layer',
'一层 Top':'First-layer top','搜索深度':'Search depth','一层':'One layer','二层':'Two layers','节点上限':'Node limit',
'伙伴间连线':'Partner-to-partner edges','更新网络':'Update network','重置视图':'Reset view',
'正相关颜色':'Positive color','负相关颜色':'Negative color','线宽':'Edge width','随 |PCC| 增强':'Scale with |PCC|','固定线宽':'Fixed width',
'交互共表达网络':'Interactive co-expression network',
'拖动节点 / 空白区域，滚轮缩放；点击节点查看表达和注释。实线为正相关，虚线为负相关；颜色可自选，默认 |PCC| 越大线越粗、越深。':'Drag nodes or the background; scroll to zoom. Select a node to view expression and annotations. Solid edges: positive; dashed edges: negative. Colors are customizable; stronger |PCC| gives thicker, darker edges by default.',
'下载当前网络 TSV':'Download displayed network TSV','下载全部目标边 TSV':'Download all target edges TSV',
'基因详情':'Gene details','加入热图':'Add to heatmap','22 组织平均 TPM':'Mean TPM across 22 tissues','显示 3 个重复':'Show 3 replicates',
'全部共表达伙伴':'All co-expression partners','下载全部命中结果':'Download all matches',
'搜索基因 / 名称 / 功能 / GO / TF':'Search gene / name / function / GO / TF','输入关键词筛选表格':'Filter the table by keyword',
'排序':'Sort by','带符号 PCC':'Signed PCC','功能描述':'Function description','顺序':'Order','降序':'Descending','升序':'Ascending',
'热图':'Heatmap','伙伴基因 ID':'Partner gene ID','功能描述 / TF':'Function / TF','GO 注释':'GO annotations','上一页':'Previous','下一页':'Next',
'多基因表达热图':'Multi-gene expression heatmap','基因 ID（逗号、空格或换行分隔，最多 30 个）':'Gene IDs (comma, space or newline separated; up to 30)',
'颜色尺度':'Color scale','log2(平均 TPM + 1)':'log2(mean TPM + 1)','行 Z-score（基于 log2 均值）':'Row Z-score (from log2 means)',
'绘制热图':'Draw heatmap','数据来源与解释':'Data sources and interpretation',
'人工名称：':'Curated names: ','同源功能描述：':'Homology-based function: ','拟南芥对应信息：':'Arabidopsis correspondence: ',
'TF 家族：':'TF family: ','未标注':'Not named','未注释':'Unannotated',
'按工作簿 ZLC ID 精确匹配；其他物种的名称及功能作为参考。多种人工名称均保留。':'Exact workbook ZLC ID matching. Names and functions from other species are references; all distinct curated names are retained.',
'正在查询完整矩阵…':'Querying the complete matrix…','读取网络…':'Reading network…',
'没有符合当前条件的伙伴。':'No partners match the current criteria.',
'热图需 1–30 个基因':'The heatmap requires 1–30 genes.',
'无效或未知基因 ID。':'Invalid or unknown gene ID.',
'未知基因 ID':'Unknown gene ID',
'该基因未通过表达筛选（至少一个组织平均 TPM > 1）。':'This gene did not pass the expression filter (mean TPM > 1 in at least one tissue).',
'该基因在当前模式下为零方差，PCC 未定义。':'This gene has zero variance in this mode; PCC is undefined.',
'参数错误：模式 66/22，阈值须为 0–1。':'Invalid parameters: mode must be 66/22 and threshold must be 0–1.',
'排序参数错误':'Invalid sorting parameters','下载格式错误':'Invalid download format','请求失败':'Request failed',
'保留至少一个组织 3 重复算术平均 TPM > 1 的基因；无 MAD 筛选，不限制 WGCNA 模块。PCC66：66 样本 log2(TPM+1) 的 Pearson 相关；PCC22：22 组织 log2(算术平均 TPM+1) 的 Pearson 相关。在线版从完整表达数据按需计算 PCC，查询排除自身与未定义值。':'Genes are retained if the arithmetic mean TPM of three replicates exceeds 1 in at least one tissue. No MAD filtering or WGCNA module restriction is applied. PCC66 is Pearson correlation of log2(TPM+1) over 66 samples; PCC22 uses log2(arithmetic tissue mean TPM+1) over 22 tissues. The online version calculates PCC on demand from complete expression data, excluding self-correlations and undefined values.',
'跨组织 PCC 描述表达模式相似性，不证明调控关系。这里不提供全局 FDR。网络为有上限的可视化，全部命中结果下载不受绘图上限、分页或表格搜索影响。二层仅扩展已绘制的一层节点，对新的候选按最强连接的 |PCC| 排序，再应用节点上限；默认每个二层节点保留最强父边。开启伙伴间连线后显示当前节点之间所有符合阈值的边。':'Cross-tissue PCC describes expression-pattern similarity, not proven regulation. No global FDR is provided. Network visualization is capped; full-match downloads are unaffected by drawing limits, pagination or table search. The second layer expands only displayed first-layer nodes. New candidates are ranked by their strongest connection |PCC| before applying the node limit, retaining the strongest parent edge by default. Partner-to-partner mode adds all qualifying edges among displayed partner nodes.',
'GO 来自 PANNZER2 GO 映射表；GO 术语不作为蛋白描述。功能描述来自用户 Excel 的 TPM sheet（拟南芥同源注释）；人工名称来自 candi_gene G 列，重复名称保留，补充注释按 ZLC ID 精确匹配并注明 sheet 和行号。其他物种注释不等同于辣椒实验验证。TF 家族来自 ZLV3_TF_gene.txt 的 subject 精确 ID 映射；缺失描述标为未注释；AltName 使用人工名称，多名称以 / 分隔。六列导出 direction=undirected，weight 保留相关符号。':'GO terms come from the PANNZER2 mapping table and are not used as protein descriptions. Functional descriptions come from the workbook TPM sheet (Arabidopsis homology annotations). Curated names come from candi_gene column G; distinct names are retained. Additional annotations use exact ZLC IDs with sheet and row provenance. Other-species annotations are not experimental validation in pepper. TF families use exact subject ID mappings from ZLV3_TF_gene.txt. Missing descriptions are unannotated; AltName contains curated names separated by /. Six-column exports use direction=undirected and preserve the sign of weight.',
'拟南芥同源功能注释（工作簿原文）':'Arabidopsis homology annotations (original workbook text)',
'人工名称 / 其他物种注释（原始记录）':'Curated names / other-species annotations (original records)',
'工作簿补充注释（原文，按 ZLC ID 精确匹配）':'Additional workbook annotations (original text, exact ZLC ID match)',
'人工标注名称（G列）':'Curated name (column G)'
};
export function translate(value){
 const trimmed=value.trim();
 if(Object.hasOwn(dictionary,trimmed))return value.replace(trimmed,dictionary[trimmed]);
 let s=value;
 const patterns=[
 [/^当前网络：(\d+) 个 TF \/ (\d+) 个节点（含目标）$/,'Current network: $1 TFs / $2 nodes (including target)'],
 [/未标注为 TF/g,'Not annotated as TF'],
 [/^(\S+) 须为 (.+) 的整数$/,'$1 must be an integer in $2'],
 [/^(.*) · 第 (\d+) 行$/,'$1 · row $2'],
 [/^([A-Z]+)列$/,'Column $1'],
 [/^人工 \/ 同源 \/ 其他物种注释原文（(\d+) 条）$/,'Curated / homology / other-species evidence ($1 records)'],
 [/^GO 注释（(\d+)）$/,'GO annotations ($1)'],
 [/^(\d[\d,]*) 个可查询基因 \/ (\d[\d,]*) 个输入基因$/,'$1 queryable genes / $2 input genes'],
 [/^第 (\d+) \/ (\d+) 页 · 筛选后 (\d+) \/ 全部 (\d+)$/,'Page $1 / $2 · Filtered $3 / Total $4'],
 [/^(\d[\d,]*) 个$/,'$1'],
 [/全部一层命中 (\d+)；绘制一层 (\d+)（省略 (\d+)）。当前 (\d+) 节点 \/ (\d+) 边。/,'First-layer matches: $1; displayed: $2 (omitted: $3). Current network: $4 nodes / $5 edges. '],
 [/二层新候选 (\d+)，因上限省略 (\d+)；仅扩展已绘制一层。/,'New second-layer candidates: $1; omitted by cap: $2. Only displayed first-layer nodes are expanded.'],
 [/全部命中 (\d+) 个伙伴（排除自身）/,'$1 matching partners (self excluded)'],
 [/66 样本/g,'66 samples'],[/22 组织均值/g,'22 tissue means'],
 [/(\d+) 基因 × 22 组织 · /,'$1 genes × 22 tissues · '],
 [/对称色阶 ±/,'Symmetric scale ±'],[/色阶 0–/,'Scale 0–'],
 [/^来源：/,'Sources: '],[/^网络更新失败：/,'Network update failed: '],
 [/^加入热图 (.+)$/,'Add $1 to heatmap'],
 [/\| 平均 TPM /g,'| Mean TPM '],[/\| 平均 /g,'| Mean '],[/\| 重复 /g,'| Replicates '],[/\| 色值 /g,'| Color value '],
 [/━━ 正相关/,'━━ Positive'],[/┄┄ 负相关/,'┄┄ Negative'],
 [/\|PCC\| 0 → 1：线宽 0.7 → 5；相关越强越粗、越深/,'|PCC| 0 → 1: width 0.7 → 5; stronger means thicker and darker'],
 [/固定线宽 1.5；相关越强越深/,'Fixed width 1.5; stronger means darker'],
 [/（固定尺度，不随阈值重标定）/,' (fixed scale, independent of threshold)']
 ];
 for(const [pattern,replacement] of patterns)s=s.replace(pattern,replacement);
 return s;
}
if(typeof document!=='undefined'){
 let language='zh';try{language=localStorage.getItem('pepper-language')==='en'?'en':'zh'}catch{}
 const textState=new WeakMap(),attrState=new WeakMap();
 const selector=document.getElementById('language');selector.value=language;
 const ignored=el=>el?.closest('#language,script,style,textarea,.genealias,.heatlabel,.evidence dd');
 function apply(){
  observer.disconnect();
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
   const node=walker.currentNode;if(ignored(node.parentElement))continue;
   let state=textState.get(node);
   if(!state||node.nodeValue!==state.last)state={original:node.nodeValue};
   const next=language==='en'?translate(state.original):state.original;
   if(next!==node.nodeValue)node.nodeValue=next;
   state.last=next;textState.set(node,state);
  }
  for(const el of document.querySelectorAll('[title],[aria-label],[placeholder]')){
   if(ignored(el))continue;
   const states=attrState.get(el)||{};
   for(const key of ['title','aria-label','placeholder']){
    if(!el.hasAttribute(key))continue;
    const value=el.getAttribute(key);let state=states[key];
    if(!state||value!==state.last)state={original:value};
    const next=language==='en'?translate(state.original):state.original;
    if(value!==next)el.setAttribute(key,next);state.last=next;states[key]=state;
   }attrState.set(el,states);
  }
  document.documentElement.lang=language==='en'?'en':'zh-CN';
  document.title=language==='en'?'Pepper co-expression · Local Atlas':'辣椒基因共表达 · Local Atlas';
  observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','aria-label','placeholder']});
 }
 const observer=new MutationObserver(apply);
 selector.onchange=()=>{language=selector.value;try{localStorage.setItem('pepper-language',language)}catch{}apply()};
 apply();
}
