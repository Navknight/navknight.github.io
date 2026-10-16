---
title: Digit Recognition in C++ (To make my prof angry)
date: 2026-10-01
description: Writing a very crude neural network in C++ to recognise digits from the MNIST database, plus a demo you can draw on.
tags:
  - neural-network
  - wiki
image: 
---
I am currently studying machine learning (after avoiding it for a long time, because, linear algebra) and we finally got to the "Neural Networks" part of the course. I remembered a video from 3Blue1Brown where he builds a network that recognises handwritten digits from the MNIST database, and I thought about recreating that experiment.

The concept itself is very simple. A neural network maps the input features to the output features, with `n` operations in between.

So, let's say `y = f(x)`, where y is the output and x is the input. Instead of `f` being one transformation, x goes through a few of them one after the other. So, essentially, `y = g(h(t(x)))` and so on, as deep as you want to architect it.

There's a catch, though. If every step is linear, stacking them gets you nothing, because a linear map of a linear map is still linear, and `g(h(t(x)))` collapses into one matrix. What makes the layers worth having is the squish after each one. Every layer computes `σ(Wx + b)`, where `σ` is the sigmoid, and that bend is what lets each layer do its own job.

One analogy 3Blue1Brown uses is that each layer learns some part of the digit, which gives the next layer something to build on. Say we're recognising a 4 and we have 3 layers, `t`, `h` and `g`. It's _possible_ that `t` notices a 4 has one horizontal line and two vertical ones, `h` notices the horizontal line sits between the vertical ones, and `g` notices one vertical line is shorter than the other and calls it a 4.

(Keep that idea in mind. My network had other plans.)

## The network

I built it exactly the way 3Blue1Brown does in his videos. A 28×28 image (784 pixels) goes through a 784→16 layer, then a 16→16 layer, then a 16→10 layer, and out comes a vector of 10 numbers. The biggest one is the digit the network thinks you drew.

Counting every weight and bias, that's 13,002 numbers. Training is just finding good values for all of them.

## Training it in C++

It's written from scratch in C++ with nothing but the standard library. Sigmoid on every layer, including the output. The cost is squared error, same as in the videos. It trains on mini-batches of 100 images with a learning rate of 2.0, and goes through all 60,000 training images 100 times.

It gets **95.12%** of the 10,000 test images right.

I also tried 1000 epochs, figuring more had to be better. It got worse (94.4%). Overfitting, the thing the course warned us about, happened to me personally.

The first version was slow. The current one uses AVX2, so the CPU works on 8 floats per instruction, and it pushes 4 images through each layer together so every weight row gets loaded once and used 4 times. All 100 epochs now take about 11 seconds on my machine.

## Try it

Draw a digit in the box and hit **Check digit**. The diagram next to it is the actual network running in your browser, with the weights from that C++ run. Brighter circles are more active neurons. Teal lines are positive weights and red ones are negative. The brighter a line, the harder it pushes on the next layer.

<div data-demo="digits">
    <p>Turn on JavaScript to draw a digit here.</p>
</div>

## Your drawing needs cleaning up first

Every MNIST digit was scaled to fit a 20×20 box and moved so its centre of mass sits in the middle of the 28×28 image. The network has never seen anything else, so a small 7 drawn in the corner means nothing to it.

I checked how much this matters. Shrink the test images and push them into the top-left corner, and accuracy drops from 95.12% to 8.63%. That's worse than guessing.

So before the network sees your drawing, the demo crops and scales it to fit 20×20, then moves its centre of mass to the middle, same as MNIST. On those same squashed test images, that brings it back up to 92.61%. The small box labelled "what it sees" shows the cleaned-up version that actually goes in.

## What the neurons look for

Remember the 4 from earlier, with one layer finding lines and the next one checking how they fit? Hover over a neuron in the first hidden layer (or tap it on a phone) and the small box shows its 784 weights as an image. Teal pixels make it light up, red ones calm it down.

I went in expecting edges and loops. Mine look like TV static with a few blobs in them. 3Blue1Brown found the same thing with his network in the [next lesson](https://www.3blue1brown.com/lessons/neural-network-analysis/): the weights "look, well, almost random."

So it works, for reasons I can't read off the weights. Which is a little rude, considering I wrote it.

## How the browser runs it

The C++ program writes the trained weights to a 126 KB JSON file. The page fetches it, and this is the entire forward pass:

```js
const sigmoid = (z) => 1 / (1 + Math.exp(-z))

export function forward(net, x) {
  const acts = [x]
  for (const { W, b } of net.layers) {
    const a = acts.at(-1)
    acts.push(W.map((row, j) => sigmoid(row.reduce((s, w, k) => s + w * a[k], b[j]))))
  }
  return acts
}
```

Each row of `W` belongs to one neuron. It multiplies every input by its weight, adds the bias, squishes the sum, and that's the neuron's activation. The diagram just draws `acts`.

If it gets your digit wrong, try drawing it bigger and thicker. Or blame the prof.
