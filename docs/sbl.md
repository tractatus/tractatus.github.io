---
layout: page
title: Sequencing by ligation
permalink: /sbl/
---

<h1> Sequencing by ligation (SBL)</h1>

Sequencing by ligation has a lot of small quirks to it that sometimes are not appreciated. This page cover some of those aspects with a special focus on how to trouble-shoot.

## Difference between cPAL, SOLiD and PRICKLi.

The most basic scheme of sequencing by ligation was commercialized by Complete Genomics and is called Combinatorial Probe-Anchor Ligation (cPAL) sequencing.
In cPAL a sequencing primer known as the anchor primer is extended by ligation of a set of competing probes interrogating a specific position away from the ligation junction. Each base position is represented by a specific fluorescent probe. This scheme is straighforward but requires 4 x N probes to be synthesized, where N is number of positions interrogated. Each ligation cycle extends a new sequencing primer so after each image is taken the entire sequencing primer is stripped and a new primer is hybridized.

SOLiD (Sequencing by Oligonucleotide Ligation and Detection) was a method commercialized by Applied Biosystems that overcame the issue by being able to extend the same sequencing primer sequentially through repeated ligation cycles. The way SOLiD overcame this was to make use of a chemically cleavable phosphoramidite probe that could be cleaved with a mild oxidizing agent such as aqueous silver nitrate leaving free 5'PO4 ends for subsequent ligation cycles to extend. In this scheme it is common to seperate the concept of a round to mean hybridization round and the concept of cycle to mean ligation cycle. SOLiD would achieve reads by extending and cleaving a single sequencing primer and then once the highest read length was achieved the entire extended primer complex would be stripped away and a new _recessed_ sequencing primer would be hybridized and extended.

Traditionally five hybridization rounds was performed with seven ligation cycles giving a read length of 5 x 7 = 35bp.

PRICKLi is simply an enzymatic way to achieve similar SBL primer extension, cleave, re-ligate as SOLiD but with using cheap off-shelf oligonucleotide modifications. 
This work goes back to 

## Pitfalls of in situ sequencing.

Any sequencing method that makes use of the inherent `3'OH`/`5'PO4` functional moeities will have issues when applied to in situ sequencing simply because remaining fixed nucleic acids (e.g. gDNA) can serve as substrate. For both SBS and SBL this issue is usually seen as high nuclear autofluorescent due to polymerase either extending free 3'OH on nicked and hydrolysed gDNA (like a TUNEL assay) or in the case of SBL displaced 5'ends with free `5'PO4` groups serve as splinted ligation targets.

If one is working with heavily damaged hydrolysed samples then working with PRICKLi one will eventually see the following:

- Ligation on forward end fails with bright nuclear signal.
- Ligation of reverse end works.

What happened here? The explanation is fairly straightforward and simple. The polymerase used to amplify the circular cDNA into amplicons will also act on any remaining gDNA and because phi29 has such good strand displacement it will displace strands of gDNA. The displaced strands will have directionality so they will be displaced primarly at the 5'end where they also will have free 5'phos group for T4 DNA ligase to act on. What can then happen is that the free 5'phos end will be splinted by two probes and T4 DNA ligase will irreversibly ligate the fluorescent probe onto the gDNA with no base specificity and because Endo V needs doublse stranded substrate it will be impossible to cleave away the probe. This will mainly happen at the forward end reads and not the reverse end. but in highly hydrolysed samples one will also see it on the reverse end.

To avoid this issue when working with samples that have undergone hydrolysis (especially if gDNA digestion is not complete or hydrolysis was primarily done before RCA) simply treat the sample with a combination of [CIP](https://www.neb.com/products/m0525-quick-cip "CIP") and [TdT](https://www.neb.com/products/m0315-terminal-transferase "TdT") together with [acyclovir](https://www.neb.com/products/n0460-acyclonucleotide-set "acyclovir")  in Quick CIP buffer. CIP will remove free phosphate groups and TdT will tail free 3'OH ends with a single acyclonucleotide.

In particularly bad samples this small trick can be applied just after stripping to ensure that any newly hydrolysed or displaced parts do not get labeled. This is especially true if the sin situ amplicon itself would start to degrade as can happen if the user has a microscope where excessive light power is used.



