---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: Getting started
permalink: 
---

# In situ transcriptome accessibility
{: .fs-9 }

This site describes the details including protocol and analysis of INSTA-seq data.
{: .fs-6 .fw-300 }

[Get started now](#getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } 

<!---  [View it on GitHub](https://github.com/pmarsceill/just-the-docs){: .btn .fs-5 .mb-4 .mb-md-0 } -->

---
## Getting started

### Ordering reagents

#### Oligonucleotides

There are two set of oligonucleotides you need ot order. One set for Sequencing by ligation (SBL) and another set for library construction.
Reverse probes are DNA:RNA chimeras and need to be ordered as RNA probes. Forward probes are ordered as DNA probes.

##### Sequencing-by-ligation (SBL) oligonucleotides


<object data="/assets/img/PRICKly.svg" type="image/svg+xml"
         id="alphasvg" width="100%" height="100%"></object>

| Probe name | Base call  | Emission wavelength  | Direction  | Include in order | 
|---|---|:---:|:---:|:---:|
| <input type="text" id="probeAname" name="probeAname" value="FR A/G Atto488">| <select id="probeAbase" name="probeAbase" style="width:100%" ><option value="A">A</option><option value="T">T</option><option value="C">C</option><option value="G">G</option><option value="R" selected>A/G</option><option value="K">T/G</option><option value="S">C/G</option><option value="W">A/T</option><option value="Y">C/T</option></select>  |   <select id="probeAemiss" name="probeAemiss"   style="width:100%"><option value="0">n/a</option><option value="1" selected>Green (510 - 559nm) </option><option value="2">Orange (560 - 609nm)</option><option value="3">Red (610 - 649nm)</option><option value="4">Near IR ( 650nm+)</option></select>  | <input type="radio" name="directionA" value="" checked> Forward<br><input type="radio" name="directionA" value="r"> Reverse<br> | <input type="checkbox" id="probeAinclude"  checked>
| <input type="text" id="probeBname" name="probeBname" value="FR T/G Atto590"> | <select id="probeBbase" name="probeBbase"  style="width:100%"><option value="A">A</option><option value="T">T</option><option value="C">C</option><option value="G">G</option><option value="R">A/G</option><option value="K" selected>T/G</option><option value="S">C/G</option><option value="W">A/T</option><option value="Y">C/T</option></select>  |   <select id="probeBemiss" name="probeBemiss"  style="width:100%"><option value="0">n/a</option><option value="1">Green (510 - 559nm) </option><option value="2">Orange (560 - 609nm)</option><option value="3" selected>Red (610 - 649nm)</option><option value="4">Near IR ( 650nm+)</option></select>  | <input type="radio" name="directionB" value="" checked> Forward<br><input type="radio" name="directionB" value="r"> Reverse<br> | <input type="checkbox" id="probeBinclude" checked>
| <input type="text" id="probeCname" name="probeCname" value="FR C NA"> | <select id="probeCbase" name="probeCbase"  style="width:100%"><option value="A">A</option><option value="T">T</option><option value="C" selected>C</option><option value="G">G</option><option value="R">A/G</option><option value="K">T/G</option><option value="S">C/G</option><option value="W">A/T</option><option value="Y">C/T</option></select>  |   <select id="probeCemiss" name="probeCemiss"  style="width:100%"><option value="0" selected>n/a</option><option value="1">Green (510 - 559nm) </option><option value="2">Orange (560 - 609nm)</option><option value="3">Red (610 - 649nm)</option><option value="4">Near IR ( 650nm+)</option></select>  | <input type="radio" name="directionC" value="" checked> Forward<br><input type="radio" name="directionC" value="r"> Reverse<br> | <input type="checkbox" id="probeCinclude"  checked>
|<input type="text" id="probeDname" name="probeDname" value="RR A/G Atto647N"> | <select id="probeDbase" name="probeDbase"  style="width:100%"><option value="A">A</option><option value="T">T</option><option value="C">C</option><option value="G">G</option><option value="R" selected>A/G</option><option value="K">T/G</option><option value="S">C/G</option><option value="W">A/T</option><option value="Y">C/T</option></select>  |   <select id="probeDemiss" name="probeDemiss"  style="width:100%"><option value="0">n/a</option><option value="1">Green (510 - 559nm) </option><option value="2">Orange (560 - 609nm)</option><option value="3">Red (610 - 649nm)</option><option value="4" selected>Near IR ( 650nm+)</option></select>  | <input type="radio" name="directionD" value="" > Forward<br><input type="radio" name="directionD" value="r" checked> Reverse<br> | <input type="checkbox" id="probeDinclude"  checked>
|<input type="text" id="probeEname" name="probeEname" value="RR T/G Atto550"> | <select id="probeEbase" name="probeEbase"  style="width:100%"><option value="A">A</option><option value="T">T</option><option value="C">C</option><option value="G">G</option><option value="R">A/G</option><option value="K" selected>T/G</option><option value="S">C/G</option><option value="W">A/T</option><option value="Y">C/T</option></select>  |   <select id="probeEemiss" name="probeEemiss"  style="width:100%"><option value="0">n/a</option><option value="1">Green (510 - 559nm) </option><option value="2" selected>Orange (560 - 609nm)</option><option value="3">Red (610 - 649nm)</option><option value="4">Near IR ( 650nm+)</option></select>  | <input type="radio" name="directionE" value="" > Forward<br><input type="radio" name="directionE" value="r" checked> Reverse<br> | <input type="checkbox" id="probeEinclude"  checked>
|<input type="text" id="probeFname" name="probeFname" value="RR C NA"> | <select id="probeFbase" name="probeFbase"  style="width:100%"><option value="A">A</option><option value="T">T</option><option value="C" selected>C</option><option value="G">G</option><option value="R">A/G</option><option value="K">T/G</option><option value="S">C/G</option><option value="W">A/T</option><option value="Y">C/T</option></select>  |   <select id="probeFemiss" name="probeFemiss"  style="width:100%"><option value="0" selected>n/a</option><option value="1">Green (510 - 559nm) </option><option value="2">Orange (560 - 609nm)</option><option value="3">Red (610 - 649nm)</option><option value="4">Near IR ( 650nm+)</option></select>  | <input type="radio" name="directionF" value="" > Forward<br><input type="radio" name="directionF" value="r" checked> Reverse<br> | <input type="checkbox" id="probeFinclude"  checked>





| <object data="/assets/img/howtoorderIDT.gif" type="image/gif" id="gif" width="300px"></object> | **How to order from IDT:** When clicking on the green buttons below a tab will automatically open to IDT and the bulk order input is automatically copied to your clipboard. 	Just press the blue _bulk input_ button and paste (⌘ + V) in the bulk order that is now in your clipboard. 


| DNA oligo order | RNA oligo order  | 
|:---:|:---:|
|<textarea cols="45" rows="4" name="dnaorder" id="dnaorder"></textarea>|<textarea cols="45" rows="4" name="rnaorder" id="rnaorder"></textarea>|
|<a href="https://www.idtdna.com/site/order/oligoentry" target="_blank" class="btn btn-green fs-5 mb-4 mb-md-0 mr-2" onclick="copyIDT('dnaorder')">⌘ + C and go to IDT DNA oligo</a>|<a href="https://www.idtdna.com/site/order/oligoentry/index/rna" target="_blank" class="btn btn-green fs-5 mb-4 mb-md-0 mr-2" onclick="copyIDT('rnaorder')">⌘ + C and go to IDT RNA oligo</a>|

<script src="{{ base.url | prepend: site.url }}/assets/js/pricklyOrder.js"></script>


#### Library construction oligonucleotides

The following oligos contains primers for reverse transcription, RCA, sequencing primers for in situ sequencing, pulldown oligos.

| Probe name | Sequence 5'-3' |  Scale | Purification | 
|:---|:---|:---:|:---:|
|Anchored oligodT<sub>10</sub> | `/5Phos/CGGGAACGCTGATTTTTTTTTT(V1:33333400)(N1:25252525)`| 100nm| STD |
|RCA oligodT<sub>10</sub> | `AAAAAATCAGCGTTCC*C*G` | 100nm| STD |
| Cy5 adapter probe | `/5TYE665/CGGGAACGCTGATTTTTTTTTT` | 100nm | HPLC |
| SeqPrimer R01 | `/5Phos/CGGGAACGCTGATTTTTTTTTT`| 100nm| HPLC |
| SeqPrimer R02 | `/5Phos/GGGAACGCTGATTTTTTTTT` | 100nm| HPLC |
| SeqPrimer R03 | `/5Phos/GGAACGCTGATTTTTTTT`| 100nm| HPLC |
| Pulldown oligodT | `/5BiosG/CGGGAACGCTGATTTTTTTTTT` | 100nm| STD |

#### Enzymes

This list is good for 40 libraries with phi29 being the limited volume.

| Enzyme | Vendor  |  Catalog number  | URL | ~Cost (per/rxm\*) 
|:---|---|---|:---|:---:|
| TURBO DNA-free™ Kit | Invitrogen™  |  AM1907  | [www.thermofisher.com](https://www.thermofisher.com/order/catalog/product/AM1907#/AM1907){:target="_blank"}  | $127 ($1.32)
| M-MuLV Reverse Transcriptase | Qiagen  |  P7040L  | [www.enzymatics.com](http://www.enzymatics.com/products/m-mulv-reverse-transcriptase/ ){:target="_blank"}  | $371 ($1.855)
| SUPERase RNase Inhibitor | ThermoFisher  |  AM2696  | [www.thermofisher.com](https://www.thermofisher.com/order/catalog/product/AM2696){:target="_blank"}   | $448 ($2.24)
| E.coli RNase H (rnh) | Qiagen  |  Y9220L  | [www.enzymatics.com](http://www.enzymatics.com/products/rnase-h/){:target="_blank"}   | $371 ($0.47)
| RNase, DNase-free, HC | Roche  |  11579681001  | [www.sigmaaldrich.com](https://www.sigmaaldrich.com/catalog/product/roche/11579681001){:target="_blank"}   | $225 ($5.625)
| CircLigase II | Lucigen  |  CL9021K	  | [www.lucigen.com](https://www.lucigen.com/CircLigase-II-ssDNA-Ligase/){:target="_blank"}   | $199 ($9.95)
| phi29 HC | Qiagen  | P7020-HC-L | [www.enzymatics.com](http://www.enzymatics.com/products/phi-29-dna-polymerase/){:target="_blank"}   | $371 ($9.275)
||||| **&Sigma; $2112 ($30.735)** |

<sub><sup>\* Single reaction is caclulated based on 50 µl total volume.</sup></sub>

Costs can further be reduced by switching over to: 

* [QualiPhi phi29](https://www.expedeon.com/products/dna-rna-products/trueprime/dna-polymerases/qualiphi-phi29-dna-polymerase/){:target="_blank"} [~$176 ($1) for 100 µl] instead of high-concentration phi29 from Enzymatics [~$371 ($9.275) for 20 µl] 
* as well as buying larger stock [CL9025K](https://www.lucigen.com/CircLigase-II-ssDNA-Ligase/){:target="_blank"} of CircLigase II  [$832 ($8.32) for 50 µl versus $199 ($9.95) for 10 µl].

Then the cost per library becomes $20.83. 

But the major drop in library cost happens when moving over to non-enzymatic cyclization of cDNA using biocompatible triazole generated through click circularization.

#### Enzymes for in situ sequencing

| Enzyme | Vendor  |  Catalog number  | URL | ~Cost (per/cycle\*) 
|:---|---|---|:---|:---:|
| T4 DNA ligase | Qiagen  |  L6030-LC-L  | [www.enzymatics.com](http://www.enzymatics.com/products/t4-dna-ligase/){:target="_blank"}  | $371 ($0.94)
| E.coli RNase H2 (rnhB) | NEB  |  M0288L  | [www.neb.com](https://www.neb.com/products/m0288-rnase-hii ){:target="_blank"}  | $296 ($5.92)
| E. coli Endonuclease V | NEB  |  M0305S  | [www.neb.com](hhttps://www.neb.com/products/m0305-endonuclease-v){:target="_blank"}   | $76 ($3.04)

<sub><sup>\* Single reaction is caclulated based on 50 µl total volume.</sup></sub>

#### Crosslinkers, nucleotides and click reagents.

| Reagent | Vendor  |  Catalog number  | URL | ~Cost (per/rxm\*) | 
|:---|---|---|:---|:---:|
| NHS-PEG9-NHS | Thermo Scientific  |  21582  | [www.thermofisher.com](https://www.thermofisher.com/order/catalog/product/21582){:target="_blank"}  | $404 ($1.175†)
| 100µmol dNTP Solution Mix | Qiagen  | N2050L | [www.enzymatics.com](http://www.enzymatics.com/products/25-mm-dntp-solution-mix/){:target="_blank"}   | $371 ($0.371)
| 4 mM Aminoallyl dUTP | Anaspec | 	AS-83203 |  [www.anaspec.com](https://www.anaspec.com/products/product.asp?id=29659){:target="_blank"}   | $163 ($0.326)
| Dynabeads™ M-280 Streptavidin | ThermoFisher | 11206D | [www.thermofisher.com](https://www.thermofisher.com/order/catalog/product/11206D){:target="_blank"} | $1900 ($47.5)
| BTTAA | Click Chemistry Tools  | 1236-100 | [www.clickchemistrytools.com](https://clickchemistrytools.com/product/bttaa/){:target="_blank"}  | $129 ($0.02)
|  3'-Azido-ddNTP Set | TriLink Biotech  | K-1006	 | [www.trilinkbiotech.com](https://www.trilinkbiotech.com/3-amino-2-3-dideoxynucleotide-set.html){:target="_blank"}  | $689 ($2.16)

<sub><sup>\* Single reaction is caclulated based on 50 µl total volume.</sup></sub>

<sub><sup>† NHS-PEG9-NHS when diluted in DMSO has a limited shelf-life of a couple of weeks at -20°C hence stock usually goes bad before used up.</sup></sub>

#### Buffers etc.