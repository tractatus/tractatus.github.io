---
layout: page
title: Sequencing by ligation
permalink: /sbl/
---

<h1> Sequencing by ligation (SBL)</h1>

Sequencing by ligation has a lot of small quirks to it that sometimes are not appreciated. This page cover some of those aspects with a special focus on how to trouble-shoot.

* TOC
{:toc}

### Terminology

`In situ amplicon`: a diffraction limited spot created here by rolling circle amplification (RCA) hence it is a rolling circle product (RCP).

`In situ sequencing adapter (ISSA)`: the 5'overhang adapter of the reverse transcription primer later on becomes the target for the sequencing primer.

`Sequencing primer`: an oligonucleotide capable of being extended on both ends usually targeting a region in the ISSA. At each hybridization round a new sequencing primer is hybridized after the previous one is removed. The new sequencing primer is usually a recessed version of the previous one. The primer rounds can continue to recess until the limit of stringent hybdirization is reached which is usually around 12 nt length.

`Round`: a hybridization round is started anytime the ssDNA RCP is stripped and a new sequencing primer is hybridized against the adapter region of the RCP.

`Cycle`: a ligation cycle is anytime the sequencing primer is extended by chemical ligation.

`Stripping`: the process of removing the entire sequencing primer from the ssDNA amplicon

`Base call`: the act and algorithm of assigning a determined nucleotide base to a single amplicon based on the fluorescent signal read out.

`In situ sequencing run`: the complete set of base calls made during _N_ rounds and _M_ ligation cycles.

`Forward reads`: reads extending the sequencing primer in the 5'-3' direction of the sequencing template. For cDNA sequencing of in situ amplicons this means sequencing at the cDNA synthesis stop site.

`Reverse reads`: reads extending the sequencing primer in the 3'-5' direction of the sequencing template. For cDNA sequencing of in situ amplicons this means sequencing at the reverse transcription primer annealing site.

## Reagents.

### Stripping buffer

First prepare 0.05% (vol/vol) Triton X-100:

**0.05% (vol/vol) Triton X-100**

| Amount | Reagent | Final concentration |
| 8.4 ml  | 0.3% Triton (vol/vol) used for permeabilization | NA |
| 41.6 ml  | Nuclease-free water | NA |

From this stock aliquot and freeze single use stripping buffers.

**80% FA stripping buffer**

