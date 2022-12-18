---
title: "YaCoBo - Yet another COVID-19 board"
summary: YaCoBo is dashboard application for COVID-19 COVIDcast data
tags:
  - Open Source
  - JavaScript
  - TypeScript
  - Library
  - COVID-19
  - COVIDcast
  - React
  - Next.js
date: '2019-09-01'

# Optional external URL for project (replaces project detail page).
# external_link: 'https://lineup.js.org'

image:
  # caption: TODO
  focal_point: Smart

links:
  - icon: external-link
    icon_pack: fa
    name: Demo
    url: https://yacobo.vercel.app
url_code: 'https://github.com/sgratz/yacobo'
url_pdf: ''
url_slides: ''
url_video: ''

---

YaCoBo (Yet another COVID-19 Board) is a dashboard application visualizing COVID-19 data for the US. YaCoBo is hosted at https://yacobo.vercel.app/. It shows data from the [Delphi Group at Carnegie Mellon University](https://delphi.cmu.edu/) which they collect as part of the [COVIDcast](https://covidcast.cmu.edu) project.

YaCoBo is implemented using [Next.js](https://nextjs.org), hosted on [Vercel](https://vercel.com/), and uses [Lambda Store](https://lambda.store/) for caching. The charts are created using [Vega](https://vega.github.io) statically on the server side with the option to enable interactivity on the client.
