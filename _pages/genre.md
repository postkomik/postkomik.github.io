---
layout: page
title: Genre List
permalink: /genre
comments: false
image: 
description: daftar genre manga manhua dan mahwa
---



<div class="bixbox bxcl epcheck">
    <div class="releases">
        <h2> {{ page.title }} Manga Komik</h2>
    </div>
    <div class="eplister" id="chapterlist">
   <ul>
        {% for page in site.pages %}
        {% if page.category contains 'genre' %}			
            <li data-num="1.1">
                <div class="chbox">
                    <div class="eph-num">
                        <a href="{{ page.url }}/">
                            <span class="chapternum">{{ page.title }}</span>                            
                        </a>
                    </div>
                </div>
            </li>
        {% endif %}
        {% endfor %}            
        </ul>
   </div>
</div>