---
title: "MiniZinc Constraint Program Solver"
summary: Web IDE for the constraint programming language and solver MiniZinc
tags:
  - MiniZinc
  - React
  - D3
  - Emscripten
  - WebAssembly
  - JavaScript
  - TypeScript
  - Open Source
date: "2019-05-01"

# Optional external URL for project (replaces project detail page).
# external_link: 'https://lineup.js.org'

image:
  caption: Minizinc Web IDE
  focal_point: Smart

links:
  - icon: external-link
    icon_pack: fa
    name: Minizinc Web IDE
    url: https://minizinc-ide.netlify.app/
url_code: "https://gitlab.com/minizinc/minizinc-webide"
url_pdf: ""
url_slides: ""
url_video: ""
---

[MiniZinc](https:/www.minizinc.org) is a constraint programming language and solver developed by the [Monash university](https://www.monash.edu/) in Melbourne, Australia. Based on a simple language, MiniZinc allow to solve problems such as scheduling problems or traveling salesman problems. During my research visit at Monash university, I contributed to porting MiniZinc to the web using [Emscripten](https://emscripten.org/) and developed tools around that to simplify its usage including a [Web IDE](https://minizinc-ide.netlify.app/) for the language or an easy integration to create interactive tutorials. For example this [CodePen](https://codepen.io/sgratzl/pen/agZKzM) shows how to embed MiniZinc into a website to solve a problem.

One application that I implemented and migrated using this new MiniZinc.js is a case study for solving the [vehicle routing problem with time constraints](https://vrptw.netlify.app/). In this web application users can explore and optimize the routing schedules of delivery trucks in the Monash university area.
