---
title: Liste voitures
layout: base
description: Liste des voitures électriques
date: 2023-06-02
tags: primary
---

## Champs
- catégorie
- marque
- modèle
- classe
- transmission
- prix

## Marque et modèle de la 1re voiture

{{voiture[0].marque}} {{voiture[0].modele}}

## Liste des voitures

{% for i in voiture %}
{{i.marque}} {{i.modele}}
{% endfor %}

## Liste des Dacia

{% for i in voiture %}
{% if i.marque == 'Dacia' %}
{{i.marque}} {{i.modele}}
{% endif %}
{% endfor %}

## Liste des petites voitures

{% for i in voiture %}
{% if i.classe == 'Petite voiture' %}
{{i.marque}} {{i.modele}}
{% endif %}
{% endfor %}