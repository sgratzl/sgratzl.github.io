---
title: "Supporting the Problem-Solving Loop: Designing Highly Interactive Optimisation Systems"

authors:
  - Jie Liu
  - Tim Dwyer
  - Guido Tack
  - sam
  - Kim Marriott

date: 2020-10-01
doi: "10.1109/TVCG.2020.3030364"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In IEEE Transactions on Visualization and Computer Graphics
publication_short: In IEEE Transactions on Visualization and Computer Graphics

abstract: |2-
  Efficient optimisation algorithms have become important tools for finding high-quality solutions to hard, real-world problems such as production scheduling, timetabling, or vehicle routing. These algorithms are typically “black boxes” that work on mathematical models of the problem to solve. However, many problems are difficult to fully specify, and require a “human in the loop” who collaborates with the algorithm by refining the model and guiding the search to produce acceptable solutions. Recently, the Problem-Solving Loop was introduced as a high-level model of such interactive optimisation. Here, we present and evaluate nine recommendations for the design of interactive visualisation tools supporting the Problem-Solving Loop. They range from the choice of visual representation for solutions and constraints to the use of a solution gallery to support exploration of alternate solutions. We first examined the applicability of the recommendations by investigating how well they had been supported in previous interactive optimisation tools. We then evaluated the recommendations in the context of the vehicle routing problem with time windows (VRPTW). To do so we built a sophisticated interactive visual system for solving VRPTW that was informed by the recommendations. Ten participants then used this system to solve a variety of routing problems. We report on participant comments and interaction patterns with the tool. These showed the tool was regarded as highly usable and the results generally supported the usefulness of the underlying recommendations.

# Summary. An optional shortened abstract.
summary:

tags:
  - tool
  - web based
  - minizinc

# Display this page in the Featured widget?
featured: false


url_pdf: https://arxiv.org/pdf/2009.03163
# url_code: https://github.com/ToyotaResearchInstitute/materialnet
# url_dataset: https://github.com/wowchemy/wowchemy-hugo-themes
url_poster:
# url_project: https://joss.theoj.org/papers/10.21105/joss.02105
# url_slides: https//data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pdf
# url_source: https://data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pptx
url_video: https://youtu.be/nT55ocI-73o
# Custom links (uncomment lines below)
links:
  # - name: Demo Application
  #   url: https://maps.matr.io/

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
  - minizinc
# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
