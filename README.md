# Pepper co-expression explorer / 辣椒基因共表达查询

An online, bilingual co-expression explorer for 22 pepper tissues × 3 RNA-seq replicates.

**Website:** https://qliugithub.github.io/pepper-coexpression/

## Features

- 28,387 queryable genes from 39,067 input genes, with no WGCNA module restriction or MAD filter.
- PCC66 / PCC22, positive / negative / both signs, arbitrary thresholds, full-result tables and downloads.
- Interactive one-layer and bounded two-layer networks; explicit hit counts and truncation counts.
- Correlation-dependent edge widths and customizable positive / negative colors.
- Curated gene names, Arabidopsis homology functions, GO / TF annotations and original evidence with sheet / row provenance.
- Mean TPM over 22 tissues, individual replicates, multi-gene heatmaps, Chinese / English toggle.

## How the online version works

GitHub Pages serves this site without a Node server. On the first visit the browser loads two losslessly gzip-compressed datasets (about 14 MB total). A Web Worker calculates requested PCC rows from all expression profiles, so there is no preselected Top20 edge subset or hidden query threshold. Computation runs off the main UI thread. A current Chrome, Edge, Firefox or Safari supporting module workers and `DecompressionStream` is required.

Original TPM is stored as little-endian Float64. Each gene's log-transformed vector is mean-centered and divided by its Euclidean norm using Float64 arithmetic. PCC is their dot product; results are rounded to Float32, matching the local matrix storage. No whole 28,387 × 28,387 matrix is downloaded or recomputed. Full binary matrices and original source workbooks remain in the independent local project archive.

- Filter: at least one tissue has arithmetic mean TPM > 1 across its three replicates.
- PCC66: Pearson correlation of log2(TPM + 1) across 66 samples.
- PCC22: Pearson correlation of log2(arithmetic tissue mean TPM + 1) across 22 tissues.
- Self-correlations and undefined correlations are excluded.
- Cross-tissue correlation represents expression-pattern similarity, not established regulation or causation. No global FDR is provided.

## Network limits and exports

The default view shows the top 50 first-layer partners. Up to 200 first-layer partners and 300 total nodes can be selected. Second-layer expansion uses displayed first-layer seeds only, ranking new candidates by their strongest parent connection before applying the cap. The interface states all omitted counts. Partner-to-partner edges are optional.

Full partner / target-edge downloads are not limited by displayed node count, table search or pagination. Six-column TSV exports contain `fromNode`, `toNode`, `weight`, `direction`, `fromAltName`, `toAltName`. Direction is `undirected`; weight retains its sign. AltName contains curated names, not inferred ortholog names.

## Data provenance and validation

Annotations are derived from `ZL_gene_TPM_with_Ara_anno_rm3cm.xlsx`, the PANNZER2 GO mapping and `ZLV3_TF_gene.txt`. Original gene names and scientific annotations are not machine-translated. GO terms are separate from homology-based functional descriptions. Evidence from other species is not experimental validation in pepper. Ambiguous source columns retain their original text and import notes.

`data-manifest.json` records data size, hashes and precision. `validation.json` records comparison against 510,966 cells from the local PCC matrices: maximum observed error **0**. The reference gene `ZLC07G0016880` has 98 PCC66 ≥ 0.8 partners, 119 PCC22 ≥ 0.8 partners, and 5 PCC22 ≤ -0.8 partners. Top1 is `ZLC02G0022530` / CS1 (PCC66 0.9970207810; PCC22 0.9979034066).

## Local preview

Serve this directory with any static HTTP server; opening `index.html` directly as a file will not load the worker. No npm installation is required. All asset URLs are relative, so this also works under a GitHub project subpath.

## 中文说明

直接打开网站即可使用，无需运行本机服务。首次访问加载约 14 MB 表达和注释数据，浏览器后台按需计算 PCC。右上角可切换中英文。完整命中下载不受网络绘图上限或分页影响；二层网络明确标出截断数量。6.5 GB 完整矩阵及来源文件仍保存在本地独立项目中。
