---
---

# SeeVi Lab Website

The SeeVi Lab, under the direction of Dr. Aparna Bharati, is dedicated to advancing the frontiers of computer vision research. Our mission is to design computational methods that enable machines to analyze, interpret, and reason about visual information with accuracy and robustness. By bridging fundamental theory with real-world applications, our work addresses challenges that lie at the intersection of artificial intelligence, imaging sciences, and human-centered technologies.

The lab fosters a vibrant and collaborative research environment, currently comprising three doctoral students and two master’s students. Together, we pursue innovative projects that not only contribute to the scientific foundations of visual computing but also explore its transformative potential in diverse domains. Through rigorous inquiry, creativity, and cross-disciplinary collaboration, the SeeVi Lab seeks to develop impactful solutions that expand the capabilities of machine perception and advance the state of the field.

{% include section.html %}

## Highlights

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

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

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="projects"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

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
