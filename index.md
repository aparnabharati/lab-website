---
---

# SeeVi Lab Website

The SeeVi Lab, under the direction of Dr. Aparna Bharati, is dedicated to advancing the frontiers of computer vision research. Our mission is to design computational methods that enable machines to analyze, interpret, and reason about visual information with accuracy and robustness. By bridging fundamental theory with real-world applications, our work addresses challenges that lie at the intersection of artificial intelligence, imaging sciences, and human-centered technologies.

The lab fosters a vibrant and collaborative research environment, currently comprising three doctoral students and two master’s students. Together, we pursue innovative projects that not only contribute to the scientific foundations of visual computing but also explore its transformative potential in diverse domains. Through rigorous inquiry, creativity, and cross-disciplinary collaboration, the SeeVi Lab seeks to develop impactful solutions that expand the capabilities of machine perception and advance the state of the field. 

{% include section.html %}

## Highlights

{% capture text %}

Our peer-reviewed publications span image forensics, provenance analysis, and image protection, including work on transformation-aware embeddings, fast large-scale image retrieval, and defending images against AI-based editing.

{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Led by Dr. Aparna Bharati, our doctoral and master's students bring expertise in visual understanding and machine learning, reflected in their publications, conference presentations, and collaborative projects.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="team"
  title="Our Team"
  text=text
%}

{% include section.html %}

## Recent News

{% include timeline.html data=site.data.news limit=3 %}

<div class="timeline-more">
  {%
    include button.html
    link="news"
    text="See more"
    icon="fa-solid fa-arrow-right"
  %}
</div>
