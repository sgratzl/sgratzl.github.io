---
title: "KnowledgePearls: Provenance-Based Visualization Retrieval"

authors:
  - Holger Stitz
  - sam
  - Harald Piringer
  - Thomas Zichner
  - Marc Streit

date: 2019-10-01
doi: "10.1093/bioinformatics/btz009"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In IEEE Transactions on Visualization and Computer Graphics (VAST '18)
publication_short: VAST '18

abstract: |2-
  Storing analytical provenance generates a knowledge base with a large potential for recalling previous results and guiding users in future analyses. However, without extensive manual creation of meta information and annotations by the users, search and retrieval of analysis states can become tedious. We present KnowledgePearls, a solution for efficient retrieval of analysis states that are structured as provenance graphs containing automatically recorded user interactions and visualizations. As a core component, we describe a visual interface for querying and exploring analysis states based on their similarity to a partial definition of a requested analysis state. Depending on the use case, this definition may be provided explicitly by the user by formulating a search query or inferred from given reference states. We explain our approach using the example of efficient retrieval of demographic analyses by Hans Rosling and discuss our implementation for a fast look-up of previous states. Our approach is independent of the underlying visualization framework. We discuss the applicability for visualizations which are based on the declarative grammar Vega and we use a Vega-based implementation of Gapminder as guiding example. We additionally present a biomedical case study to illustrate how KnowledgePearls facilitates the exploration process by recalling states from earlier analyses.

# Summary. An optional shortened abstract.
summary:

tags:
  - Visualization Technique
  - Web Based

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
links:
  - name: Supplementary Material
    url: http://data.jku-vds-lab.at/papers/2018_vast_knowledge-pearls-supplement.pdf

url_pdf: http://data.jku-vds-lab.at/papers/2018_vast_knowledge-pearls.pdf
url_code: https://github.com/Caleydo/knowledge-pearls
# url_dataset: https://github.com/wowchemy/wowchemy-hugo-themes
url_poster:
url_project: http://knowledge-pearls.caleydo.org/
# url_slides: https//data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pdf
# url_source: https://data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pptx
url_video: https://youtu.be/N6f4d5UResM

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
  # - tdp
# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

# Citation

Holger Stitz, Samuel Gratzl, Harald Piringer, Thomas Zichner, and Marc Streit <br>
**KnowledgePearls: Provenance-Based Visualization Retrieval** <br>
IEEE Transactions on Visualization and Computer Graphics (VAST '18), 25(1): 120--130, doi:10.1109/TVCG.2018.2865024, 2018.

# Acknowledgements

We are grateful to Suzie Lee Hoops for proof-reading our work. This work was supported in part by Boehringer Ingelheim Regional Center Vienna, the Austrian Science Fund (FWF P27975-NBL), and the State of Upper Austria (FFG 851460). The VRVis Forschungs-GmbH is funded by COMET – Competence Centers for Excellent Technologies (854174) by BMVIT, BMWFW, Styria, Styrian Business Promotion Agency – SFG and Vienna Business Agency. The COMET Programme is managed by FFG.