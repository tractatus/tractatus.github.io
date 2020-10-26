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

If you are performing CuAAC circularization then the reverse transcriptase mix looks like the following:

**CuAAC reverse transcriptase reaction mix**

| Reagent | Vendor | Amount | Concentration |
| :--- | :--- | :--- |  :--- | 
|  157 µl  | Nuclease-free water | 10977015, Invitrogen | NA |
| 20 µl | 10x RT buffer | P7040L, Qiagen | 1x  |
| 2 µl | dNTP mix 25 mM | N2050L, Qiagen | 250 μM |
| 2 µl | aa-dUTP 4 mM | AS-83203, Anaspec | 40 μM |
| 2 µl | 3'-Azido-ddNTP 25 mM | K-1005, TriLink | 250 μM |
| 2 µl | SUPERase RNase Inhibitor (20 U/μl) | AM2694, Invitrogen | 0.2 U/μl |
| 10 µl | M-MuLV RT (100 U/μl) | P7040L, Qiagen | 5 U/μl |

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

### Click circularization and RCA primer hybridization `1h`

This step only applies if you intend to circularize cDNA through CuAAC. To do this you need to have hybridized with 5'propargyl primer and incorporated 3'-azido-ddNTP during RT or have tailed the cDNA with Terminal Transferase (TdT).

Make sure you have carefully washed away the remaining RT reaction from the sample since free 3'Azido-ddNTP will react with 5'propargyl.

Prepare the following stock solutions fresh from powder:

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">1</div>  

**20 mM CuSO4 stock**

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 2.3 ml | Nuclease-free water |  10977015, Invitrogen  | NA |
| 11.5 mg | CuSO4 |  c8027, SigmaAldrich  | 20 mM |


<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">2</div>  

**100 mM BTTAA stock**

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 100 µl | Nuclease-free water |  10977015, Invitrogen   | NA |
| 4.3 mg | BTTAA |  CLK-067-100, JenaBiosciences  | 100 mM |


Take 13 µl of the BTTAA solution and mix it with 13 µl CuSO4 solution: 

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 13 µl | 20 mM  CuSO4 |  c8027, SigmaAldrich  | 10 mM |
| 13 µl | 100 mM BTTAA |  CLK-067-100, JenaBiosciences   | 50 mM |


Immediately when BTTAA is added to CuSO4 you should see a dark blue shift in color. Let sit while you prepare 10% formamide in 2xSSC with 1 µM of RCA primer: 

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">3</div>  

| Amount | Reagent | Vendor  | Concentration |
| :--- | :--- | :--- |  :--- | 
| 137 µl| 2xSSC (pre-dilute 20xSSC) |  AM9770, Invitrogen   | NA |
| 20 µl | Formamide |  75-12-7, Acros  | 10% |
| 2 µl | RCA primer |  100 µM	AAAAAATCAGCGTTCC*C*G IDT   | 1 µM |    

Now prepare 300 mM sodium ascorbate stock:

<div style="border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;

    background: #fff;
    border: 2px solid #666;
    color: #666;
    text-align: center;
    font: 18px Arial, sans-serif; ">4</div>  

**300 mM Sodium ascorbate stock**

| Reagent | Vendor | Amount | Concentration |
| :--- | :--- | :--- |  :--- | 
| Nuclease-free water |  10977015, Invitrogen  | 1 ml | NA |
| (+)-Sodium L-ascorbate |  a4034, SigmaAldrich  | 60 mg | 300 mM |    

Sodium ascorbate oxidizes, so from now work quickly (maximum 5 min).

When the sodium ascorbate is dissolved in water take 13 ul and ad the to CuSO4 + BTTAA reaction mix. You should see an immediate color shift from dark blue to transparent.

Now take the 39 ul of CuSO4 + BTTAA + Sodium Ascorbate and ad to the RCA primer mix:

| Amount | Reagent | Vendor | Concentration |
| :--- | :--- | :--- |  :--- | 
| 13 µl | 20 mM  CuSO4 |  c8027, SigmaAldrich  | 1.3 mM |
| 13 µl | 100 mM BTTAA |  CLK-067-100, JenaBiosciences  |  6.5 mM |
| 13 µl | 300 mM Sodium ascorbate |  a4034, SigmaAldrich  |  19.5 mM |
| 20 µl | Formamide |  75-12-7, Acros  | 10% |
| 137 µl | 2xSSC (pre-dilute 20xSSC) |  AM9770, Invitrogen  | NA |
|  2 µl   | RCA primer |  100 µM	AAAAAATCAGCGTTCC*C*G IDT  | 1 µM |    


Degas the reaction by submerging the nozzle and press lightly on the argon can valve and let it bubble for 2-3 seconds.
Ad the reaction onto the sample and degas the chamber and seal with parafilm. Incubate at 37°C for 30 min-1hr.

Wash by incubating in 2xSSC at 37°C for 30 min. Let cool down to room temperature and aspirate and do quick 2xSSC wash 2-3 times.

### CircLigase II circularization `2h`

If you used a RT primer with 5'PO4 group then you can circularize the cDNA enzymatically using CircLigase II. 
Make sure you have removed any remaining RNA in the tissue during the previous step since RNA will inhibit CircLigase II from circularization of cDNA.

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

---
# _Ex situ_ NGS library preparation.
---

### Tissue or cell lysis `10-20 min`

### Pulldown, second strand synthesis, and excess pulldown primer degradation.

### Extraction and amplification of in situ amplicons from the tissue

### NGS library prep using Nextera FLEX

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

