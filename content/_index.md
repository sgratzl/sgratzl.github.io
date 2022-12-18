---
# Leave the homepage title empty to use the site title
title:
date: 2022-12-17
type: landing

sections:
  # - block: hero
  #   content:
  #     title: Samuel Gratzl
  #     image:
  #       filename: hero-academic.png
  #     text: |-
  #       TODO
  #   design:
  #     background:
  #       gradient_end: '#1976d2'
  #       gradient_start: '#004ba0'
  #       text_color_light: true
  - block: about.avatar
    id: about
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: sam
      # Override your bio text from `authors/sam/_index.md`?
      text:
  - block: features
    content:
      title: Skills
      items:
        - name: R
          description: TODO
          icon: r-project
          icon_pack: fab
        - name: Python
          description: TODO
          icon: chart-line
          icon_pack: fas
        - name: TypeScript/JavaScript
          description: TODO
          icon: js
          icon_pack: fab
  - block: experience
    content:
      title: Experience
      # Date format for experience
      #   Refer to https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Experiences.
      #   Add/remove as many `experience` items below as you like.
      #   Required fields are `title`, `company`, and `date_start`.
      #   Leave `date_end` empty if it's your current employer.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        - title: Principal Research Engineer
          company: Truveta Inc.
          company_url: "https://truveta.com"
          # company_logo: org-gc
          location: Remote
          date_start: "2021-08-01"
          date_end: ""
          description: |2-
            * Being part of the research team analyzing healthcare data and providing feedback on current product developments.
            * Curated datasets based on the internal Truveta Platform.
            * Developed processes and templates for effective healthcare studies, speeding up our study creation
            * Created dashboards for Vaccine Effectiveness and Adverse Events of COVID-19 Vaccines
            * Identified data quality issues and supported clinical informatics in tracking them down.
            * Initiated and specified product features for advanced researcher experience.
        - title: Research Software Engineer Contractor
          company: Carnegie Mellon University
          company_url: "https://delphi.cmu.edu"
          # company_logo: org-gc
          location: Remote
          date_start: "2020-07-01"
          date_end: "2021-09-01"
          description: |2-
            * Main front end developer of COVIDcast, a project by the Delphi Group collecting, publishing, and visualizing COVID-19 data..
            * Converted the front end from a research prototype to a production-ready product.
            * Enforced code quality and best practices throughout the project.
            * Improved usability, maintainability, and performance of COVIDcast.
            * Designed and implemented new views such as the National Survey Results View, the most popular COVIDcast view.
            * Designed and implemented a new version of the COVIDcast API with increased maintainability, scalability, and robustness.
            * Developed and deployed a new deployment infrastructure for the Delphi group.
        - title: Freelance Data Exploration and Visualization Consultant
          company: Self Employed
          company_url: ""
          # company_logo: org-x
          location: Linz, Austria
          date_start: "2016-10-01"
          date_end: "2022-03-01"
          description: |2-
            * I specialize in the design and implementation of customized visual exploration web applications.
            * In close collaboration with the customer, I develop specialized visual exploration platforms that not only allow the customer to answer their questions but even those they haven't thought about yet.}
            * In addition, I provide freelance service for integrating my open-source libraries, such as \href[LinUp-lite](https://lineup-lite.js.org), [LineUp.js](https://lineup.js.org), or [UpSet.js](https://upset.js.org)
        - title: Co-founder and Chief Technology Officer (CTO)
          company: datavisyn GmbH
          company_url: "https://datavisyn.io"
          # company_logo: org-x
          location: Linz, Austria
          date_start: "2016-11-01"
          date_end: "2019-04-01"
          description: |2-
            * Designed the architecture and implemented the Target Discovery Platform (TDP) with a focus on high extensibility and customizability. TDP is the foundation of all products of datavisyn and one of the three pillars of its business model.
            * Built and deployed overall CI/CD infrastructure both in-house and on-premise focusing on high-availability, fault tolerance, and low maintenance.
            * Lead on-site customer workshops focusing on requirements engineering, customer training, and initial prototype implementation.
            * Improved project requirements to the satisfaction of the customer.
            * Was the product owner for two agile customer projects which ended both in time and budget with highest customer satisfaction.
            * Implemented critical features in all (4+) customer projects of datavisyn.
            * Made customers happy through continuous customer support via Slack and quick response times.
            * Lead, trained, and mentored the three junior developers.
            * Did code reviews, introduced style guidelines, and introduced continuous testing to improve overall code quality.
            * Ensured the head start of the company over competitors through integrating new technologies and frameworks.
    design:
      columns: "2"
  - block: accomplishments
    content:
      # Note: `&shy;` is used to add a 'soft' hyphen in a long heading.
      title: "Accomplish&shy;ments"
      subtitle:
      # Date format: https://wowchemy.com/docs/customization/#date-format
      date_format: Jan 2006
      # Accomplishments.
      #   Add/remove as many `item` blocks below as you like.
      #   `title`, `organization`, and `date_start` are the required parameters.
      #   Leave other parameters empty if not required.
      #   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
      items:
        # TODO scholarships?
        - title: Promotio sub auspiciis Praesidentis rei publicae
          description: PhD graduation with highest possible honors in Austria
          date_start: 2018-04-01
          organization: Ministry for Science and Research of Austria, Vienna, Austria
          # organization_url: https://jku.at
        - title: Best Paper Award
          description: TODO
          date_start: 2017-10-01
          organization: IEEE Information Visualization (InfoVis'17), Phoenix, USA
        - title: Honorable Mention Best Paper Award
          description: TODO
          date_start: 2016-05-01
          organization: EG/VGTC Conference on Visualization (EuroVis'16), Groningen, NL
        - title: Honorable Mention Best Poster Award
          description: TODO
          date_start: 2015-10-01
          organization: IEEE Information Visualization (InfoVis'15), Chicago, USA
        - title: Honorable Mention Best Paper Award
          description: TODO
          date_start: 2014-10-01
          organization: IEEE Information Visualization (InfoVis'14), Paris, France
        - title: Best Paper Award
          description: TODO
          date_start: 2013-10-01
          organization: IEEE Information Visualization (InfoVis'13), Atlanta, USA

        # - certificate_url: https://www.coursera.org
        #   date_end: ''
        #   date_start: '2021-01-25'
        #   description: ''
        #   organization: Coursera
        #   organization_url: https://www.coursera.org
        #   title: Neural Networks and Deep Learning
        #   url: ''
        # - certificate_url: https://www.edx.org
        #   date_end: ''
        #   date_start: '2021-01-01'
        #   description: Formulated informed blockchain models, hypotheses, and use cases.
        #   organization: edX
        #   organization_url: https://www.edx.org
        #   title: Blockchain Fundamentals
        #   url: https://www.edx.org/professional-certificate/uc-berkeleyx-blockchain-fundamentals

    design:
      columns: "2"
  # - block: collection
  #   id: posts
  #   content:
  #     title: Recent Posts
  #     subtitle: ''
  #     text: ''
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       folders:
  #         - post
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: compact
  #     columns: '2'
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: "*"
        - name: Open Source
          tag: Open Source
        - name: JavaScript
          tag: JavaScript
        - name: R
          tag: R
        - name: Python
          tag: Python
        # - name: Deep Learning
        #   tag: Deep Learning
        # - name: Other
        #   tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: "1"
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  # design:
  #   columns: '1'
  - block: portfolio
    id: research
    content:
      title: Research
      filters:
        folders:
          - research
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: "*"
        - name: Visualization Technique
        #   tag: Deep Learning
        # - name: Other
        #   tag: Demo
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: "1"
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
  # - block: markdown
  #   content:
  #     title: Gallery
  #     subtitle: ''
  #     text: |-
  #       {{< gallery album="demo" >}}
  # design:
  #   columns: '1'
  - block: collection
    id: featured
    content:
      title: Featured Publications
      filters:
        folders:
          - publication
        featured_only: true
    design:
      columns: "2"
      view: card
  - block: collection
    content:
      title: Recent Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: "2"
      view: citation
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     columns: '2'
  #     view: compact
  # - block: tag_cloud
  #   content:
  #     title: Popular Topics
  #   design:
  #     columns: '2'
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      # text: |-
      #   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis ut magna et, vehicula efficitur enim.
      # Contact (add or remove contact options as necessary)
      email: contact@sgratzl.com
      # phone: 888 888 88 88
      # appointment_url: 'https://calendly.com'
      address:
        street:
        city: Marlton
        region: NJ
        postcode: "08053"
        country: United States
        country_code: US
      # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      # office_hours:
      #   - 'Monday 10:00 to 13:00'
      #   - 'Wednesday 09:00 to 10:00'
      contact_links:
        # - icon: twitter
        #   icon_pack: fab
        #   name: DM Me
        #   link: 'https://twitter.com/Twitter'
        # - icon: skype
        #   icon_pack: fab
        #   name: Skype Me
        #   link: 'skype:echo123?call'
        # - icon: video
        #   icon_pack: fas
        #   name: Zoom Me
        #   link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: formspree
        formspree:
          id: xyyagknp
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: "2"
---
