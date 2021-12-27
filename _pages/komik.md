---
layout: main
title: Daftar List Komik
permalink: /komik
comments: false
image:
imageshadow: true
---

<div class="wrapper">
<div class="postbody">
<div class="bixbox">
<div class="releases">
       <h2>Daftar Manga Komik</h2><a class="vl" href="{{ site.baseurl }}/">View All</a>
      </div>
       <div class="listupd">
       {% for page in site.pages %}
       {% if page.label contains 'Series' %}
       <div class="bs styletere blogBox moreBox" style="display: none;">
       <div class="bsx">
       <a href="{{ site.url }}{{ site.baseurl }}/komik/{{ page.category }}" title="{{ page.subtitle }}">
       <div class="limit">
       <div class="ply"></div>
       <span class="type Manhwa"></span> <span class="colored"><i class="fas fa-palette"></i> Manga</span>
       <img src="{{ page.image }}" class="ts-post-image wp-post-image attachment-medium size-medium" loading="lazy">

</div>
       </a>
       <div class="bigor">
       <div class="tt">
       <a href="{{ site.url }}{{ site.baseurl }}/komik/{{ page.category }}" title="{{ page.subtitle }}">{{ page.subtitle }}</a>
       </div>

<div class="adds">
       {% for post in site.posts %}
       {% if post.category contains page.category %}
       <a href="{{ post.url | prepend: site.baseurl }}" title="{{ post.subtitle }} {{ post.title }}">
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
       </div>

</div>
    </div>
  {% include sidebar.html %}
</div>

<script async="async" src="{{ site.baseurl }}/assets/js/loaadmore.js" type="text/javascript"></script>
