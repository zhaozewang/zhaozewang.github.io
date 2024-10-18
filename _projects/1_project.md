---
layout: page
title: NN4Neurosci
description: An open-source library of neural networks for neuroscience research.
img: assets/img/projects/RNN_structure.png
importance: 2
category: research
---
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PyPI version](https://badge.fury.io/py/nn4n.svg)](https://badge.fury.io/py/nn4n)
[![Python Package using Conda](https://github.com/zhaozewang/NN4Neurosci/actions/workflows/python-package-conda.yml/badge.svg)](https://github.com/zhaozewang/NN4Neurosci/actions/workflows/python-package-conda.yml)
[![Downloads](https://static.pepy.tech/badge/nn4n)](https://pepy.tech/project/nn4n)
<br>
Some of the most commonly used neural networks in neuroscience research are included in this project to ease the implementation process [\[GitHub\]](https://github.com/zhaozewang/NN4Neurosci.git). <br>

<div class="row" align="center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/RNN_structure.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

## Acknowledgements
Immense thanks to Dr. Christopher J. Cueva for his mentorship in developing this project. This project can't be done without his invaluable help.

## Model
#### CTRNN
The implementation of standard continuous-time RNN (CTRNN). This implementation supports enforcing sparsity constraints (i.e., preventing new synapses from being created) and E/I constraints (i.e., enforcing Dale's law). This ensures that the gradient descent will update synapses with biological plausible constraints. <br>
- [Documentation](https://github.com/zhaozewang/NN4Neurosci/blob/main/docs/model/CTRNN/index.md)
- [Examples](https://github.com/zhaozewang/NN4Neurosci/blob/main/examples/CTRNN.ipynb)
<div class="row" align="center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/EIRNN_structure.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption">
    A simple visualization of a network with E/I neurons, the red nodes should only have inhibitory connections, while the blue nodes should only have excitatory connections.
</div>


## Structure
In CTRNN implementation, the hidden layer structure can be easily controlled by specifying sparsity masks and E/I masks. We put all RNN update logic in the `model` module and all structure-related logic in the `structure` module to streamline the implementation process. <br>

We also emphasize on the structure more as it is often more informative to the underlying biological mechanisms. For instance, we might require different module sizes, or we require a multi-module network with E/I constraints; the implementation might be verbose and error-prone. Our following implementation will allow you to easily achieve these goals by simply specifying a few parameters. <br>

- [Documentation](https://github.com/zhaozewang/NN4Neurosci/blob/main/docs/structure/index.md)

#### Multi-Area
The following implementation groups neurons into areas depending on your specification. Areas can have different sizes and different connectivities to other areas. <br>
- [Examples](https://github.com/zhaozewang/NN4Neurosci/blob/main/examples/MultiArea.ipynb)
<div class="row" align="center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/Multi_Area.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

#### Multi-Area with E/I constraints
On top of modeling brain with multi-area hidden layer, another critical constraint would be Dale's law, as proposed in the paper [Training Excitatory-Inhibitory Recurrent Neural Networks for Cognitive Tasks: A Simple and Flexible Framework](https://doi.org/10.1371/journal.pcbi.1004792) by Song et al. 2016. The `MultiAreaEI` class in the `structure` module is designed to implement such a connectivity matrix. <br>
Additionally, how different E/I regions connect to each other could also be tricky; we parameterized this process such that it can be controlled with only two lines of code. <br>
- [Examples](https://github.com/zhaozewang/NN4Neurosci/blob/main/examples/MultiArea.ipynb)
<div class="row" align="center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/Multi_Area_EI.png" title="example image" class="img-fluid rounded" %}
    </div>
</div>

#### Random Input
Neurons' dynamic receiving input will be heavily driven by the inputting signal. Injecting signals to only part of the neuron will result in more versatile and hierarchical dynamics. See [A Versatile Hub Model For Efficient Information Propagation And Feature Selection](https://arxiv.org/abs/2307.02398). This is supported by `RandomInput` class <br>

## Criterion
#### RNNLoss
The loss function is modularized. The `RNNLoss` class is designed in a modular fashion and includes the most commonly used loss functions, such as Frobenius norm on connectivity, metabolic cost, reconstruction loss, etc. <br>
- [Documentation](https://github.com/zhaozewang/NN4Neurosci/blob/main/docs/criterion/index.md)

## Similar projects:
- [nn-brain](https://github.com/gyyang/nn-brain)

