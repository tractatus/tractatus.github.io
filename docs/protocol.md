---
layout: page
title: Protocol
permalink: instaseq//protocol/
---

<h1> Protocol</h1>

The following protocol describes library construction in both tissue and cell culture. 

The reaction volume is 200 µl which is good for 4 different libraries if either 96 well plates are used or silicon gaskets. 

The first time you try the protocol we suggest doing so in well-adhered cell culture and starting small with only 2-4 libraries. 

The first time you try it we also suggest using a minimal version of the protocol that doesnt include gDNA digestion or overnight primer hybridization just to see that you get in situ amplicons in your hands. Most of those amplicons will be rRNA but by first verifying that you can get nice and round in situ amplicons it is then easier to ad the gDNA digestion step as well as steps necessary to decrease rRNA reads. Steps not necessary to get in situ amplicons are marked with the label <span class="label label-yellow">Optional</span>


Gradually as you become more and more familiar with the protocol your amplicon count will also go up.

* TOC
{:toc}


---
# _In situ_ cDNA library preparation.
---

### Fixation `10-20 min`

Note: INSTA-seq is compatible with both formalin fixation and methanol or ethanol fixation. However crosslinking signatures are not guaranteed with ethanol fixation.

* **Ethanol:** ad ice cold 100% ethanol onto the cells/tissue and incubate in -20 degree overnight. For sensitive tissues/cells do a gradual incubation 50%,80%, 100% ethanol and rehydration 80%, 50%, DEPC-1xPBS.

* **Formalin fixation:** incubate in 5-15 min in formalin. Incubation time needs to be optimized depending on if you have fluorescent proteins present and want to be able to visualize them before in situ sequencing. If fluorescent proteins are present incubate for 15 min otherwise keep the formalin fixation to 5-10 min.


### Tissue permeabilization 

#### Membrane permeabilization: `0:20-1 h`

If you do ethanol fixation this is not needed.

<span class="label label-green">Cell culture:</span> 20 min incubation in room temperature with DEPC-1xPBS with 0.3% triton-X100.

<span class="label label-green">Drosophila tissue:</span> 1 hr incubation in room temperature with:  

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">1</div>    

| Amount | Reagent | Final concentration |
| :--- | :--- | :--- |
| 195 µl | DEPC-1xPBS with 0.3% triton-X100 | |
| 5 µl  | SUPERase | 0.5 U/µl |


This step needs tissue-specific optimization. If uncertain start with 20 min incubation and then extend to 1 hr. If that is still not good enough you might need to use additional proteinase K digestion.  

#### Nuclear permeabilization: `10-45 min`

Although DNase I can enter the nucleus for it to be able to digest gDNA reliably you might need additional unmasking using HCl treatment.

This step might require optimization for specific cell line or tissue in itself. Do so by extending either the HCl incubation time or the DNase I incubation time and use DAPI staining as readout of DNase I gDNA removal without any library prep. Common issue is little DAPI signal decrease due to inability of DNase I to fully digest all gDNA in the nucleus, again proteinase treatment might aid in specifically difficult cells.

<span class="label label-green">Cell culture:</span> 10 min incubation in room temperature with DEPC-PBS with 0.1N HCl.

<span class="label label-green">Drosophila tissue:</span> 45 min incubation in room temperature with with DEPC-PBS with 0.1N HCl. 

If uncertain just start with 10 min HCl incubation.

### gDNA digestion `1 h`
{: .d-inline-block }

Optional
{: .label .label-yellow }

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">1</div>    

| Amount | Reagent | Final concentration |
| :--- | :--- | :--- |
| 175 µl | Nuclease free water |  |
| 20 µl | 10x DNase TURBO buffer | 1x |
| 5 µl  | TURBO DNase |  0.05 U/µl |

Incubate for 1hr at 37°C.

#### Inactivation of DNase I and extensive wash.

There are two ways to inactivate DNase I. Either use the the inactivation reagent provided in the kit or use ice cold 0.5 M EDTA, pH 8.0.

The inactivation reagent in the kit will also remove divalent cations, such as magnesium and calcium. The inactivation reagent is very viscous and needs to be thawed completely and vortexed several times.

Aspirate and wash 3 times in ice cold nuclease free water and ad the inactivation reagent.

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">2</div>    

| Amount | Reagent | Final concentration |
| :--- | :--- | :--- |
| 180 µl | Nuclease free water |  |
| 20 µl | DNase Inactivation Reagent |  |

Incubate at room temperature for 30 min while on a shaker.

