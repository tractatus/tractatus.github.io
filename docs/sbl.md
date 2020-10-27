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

SOLiD (Sequencing by Oligonucleotide Ligation and Detection) was a method commercialized by Applied Biosystems that overcame the issue by being able to extend the same sequencing primer sequentially through repeated ligation cycles. The way SOLiD overcame this was to make use of a chemically cleavable phosphoramidite probe that could be cleaved with a mild oxidizing agent such as aqueous silver nitrate leaving free 5'PO4 ends for subsequent ligation cycles to extend. In this scheme it is common to seperate the concept of a round to mean hybridization round and the concept of cycle to mean ligation cycle. SOLiD would achieve reads by extending and cleaving a single sequencing primer and then once the highest read lnegth was achieved the entire extended primer complex would be stripped away and a new _recessed_ sequencing primer would be hybridized.

## Pitfalls of in situ sequencing.

Any sequenicng method that makes use of the inherent `3'OH`/`5'PO4 functional moeities will have issues when applied to in situ sequencing simply because remaining fixed RNA and DNA can serve as substrates. For both SBS and SBL this issue is usually seen as high nuclear autofluorescent due to polymerase either extending free 3'OH on nicked and hydrolysed gDNA or in the case of SBL displaced 5'ends with free 5'PO4 groups serve as splinted 




