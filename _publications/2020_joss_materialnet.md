---
# The quotes make the : possible, otherwise you can do it without quotes
title: "MaterialNet: A web-based graph explorer for materials science datas"
key: 2020_joss_materialnet
# paper | preprint | poster
type: paper
non-caleydo-paper: true
# optional url for a different site; defaults to data.caleydo.org
paper_content_url: https://joss.theoj.org/papers/10.21105/joss.02105.pdf


# The shortname is used for auto-generated titels
shortname: MaterialNet
# add a 2:1 aspect ratio (e.g., width: 400px, height: 200px) to the folder /assets/images/papers/
image: 2020_joss_materialnet
# add a 2:1 aspect ratio teaser figure (e.g., width: 1200px, height: 600px) to the folder /assets/images/papers/
image_large: 2020_joss_materialnet.png

# Authors in the "database" can be used with just the key (lastname). Others can be written properly.
authors:
- Roni Choudhury
- Muratahan Aykol
- gratzl
- Joseph Montoya
- Jens Hummelshøj

journal-short: Journal of Open Source Software
year: 2020

bibentry: article
bib:
  journal: Journal of Open Source Software
  booktitle: 
  editor: 
  publisher:
  address: 
  doi: https://doi.org/10.21105/joss.02105
  url:
  volume: 
  number: 
  pages: 
  month: 

# Add things like "Best Paper Award at InfoVis 2099, selected out of 4000 submissions"
award:

# Use if this paper is linked to an internal project. This will link to the project site
# project: lineup

# Use this if you have an external project website
external-project: https://joss.theoj.org/papers/10.21105/joss.02105

# The reference to the video entry
# video: 2019_sage_infovis_taggle_video
# The reference to the preview video entry
#preview-video:

# the prerint
# pdf: 2019_sage_infovis_taggle.pdf
# A supplement PDF
#supplement: 2017_preprint_taggle_supplement.pdf

# Extra supplements, such as talk slides, data sets, etc.
supplements:
#- name: General UpSet
#  # use link instead of abslink if you want to link to the master directory
#  abslink: http://vials.io/talk/
#  # defaults to a download icon, use this if you want a link-out icon
#  linksym: true

# Link to the repository where the code is hostet
code: https://github.com/ToyotaResearchInstitute/materialnet

abstract: "
<p>Materials science research deals primarily with understanding the relationship between the structure and properties of materials. With recent advances in computational power and automation of simulation techniques, material structure and property databases have emerged (Curtarolo et al., 2012; Jain et al., 2013; Kirklin et al., 2015), allowing a more data-driven approach to carrying out materials research. Recent studies have demonstrated that 
representing these databases as material networks can enable extraction of new materials knowledge (Hegde, Aykol, Kirklin, & Wolverton, 2018; Isayev et al., 2015) or help tackle challenges like  predictive synthesis (Aykol, Hegde, et al., 2019) that require relational information between materials. Materials databases have become very popular because they enable their users to do rapid prototyping by searching near globally for figures of merit for their target application. However, both scientists and engineers have little in the way of visualization of aggregates from these databases, that is, intuitive layouts 
that help understand which materials are related and how they are related. The need for a tool that does this is particularly crucial in materials science because properties like phase stability and crystal structure similarity are themselves functions of a material dataset, rather than of individual materials.
</p><p>
In these new approaches, materials can be represented with a graph structure that has nodes standing in for materials, and links between them encoding the appropriate relationships of interest, such as thermodynamic co-existence, chemical similarity or co-occurrence in text, to name a few. MaterialNet is an open-source web application designed to explore the topology of such material networks, while also displaying information about each material, highlighting its immediate neighborhood within the graph, and offering several auxiliary 
tools to help drill down into the details contained within the dataset. Such graph-encoded datasets for a collection of materials can become large and complex: for example, the materials stability network exemplified in this paper contains on the order of 20,000 materials, with on the order of 200,000 links between them (Aykol, Hegde, et al., 2019). Large graphs of this sort demand 
interactive visualization, empowering materials researchers to explore the data, a key user requirement highlighted by field experts (Aykol, Hummelshøj, et al., 2019). To the best of our knowledge, there exists no other interactive visualization tool for materials networks. MaterialNet provides interactive “maps” of the materials space exposed in large material databases, helping researchers navigate this space with a particular research task in mind, as showcased in Figure 1. 
A live deployment of MaterialNet can be accessed at http://maps.matr.io/.
</p>"

# After the --- you can put information that you want to appear on the website using markdown formatting or HTML. A good example are acknowledgements, extra references, an erratum, etc.
---
