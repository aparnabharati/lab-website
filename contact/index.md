---
title: Contact
nav:
  order: 5
  tooltip: 
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Individuals interested in the research conducted at the SeeVi Lab are encouraged to contact Dr. Aparna Bharati. The lab is based in the Department of Computer Science at Colorado State University and welcomes inquiries from prospective PhD and master's students, as well as CSU undergraduates seeking research experience.

Prospective graduate students should apply through the Department of Computer Science and may mention Dr. Bharati's name in their application. When reaching out by email, please include a brief description of your background and relevant experience, the research topics that interest you most, and what draws you to work in computer vision and media forensics.

{%
  include button.html
  type="email"
  text="aparna.bharati@colostate.edu"
  link="aparna.bharati@colostate.edu"
%}
<!-- 
{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps"
%}
-->

{% comment %}
  placeholder photos and filler text, disabled until real content is ready

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
{% endcomment %}
