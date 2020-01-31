---
layout: default
modal-id: minizinc
order: 4
img: minizinc
imgformat: png
alt: MiniZinc Constraint Program Solver
source-code: https://gitlab.com/minizinc/minizinc-webide
demo: https://minizinc-ide.netlify.com/
keywords: minizinc, constraint programming, emscripten
project-date: May 2019
category: Open Source Contributions
technologies: react, mobx, emscripten, d3
---

[MiniZinc](https:/www.minizing.org) is a constraint programming language and solver developed by the [Monash university](https://www.monash.edu/) in Melbourne, Australia. Based on a simple language, MiniZinc allow to solve problems such as scheduling problems or travelling salesman problems. During my research visit at Monash university, I contributed to porting MiniZinc to the web using [Emscripten](https://emscripten.org/) and developed tools around that to simplify its usage including a [Web IDE](https://minizinc-ide.netlify.com/) for the language or an easy integration to create interacive tutorials. For example this [CodePen](https://codepen.io/sgratzl/pen/agZKzM) shows how to embed MiniZinc into a website to solve a problem.

One application that I implemented and migrated using this new MiniZinc.js is a case study for solving the [vehicle routing problem with time constraints](https://vrptw.netlify.com/). In this web application users can explore and optimize the routing schedules of delivery trucks in the Monash university area.
