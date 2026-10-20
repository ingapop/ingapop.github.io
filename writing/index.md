---
layout: layout.njk
title: Tekstai
description: Esė ir nuomonės straipsniai.
permalink: /tekstai/
---

# Tekstai

Op-ed'ai ir esė. 

<ul class="entry-list">
  {% for post in collections.writing %}
  <li>
    <span class="entry-date">{{ post.date | readableDate }}</span>
    <a href="{{ post.data.externalUrl or post.url }}" lang="{{ post.data.lang }}">{{ post.data.title }}</a>{% if post.data.publication %} <span class="entry-publication">– {{ post.data.publication }}</span>{% endif %}
  </li>
  {% endfor %}
</ul>
