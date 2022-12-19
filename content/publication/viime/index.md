---
title: "Viime: Visualization and Integration of Metabolomics Experiments"

authors:
  - Roni Choudhury
  - Jon Beezley
  - Brandon Davis
  - Jared Tomeck
  - sam
  - Lilian Golzarri-Arroyo
  - Jun Wan
  - Daniel Raftery
  - Jeff Baumes
  - Thomas M. O'Connell

date: 2020-10-01
doi: "10.21105/joss.02410"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: In Journal of Open Source Software
publication_short: JOSS

abstract: |2-
   Metabolomics involves the comprehensive measurement of metabolites from a biological system. The resulting metabolite profiles are influenced by genetics, lifestyle, biological stresses, disease, diet and the environment and therefore provides a more holistic biological readout of the pathological condition of the organism (Beger et al., 2016; Wishart, 2016). The challenge for metabolomics is that no single analytical platform can provide a truly comprehensive coverage of the metabolome. The most commonly used platforms are based on mass-spectrometry (MS) and nuclear magnetic resonance (NMR). Investigators are increasingly using both methods to increase the metabolite coverage. The challenge for this type of multi-platform approach is that the data structure may be very different in these two platforms. For example, NMR data may be reported as a list of spectral features, e.g., bins or peaks with arbitrary intensity units or more directly with named metabolites reported in concentration units ranging from micromolar to millimolar. Some MS approaches can also provide data in the form of identified metabolite concentrations, but given the superior sensitivity of MS, the concentrations can be several orders of magnitude lower than for NMR. Other MS approaches yield data in the form of arbitrary response units where the dynamic range can be more than 6 orders of magnitude. Importantly, the variability and reproducibility of the data may differ across platforms. Given the diversity of data structures (i.e., magnitude and dynamic range) integrating the data from multiple platforms can be challenging. This often leads investigators to analyze the datasets separately, which prevents the observation of potentially interesting relationships and correlations between metabolites detected on different platforms. Viime (VIsualization and Integration of Metabolomics Experiments) is an open-source, web-based application designed to integrate metabolomics data from multiple platforms. The workflow of Viime for data integration and visualization is shown in Figure 1.

# Summary. An optional shortened abstract.
summary:

tags:
  - tool
  - Web Based

# Display this page in the Featured widget?
featured: false


url_pdf: https://www.theoj.org/joss-papers/joss.02410/10.21105.joss.02410.pdf
url_code: https://github.com/girder/viime
# url_dataset: https://github.com/wowchemy/wowchemy-hugo-themes
url_poster:
url_project: https://www.viime.org/
# url_slides: https//data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pdf
# url_source: https://data.jku-vds-lab.at/papers/2013_infovis_lineup_talk.pptx
# url_video: https://youtu.be/iFqCBI4T8ks
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
  # - lineup
# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
