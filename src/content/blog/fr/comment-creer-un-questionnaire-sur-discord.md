---
title: "Comment créer un questionnaire sur Discord (enquête à plusieurs questions)"
description: "Créer un questionnaire Discord de A à Z avec Subo : la commande /survey pas à pas, les types de questions, les réponses privées ou anonymes, et l'export des résultats."
pubDate: "Aug 26 2026"
updatedDate: "Sep 4 2026"
tags: ["tutoriel", "discord", "questionnaires", "enquête", "how-to"]
author: "Subo Team"
locale: "fr"
translationOf: "how-to-create-a-survey-with-subo-the-survey-bot-877951089"
heroImage: "/images/blog/survey-tuto/kittens-invite.png"
faq:
  - q: "Comment créer un questionnaire sur Discord ?"
    a: "Ajoute <a href=\"/invite/\">Subo</a> à ton serveur et tape <code>/survey</code>. Un fil privé s'ouvre, et tu construis ton questionnaire en répondant aux questions de Subo : le nom, puis chaque question avec son type. Tu peux aussi partir d'un modèle avec <code>/template</code>, laisser l'IA le rédiger avec <code>/draft</code>, ou le construire visuellement dans l'<a href=\"https://app.subo.gg\">app web</a>."
  - q: "Quelle différence entre un sondage et un questionnaire sur Discord ?"
    a: "Un sondage, c'est une question unique et un décompte public dans le salon : tout le monde voit le résultat en direct. Un questionnaire (ou une enquête) enchaîne plusieurs questions, une par une, et garde les réponses de chaque participant séparément, pour que tu puisses les analyser et les exporter. Subo fait les deux. Pour la question unique, voir <a href=\"/fr/blog/comment-creer-un-sondage-sur-discord/\">comment faire un sondage sur Discord</a>."
  - q: "Où les membres répondent-ils au questionnaire ?"
    a: "Dans leurs DM, en message privé avec Subo. Ils répondent en cliquant sur des boutons ou en écrivant, sans quitter Discord et sans que le salon voie leurs réponses. Si leurs DM sont fermés, Subo bascule sur un fil privé, puis sur un lien web, donc le bouton mène toujours quelque part. Tu peux aussi partager un lien web pour les personnes qui n'ont pas de compte Discord."
  - q: "Un questionnaire Discord peut-il être anonyme ?"
    a: "Oui, et sur tous les forfaits, gratuit compris. Le mode Anonyme détache les réponses de leur auteur : personne ne peut voir qui a répondu quoi, toi non plus. Il existe aussi un mode Semi-privé, où toi seul (créateur ou admin) vois les identités."
  - q: "Combien de questions peut contenir un questionnaire ?"
    a: "Ça dépend du forfait, le détail est sur la page <a href=\"/fr/pricing/\">tarifs</a>. En pratique, un questionnaire court finit mieux qu'un long : trois à sept questions bien posées obtiennent plus de réponses complètes qu'une enquête de vingt."
  - q: "Faut-il un compte Discord pour répondre ?"
    a: "Pas forcément. Le questionnaire vit dans Discord, mais Subo génère aussi un lien web que tu peux envoyer par mail, poster sur X ou glisser dans une newsletter. Les réponses arrivent au même endroit que celles collectées dans le serveur."
  - q: "Peut-on récupérer les réponses ?"
    a: "Oui. Les résultats s'affichent dans l'<a href=\"https://app.subo.gg\">app web</a> avec les analyses, et s'exportent. Les réponses en texte libre sont en plus résumées par l'IA, ce qui évite de lire trois cents commentaires à la main."
  - q: "Quel est le meilleur moment pour lancer une enquête sur Discord ?"
    a: "Quand une décision t'attend derrière. Une enquête envoyée sans suite épuise la bonne volonté de tes membres. Lance-la, annonce ce que tu comptes en faire, puis reviens publier ce que les réponses ont changé : le taux de réponse de la suivante en dépend plus que de l'heure d'envoi."
draft: false
---

Un sondage tranche une question. Un questionnaire en pose plusieurs, et c'est un exercice différent : les réponses ne servent plus à départager deux options dans le salon général, elles servent à comprendre qui sont tes membres et ce qu'ils veulent. Sur Discord, la plupart des serveurs s'en passent parce que la seule solution évidente consiste à envoyer un lien Google Forms et à regarder les gens ne pas cliquer.

Ce guide montre l'autre méthode : un questionnaire qui se déroule **dans** Discord, question après question, dans le DM de chaque participant.

