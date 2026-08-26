---
title: "Comment faire un sondage ou un vote sur Discord (sans bot ou avec Subo)"
description: "Créer un sondage ou lancer un vote sur Discord : la méthode native sans bot en quelques clics, et la méthode complète avec un bot comme Subo (vote anonyme, rôles, notation, API)."
pubDate: "Aug 25 2026"
tags: ["tutoriel", "discord", "sondages", "vote", "how-to"]
author: "Subo Team"
locale: "fr"
translationOf: "how-to-create-a-discord-poll-with-or-without-a-bot"
heroImage: "/images/blog/poll-tuto/poll-tuto-hero.webp"
faq:
  - q: "Comment créer un sondage sur Discord ?"
    a: "Dans la zone de saisie de n'importe quel salon, ouvre le menu <strong>+</strong> ou l'icône sondage et choisis <strong>Créer un sondage</strong>. Tape ta question, ajoute jusqu'à 10 réponses, choisis une durée entre 1 heure et 1 semaine, puis envoie. Tes membres votent en cliquant sur une réponse et le décompte se met à jour en direct. Aucun bot nécessaire."
  - q: "Comment faire un vote sur Discord ?"
    a: "Sur Discord, un vote et un sondage sont le même outil : tu poses une question, tes membres cliquent sur une réponse. Ouvre le menu <strong>+</strong> dans la zone de saisie, choisis <strong>Créer un sondage</strong>, tape la question et les choix, et envoie. Si tu veux un vrai vote encadré (un seul vote par personne, bulletin anonyme, réservé à certains rôles), il te faut un bot comme Subo et sa commande <code>/poll</code>."
  - q: "Peut-on faire un sondage Discord sans bot ?"
    a: "Oui. Discord intègre ses propres sondages, et pour un vote rapide c'est le bon outil. Les limites : les résultats sont toujours publics, n'importe qui dans le salon peut voter, il n'y a ni anonymat ni restriction par rôle, aucune récompense pour ceux qui participent, et tu ne peux pas exporter les données."
  - q: "Combien d'options peut avoir un sondage Discord ?"
    a: "Les sondages natifs de Discord acceptent jusqu'à 10 réponses, chacune avec un emoji facultatif. Les sondages Subo montent à 24 options, sans limite pratique de caractères par option en mode emoji."
  - q: "Comment faire un sondage anonyme sur Discord ?"
    a: "Les sondages natifs ne peuvent pas être anonymes. Il te faut un bot : avec Subo, ajoute l'option <code>privacy</code> à la commande <code>/poll</code> et choisis Anonyme. Personne ne peut voir qui a voté quoi, toi non plus."
  - q: "Comment lancer un sondage avec Subo ?"
    a: "Trois façons. <code>/poll</code> pour le construire directement dans Discord, <code>/template</code> pour partir d'un modèle prêt à l'emploi, ou <code>/draft</code> pour laisser l'IA de Subo l'écrire. Tu peux aussi créer et gérer tes sondages visuellement dans l'<a href=\"https://app.subo.gg\">app web</a>."
  - q: "Quel bot utiliser pour faire un vote sur Discord ?"
    a: "Subo couvre les cas que le vote natif ne sait pas traiter : bulletin anonyme, vote réservé à un rôle, un seul choix par personne, vote modifiable ou verrouillé, résultats masqués jusqu'à la clôture, récompenses en XP ou en rôle. Une seule commande, <code>/poll</code>, avec 23 options pour régler le vote avant de le publier."
  - q: "Quel est le meilleur bot de sondage pour Discord ?"
    a: "Ça dépend de ce que tu veux en faire. Pour un vote jetable, le sondage natif suffit. Dès que tu tiens à l'anonymat, à limiter le vote à certains rôles, à récompenser la participation, à noter un quiz ou à récupérer les données, il te faut un bot. Subo couvre ces quatre besoins dans une seule commande."
draft: false
---

Un sondage, c'est le moyen le plus rapide de faire voter ta communauté sans lancer un débat de trois jours dans le salon général. Discord propose ses propres sondages depuis un moment, et ils font très bien le travail pour un vote sans enjeu. Ce guide couvre les deux méthodes :

- **Le sondage natif de Discord** : gratuit, instantané, suffisant pour un vote rapide.
- **Un bot de sondage comme [Subo](/invite/)** : quand tu as besoin de plus (images, plus de 10 options, vote anonyme, rôles requis, récompenses, notation pour un quiz ou un concours de prédiction, planification, ou des résultats exportables).

Tu hésites simplement entre Subo et les sondages intégrés de Discord ? On les compare point par point dans [sondages natifs Discord vs Subo](/fr/blog/sondages-natifs-discord-vs-subo/). Cet article-ci est le mode d'emploi.

