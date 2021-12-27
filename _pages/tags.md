---
layout: page
title: tag
tag: data
permalink: /tags
---

#list limt
    {% assign counter = '0' %}
    {% for page in site.pages %}
    {% for tag in page.tag %}
    {% if tag == "action" and counter < '5' %}
    {% capture counter %}{{ counter | plus:'1' }}{% endcapture %}
<li>{{page.title}}({{ counter }})</li>


{% endif %}
{% endfor %}
{% endfor %}



