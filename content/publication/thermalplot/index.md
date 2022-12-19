---
title: "ThermalPlot: Visualizing Multi-Attribute Time-Series Data Using a Thermal Metaphor"

authors:
  - Holger Stitz
  - sam
  - Wolfgang Aigner
  - Marc Streit

date: 2016-04-01
doi: "10.1109/TVCG.2015.2513389"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "In IEEE Transactions on Visualization and Computer Graphics, 22(12): 2594-2607"
publication_short: In IEEE Transactions on Visualization and Computer Graphics

abstract: |2-
  Multi-attribute time-series data plays a vital role in many different domains, such as economics, sensor networks, and biology. An important task when making sense of such data is to provide users with an overview to identify items that show an interesting development over time, including both absolute and relative changes in multiple attributes simultaneously. However, this is not well supported by existing visualization techniques. To address this issue, we present ThermalPlot, a visualization technique that summarizes combinations of multiple attributes over time using an item’s position, the most salient visual variable. More precisely, the x-position in the ThermalPlot is based on a user-defined degree-of-interest (DoI) function that combines multiple attributes over time. The y-position is determined by the relative change in the DoI value (∆DoI) within a user-specified time window. Animating this mapping via a moving time window gives rise to circular movements of items over time—as in thermal systems. To help the user to identify important items that match user-defined temporal patterns and to increase the technique’s scalability, we adapt the level of detail of the items’ representation based on the DoI value. Furthermore, we present an interactive exploration environment for multi-attribute time-series data that ties together a carefully chosen set of visualizations, designed to support analysts in interacting with the ThermalPlot technique. We demonstrate the effectiveness of our technique by means of two usage scenarios that address the visual analysis of economic development data and of stock market data.

# Summary. An optional shortened abstract.
summary:

tags:
  - Visualization Technique
  - Web Based
  - timeseries data
  - multi attribute

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
links:
  # - name:
  #   url:

url_pdf: https://data.jku-vds-lab.at/papers/2016_tvcg_thermalplot.pdf
url_code: https://github.com/Caleydo/org.caleydo.view.lineup
# url_dataset: https://github.com/wowchemy/wowchemy-hugo-themes
url_poster:
url_project: https://thinkh.github.io/thermalplot/
# url_slides: https//data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pdf
# url_source: https://data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pptx
# url_video: https://youtu.be/iFqCBI4T8ks

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  # caption: "LineUp Teaser Image"
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
  # - lineup
# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

# Citation

Holger Stitz, Samuel Gratzl, Wolfgang Aigner, and Marc Streit <br>
**ThermalPlot: Visualizing Multi-Attribute Time-Series Data Using a Thermal Metaphor** <br>
IEEE Transactions on Visualization and Computer Graphics, 22(12): 2594-2607, doi:10.1109/TVCG.2015.2513389, 2016.

# Acknowledgements

This work was supported by the ICT of the Future program of the Austrian Ministry for Transport, Innovation and Technol- ogy (BMVIT) via the projects PIPES-VS-DAMES (840232) and VALiD (845598) as well as the Austrian Science Fund (FWF) via the projects KAVA-Time (P25489) and VisOnFire (P27975-NBL). The authors also thank Bernhard Elias for providing valuable input concerning the stock market use case.