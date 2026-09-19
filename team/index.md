---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

The SeeVi Lab is driven by the dedication and creativity of its research team, working under the guidance of Dr. Aparna Bharati. Each member of the lab contributes unique expertise and perspectives, with accomplishments spanning peer-reviewed publications, conference presentations, and collaborative projects in leading areas of computer vision. Their ongoing research explores a range of topics at the intersection of visual understanding, machine learning, and real-world applications, reflecting the lab's commitment to advancing both fundamental science and impactful technology.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="group == 'pi'" %}

{% include section.html %}

## PhD Students

{% include list.html data="members" component="portrait" filter="group == 'phd'" %}

{% include section.html %}

{% comment %}
Masters Students - hidden until the lab has MS students again.
To restore, move the two lines below outside this comment block
and set `group: masters` on the relevant files in _members/.

## Masters Students

{% include list.html data="members" component="portrait" filter="group == 'masters'" %}
{% endcomment %}

## Undergraduate Students

{% include list.html data="members" component="portrait" filter="group == 'undergrad'" %}

{% include section.html %}

{%
  include figure.html
  image="images/lab-social.jpg"
  caption="The SeeVi Lab outside the office."
%}

{% include section.html %}

## Alumni

- Simon Chen
- Swetcha Reddy Tukkani