The inactivation reagent will form miscelles that you can see under a normal dissection microscope. They easily sink to the bottom of the plate and will form a white precipitate you can see by eye. You need to thouroughly wash the sample with ice cold nuclease free water multiple times until the white precipitate is completely removed.
First time you do it wash several times and check under microscope to make sure you completely removed it.

Alternatively instead of the inactivation reagent use EDTA that sequester divalent cations that may be cofactors for DNase. Wash threee times with 0.5 M EDTA, pH 8.0, and leave to incubate in 0.5 M EDTA, pH 8.0 for 30 min and wash several times afterward with ice cold nuclease free water. 

### Primer hybridization `O/N`

Aspirate and ad the following primer hybridization mix. Incubate at room temperature over night.

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">1</div>    

| Amount | Reagent | Final concentration |
| :--- | :--- | :--- |
| 190 µl | DEPC-2xSSC |  |
| 5 µl | 100 µM Anchored oligodT10	/5Phos/CGGGAACGCTGATTTTTTTTTT(V1:33333400)(N1:25252525) | 2.5 µM |
| 5 µl | SUPERase | 0.5 U/µl |

### Reverse transcription `2h-O/N`

Immeditaly in the morning push the sample down on ice for a minimum of 15 min while you prepare the reagents for reverse transcription.
This is important because the melting temperature of the primer is 22.5 °C (17.9 - 26.4 °C).

Thaw on ice:

| Reagent | Vendor |
| :--- | :--- |
| 10x RT buffer | P7040L, Qiagen |
| dNTP mix 25 mM | N2050L, Qiagen |
|  aa-dUTP 4 mM | AS-83203, Anaspec |


Prepare 2 eppendorf tubes with:

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">1</div>  

**Buffer wash**

| Amount | Reagent | Vendor  | Concentration |
| :--- | :--- | :--- |  :--- | 
|  180 µl  | Nuclease-free water | 10977015, Invitrogen | NA |
| 20 µl  | 10x RT buffer | P7040L, Qiagen | 1x |

**Reverse transcriptase reaction mix**

| Amount | Reagent | Vendor  | Concentration |
| :--- | :--- | :--- |  :--- | 
|  159 µl  | Nuclease-free water | 10977015, Invitrogen | NA |
| 20 µl | 10x RT buffer | P7040L, Qiagen  | 1x  |
| 2 µl | dNTP mix 25 mM | N2050L, Qiagen  | 250 μM |
| 2 µl | aa-dUTP 4 mM | AS-83203, Anaspec  | 40 μM |

Place the two tubes on ice and aspirate and ad the buffer wash to the sample. From the freezer take out SUPERase and M-MuLV reverse transcriptase and ad to the ice cold reverse transcriptase reaction mix:


<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">2</div>    

| Reagent | Vendor | Amount | Concentration |
| :--- | :--- | :--- |  :--- | 
| 159 µl  | Nuclease-free water | 10977015, Invitrogen | NA |
| 20 µl | 10x RT buffer | P7040L, Qiagen | 1x  |
| 2 µl | dNTP mix 25 mM | N2050L, Qiagen | 250 μM |
| 2 µl | aa-dUTP 4 mM | AS-83203, Anaspec | 40 μM |
| 2 µl | SUPERase RNase Inhibitor (20 U/μl) | AM2694, Invitrogen | 0.2 U/μl |
| 10 µl | M-MuLV RT (100 U/μl) | P7040L, Qiagen | 5 U/μl |

Use the 200 μl and pipette mix ten times and aspirate the sample and ad the ice cold enzyme mix onto the sample and let it sit on ice for 5 min. 
Place the sample for reverse transcription at 37°C for 2h - Over night.

Make sure to seal the sample with parafilm and include a damp kimtech wipe so the sample doesnt dry out.
If the sample would dry out during RT there is no point in continuing and you can throw away the sample. Drying out during other overnight incubations such as the phi29 RCA amplification is not .

### cDNA fixation `1h`

In all of the above reactions aa-dUTP is included for subsequent crosslinking of the cDNA to free primary amines using NHS-PEG9-NHS (BSPEG9).
This was based on initial concerns with FISSEQ that cDNA was difusing. However, in our experience diffusion is not a big problem as much as fixation can inhibit subsequent enzymatic steps.
For example at the average cDNA length of 100-80 nt and an incorporation rate of ~30/kb for aa-dUTP would mean about three aminoallyl groups are incorporated for each cDNA molecule.
aa-dUTP incorporation into cDNA and subsequent fixation after RT can therefore be ommited.

**NHS-PEG9-NHS fixation**

