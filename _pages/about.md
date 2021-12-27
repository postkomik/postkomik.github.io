---
layout: page
title: About us
permalink: /about
comments: false
image: 
imageshadow: true
---

 Terimakasih sudah mau berkounjung di blog yang masih kecil dan juga jangan lupa untuk follow ya agar tidak ketinggalan informasi updatenya

Postkomik adalah Blog informasi dunia maya yang mudah mudahan memberikan manfaat buat kalian semua dan jangan lupa untuk meninggalkan komentar saat komentar di buka yah 

mengenai blog ini awal nya sih hanya iseng dan hobi untuk latihan menulis karna semakin maju nya duni digital kita ga bisa ketinggalan gitu aja apalagi dalam duani seni menulis nah adanya blogger memberikan fasilitas blog maka ane manfaatkan untuk menyalurkan hobi dan bakat walau masih malas malasan untuk mengapresiaknnya
https://stackoverflow.com/questions/28156020/in-jekyll-how-can-i-get-all-pages-with-a-specific-tag-and-limit-the-results-to
#list limt
    {% assign counter = '0' %}
    {% for page in site.pages %}
    {% for category in page.category %}
    {% if category == "genre" and counter < '5' %}
    {% capture counter %}{{ counter | plus:'1' }}{% endcapture %}
<li>{{page.title}}({{ counter }})</li>


{% endif %}
{% endfor %}
{% endfor %}


#list tanpa konter

    {% assign counter = '0' %}
    {% for page in site.pages %}
    {% for category in page.category %}
    {% if category == "genre" and counter < '5' %}
    {% capture counter %}{{ counter | plus:'1' }}{% endcapture %}
<li>{{page.title}}</li>


{% endif %}
{% endfor %}
{% endfor %}

#List page

<ul>
{% for page in site.pages %}
<li>
<a href="{{site.baseurl}}{{page.url}}">{{page.title}}</a>
</li>
{% endfor %}
</ul>

#List genre

{% for page in site.pages %}
  {% if page.category contains 'genre' %}
  <li>{{ page.title }}</li>
  {% endif %}
{% endfor %}

#render genre

{% for page in site.pages %}
  {% if page.category contains 'genre' %}
  <li>{{ page.title }}</li>
  {% endif %}
{% endfor %}

{% assign counter = '0' %}
{% for page in site.pages %}
{% for type in page.type %}
{% if type == "Manga" and counter < '5' %}
{% capture counter %}{{ counter | plus:'1' }}{% endcapture %}
<li>{{page.title}}</li>
{% endif %}
{% endfor %}
{% endfor %}