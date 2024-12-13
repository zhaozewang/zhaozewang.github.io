---
layout: project
importance: 4
category: none
title: "Time Makes Space: Emergence of Place Fields in Networks Encoding Temporally Continuous Sensory Experiences"
# description: Some description.
authors:
  - name: Zhaoze Wang
    url: "https://zhaozewang.github.io"
    superscript: "†, 1"
  - name: Ronald W. Di. Tullio
    superscript: "†, 2"
  - name: Spencer Rooke
    superscript: "3"
  - name: Vijay Balasubramanian
    superscript: "3, 4, 5"
    url: "https://www.physics.upenn.edu/~vbalasub/Home.html"
affiliations: "<sup>1</sup> Department of Computer and Information Science, <sup>2</sup> Neuroscience, and <sup>3</sup> Physics,&nbsp;&nbsp;University of Pennsylvania;<br><sup>4</sup> Rudolf Peierls Centre for Theoretical Physics, University of Oxford;<br>and <sup>5</sup> Santa Fe Institute&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;†: Equal contribution"

arxiv_link: "https://arxiv.org/abs/2408.05798"

code_link: "https://github.com/zhaozewang/time_makes_space"

open_review_link: "https://openreview.net/forum?id=ioe66JeCMF"

related_project_link: "https://neurips.cc/virtual/2024/poster/95187"

citation: |
  @inproceedings{wang2024time,
    title={Time Makes Space: Emergence of Place Fields in Networks Encoding Temporally Continuous Sensory Experiences},
    author={Zhaoze Wang and Ronald W. Di. Tullio and Spencer Rooke and Vijay Balasubramanian},
    booktitle={Proceedings of the 2024 Conference on Neural Information Processing Systems (NeurIPS)},
    year={2024}
  }

_styles: >
  .container {
    width: 100%;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .post {
    position: relative;
    max-width: 800px;
    padding: 4rem;
    unicode-bidi: isolate;
    margin: 0 auto; /* Horizontal centering */
  }
  .post-title {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }
  .authors {
    margin: 1.5rem 0 1rem;
  }
  .affiliations {
    font-size: 0.8rem;
    color: #555;
    margin: 1.5rem 0 1rem;
  }
  .buttons a {
    display: inline-block;
    margin: 0.5rem;
    padding: 0.5rem 1.5rem;
    font-size: 0.9rem;
    color: #fff;
    background-color: #5483e1;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  .buttons a:hover {
    background-color: #005f99;
  }
  .post-content p{
    text-align: justify;
  }
  .caption {
    font-size: 0.9rem;
    color: #777;
    margin-top: 0.5rem;
  }
  .citation {
    text-align: left;
    font-family: "Courier New", Courier, monospace;
    background-color: #f5f5f5;
    color: #333;
    margin-top: 1rem;
    padding: 1rem; /* Adds padding inside the box */
    border-radius: 5px;
    overflow-x: auto;
    overflow-y: auto;
    white-space: pre;
    height: fit-content;
    max-height: 300px;
  }
---

## TL;DR
We modeled the hippocampal CA3 region as a recurrent autoencoder that learns to recall sensory episodes weakly modulated by spatial location, simulating how animals traverse and encode environments. This model naturally produced place-like firing patterns in the encoding layer, capturing key aspects of hippocampal spatial memory, such as remapping and representational stability. ​

## Abstract

The vertebrate hippocampus is believed to use recurrent connectivity in area CA3 to support episodic memory recall from partial cues. This brain area also contains place cells, whose location-selective firing fields implement maps supporting spatial memory. Here we show that place cells emerge in networks trained to remember temporally continuous sensory episodes. We model CA3 as a recurrent autoencoder that recalls and reconstructs sensory experiences from noisy and partially occluded observations by agents traversing simulated arenas. The agents move in realistic trajectories modeled from rodents and environments are modeled as continuously varying, high-dimensional, sensory experience maps (spatially smoothed Gaussian random fields). Training our autoencoder to accurately pattern-complete and reconstruct sensory experiences with a constraint on total activity causes spatially localized firing fields, i.e., place cells, to emerge in the encoding layer.

## More Details

### An Recurrent Autoencoder Model of Episodic Memory

<div class="row" align="center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/episodic_mem_RAE.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

### Emergence of Place Fields

<div class="row" align="center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/RAE_results.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

### Place Fields Remapping

<div class="row" align="center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/remapping.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

### Robust Emergeance of Place Fields

<div class="row" align="center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/robust_emergence.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

## Ackowledgements

We thank Dori Derdikman, Genela Morris, and Shai Abramson for many illuminating discussions in the course of this work, which was supported by NIH CRCNS grant 1R01MH125544-01 and in part by the NSF and DoD OUSD (R&E) under Agreement PHY-2229929 (The NSF AI Institute for Artificial and Natural Intelligence).
VB was supported in part by the Eastman Professorship at Balliol College, Oxford.
We are also grateful to Pratik Chaudhari for his insightful suggestions on designing the RAE and analyzing its dynamics.