| Amount | Reagent | Final concentration |
| :--- | :--- | :--- |
| 160 µl | [Hi-Di Formamide](https://www.thermofisher.com/order/catalog/product/4311320 "Hi-Di Formamide"), 4311320, Applied Biosys. | 80% (vol/vol) |
| 40 µl  | 0.05% (vol/vol) Triton X-100 | 0.01% (vol/vol) |

Store in aliquots in -20 and thaw just before single use.

There is a common myth that all formamide is the same. <br>This can be true for less sensitive assays but when you really want to remove an extended sequencing primer that can be over 50 nt in length the purity of the formamide will matter. 

A standard trick is to put the formamide bottle in -20 and then aspirate the supernatant that doesnt freeze and throw away (ionized formamide). 
While this can work sometimes we rather figured out that the best performance in terms of reliability is to use aliquots of  highly deionized formamide (Hi-Di Formamide) that are usually on capillary electrophoresis systems for Sanger sequencing. 

## Protocol.

### Visual inspection of cDNA libraries.

When inspecting newly made libraries there are some quality markers you want to check that will tell you how clean the in situ sequencing will be.
First, brightness of the amplicon is an important parameter. Ligation to a sequencing primer will not be as bright as direct fluorescent hybridization and at every subsequent ligation cycle the signal diminishes. 

**_Brightness_**. Think about it as a finite resource where the brightness of the amplicon is reduced at every cycle and eventually you will hit the autofluorescent noise floor. With really bright amplicons you will get more ligation cycles.

This is infact one of the primary motivations behind the interrogation scheme of PRICKLi since it is very well known that there is a particular drop in signal to noise after ligation cycle 4, standard PRICKli sequencing using 11 bases makes sure that all of those cycles are of high quality putting less pressure on having a crisp and clean sample.

Having said that it is also important to understand that when the tempate is stripped from the sequencing primer it is like erasing all previous history and restarting again. Therefore the ligation cycle 1 on each primer round is usually the best signal to noise ratio.

**_Shape_**. Apart from brightness in situ amplicon shape is an important observation that will tell you how good the amplicons were crosslinked. Amino-allyl-dUTPs are incorporated into the amplicon and crosslinked using BSPEG9. The use of aa-dUTP alone makes the amplicon much more compact than what other more traditional in situ sequencing assay would do just using dNTP (see [Kim et al. 2018](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6099487/ "Shaping Rolling Circle Amplification Products into DNA Nanoparticles by Incorporation of Modified Nucleotides and Their Application to In Vitro and In Vivo Delivery of a Photosensitizer") for a really nice outline on the role of aa-dUTP) but a lot of the shape will also be determined by crosslinking. Amine-reactive crosslinkers have the added benefit that they can be irreversibly crosslinked and therefore heat-resistant unlike PFA that would not tolerate the repeated elevated temperatures of primer stripping. 

The bad thing with _N_-hydroxysuccinimide (NHS) ester reactive groups is that they will easily hydrolyse in water so from the time BSPEG9 is dissolved into DMSO unless store desiccated at -20°C it will go bad within 2-3 weeks. You will know that it has gone bad by the shape of the amplicons that will start looking fuzzy and not round and nice.
If the amplicon would not be crosslinked properly they will start falling apart when stored in room temperature and they are much more easily damaged by lasers during imaging. 

So starting with round, bright and small amplicons is preferable, since it will make your life much easier down the line.

### Fluorescent adapter stripping and sequencing primer hybridization.

To strip away the fluorescent adapter take out an aliquot of the 80% (vol/vol) 0.01% triton stripping buffer and heat it at 80°C on a heatblock for atleast 5 mins.

The first time you perform stripping it is usually a good excersive to turn on the microscope and image the amplicons in live mode while you ad the hot stripping buffer onto the sample. You will directly see how all the fluorescent signal disapears within a second.

To make sure that the primer is properly removed adhere to the following stripping protocol:

Incubate the sample four times 5 min each in 200 ul of stripping buffer, preheated to 80 °C.
Wash the sample two times under running 10 ml 2xSSC dispensed through automatic fluidics or a simple 10 ml pipettor while simultaneously aspirating the sample.

### Forward ligation.

### Reverse ligation.

### Image.

### Cleave.

### Religate.

### Strip.


## Pitfalls of in situ sequencing.

Any sequencing method that makes use of the inherent `3'OH`/`5'PO4` functional moeities will have issues when applied to in situ sequencing simply because remaining fixed nucleic acids (e.g. gDNA) can serve as substrate. For both SBS and SBL this issue is usually seen as high nuclear autofluorescence due to polymerase either extending free 3'OH on nicked and hydrolysed gDNA (like a TUNEL assay) or in the case of SBL displaced 5'ends with free `5'PO4` groups serve as splinted ligation targets.

If one is working with heavily damaged hydrolysed samples then working with PRICKLi one will eventually see the following:

- Ligation on forward end fails with bright nuclear signal.
- Ligation of reverse end works.

What happened here? 
<object data="/assets/img/splinted_ligation.svg" type="image/svg+xml" id="splinted_ligation" width="100%" height="100%"></object>


The explanation is fairly straightforward and simple. 

The polymerase used to amplify the circular cDNA into amplicons, phi29 DNA polymerase, will also act on any remaining gDNA and because phi29 has such good strand displacement it will displace strands of gDNA. 

The displaced strands will have directionality so they will be displaced primarly at the 5'end where they also will have free 5'phos group for T4 DNA ligase to act on. What can then happen is that the free 5'phos end will be splinted by two probes and T4 DNA ligase will irreversibly ligate the fluorescent probe onto the gDNA with no base specificity and because Endo V needs double-stranded substrate it will be impossible to cleave away the probe. 

This will mainly happen at the forward end reads and not the reverse end. In highly hydrolysed samples one will also see it on the reverse end. 

It is important to distinguish this nuclear background from that of a failed ligation. <br>In a failed ligation T4 DNA ligase will not ligate, most likely because of old T4 DNA ligase buffer (ATP freeze thaw sensitivity), this can happen when buffer is more than a year old in such cases you would see the probes getting soaked up in the nucleus but this more resembles traditional weak autofluorescence where in the case of splinted gDNA ligation on hydrolyzed gDNA the signal would be amazingly much brighter than anything else in the sample.


<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%"  viewBox="0 0 1015 314" enable-background="new 0 0 1015 314" xml:space="preserve">
<g>
	
		<circle fill="#FFFFFF" stroke="#231F20" stroke-width="5.8317" stroke-miterlimit="10" stroke-dasharray="8.7476" cx="125.485" cy="170.882" r="107.449"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M183.326,190.379
		c16.004,2.433,31.43,4.923,40.406,20.031"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M168.101,187.682
		c5.008,1.161,10.147,1.927,15.225,2.698"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M155.036,183.292
		c4.159,1.977,8.562,3.345,13.065,4.39"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M88.321,118.607
		c2.583,1.207,5.191,2.681,7.844,4.466c21.2,14.304,30.572,38.781,50.117,54.723c2.752,2.243,5.688,4.037,8.753,5.496"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M78.188,115.088
		c3.357,0.791,6.724,1.925,10.134,3.519"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M66.281,113.522
		c3.998,0.174,7.948,0.634,11.907,1.566"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M32.016,114.555
		c12.517,0.072,23.565-1.498,34.265-1.032"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M216.162,112.033
		c-32.845,10.674-61.893-2.574-78.067,25.242c-7.865,13.529-8.423,30.807-15.203,45.249c-8.505,18.119-15.656,27.151-34.888,35.014
		c-14.472,5.917-35.85,2.254-43.372,18.098"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M63.254,258.45
		c19.972-10.005,8.274-40.935,10.125-56.837c1.045-8.984,5.183-15.554,11-20.481"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M156.464,136.617
		c3.632-1.102,4.791-1.862,7.683-1.979c2.813-0.113,10.987,1.86,13.635,2.733c6.21,2.047,7.817,1.542,13.008,2.737"/>
	<path fill="none" stroke="#2BB673" stroke-width="6.6893" stroke-miterlimit="10" d="M76.515,169.014
		c6.275-4.459,13.857-8.109,19.693-10.496c6.297-2.572,15.075-0.88,19.919-5.833c9.353-9.562-7.497-38.128,11.456-62.629"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M82.791,174.247
		c12.477-7.371,24.357-11.417,37.91-14.287c10.774-2.282,25.224-7.081,33.442-13.958"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M157.736,151.025
		c4.381-1.894,8.95-3.07,13.857-2.332c10.051,1.514,16.562,6.94,27.65,6.08c10.117-0.788,20.795-3.447,27.088-11.649"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M125.482,165.201
		c6.606-1.903,12.969-4.211,19.489-7.539c4.176-2.129,8.379-4.743,12.765-6.637"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M84.38,181.132
		c8.179-6.924,19.667-10.606,30.52-13.187c3.632-0.864,7.142-1.75,10.583-2.744"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M151.212,192.733
		c3.933,3.231,11.297,3.094,16.005,4.692c5.518,1.871,9.916,2.914,15.965,2.951"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M66.425,105.166
		c8.418,0.524,18.478,2.31,25.716,6.948"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M76.515,169.014
		c-4.142,3.593-11.698,12.499-13.375,17.842c-1.628,5.2-3,9.699-3.815,14.457"/>
	<text transform="matrix(1 0 0 1 120.9375 235.6348)" fill="#E9297A" font-family="'Helvetica'" font-size="26.7571">phi29</text>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M66.103,200.529
		c0.365-0.851,0.204-2.184,0.575-3.22c0.396-1.111,1.097-2.062,1.546-3.143c1.076-2.593,1.307-4.971,2.7-7.558
		c1.132-2.112,2.535-4.279,3.976-6.263c1.263-1.738,3.715-2.665,4.634-4.558"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M159.234,143.093
		c2.168-0.37,4.346-1.361,6.898-1.236c2.848,0.139,5.431,0.842,8.213,1.374c4.32,0.827,9.416,1.772,13.587,2.771"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M183.182,200.376
		c3.776,0.022,10.683,0.708,13.832,2.609"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M151.212,192.733
		c-1.838-1.457-7.547-5.638-11.149-7.569"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M92.141,112.114
		c1.886,1.322,6.341,4.118,8.157,5.583"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M66.425,105.166
		c-1.664,0-6.389,0.163-8.493,0.69"/>
	<path fill="none" stroke="#FFFFFF" stroke-width="4.4054" stroke-miterlimit="10" d="M228.504,170.882
		c0,56.896-46.128,103.024-103.022,103.024c-56.898,0-103.026-46.128-103.026-103.024c0-56.898,46.128-103.026,103.026-103.026
		C182.376,67.856,228.504,113.984,228.504,170.882z"/>
	<path fill="#E9297A" stroke="#231F20" stroke-width="2.2298" stroke-miterlimit="10" d="M145.555,154.313
		c4.042-1.448,8.531,0.729,12.238-1.315c3.505-1.934,3.58-6.859,2.404-10.208c-2.979-8.473-10.914-9.651-18.413-9.934l-4.342,1.052
		c-6.528,3.691-13.047,8.373-11.807,17.268c0.488,3.515,2.805,7.859,6.812,7.972c4.229,0.12,7.221-3.871,11.479-4.439
		L145.555,154.313z"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M59.576,200.799
		c0.945,7.582,6.21,15.452,5.119,23.484c-0.533,3.937-2.038,8.168-3.323,11.928c-0.938,2.744-1.931,9.093-4.026,10.67"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M66.638,198.941
		c-0.115,1.389-1.165,2.903-1.121,4.534c0.052,1.979,1.409,3.612,1.958,5.483c1.256,4.285,1.441,8.83,1.394,13.305
		c-0.113,10.62-3.95,19.284-7.804,28.706"/>
	<text transform="matrix(1 0 0 1 30.9663 37.1855)" fill="#2BB673" font-family="'Helvetica'" font-size="26.7571">Displaced strand</text>
	<text transform="matrix(1 0 0 1 119.2817 86.2402)" fill="#2BB673" font-family="'Helvetica'" font-size="13.3786">5’PO4</text>
	
		<circle fill="#FFFFFF" stroke="#231F20" stroke-width="5.8317" stroke-miterlimit="10" stroke-dasharray="8.7476" cx="477.517" cy="173.249" r="107.446"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M535.359,192.747
		c16.001,2.432,31.426,4.923,40.406,20.031"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M520.135,190.049
		c5.008,1.16,10.146,1.927,15.225,2.698"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M507.069,185.659
		c4.155,1.977,8.562,3.345,13.065,4.39"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M440.352,120.974
		c2.586,1.206,5.19,2.68,7.848,4.466c21.199,14.304,30.571,38.781,50.117,54.723c2.752,2.243,5.688,4.037,8.753,5.496"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M430.222,117.455
		c3.353,0.791,6.724,1.925,10.13,3.519"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M418.314,115.89
		c3.998,0.174,7.943,0.634,11.907,1.565"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M384.05,116.922
		c12.517,0.072,23.561-1.498,34.265-1.032"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M568.196,114.4
		c-32.846,10.674-61.894-2.574-78.067,25.241c-7.865,13.529-8.423,30.808-15.208,45.249c-8.501,18.119-15.651,27.151-34.884,35.014
		c-14.476,5.916-35.85,2.254-43.375,18.097"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M415.283,260.817
		c19.973-10.006,8.275-40.935,10.13-56.837c1.046-8.984,5.183-15.554,11.001-20.482"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M508.498,138.984
		c3.632-1.102,4.791-1.862,7.683-1.979c2.813-0.113,10.983,1.859,13.631,2.732c6.21,2.047,7.821,1.542,13.013,2.737"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M434.82,176.613
		c12.481-7.371,24.361-11.417,37.914-14.286c10.774-2.282,25.225-7.082,33.438-13.958"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M509.77,153.393
		c4.381-1.895,8.945-3.07,13.857-2.332c10.052,1.513,16.559,6.939,27.646,6.08c10.121-0.789,20.8-3.447,27.089-11.65"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M477.517,167.568
		c6.603-1.903,12.97-4.211,19.484-7.539c4.181-2.13,8.379-4.743,12.769-6.637"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M436.414,183.499
		c8.179-6.924,19.667-10.606,30.52-13.187c3.633-0.864,7.143-1.75,10.583-2.743"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M503.246,195.101
		c3.928,3.231,11.297,3.094,16,4.692c5.522,1.871,9.921,2.914,15.966,2.95"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M418.454,107.532
		c8.423,0.525,18.482,2.311,25.721,6.948"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M428.549,171.381
		c-4.146,3.593-11.697,12.499-13.378,17.842c-1.629,5.2-2.997,9.699-3.815,14.457"/>
	<text transform="matrix(1 0 0 1 446.3789 227.3203)"><tspan x="0" y="0" fill="#E9297A" font-family="'Helvetica'" font-size="26.7571">T4 DNA  </tspan><tspan x="16.338" y="32.108" fill="#E9297A" font-family="'Helvetica'" font-size="26.7571">ligase</tspan></text>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M418.132,202.896
		c0.366-0.852,0.209-2.184,0.575-3.221c0.4-1.11,1.098-2.062,1.55-3.142c1.071-2.593,1.307-4.971,2.7-7.558
		c1.133-2.112,2.535-4.279,3.972-6.262c1.263-1.738,3.72-2.666,4.634-4.558"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M511.268,145.46
		c2.169-0.37,4.347-1.361,6.898-1.237c2.849,0.139,5.427,0.843,8.214,1.374c4.32,0.828,9.415,1.772,13.587,2.772"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M535.212,202.743
		c3.78,0.022,10.687,0.708,13.831,2.609"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M503.246,195.101
		c-1.838-1.457-7.552-5.638-11.148-7.569"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M444.175,114.48
		c1.882,1.322,6.341,4.118,8.152,5.583"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M418.454,107.532
		c-1.663,0-6.385,0.164-8.492,0.69"/>
	<path fill="none" stroke="#FFFFFF" stroke-width="4.4054" stroke-miterlimit="10" d="M580.538,173.249
		c0,56.896-46.128,103.024-103.021,103.024c-56.902,0-103.03-46.128-103.03-103.024c0-56.898,46.128-103.026,103.03-103.026
		C534.41,70.223,580.538,116.351,580.538,173.249z"/>
	<path fill="#E9297A" stroke="#231F20" stroke-width="2.2298" stroke-miterlimit="10" d="M484.803,117.183
		c4.041-1.448,8.535,0.729,12.237-1.315c3.51-1.934,3.58-6.859,2.404-10.208c-2.979-8.473-10.914-9.651-18.413-9.934l-4.338,1.052
		c-6.532,3.691-13.047,8.373-11.811,17.268c0.487,3.514,2.805,7.858,6.812,7.972c4.232,0.12,7.22-3.872,11.479-4.44L484.803,117.183
		z"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M411.608,203.166
		c0.944,7.582,6.21,15.451,5.121,23.484c-0.535,3.937-2.038,8.167-3.327,11.928c-0.937,2.744-1.93,9.093-4.024,10.669"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M418.672,201.309
		c-0.117,1.389-1.167,2.902-1.123,4.533c0.052,1.979,1.41,3.613,1.959,5.483c1.255,4.285,1.438,8.83,1.394,13.304
		c-0.113,10.62-3.954,19.284-7.804,28.706"/>
	<text transform="matrix(1 0 0 1 393.373 39.5527)" fill="#BE1E2D" font-family="'Helvetica'" font-size="26.7571">Splinted ligation</text>
	<path fill="none" stroke="#2BB673" stroke-width="6.6893" stroke-miterlimit="10" d="M428.549,171.381
		c6.271-4.459,13.857-8.109,19.693-10.496c6.298-2.572,15.072-0.879,19.92-5.833c9.351-9.562-7.499-21.679,11.453-46.18"/>
	<path fill="none" stroke="#A7A9AC" stroke-width="6.6893" stroke-miterlimit="10" d="M479.772,126.709
		c1.489-4.69,2.574-7.712,4.421-10.43c1.21-1.788,2.529-2.802,3.4-4.838c0.806-1.879,1.786-3.107,2.983-4.66"/>
	<path fill="none" stroke="#A7A9AC" stroke-width="6.6893" stroke-miterlimit="10" d="M479.615,108.872
		c1.354-1.49,3.263-5.629,3.263-5.629c0.953-1.195,2.286-2.328,3.423-3.373c1.812-1.664,3.184-3.501,4.459-5.565"/>
	<polygon fill="#BE1E2D" points="487.485,128.6 495.298,124.491 493.805,133.19 500.128,139.352 491.392,140.622 487.485,148.537 
		483.579,140.622 474.843,139.352 481.166,133.19 479.672,124.491 	"/>
	<polygon fill="#BE1E2D" points="487.485,74.332 495.298,70.223 493.805,78.922 500.128,85.084 491.392,86.354 487.485,94.269 
		483.579,86.354 474.843,85.084 481.166,78.922 479.672,70.223 	"/>
	<polygon fill="#231F20" points="334.951,169.014 288.741,142.331 288.741,155.635 270.289,155.635 270.289,182.393 
		288.741,182.393 288.741,195.697 	"/>
	
		<circle fill="#FFFFFF" stroke="#231F20" stroke-width="5.8317" stroke-miterlimit="10" stroke-dasharray="8.7476" cx="829.854" cy="174.615" r="107.446"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M887.696,194.113
		c16.001,2.432,31.426,4.923,40.406,20.031"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M872.472,191.415
		c5.008,1.16,10.146,1.927,15.225,2.698"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M859.406,187.025
		c4.155,1.977,8.562,3.345,13.065,4.39"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M792.688,122.34
		c2.586,1.206,5.19,2.68,7.848,4.466c21.199,14.304,30.571,38.781,50.117,54.723c2.752,2.243,5.688,4.037,8.753,5.496"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M782.559,118.821
		c3.353,0.791,6.724,1.925,10.13,3.519"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M770.651,117.256
		c3.998,0.174,7.943,0.634,11.907,1.565"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M736.387,118.288
		c12.517,0.072,23.561-1.498,34.265-1.032"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M920.533,115.767
		c-32.846,10.674-61.894-2.574-78.067,25.241c-7.865,13.529-8.423,30.808-15.208,45.249c-8.501,18.119-15.651,27.151-34.884,35.014
		c-14.476,5.916-35.85,2.254-43.375,18.097"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M767.62,262.184
		c19.973-10.006,8.275-40.935,10.13-56.837c1.046-8.984,5.183-15.554,11.001-20.482"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M860.835,140.35
		c3.632-1.102,4.791-1.862,7.683-1.979c2.813-0.113,10.983,1.859,13.631,2.732c6.21,2.047,7.821,1.542,13.013,2.737"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M787.157,177.979
		c12.481-7.371,24.361-11.417,37.914-14.286c10.774-2.282,25.225-7.082,33.438-13.958"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M862.106,154.759
		c4.381-1.895,8.945-3.07,13.857-2.332c10.052,1.513,16.559,6.939,27.646,6.08c10.121-0.789,20.8-3.447,27.089-11.65"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M829.854,168.935
		c6.603-1.903,12.97-4.211,19.484-7.539c4.181-2.13,8.379-4.743,12.769-6.637"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M788.751,184.865
		c8.179-6.924,19.667-10.606,30.52-13.187c3.633-0.864,7.143-1.75,10.583-2.743"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M855.583,196.467
		c3.928,3.231,11.297,3.094,16,4.692c5.522,1.871,9.921,2.914,15.966,2.95"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M770.791,108.898
		c8.423,0.525,18.482,2.311,25.721,6.948"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M780.886,172.747
		c-4.146,3.593-11.697,12.499-13.378,17.842c-1.629,5.2-2.997,9.699-3.815,14.457"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M770.469,204.262
		c0.366-0.852,0.209-2.184,0.575-3.221c0.4-1.11,1.098-2.062,1.55-3.142c1.071-2.593,1.307-4.971,2.7-7.558
		c1.133-2.112,2.535-4.279,3.972-6.262c1.263-1.738,3.72-2.666,4.634-4.558"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M863.604,146.826
		c2.169-0.37,4.347-1.361,6.898-1.237c2.849,0.139,5.427,0.843,8.214,1.374c4.32,0.828,9.415,1.772,13.587,2.772"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M887.549,204.109
		c3.78,0.022,10.687,0.708,13.831,2.609"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M855.583,196.467
		c-1.838-1.457-7.552-5.638-11.148-7.569"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M796.512,115.847
		c1.882,1.322,6.341,4.118,8.152,5.583"/>
	<path opacity="0.5" fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M770.791,108.898
		c-1.663,0-6.385,0.164-8.492,0.69"/>
	<path fill="none" stroke="#FFFFFF" stroke-width="4.4054" stroke-miterlimit="10" d="M932.875,174.615
		c0,56.896-46.128,103.024-103.021,103.024c-56.902,0-103.03-46.128-103.03-103.024c0-56.898,46.128-103.026,103.03-103.026
		C886.747,71.589,932.875,117.717,932.875,174.615z"/>
	<path fill="none" stroke="#2B3990" stroke-width="6.6893" stroke-miterlimit="10" d="M763.945,204.532
		c0.944,7.582,6.21,15.451,5.121,23.484c-0.535,3.937-2.038,8.167-3.327,11.928c-0.937,2.744-1.93,9.093-4.024,10.669"/>
	<path fill="none" stroke="#231F20" stroke-width="6.6893" stroke-miterlimit="10" stroke-dasharray="5.017" d="M771.009,202.675
		c-0.117,1.389-1.167,2.902-1.123,4.533c0.052,1.979,1.41,3.613,1.959,5.483c1.255,4.285,1.438,8.83,1.394,13.304
		c-0.113,10.62-3.954,19.284-7.804,28.706"/>
	<text transform="matrix(1 0 0 1 762.7266 22.9189)"><tspan x="0" y="0" fill="#231F20" font-family="'Helvetica'" font-size="21">Non-cleavable  </tspan><tspan x="-22.189" y="25.2" fill="#231F20" font-family="'Helvetica'" font-size="21">nuclear background</tspan></text>
	<path fill="none" stroke="#2BB673" stroke-width="6.6893" stroke-miterlimit="10" d="M780.886,172.747
		c6.271-4.459,13.857-8.109,19.693-10.496c6.298-2.572,15.072-0.879,19.92-5.833c9.351-9.562-7.499-21.679,11.453-46.18"/>
	<path fill="none" stroke="#A7A9AC" stroke-width="6.6893" stroke-miterlimit="10" d="M831.952,110.238
		c1.354-1.49,3.263-5.629,3.263-5.629c0.953-1.195,2.286-2.328,3.423-3.373c1.812-1.664,3.184-3.501,4.459-5.565"/>
	<polygon fill="#BE1E2D" points="839.822,75.698 847.635,71.589 846.142,80.288 852.465,86.451 843.729,87.72 839.822,95.635 
		835.916,87.72 827.18,86.451 833.503,80.288 832.009,71.589 	"/>
	<polygon fill="#231F20" points="687.288,170.38 641.077,143.697 641.077,157.001 622.626,157.001 622.626,183.759 641.077,183.759 
		641.077,197.063 	"/>
</g>
</svg>

To avoid this issue when working with samples that have undergone hydrolysis (especially if gDNA digestion is not complete or hydrolysis was primarily done before RCA) simply treat the sample with a combination of [CIP](https://www.neb.com/products/m0525-quick-cip "CIP") and [TdT](https://www.neb.com/products/m0315-terminal-transferase "TdT") together with [acyclovir](https://www.neb.com/products/n0460-acyclonucleotide-set "acyclovir")  in Quick CIP buffer. CIP will remove 5' phosphate groups and TdT will tail free 3'OH ends with a single acyclonucleotide. One hour incubation is usually more than sufficient.

| Reagent | Vendor | Amount | Concentration |
| :--- | :--- | :--- |  :--- | 
| 171 µl  | Nuclease-free water | 10977015, Invitrogen | NA |
| 20 µl | 10x Quick CIP buffer | NEB | 1x  |
| 5 µl | Quick CIP | NEB | 250 μM |
| 2 µl | TdT | NEB | 40 μM |
| 2 µl | Acyclovir | NEB | 40 μM |

In particularly bad samples this small trick can be applied just after stripping to ensure that any newly hydrolysed or displaced parts do not get labeled. This is especially true if the in situ amplicon itself would start to degrade as can happen if the user has a microscope where excessive light power is used. A good workflow we have started to implement is simply to perform imaging of the fluorescent sequencing adapter to check the library quality and image any additional fluorophores like fluorescent proteins or antibody staining. With several samples this usually takes an entire day so at the end of the day take the best samples that you intend to continue with and strip the fluorescent sequencing adapter with formamide and wash. After that leave the sample in 37°C overnight with the CIP + TdT/acyclovir cocktail. In the morning when you come in the sample is then ready for some quick washes and hybridization of the first sequencing primer followed by ligation.

## Difference between cPAL, SOLiD and PRICKLi.

The most basic scheme of sequencing by ligation was commercialized by Complete Genomics and is called Combinatorial Probe-Anchor Ligation (cPAL) sequencing.
In cPAL a sequencing primer known as the anchor primer is extended by ligation of a set of competing probes interrogating a specific position away from the ligation junction. Each base position is represented by a specific fluorescent probe. This scheme is straighforward but requires 4 x N probes to be synthesized, where N is number of positions interrogated. Each ligation cycle extends a new sequencing primer so after each image is taken the entire sequencing primer is stripped and a new primer is hybridized.

SOLiD (Sequencing by Oligonucleotide Ligation and Detection) was a method commercialized by Applied Biosystems that overcame the issue by being able to extend the same sequencing primer sequentially through repeated ligation cycles. The way SOLiD overcame this was to make use of a chemically cleavable phosphoramidite probe that could be cleaved with a mild oxidizing agent such as aqueous silver nitrate leaving free 5'PO4 ends for subsequent ligation cycles to extend. In this scheme it is common to seperate the concept of a round to mean hybridization round and the concept of cycle to mean ligation cycle. SOLiD would achieve reads by extending and cleaving a single sequencing primer and then once the highest read length was achieved the entire extended primer complex would be stripped away and a new _recessed_ sequencing primer would be hybridized and extended.

Traditionally five hybridization rounds was performed with seven ligation cycles giving a read length of 5 x 7 = 35bp.

PRICKLi is simply an enzymatic way to achieve similar SBL primer extension, cleave, re-ligate as SOLiD but with using cheap off-shelf oligonucleotide modifications. 
The added twist is the trick to piggy back on the improved confocal imaging and do multiple base calls by color multiplexing similar like Illumina NextSeq but instead of saving on laser cost the free fluorescent channels are used to encode directionality since SBL, unlike SBS, can sequence from both ends of the primer.



