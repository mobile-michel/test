---
title: Table des matières
layout: base
pagination:
    data: element
    size: 1
---
{% for item in pagination.items %}
- {{ item }}={{elements[name] }}
{% endfor %}