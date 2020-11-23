---
layout: page
title: Classements
tags: [classement]
date: 2016-03-21
comments: false
---

Tous les classements sont ici, venez supporter vos joueurs préférés, ou flatter votre ego en voyant que vous avez grimpé d'un tier !
Si vous voyez une erreur, merci de contacter DoKuNu#7777 sur Discord !

# League 2

## God Tier

<center>Ce tier rassemble les meilleurs joueurs, parmi ceux de League 2, c'est déjà un très bon début ! Force à vous ! Les deux premiers de ce tier pourront passer en League 1. Cependant le 4e du groupe est relégable au tier inférieur.</center> <br/>

| 1ER | {{site.data.players[18].name}} {% if site.data.players[18].twitter %} <a class="social-btn" href="{{site.data.players[18].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[18].character}}.png" width="200" height="200" > |
|-----|-------------|-----|
| 2e  | {{site.data.players[19].name}} {% if site.data.players[19].twitter %} <a class="social-btn" href="{{site.data.players[19].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[19].character}}.png" width="200" height="200" > |
| 3e  | {{site.data.players[20].name}} {% if site.data.players[20].twitter %} <a class="social-btn" href="{{site.data.players[20].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[20].character}}.png" width="200" height="200" > |
| 4e  | {{site.data.players[21].name}} {% if site.data.players[21].twitter %} <a class="social-btn" href="{{site.data.players[21].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[21].character}}.png" width="200" height="200" > |


## Top Tier

<center>Le meilleur joueur de ce tier pourra monter au tier supérieur, et le moins bon peut être relégué.</center> <br/>

| 1ER | {{site.data.players[22].name}} {% if site.data.players[22].twitter %} <a class="social-btn" href="{{site.data.players[22].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[22].character}}.png" width="200" height="200" > |
|-----|-------------|-----|
| 2e  | {{site.data.players[23].name}} {% if site.data.players[23].twitter %} <a class="social-btn" href="{{site.data.players[23].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[23].character}}.png" width="200" height="200" > |
| 3e  | {{site.data.players[24].name}} {% if site.data.players[24].twitter %} <a class="social-btn" href="{{site.data.players[24].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[24].character}}.png" width="200" height="200" > |
| 4e  | {{site.data.players[25].name}} {% if site.data.players[25].twitter %} <a class="social-btn" href="{{site.data.players[25].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[25].character}}.png" width="200" height="200" > |


## Mid Tier

<center>Le meilleur joueur de ce tier pourra monter au tier supérieur, mais les 2 moins bons vont être relegués.</center> <br/>

| 1ER | {{site.data.players[26].name}} {% if site.data.players[26].twitter %} <a class="social-btn" href="{{site.data.players[26].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[26].character}}.png" width="200" height="200" > |
|-----|-------------|-----|
| 2e  | {{site.data.players[27].name}} {% if site.data.players[27].twitter %} <a class="social-btn" href="{{site.data.players[27].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[27].character}}.png" width="200" height="200" > |
| 3e  | {{site.data.players[28].name}} {% if site.data.players[28].twitter %} <a class="social-btn" href="{{site.data.players[28].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[28].character}}.png" width="200" height="200" > |
| 4e  | {{site.data.players[29].name}} {% if site.data.players[29].twitter %} <a class="social-btn" href="{{site.data.players[29].twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{site.data.players[29].character}}.png" width="200" height="200" > |


## Low Tier

<center>Tous les autres joueurs sont ici, et les deux meilleurs peuvent grimper au tier supérieur, courage !</center> <br/>

{% assign i = 0 %}
{% for player in site.data.league2d4 %}
	{% assign i = i | plus:1 %}

	{% if i < 1 %}
| 1ER | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
|-----|-------------|-----|
	{% else %}
| {{i}}e  | {{player.name}} {% if player.twitter %} <a class="social-btn" href="{{player.twitter}}" target="_blank" rel="noopener noreferrer"><i class="fa fa-fw fa-twitter-square"></i></a>{% endif %}| <img class="char" src="../assets/img/chars/{{player.character}}.png" width="200" height="200" > |
	{% endif %}

{% endfor %}