- Tu cherches un **vote à une seule question** avec décompte public ? C'est l'autre article : [comment faire un sondage sur Discord](/fr/blog/comment-creer-un-sondage-sur-discord/).
- Tu veux une **enquête à plusieurs questions**, avec des réponses individuelles à analyser ? Continue ici.

> **Deux endroits pour construire, choisis selon la complexité.** Ce guide construit le questionnaire directement dans Discord avec `/survey`, ce qui va très bien pour une enquête simple. Pour plus élaboré (logique de saut, notation et quiz, blocs d'action conversationnels, gestion d'équipe, analyses poussées), l'**[app web Subo](https://app.subo.gg)** est la bonne porte d'entrée, et tout ce qui suit y a son équivalent visuel. Subo est freemium : gratuit pour la plupart des usages, avec des forfaits Premium pour les gros besoins (voir [tarifs](/fr/pricing/)).

## Pourquoi le questionnaire tient dans Discord

Le réflexe habituel est de rédiger l'enquête ailleurs et de coller le lien. Ça marche mal pour une raison simple : cliquer sur un lien, c'est quitter la conversation, ouvrir un onglet, se retrouver devant un formulaire vide et décider si ça vaut le coup. La plupart du temps, non.

Avec Subo, le questionnaire arrive là où tes membres sont déjà. L'invitation s'affiche dans le salon, chacun reçoit son questionnaire en DM d'un clic, et répond en tapant sur des boutons. Les réponses restent privées, la conversation ne pollue pas le salon, et personne n'a eu à faire confiance à un domaine inconnu.

## Créer un questionnaire avec la commande `/survey`

1. [Ajoute Subo à ton serveur Discord](/invite/) et accorde-lui les permissions recommandées.

2. Tape `/survey` dans le salon où tu veux publier l'enquête (tu pourras la déplacer plus tard).

![La commande /survey pour créer un questionnaire Discord](/images/blog/survey-tuto/survey-1-ljbkw.png)

Tu peux aussi lancer `/home` et cliquer sur le bouton `New Survey`.

3. Un fil privé nommé `new-survey` s'ouvre pour ta conversation avec Subo. Réponds à ses questions, et le questionnaire se construit au fil de l'échange. Ce fil n'est visible que par toi, sauf si tu y ajoutes quelqu'un.