> **Rapide ou élaboré ?** Pour un vote ponctuel, la commande `/poll` ci-dessous prend quelques secondes, sans quitter Discord. Pour tout ce qui est plus construit (sondages conversationnels à plusieurs questions, quiz notés, logique de saut, récompenses conditionnelles), l'[app web Subo](https://app.subo.gg) est la bonne porte d'entrée. Commence simple dans Discord, puis passe à l'app web quand tes projets grossissent.

## Sondage ou vote : sur Discord, c'est le même outil

Beaucoup de gens cherchent « comment faire un vote sur Discord » et repartent avec des résultats qui parlent de sondages. Ce n'est pas une erreur : Discord appelle *sondage* (poll en anglais) ce que la plupart des serveurs appellent un vote. Une question, des choix, un clic par membre.

La différence n'est pas dans le mot, elle est dans les règles. Le vote natif de Discord n'en a presque aucune : tout le monde peut voter, tout le monde voit qui a voté quoi, et rien ne garantit qu'un membre ne change pas d'avis trois fois. Dès que ton vote a un enjeu (choisir un horaire de raid, élire un modérateur, trancher une roadmap), tu veux pouvoir dire qui a le droit de voter, combien de choix chacun peut cocher, si le vote se verrouille, et si le bulletin est anonyme. C'est exactement ce que la commande `/poll` de Subo ajoute, et c'est l'objet de l'option 2.

## Option 1 : faire un sondage Discord sans bot (le vote natif)

Discord intègre les sondages, sans bot :

1. Dans la zone de saisie d'un salon, ouvre le menu **+** (ou l'icône sondage) et choisis **Créer un sondage**.
2. Tape ta **question**.
3. Ajoute tes **réponses** (10 maximum), chacune avec un emoji facultatif.
4. Choisis une **durée** (de 1 heure à 1 semaine) et, si tu veux autoriser plusieurs choix, active **Autoriser plusieurs réponses**.
5. Envoie. Tes membres votent en cliquant sur une réponse, et le décompte se met à jour en direct.

C'est pratique, c'est gratuit, et c'est tout ce qu'il faut tant que tu veux juste faire voter le salon. Les limites arrivent vite : les résultats sont toujours publics, n'importe qui dans le salon peut voter, il n'y a ni anonymat ni restriction par rôle, personne n'est récompensé pour avoir participé, et les données ne sortent pas de Discord. Quand un de ces points compte, il faut un bot.

## Option 2 : les sondages et les votes avec un bot (Subo)

[Subo](/invite/) transforme le sondage en outil que tu peux vraiment utiliser pour faire tourner une communauté : anonyme ou transparent, réservé à certains rôles, récompensé, noté, planifié, et exportable avec le reste de tes données.

### Trois façons de lancer un sondage Subo

Une fois [Subo ajouté à ton serveur](/invite/) :

- **`/poll`** : construis-le directement dans Discord (le pas à pas juste en dessous).
- **`/template`** : pars d'un modèle prêt à l'emploi et adapte-le. Les modèles marchent dans le bot Discord, et se retouchent encore plus facilement dans l'[app web](https://app.subo.gg).
- **`/draft`** : laisse l'IA de Subo l'écrire. Pour un sondage, demande-lui une question fermée unique : Subo rédige la question et les options, prêtes à éditer.

### La commande `/poll` pas à pas

Tape `/poll` dans le salon où tu veux le publier (tu pourras le déplacer plus tard).

1. Saisis ta **question**.
2. Saisis tes **options de réponse**, séparées par des points-virgules `;`, par exemple `Unity;Unreal;Blender`. Tu peux ajouter des emojis : `🤝Unity;👽Unreal;🥤Blender`. Jusqu'à 24 options.
3. Appuie sur **Entrée**, relis le récapitulatif, et clique sur **Start Now** pour publier (ou Edit pour modifier).

![Pour créer un sondage Discord avec Subo, utilise la commande /poll](/images/blog/poll-tuto/6-oegwy.png)

Voilà pour un sondage de base. C'est ensuite que l'écart se creuse avec un sondage natif : la commande `/poll` expose **23 options**, de quoi régler presque tout avant publication. Tu n'en as pas besoin pour un vote rapide, mais elles sont là quand tu en veux.

![Commande de sondage avec toutes les options renseignées](/images/blog/poll-tuto/7-ftc7l.png)

#### Les 23 options de `/poll`, regroupées par usage

**Calendrier et durée de vie**

- **`start`** : programme l'ouverture du sondage (par exemple `2h30m` pour démarrer dans 2 h 30).
- **`time_limit`** : combien de temps le sondage reste ouvert (par exemple `1d12h`).

**Comment les gens votent**

