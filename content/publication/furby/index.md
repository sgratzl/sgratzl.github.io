---
title: "Furby: Fuzzy Force-Directed Bicluster Visualization"

# Authors
# If you created a profile for a user (e.g. the default `sam` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
- Marc Streit
- sam
- Michael Gillhofer
- Andreas Mayr
- Andreas Mitterecker
- Sepp Hochreiter

date: '2014-10-01'
doi: '10.1186/1471-2105-15-S6-S4'

# Schedule page publish date (NOT publication's date).
# publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['2']

# Publication name and optional abbreviated publication name.
publication: In BMC Bioinformatics
publication_short: In BMC

abstract: "<p><b>Background:</b> Cluster analysis is widely used to discover patterns in multi-dimensional data. Clustered heatmaps are the standard technique for visualizing one-way and two-way clustering results. In clustered heatmaps, rows and/or columns are reordered, resulting in a representation that shows the clusters as contiguous blocks. However, for biclustering results, where clusters can overlap, it is not possible to reorder the matrix in this way without duplicating rows and/or columns.</p>
 <p><b>Results:</b> We present Furby, an interactive visualization technique for analyzing biclustering results. Our contribution is twofold. First, the technique provides an overview of a biclustering result, showing the actual data that forms the individual clusters together with the information which rows and columns they share. Second, for fuzzy clustering results, the proposed technique additionally enables analysts to interactively set the thresholds that transform the fuzzy (soft) clustering into hard clusters that can then be investigated using heatmaps or bar charts. Changes in the membership value thresholds are immediately reflected in the visualization. We demonstrate the value of Furby by loading biclustering results applied to a multi-tissue dataset into the visualization.</p>
<p><b>Conclusions:</b> The proposed tool allows analysts to assess the overall quality of a biclustering result. Based on this high-level overview, analysts can then interactively explore the individual biclusters in detail. This novel way of handling fuzzy clustering results also supports analysts in finding the optimal thresholds that lead to the best clusters.</p>"

# Summary. An optional shortened abstract.
summary: TODO

tags:
 - Visualization Technique
 - BiCluster Visualization

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)

url_pdf: https://data.jku-vds-lab.at/papers/2014_bmc_furby.pdf
url_code: https://github.com/Caleydo/org.caleydo.view.furby
# url_dataset: https://github.com/wowchemy/wowchemy-hugo-themes
# url_poster:
# url_project: https://jku-vds-lab.at/tools/lineup/
# url_slides: https//data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pdf
# url_source: https://github.com/wowchemy/wowchemy-hugo-themes
url_video: https://www.youtube.com/watch?v=yHjpHfo5C4U

# Featured image
# To use, add an image named `featured.jpg/png` to your pages folder.
image:
  # caption: BiCluster Visualization Teaser Image
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - lineup

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

# Citation

Marc Streit, Samuel Gratzl, Michael Gillhofer, Andreas Mayr, Andreas Mitterecker, Sepp Hochreiter <br>
**Furby: Fuzzy Force-Directed Bicluster Visualization** <br>
BMC Bioinformatics, 15(Suppl 6), p. S4, 15(Suppl 6): S4, [doi:10.1186/1471-2105-15-S6-S4](https://dx.doi.org/10.1186/1471-2105-15-S6-S4), 2014.

# Datasets

The following projects contain public demo data, which can be used to test Furby. But everyone is welcome to load his/her own data, via the `Load BiCluster Results` tab within the Caleydo Startup-Wizard.

- <i class="fa fa-download"></i>&nbsp;[Caleydo-Project (CAL)](https://data.jku-vds-lab.at/papers/2014_bmc_furby_multi_tissue_fabia20.cal) containing Microarray data from Broad Institute "Cancer Program Data Sets" which was produced by [Su et al. 2002](https://www.broadinstitute.org/cgi-bin/cancer/datasets.cgi). It consists of 102 samples and 5565 genes as was clustered using the FABIA algorithm.
- <i class="fa fa-download"></i>&nbsp;[Zip package (ZIP)](https://data.jku-vds-lab.at/papers/2014_bmc_furby_multi_tissue_fabia20.zip) containing the exported CSV-files using to create the previous Caleydo-Project

# Utilities

We provide two helper R-Scripts, which simplify exporting R bicluster results in the correct format.

- <i class="fa fa-download"></i>&nbsp;[R-Script](https://data.jku-vds-lab.at/papers/2014_bmc_furby_export_fabia.R) for exporting FABIA results, generated via the [fabia](https://www.bioconductor.org/packages/2.12/bioc/html/fabia.html) bioconductor package.
- <i class="fa fa-download"></i>&nbsp;[R-Script](https://data.jku-vds-lab.at/papers/2014_bmc_furby_export_biclust.R) for exporting result from the [biclust](https://cran.r-project.org/web/packages/biclust/index.html) CRAN package.
