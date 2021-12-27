---
layout: page
title: "Martial Arts"
date: 2021-12-22 13:05:06
subtitle: Martial Arts
genre-name: martial-arts
category: genre
author: Postkomik
description: baca komik terbaru genre martial-arts di postkomik
permalink: /genre/martial-arts
---

{% for page in site.pages %}
{% if page.genre contains 'martial-arts' %}

<div class="bs styletere blogBox moreBox" style="display: none;">
    <div class="bsx">
        <a href="{{ site.url }}{{ site.baseurl }}/komik/{{ page.category }}/" title="{{ page.subtitle }}">
            <div class="limit">
                <div class="ply"></div>
                <span class="{{ page.type }}"></span> <span class="colored">{{ page.type }}</span> <img src="{{ page.image }}" class="ts-post-image wp-post-image attachment-medium size-medium" loading="lazy">
            </div>
        </a>
        <div class="bigor">
            <div class="tt">
                <a href="{{ site.baseurl }}/komik/{{ page.category }}/" title="{{ page.subtitle }}">{{ page.subtitle }}</a>
            </div>
            <div class="adds">
				{% for post in site.posts %}
				{% if post.category contains page.category %}
                <a href="{{ post.url | prepend: site.baseurl }}" title="{{ post.subtitle }}{{ post.title }}">
                <div class="epxs">{{ post.title }}</div>
                </a>
                {% endif %}
				{% endfor %} 
            </div>
        </div>
    </div>
</div>

{% endif %}
{% endfor %}
<div id="loadMore" style="">
    <a href="#">Load More</a>
</div>
<script async="async" src="{{ site.baseurl }}/assets/js/loaadmore.js" type="text/javascript"></script>