![Le fil privé new-survey s'ouvre](/images/blog/survey-tuto/survey3-71yb7.png)

4. Donne un **nom** à ton questionnaire. Il te sert à le retrouver plus tard, tes membres ne le voient pas.

![Nommer le questionnaire](/images/blog/survey-tuto/survey5-kkhph.png)

5. Écris ta **première question**.

![Saisir la première question](/images/blog/survey-tuto/survey6-iy7vf.png)

6. Choisis le **type de question**.

![Choisir le type de question](/images/blog/survey-tuto/survey7-5v62v.png)

### Les types de questions à connaître

- **`oui/non`** : la réponse est binaire. *Faut-il déplacer la guilde sur un nouveau serveur ?*
  💡 Ce type est traduit automatiquement dans toutes les langues du bot (anglais, français, espagnol, allemand, italien, portugais, néerlandais, polonais, russe, turc). Pour une autre langue, prends un choix unique et écris toi-même `oui;non` traduit.
- **`choix unique`** : une seule réponse parmi 25 options maximum. *Quel est le plus gros défaut du mode Bataille actuel ?*
- **`choix multiple`** : autant de réponses que le participant veut, parmi les options proposées. *Quels soirs es-tu disponible pour la prochaine soirée film ?* (Le nombre maximum de choix se règle ensuite avec `Edit Questionnaire`.)
- **`texte libre`** : le participant écrit ce qu'il veut. C'est le type qui donne les réponses les plus utiles, et le plus pénible à dépouiller à la main, raison pour laquelle Subo en fait un résumé par IA. *Comment rendre le prochain événement plus sympa ?*
- **`numérique`** : ressemble au texte libre, mais n'accepte que des nombres entiers. *Combien serais-tu prêt à payer par mois pour l'accès à ce salon premium ?*

Subo compte aussi quatre types plus spécialisés, à construire dans l'app web : **notation** (étoiles, chiffres ou emojis), **échelle d'opinion** (l'échelle de Likert, d'un extrême à l'autre), **NPS** (la question de recommandation de 0 à 10) et **classement** (remettre des options dans l'ordre). Leur mode d'emploi est dans le guide [rating, NPS et classement](/blog/discord-rating-scale-nps-ranking-questions/) (en anglais).

7. Pour un choix unique ou multiple, saisis jusqu'à 25 **options de réponse**, séparées par un point-virgule `;`. Le texte et les emojis (standards ou personnalisés) fonctionnent.

Exemple : ⚪ *Margherita;* 🍍 *Hawaïenne;* 🔴 *Pepperoni;* 🍄 *Reine*

![Options de réponse séparées par un point-virgule](/images/blog/survey-tuto/survey8-daoa4.png)

8. Ajoute une **image** si tu veux, en collant son URL.

9. Répète les étapes 5 à 8 pour chaque question suivante. Ajoute-en autant que ton enquête en demande (voir [tarifs](/fr/pricing/) pour ce que chaque forfait inclut).

![Ajouter les questions suivantes](/images/blog/survey-tuto/survey11-oiqb0.png)

Si tu n'as posé qu'**une seule question**, Subo te demande de choisir entre deux modes :

- ⚡ **mode sondage** : les membres votent et voient le résultat publiquement dans l'embed.
- 📋 **mode questionnaire** : les membres voient un message d'invitation, et Subo leur envoie le questionnaire en DM pour qu'ils répondent à l'abri des regards. Si leurs DM sont fermés, il bascule sur un fil privé, puis sur un lien web.

## Relire, tester, lancer

10. Ton brouillon est prêt. Clique sur `Continue`.

11. L'écran suivant récapitule tout le projet. Lis-le pour de vrai : à ce stade, absolument tout se change encore.

![Les réglages complets du questionnaire](/images/blog/survey-tuto/survey13-2oldc.png)

En particulier :

- **Le questionnaire lui-même** : questions, options, types, images, nombre de choix autorisés.
- **La confidentialité.** Trois modes : Transparent (les réponses sont attribuées et visibles), Semi-privé (toi seul vois qui a répondu quoi), Anonyme (personne ne le voit, toi compris). L'anonymat est disponible sur tous les forfaits, y compris le gratuit, et c'est souvent lui qui décide de la sincérité des réponses.
- **La diffusion** : le salon de publication, le rôle requis pour participer, la durée d'ouverture. Ces valeurs viennent des réglages par défaut de ton serveur et se modifient ici.
- **Le test** : le bouton `Test` te fait passer le questionnaire comme un membre. Fais-le, toujours. C'est là qu'on voit qu'une question est ambiguë.

Quand tout te convient, `Start` publie l'enquête immédiatement, ou ⏰ `Edit Start Mode` la programme pour plus tard. Tu peux aussi sortir avec `Exit` : le projet est sauvegardé, et la commande `/edit` le rouvre quand tu veux.

### Bravo, ton premier questionnaire est en ligne

## Aller plus vite la prochaine fois

Repartir de zéro à chaque enquête n'a aucun intérêt :

- **Un modèle prêt à l'emploi** avec la commande `/template`, à adapter. Voir la [bibliothèque de modèles](/templates/) (en anglais), ou les [recettes](/recipes/) (en anglais) pour comprendre comment un questionnaire s'assemble bloc par bloc.
- **L'IA** : `/draft` rédige un questionnaire complet à partir de ton objectif, que tu retouches ensuite.
- **Le clonage** d'une enquête existante, y compris d'un serveur à l'autre.
- **L'app web** pour tout ce qui dépasse : notation et quiz, logique de saut, blocs d'action, accès équipe, analyses.
- **L'[API publique](/api/)** (en anglais) pour créer et publier des questionnaires par programme, ou laisser un agent IA le faire.

## Ce que tu en fais compte plus que la façon de le poser

Un questionnaire bien construit et jamais exploité fait plus de mal qu'aucun questionnaire : tes membres ont donné du temps et n'ont rien vu changer. Prends l'habitude de revenir dans le salon publier ce que les réponses ont modifié, même quand la réponse est « on ne le fait pas, voilà pourquoi ». C'est ce retour-là qui fait que la prochaine enquête obtient trois fois plus de réponses.

Pour le reste, garde les questions courtes et sans double sens, et n'en pose pas plus que ce que tu comptes vraiment lire.

Prêt à lancer ? [Ajoute Subo à ton serveur](/invite/) et tape `/survey`. Les possibilités complètes sont détaillées sur la page [questionnaires conversationnels](/fr/survey-convos/), et les usages côté recherche sur [comprendre ta communauté](/fr/use-cases/research/).
