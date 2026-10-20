---
layout: layout.njk
title: Tekstai
description: Esė ir nuomonės straipsniai.
permalink: /tekstai/
---

# Tekstai

Ankstesni tekstai parašyti anglų kalba – palieku juos tokius, kokie buvo publikuoti.

<ul class="entry-list">
  {% for post in collections.writing %}
  <li>
    <span class="entry-date">{{ post.date | readableDate }}</span>
    <a href="{{ post.url }}" lang="en">{{ post.data.title }}</a>
  </li>
  {% endfor %}
</ul>
