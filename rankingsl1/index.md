---
layout: page
title: Classements
tags: [classement]
date: 2016-03-21
comments: false
---

Tous les classements sont ici, venez supporter vos joueurs préférés, ou flatter votre ego en voyant que vous avez grimpé d'un tier !
Si vous voyez une erreur, merci de contacter DoKuNu#7777 sur Discord !

# League 1

## God Tier

<center>Ce tier rassemble les meilleurs joueurs, ceux qui ont su s'illustrer, ceux qui brillent... Cependant le 4e du groupe est relégable au tier inférieur.</center> <br/>

{% assign i = 0 %}
{% for player in site.data.league1d1 %}
	{% assign i = i | plus:1 %}

	{% if i < 1 %}
| 1ER | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
|-----|-------------|-----|
	{% else %}
| {{i}}e  | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
	{% endif %}

{% endfor %}

## Top Tier

<center>Le meilleur joueur de ce tier pourra monter au tier supérieur, et le moins bon peut être relégué.</center> <br/>

{% assign i = 0 %}
{% for player in site.data.league1d2 %}
	{% assign i = i | plus:1 %}

	{% if i < 1 %}
| 1ER | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
|-----|-------------|-----|
	{% else %}
| {{i}}e  | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
	{% endif %}

{% endfor %}

## Mid Tier

<center>Le meilleur joueur de ce tier pourra monter au tier supérieur, mais les 2 moins bons vont être relegués.</center> <br/>

{% assign i = 0 %}
{% for player in site.data.league1d3 %}
	{% assign i = i | plus:1 %}

	{% if i < 1 %}
| 1ER | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
|-----|-------------|-----|
	{% else %}
| {{i}}e  | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
	{% endif %}

{% endfor %}

## Low Tier

<center>Les 2 meilleurs de ce tier peuvent monter au tier supérieur, et les 2 moins bons seront relégués en League 2.</center> <br/>

{% assign i = 0 %}
{% for player in site.data.league1d4 %}
	{% assign i = i | plus:1 %}

	{% if i < 1 %}
| 1ER | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
|-----|-------------|-----|
	{% else %}
| {{i}}e  | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
	{% endif %}

{% endfor %}