Crosslinker Stock Solution: 100 mg of BSPEG9 add ~465µL DMSO to make 565µL total of 250 mM.

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 980 µl  |1xPBS pH 8 |  CHP-300, Boston BioProducts | NA |
| 20 µl | BSPEG9 250mM | BP-21504, BroadPharma | 5 mM |

Immediatly ad the reaction to the sample after aspirating the RT reaction (NHS ester half-life 1 hour at pH 8 and only 10 minutes at pH 8.6). 
NHS ester-activated crosslinkers react with primary amines best in slightly alkaline conditions it is therefore important to use pH 8 1xPBS when dissolving the DMSO stock for the reaction.

Incubate the sample at room temperature for 1h.

#### Quenching `30 min`

To avoid BSPEG9 to react with enzyme in subsequent steps quench the reaction by aspirating and ad 1 M Tris to the sample and incubate at room temperature for 30 min.

### RNA removal `1h`

This step only applies if you intend to use CircLigase II since the enzyme is an RNA ligase removing RNA from the cell is necessary otherwise very few cDNAs will be circularized.

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 165 µl | Nuclease-free water |  10977015, Invitrogen   | NA |
| 20 µl | 10x RNase H1 buffer | Y9220L, Qiagen  | 1x |
| 5 µl | RNase, DNase-free 0.5 μg/ul | 11119915001, Roche | 12.5 ng/µl |
| 10 µl | RNase H1 (5 U/µl) | Y9220L, Qiagen | 0.25 U/µl |

Incubate at 37°C for 1h.

Wash extensively three times in ice cold nuclease-free water.

### CircLigase II circularization `2h`

If you used a RT primer with 5'PO4 group then you can circularize the cDNA enzymatically using CircLigase II. 
Make sure you have removed any remaining RNA in the tissue during the previous step since RNA will inhibit CircLigase II from circularization of cDNA.

Prepare the CircLigase II buffer on ice and preincubate the sample:

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 130 µl | Nuclease-free water |  10977015, Invitrogen  | NA |
| 20 µl | 10x CircLigase buffer | Lucigen  | 1x |
| 10 µl | 50 mM MnCl2 |  Lucigen  |  2.5 mM |
| 13 µl | 5 M Betaine |  Lucigen  |  0.5 mM |


While the sample is preincubating on ice with the CirclIgase buffer prepare another tube with the enzyme. Once the enzyme is added make sure to pipette mix 10 times with the 200 µl pipette.

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 128 µl | Nuclease-free water |  10977015, Invitrogen  | NA |
| 20 µl | 10x CircLigase buffer | Lucigen  | 1x |
| 10 µl | 50 mM MnCl2 |  Lucigen  |  2.5 mM |
| 13 µl | 5 M Betaine |  Lucigen  |  0.5 mM |
| 2 µl | CircLigase II 100 U/µl |  Lucigen  |  1 U/µl |

Incubate at 60°C for 2h.

### RCA primer hybridization `1.5h`

If you included RCA primer in the click reaction then you dont have to do this unless you noticed that rolonies are fuzzy and not as compact then optimization of the RCA primer hybdirization condition could be needed.

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">1</div> 

**30% formamide, 2xSSC, RCA primer hybridization** 

| 138 µl | 2xSSC (pre-dilute 20xSSC) |  AM9770, Invitrogen  | NA |
| 60 µl | Formamide |  75-12-7, Acros  | 10% |
|  2 µl   | RCA primer |  100 µM	AAAAAATCAGCGTTCC*C*G IDT  | 1 µM |   

Incubate at 60°C for 1h.

Aspirate and add:

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">2</div> 

**10% formamide, 2xSSC wash** 

| 180 µl | 2xSSC (pre-dilute 20xSSC) |  AM9770, Invitrogen  | NA |
| 20 µl | Formamide |  75-12-7, Acros  | 10% |

Incubate at 60°C for 15 min.

Aspirate and add:

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">3</div> 

**2xSSC wash** 

| 200 µl | 2xSSC (pre-dilute 20xSSC) |  AM9770, Invitrogen  | NA |

Incubate at 60°C for 15 min.

Aspirate and wash on ice with 1xPBS. It is important to make sure you have removed the formamide since residues at the edges of the well will inhibit RCA.
If formamide inhibited RCA then you will still see some amplicons but they will be small and not bright.

### Rolling Circle Amplification (RCA) `O/N`

Make sure formamide is not remaining in the well, especially at the edges.
Place the sample on ice and make first a buffer only reaction mix:

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 180 µl | Nuclease-free water |  10977015, Invitrogen  | NA |
| 20 µl | 10x phi29 buffer | Qiagen  | 1x |

