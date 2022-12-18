---
title: "Cytoscape.js Plugins"
summary: TODO
tags:
  - Open Source
  - JavaScript/TypeScript Library
  - Cytoscape
  - Graph
date: '2020-01-01'

# Optional external URL for project (replaces project detail page).
# external_link: 'https://lineup.js.org'

image:
  caption: TODO
  focal_point: Smart

links:
url_code: 'https://github.com/sgratzl?q=cytoscape'
url_pdf: ''
url_slides: ''
url_video: ''

---

[Cytoscape.js](https://js.cytoscape.org/) is a JavaScript network visualization library. It support various basic node customizations but also allow developers to extend the framework using plugins. Over the last two years I created several plugins that improve the library:

The [Layers plugin](https://github.com/sgratzl/cytoscape.js-layers) simplifies the creation of addition layers in SVG, HTML, or HTML Canvas form. This can be used in various ways from using HTML nodes for the labels on nodes to smooth animated edges.

The [Bubblesets plugin](https://github.com/upsetjs/cytoscape.js-bubblesets) is an adapter to [BubbleSets](https://github.com/upsetjs/bubblesets-js) library for rendering bubble paths underneath nodes creating set like relationships in graphs.

The [Overlays plugin](https://github.com/sgratzl/cytoscape.js-overlays) allows to render bar, boxplots, histograms, and sparklines next to nodes which can be used to show data associated with nodes. Like showing experimental data in pathways.