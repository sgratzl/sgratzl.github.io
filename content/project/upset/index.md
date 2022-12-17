---
title: "UpSet.js"
summary: UpSet.js is a JavaScript re-implementation of [UpSetR]rankings which is an implementation of UpSet
tags:
  - TypeScript/JavaScript Library
  - Jupyter Widget Library
  - R Package
  - React Library Adapter
  - Vue Library Adapter
  - Vanilla Bundle
date: '2020-01-01'

# Optional external URL for project (replaces project detail page).
# external_link: 'https://lineup.js.org'

image:
  caption: LineUp.js Higher Times University Ranking Exploration
  focal_point: Smart

links:
  - icon: external-link
    icon_pack: fa
    name: Website
    url: https://upset.js.org
  - icon: external-link
    icon_pack: fa
    name: Demo Application
    url: https://upset.js.org/app
url_code: 'https://github.com/upsetjs/upsetjs'
url_pdf: ''
url_slides: ''
url_video: ''

---

UpSet.js is a JavaScript re-implementation of [UpSetR](https://www.rdocumentation.org/packages/UpSetR/) which itself is based on [UpSet](http://vcg.github.io/upset/about/).

It allows to interactively explore large set intersections. The library is written in TypeScript and the core as a Pure React component. However, in additional a bundle version is available allowing to use it without React. The main source code in in the mono repo located at [https://github.com/upsetjs/upsetjs](https://github.com/upsetjs/upsetjs). This repository contains the library itself ([@upsetjs/react](https://github.com/upsetjs/upsetjs/tree/master/packages/react)) along with a bundle wrapper ([@upsetjs/bundle](https://github.com/upsetjs/upsetjs/tree/master/packages/bundle)), a demo application ([@upsetjs/app](https://github.com/upsetjs/upsetjs/tree/master/packages/app)) and a Vue.js wrapper ([@upsetjs/vue](https://github.com/upsetjs/upsetjs/tree/master/packages/vue)).

In addition, at [upsetjs_r](https://github.com/upsetjs/upsetjs_r) an R HTMLWidget wrapper and at [upsetjs_jupyter_widget](https://github.com/upsetjs/upsetjs_jupyter_widget) a Jupyter Widget are available.