And incubate the sample on ice in this buffer while you prepare the phi29 reaction mix on ice:

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 170 µl | Nuclease-free water |  10977015, Invitrogen  | NA |
| 20 µl | 10x phi29 buffer | Qiagen  | 1x |
| 2 µl | 25 mM dNTP |  Qiagen  |  250 μM |
| 2 µl | 4 mM aa-dUTP |  Qiagen  | 40 μM |
| 2 µl | HC phi29 |  Qiagen  |  1 U/µl |
| 4 µl | Chimeric phi29 |  Expedeon  |  0.2 U/µl |

Aspirate and ad the phi29 reaction mix on ice and let it sit on ice for 5 minutes before you move it into 30°C incubator and let it incubate for a minimum of 16h.


### cDNA fixation `1h`

In all of the above reactions aa-dUTP is included for subsequent crosslinking of the cDNA to free primary amines using NHS-PEG9-NHS (BSPEG9).
This was based on initial concerns with FISSEQ that cDNA was difusing. However, in our experience diffusion is not a big problem as much as fixation can inhibit subsequent enzymatic steps.
For example at the average cDNA length of 100-80 nt and an incorporation rate of ~30/kb for aa-dUTP would mean about three aminoallyl groups are incorporated for each cDNA molecule.
aa-dUTP incorporation into cDNA and subsequent fixation after RT can therefore be ommited.

**NHS-PEG9-NHS fixation**

Crosslinker Stock Solution: 100 mg of BSPEG9 add ~465µL DMSO to make 565µL total of 250 mM.

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 980 µl  |1xPBS pH 8 |  CHP-300, Boston BioProducts | NA |
| 20 µl | BSPEG9 250mM | BP-21504, BroadPharma | 5 mM |

Immediatly ad the reaction to the sample after aspirating the RT reaction (NHS ester half-life 1 hour at pH 8 and only 10 minutes at pH 8.6). 
NHS ester-activated crosslinkers react with primary amines best in slightly alkaline conditions it is therefore important to use pH 8 1xPBS when dissolving the DMSO stock for the reaction.

Incubate the sample at room temperature for 1h.

#### Quenching `30 min`

To avoid BSPEG9 to react with enzyme in subsequent steps quench the reaction by aspirating and ad 1 M Tris to the sample and incubate at room temperature for 30 min.

---
# _Ex situ_ NGS library preparation.
---

### Tissue or cell lysis `10-20 min`

To lyse the tissue use hot alkaline lysis. As with any hot-alkaline DNA extraction method too long incubation will result in heavily fragmented DNA. Therefore the exact incubation time might need to be optimized for the tissue in mind. Pool several samples together and evaluate fragmentation as a function incubation time on 1% agarose gel.

MDA cant initiate if fragments are shorter than 1-2 Kb. 
Tn5 tagmentation followed by PCR wont work if fragments are shorter than 600 bp.

To make stock of the lysis buffer.

**Lysis buffer stock**

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 2.8 g  | KOH (56.11 g/mol) |  CHP-300, Boston BioProducts | 200 mM |
| 1540 mg | DTT (154.25 g/mol) | BP-21504, BroadPharma | 40 mM |
| 20 µl | EDTA | BP-21504, BroadPharma | 5 mM |
| 250 ml | Nuclease-free water | BP-21504, BroadPharma |  |

Which will give the final lysis buffer 200mM KOH, 40mM DTT, 5mM EDTA.
Store frozen in aliquots.

**Neutralization buffer stock**

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 18.15 g  | Tris |  CHP-300, Boston BioProducts | 600 mM |
| 244 ml | Nuclease-free water |  | NA |
| ~6 ml | HCl |  | ~288 mM |


Dissolve Tris in 244 ml of nuclease-free water.
Adjust pH to 7.5 by buffering with 12M HCl, ad 1 ml at a time and measure pH. Fill up to 250 ml with nuclease-free water to create 7.5 pH.

<span class="label label-green">Cell culture:</span> Aspirate the well and ad 20-40 ul of lysis buffe ronto the cells and use a 20 µl pipette tip to scratch the cells of the bottom. Pipette up and down between scratches and then take the entire solution with the 20 µl pipette and ad into an Eppendorf tube.

Place on 95°C heat block for 10 min incubation followed by adding equal amount (20-40 ul) of neutralization buffer and a 10 min incubation on ice. Store the lysate in -80°C until next step.

<span class="label label-green">Drosophila tissue:</span> Clean two Dumont #5 forceps (0209-5-PO) with DNAzap (AM9890, ThermoFisher), or equivalent, and wash with 70% ethanol and wipe dry with a kimtech wipe. 

