---
title: "MaterialNet: A web-based graph explorer for materials science data"

authors:
  - Roni Choudhury
  - Muratahan Aykol
  - sam
  - Joseph Montoya
  - Jens Hummelshøj

date: 2020-10-01
doi: "10.21105/joss.02105"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In Journal of Open Source Software
publication_short: JOSS

abstract: |2-
  Materials science research deals primarily with understanding the relationship between the structure and properties of materials. With recent advances in computational power and automation of simulation techniques, material structure and property databases have emerged (Curtarolo et al., 2012; Jain et al., 2013; Kirklin et al., 2015), allowing a more data-driven approach to carrying out materials research. Recent studies have demonstrated that representing these databases as material networks can enable extraction of new materials knowledge (Hegde, Aykol, Kirklin, & Wolverton, 2018; Isayev et al., 2015) or help tackle challenges like  predictive synthesis (Aykol, Hegde, et al., 2019) that require relational information between materials. Materials databases have become very popular because they enable their users to do rapid prototyping by searching near globally for figures of merit for their target application. However, both scientists and engineers have little in the way of visualization of aggregates from these databases, that is, intuitive layouts that help understand which materials are related and how they are related. The need for a tool that does this is particularly crucial in materials science because properties like phase stability and crystal structure similarity are themselves functions of a material dataset, rather than of individual materials.

  In these new approaches, materials can be represented with a graph structure that has nodes standing in for materials, and links between them encoding the appropriate relationships of interest, such as thermodynamic co-existence, chemical similarity or co-occurrence in text, to name a few. MaterialNet is an open-source web application designed to explore the topology of such material networks, while also displaying information about each material, highlighting its immediate neighborhood within the graph, and offering several auxiliary
  tools to help drill down into the details contained within the dataset. Such graph-encoded datasets for a collection of materials can become large and complex: for example, the materials stability network exemplified in this paper contains on the order of 20,000 materials, with on the order of 200,000 links between them (Aykol, Hegde, et al., 2019). Large graphs of this sort demand
  interactive visualization, empowering materials researchers to explore the data, a key user requirement highlighted by field experts (Aykol, Hummelshøj, et al., 2019). To the best of our knowledge, there exists no other interactive visualization tool for materials networks. MaterialNet provides interactive “maps” of the materials space exposed in large material databases, helping researchers navigate this space with a particular research task in mind, as showcased in Figure 1.
  A live deployment of MaterialNet can be accessed at https://maps.matr.io/.

# Summary. An optional shortened abstract.
summary:

tags:
  - tool
  - Web Based

# Display this page in the Featured widget?
featured: false


url_pdf: https://joss.theoj.org/papers/10.21105/joss.02105.pdf
url_code: https://github.com/ToyotaResearchInstitute/materialnet
# url_dataset: https://github.com/wowchemy/wowchemy-hugo-themes
url_poster:
url_project: https://joss.theoj.org/papers/10.21105/joss.02105
# url_slides: https//data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pdf
# url_source: https://data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pptx
# url_video: https://youtu.be/iFqCBI4T8ks
# Custom links (uncomment lines below)
links:
  - name: Demo Application
    url: https://maps.matr.io/

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
