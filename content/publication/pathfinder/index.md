---
title: "Pathfinder: Visual Analysis of Paths in Graphs"

authors:
  - Christian Partl
  - sam
  - Marc Streit
  - Anne Mai Wassermann
  - Hanspeter Pfizer
  - Dieter Schmalstieg
  - Alexander Lex

date: 2016-10-01
doi: "10.1111/cgf.12883"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In Computer Graphics Forum (EuroVis '16)
publication_short: EuroVis '16

abstract: |2-
  The analysis of paths in graphs is highly relevant in many domains. Typically, path-related tasks are performed in node-link layouts. Unfortunately, graph layouts often do not scale to the size of many real world networks. Also, many networks are multivariate, i.e., contain rich attribute sets associated with the nodes and edges. These attributes are often critical in judging paths, but directly visualizing attributes in a graph layout exacerbates the scalability problem. In this paper, we present visual analysis solutions dedicated to path-related tasks in large and highly multivariate graphs. We show that by focusing on paths, we can address the scalability problem of multivariate graph visualization, equipping analysts with a powerful tool to explore large graphs. We introduce Pathfinder, a technique that provides visual methods to query paths, while considering various constraints. The resulting set of paths is visualized in both a ranked list and as a node-link diagram. For the paths in the list, we display rich attribute data associated with nodes and edges, and the node-link diagram provides topological context. The paths can be ranked based on topological properties, such as path length or average node degree, and scores derived from attribute data. Pathfinder is designed to scale to graphs with tens of thousands of nodes and edges by employing strategies such as incremental query results. We demonstrate Pathfinder's fitness for use in scenarios with data from a coauthor network and biological pathways.

# Summary. An optional shortened abstract.
# summary:

tags:
  - Visualization Technique
  - Web Based
  - network
  - graph
  - search

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
links:
  - name: Supplementary Material
    url: https://data.jku-vds-lab.at/papers/2016_eurovis_pathfinder_supplement.pdf

url_pdf: https://data.jku-vds-lab.at/papers/2016_eurovis_pathfinder.pdf
url_code: https://github.com/Caleydo/pathfinder/
# url_dataset: https://github.com/wowchemy/wowchemy-hugo-themes
url_poster:
url_project: https://pathfinder.caleydoapp.org
# url_slides: https//data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pdf
# url_source: https://data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pptx
url_video: https://youtu.be/aZF7AC8aNXo

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

Christian Partl, Samuel Gratzl, Marc Streit, Anne Mai Wassermann, Hanspeter Pfister, Dieter Schmalstieg, Alexander Lex <br>
**Pathfinder: Visual Analysis of Paths in Graphs** <br>
Computer Graphics Forum (EuroVis '16), 35(3): 71--80, doi:10.1111/cgf.12883, 2016.

**<i class="fa fa-award"></i> EuroVis 2016 Honorable Mention Award**

# Acknowledgements

This work was co-funded by the European Union’s Seventh Framework Programme (600641, GoSmart: A Generic Open-end Simulation Environment for Minimally Invasive Cancer Treatment), the Austrian Research Promotion Agency (840232), the Austrian Science Fund (P27975-NBL), and the US National Institutes of Health (U01 CA198935).