Under a dissection microscope poke with the forcept under the edge of the tissue to carefully lift it off the coverslip. When the whole mount tissue is no longer attached to the coverslip then take a 20 µl pipette and carefully pipette the tissue into the pipette tip without having it stick to the tip. Ad the tissue into 20 µl of lysis buffer and incubate at 20 min on 95°C. 

Visually inspect the sample to make sure the tissue has been lysed, if not vortex gently and incubate until the sample is no longer visible. Ad 20 µl neutralization buffer and incubate on ice for 10 min. Store the lysate in -80°C until next step.

### Second strand synthesis, and excess pulldown primer degradation and pulldown.


### Extraction and amplification of in situ amplicons from the tissue

### NGS library prep using Nextera FLEX

### Library normalization
<link type="text/css" href="https://getbootstrap.com/1.0.0/assets/css/bootstrap-1.0.0.min.css">
<div class="container mt-5" lang="en-US">
<div class="row">
<div class="col-3 row-heading">
Library
</div>
<div class="col row-heading">
Concentration (ng/µl)
</div>
<div class="col row-heading">
Average fragment size (bp)
</div>
<div class="col row-heading">
Dilute (µl)
</div>
<div class="col row-heading">
in water (µl)
</div>
</div>

<div class="row">
<div class="col-3">
1. <input type="text" value="sample A" class="sampleName" id="sample_name1"/> <span id="status1" class="report"></span>
</div>
<div class="col">
<input type="number" value="0" class="qty" id="qty_conc1" step="0.1"/>
</div>
<div class="col">
<input type="number" value="600" id="qty_isize1"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="comp_amount1"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="comp_dilute1"/>
</div>

</div>

<div class="row">
<div class="col-3">
2. <input type="text" value="sample B" class="sampleName" id="sample_name1"/>
</div>
<div class="col">
<input type="number" value="0" class="qty" id="qty_conc"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="qty_isize"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="comp_amount"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="comp_dilute"/>
</div>

</div>

<div class="row">
<div class="col-3">
3. <input type="text" value="sample C" class="sampleName" id="sample_name1"/>
</div>
<div class="col">
<input type="number" value="0" class="qty" id="qty_conc"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="qty_isize"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="comp_amount"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="comp_dilute"/>
</div>

</div>

<div class="row">
<div class="col-3">
4. <input type="text" value="sample D" class="sampleName" id="sample_name1"/>
</div>
<div class="col">
<input type="number" value="0" class="qty" id="qty_conc"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="qty_isize"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="comp_amount"/>
</div>
<div class="col">
<input type="number" readonly value="0" id="comp_dilute"/>
</div>

</div>

<div class="row my-4">
<div class="col-6 text-right total">
Target concentration (nM)
</div>
<div class="col-2 target-conc">
<input type="number" value="4" class="qty" id="qty_concentration"/>
<!--- <span id="total_value">20</span> -->
</div>
<div class="col-2 text-right total">
Library volume (µl)
</div>
<div class="col-2 total-val">
<input type="number" value="20" class="qty" id="qty_volume"/>
<!--- <span id="total_value">20</span> -->
</div>
</div>

</div>

### NGS sequencing on MiSeq

# Stock buffers

**DEPC-1xPBS**

| Amount | Reagent | Vendor  | Concentration |
| :--- | :--- | :--- |  :--- | 
| 5 ml | 10xPBS |  AM9770, Invitrogen   | NA |
| 45 ml | DEPC-treated water |  AM9770, Invitrogen   | NA |

**2xSSC**

| Amount | Reagent | Vendor  | Concentration |
| :--- | :--- | :--- |  :--- | 
| 5 ml | 20xSSC|  AM9770, Invitrogen   | NA |
| 45 ml | Nuclease-free water |  AM9770, Invitrogen   | NA |

**10% formamide, 2xSSC**

| Amount | Reagent | Vendor  | Concentration |
| :--- | :--- | :--- |  :--- | 
| 5 ml | Formamide |  75-12-7, Acros  | 10% |
| 5 ml | 20xSSC|  AM9770, Invitrogen   | NA |
| 40 ml | Nuclease-free water |  AM9770, Invitrogen   | NA |

**30% formamide, 2xSSC**

| Amount | Reagent | Vendor  | Concentration |
| :--- | :--- | :--- |  :--- | 
| 15 ml | Formamide |  75-12-7, Acros  | 10% |
| 5 ml | 20xSSC|  AM9770, Invitrogen   | NA |
| 30 ml | Nuclease-free water |  AM9770, Invitrogen   | NA |

