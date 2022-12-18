---
title: "LineUp: Visual Analysis of Multi-Attribute"
summary: LineUp is a visualization technique for multi-attribute rankings
tags:
  - Publication
  - Open Source
  - TypeScript
  - JavaScript
  - Python
  - Jupyter
  - R

date: '2013-01-01'

# Optional external URL for project (replaces project detail page).
# external_link: 'https://lineup.js.org'

image:
  caption: LineUp.js Higher Times University Ranking Exploration
  focal_point: Smart

links:
  - icon: external-link
    icon_pack: fa
    name: Website
    url: https://lineup.js.org
  - icon: external-link
    icon_pack: fa
    name: Demo Application
    url: https://lineup.js.org/app
url_code: 'https://github.com/lineupjs/lineupjs'
url_pdf: ''
url_slides: ''
url_video: ''

---

LineUp is a visualization technique for multi-attribute rankings. It is implemented as reusable JavaScript library available at [lineup.js.org](https://lineup.js.org). It won the best paper award out of 152 submissions at IEEE InfoVis 2013 when it was originally published. The paper and more information can be found on its [Caleydo Website](https://caleydo.org/publications/2013_infovis_lineup/). [Taggle](https://caleydo.org/publications/2019_sage_infovis_taggle/) is a recent publication about the new advanced features of LineUp.

LineUp is my hobby project that I maintain since 2013. It started as a Java extension to the Caleydo framework but soon be rewritten to a JavaScript libraries. Since then, the library and LineUp has changed a lot and is now in version 4. The latest version is written in clean TypeScript and uses a custom rendering engine the [LineUpEngine](https://github.com/lineupjs/lineupengine). The latest version can utilize web workers such that it works with _one million_ rows in an interactive way.

The [LineUp App](https://lineup.js.org/app) is a web application that allows the user to manage and upload CSV files and explore them using LineUp. It has several example dataset one can play around with. Moreover, any ranking can be downloaded as CSV or JSON or exported to e.g. CodeSandbox to be embedded in other websites.

Besides the library itself, I implemented several adapters to other frameworks such as React [lineupjsx](https://github.com/lineupjs/lineupjsx), Vue.js [vue-lineup](https://github.com/lineupjs/vue-lineup) or Angular [ng-lineup](https://github.com/lineupjs/ng-lineup). Moreover, there are bindings to R Shiny Widgets [lineup_htmlwidget](https://github.com/lineupjs/lineup_htmlwidget) or Jupyter Widgets [lineup_widget](https://github.com/lineupjs/lineup_widget).