- **`max_select`** : limite le nombre d'options qu'un votant peut choisir (`1` rend le sondage à choix unique, ou oui/non). Sans cette option, les participants peuvent cocher autant de réponses qu'ils veulent.
- **`vote_change`** : autorise le changement de vote, ou verrouille le premier vote.
- **`voting_button`** : le style de vote, réponse complète dans un bouton, emoji seul dans un bouton, ou menu déroulant (recommandé au-delà de 6 réponses).
- **`required_role`** : seuls les membres ayant un rôle donné peuvent voter.

**Résultats et confidentialité**

- **`realtime_results`** : **Public** (tout le monde voit le décompte), **Votants seulement** (les résultats apparaissent après avoir voté), ou **Masqué** (toi seul les vois jusqu'à la fin).
- **`final_reveal`** : révèle publiquement les résultats d'un sondage masqué ou réservé aux votants à sa fermeture.
- **`privacy`** : **Transparent** (n'importe quel membre voit qui a voté quoi), **Semi-privé** (toi seul, en tant que créateur ou admin), ou **Anonyme** (aucun vote n'est rattaché à quelqu'un, pas même pour toi).

**Quiz et notation** (transformer un sondage en quiz noté)

- **`scoring`** : active la notation.
- **`correct`** : marque la ou les bonnes réponses, affichées avec un ✓ à la fermeture.
- **`scores`** : attribue des points à chaque option, et affiche le total avec `[score]`.

**Récompenses**

- **`role_reward`** *(Premium)* : attribue un rôle aux participants, éventuellement selon leurs réponses.
- **`xp`** : distribue de l'XP, soit un montant fixe, soit calculé sur le score ou les bonnes réponses.

**Apparence et personnalisation**

- **`chart_emoji`** : l'emoji utilisé pour dessiner le graphique des résultats.
- **`image`** : ajoute une image au sondage.
- **`thumbnail`** *(Premium)* : ajoute une vignette à l'embed d'invitation.
- **`color_open`** / **`color_closed`** : la couleur de bordure de l'invitation pendant le vote, et *(Premium)* une couleur différente une fois fermé, pour qu'un sondage terminé se repère au premier coup d'œil.
- **`call_to_action`** : le message d'invitation affiché au-dessus du sondage (mentionner un rôle, poser le contexte, donner envie de voter).
- **`info_display`** : affiche les détails du sondage dans l'embed, ou range-les dans un message éphémère pour garder l'embed propre. Le choix des lignes d'infos à montrer ou masquer se fait dans l'app web.

**Organisation**

- **`name`** : donne un nom au sondage pour le retrouver facilement.
- **`channel`** : choisis le salon ou le fil de publication.

Après avoir validé, Subo affiche un récapitulatif avant que quoi que ce soit ne parte. Clique sur **Edit** pour aller plus loin : plusieurs rôles requis, publication automatique des résultats dans un salon à la fermeture, retouche de l'invitation, ou duplication du sondage pour le réutiliser.

![Exemple de communauté utilisant un sondage Subo sans changement de vote autorisé](/images/blog/poll-tuto/5-o00pt.png)

### Quand passer à l'app web

La commande `/poll` est rapide, mais pour du travail plus gros ou récurrent, l'**[app web Subo](https://app.subo.gg)** est la bonne porte d'entrée. C'est un éditeur visuel pour les sondages, les sondages conversationnels et les quiz, avec la gestion complète, les analyses et l'accès en équipe.

- **Pars d'un modèle** : sondages « ceci ou cela », votes de priorisation de fonctionnalités, concours de prédiction, propositions de gouvernance, prêts à lancer. Voir la [bibliothèque de modèles](/templates/) (en anglais).
- **Construis un vrai quiz** avec la notation intégrée : bonnes réponses, points par option, et classement.
- **Soigne l'invitation** pour qu'elle donne envie de cliquer.

### Automatiser tes sondages avec l'API

Subo a aussi une [API publique](/api/) (en anglais), pour créer et publier des sondages par programme. Confie-la à ton agent IA préféré et laisse-le tourner : par exemple, publier un nouveau sondage sur ton serveur chaque matin.

## Lequel choisir ?

Pour un vote jetable, le sondage natif de Discord fait le travail, et il ne coûte rien. Dès que tu tiens à la sincérité des réponses, à qui a le droit de voter, à récompenser la participation, à noter un quiz, à automatiser ou à garder les données, prends Subo. Le détail des fonctionnalités est sur la page [bot de sondage Discord](/fr/polls/), et ce qui est gratuit ou Premium sur la page [tarifs](/fr/pricing/).

Prêt à lancer ? [Ajoute Subo à ton serveur](/invite/) et lance ton premier `/poll`.
