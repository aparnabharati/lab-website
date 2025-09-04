---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

The SeeVi Lab is driven by the dedication and creativity of its research team, working under the guidance of Dr. Aparna Bharati. Each member of the lab contributes unique expertise and perspectives, with accomplishments spanning peer-reviewed publications, conference presentations, and collaborative projects in leading areas of computer vision. Their ongoing research explores a range of topics at the intersection of visual understanding, machine learning, and real-world applications, reflecting the lab’s commitment to advancing both fundamental science and impactful technology.

{% include section.html %}

{% include list.html data="members" component="portrait" filter="role == 'pi'" %}
<br/>
{% include list.html data="members" component="portrait" filter="role != 'pi'" %}

{% include section.html background="images/background.jpg" dark=true %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{% include section.html %}

{% capture content %}

{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}
{% include figure.html image="images/photo.jpg" %}

{% endcapture %}

{% include grid.html style="square" content=content %}
