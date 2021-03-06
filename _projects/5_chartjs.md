---
modal-id: chartjs
order: 5
img: chartjs
imgformat: png
alt: Chart.js Plugins
source-code: https://github.com/sgratzl?q=chartjs
keywords: open source, chart.js, box plot, map, graph, tree, pcp
project-date: since 2018
category: Open Source Contributions
technologies: es6, babel, rollup.js, jest, canvas, d3
---

[Chart.js](https://www.chartjs.org/) is a JavaScript charting library based on HTML Canvas. It support various basic chart types but also allow developers to extend the framework using plugins. Over the last two years I created several plugins that improve the library and add new chart types as well as contributed to Chart.js itself:

The [Box Plot plugin](https://github.com/datavisyn/chartjs-chart-box-and-violin-plot) allows user to create box and violin plots. Box Plots allow to quickly summarize distributions by showing the most important staticical values such as the median value and several quantiles. I also created a [Hierarchical Scale Plugin](https://github.com/sgratzl/chartjs-plugin-hierarchical) that extends for example bar charts to group, collapse, expand, and focus on hierarchical data. It is an advanced version of the grouping feature in Microsoft Excel.

Recently I created several new plugins that further extend Chart.js to draw more visualization types. The [Graphs plugin](https://github.com/sgratzl/chartjs-chart-graph) allows developers to show graphs/networks and trees, either using using a force directed layout or a fixed tree layout. The [Error Bars plugin](https://github.com/sgratzl/chartjs-chart-error-bars) extend several standard plot types (bar chart, scatterplot, radial charts) to render error bars to show distribution and error ranges. The [Geo Plugin](https://github.com/sgratzl/chartjs-chart-geo) allows developers to render choropleth and bubble maps, such as showing information on a world map about population densities. The [PCP Plugin](https://github.com/sgratzl/chartjs-chart-pcp) allows developers to create interactive parallel coordinate plots with optional bezier curves support. The [Word Cloud Plugin](https://github.com/sgratzl/chartjs-chart-word-cloud) allows developers to create word clouds based on d3-cloud.

I'm happy that all my plugins are now listed on the official [chart.js awesome list](https://github.com/chartjs/awesome). Moreover, I started contributing to Chart.js itself by being the main contributor to its new TypeScript typings as well as their efforts for ESM Treeshaking support.
