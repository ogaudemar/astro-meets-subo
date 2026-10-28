---
title: "Hogwarts House Sorting Quiz for Discord | Which House Are You?"
description: "Let the Sorting Hat decide. Nine questions score all four houses evenly, a calculated field picks the winner, and each member gets their own house reveal and scores."
slug: "hogwarts-house-sorting"
templateId: 108020
kind: "hub"
dimension: "engage"
audiences: ["Communities", "Gamers", "Creators"]
features: ["Multi-bucket scoring", "Calculated field", "Skip logic", "Score piping"]
eyebrow: "Connect · Personality quiz"
heroTitle: "Sort your whole server into Hogwarts houses"
heroSubtitle: "Nine questions, no wrong answers. Every answer scores the houses, the Sorting Hat picks one, and each member gets their own reveal and all four scores to compare."
ctaLabel: "Use this template"
workedExample: "the four Hogwarts houses"
featureCallouts:
  - emoji: "⚖️"
    title: "Every house has the same chance"
    desc: "Each answer gives 3 points to one house and 1 to another, rotated so all four can reach the same top score. No house is favored by the questions."
  - emoji: "🧮"
    title: "A calculated field picks the house"
    desc: "The four scores go into one formula that names the winner, and the reveal follows from it."
  - emoji: "🎭"
    title: "A reveal for each house"
    desc: "Each house gets its own GIF and a line on what that house values, then all four scores so members can compare in chat."
  - emoji: "🔀"
    title: "Can't be gamed"
    desc: "Options are shuffled and their emojis show what the option is, never which house it scores."
steps:
  - title: "Clone it"
    desc: "It works as is: questions, scoring and the four reveals are already in place."
  - title: "Optional: a role per house"
    desc: "Add a role or achievement for each house (see the FAQ below)."
  - title: "Post it"
    desc: "Post it and let members compare houses in chat."
  - title: "See the split"
    desc: "See how your server divides across the four houses in Results."
faq:
  - q: "Can members get a house role?"
    a: "Yes. Create the four roles or achievements in your community first, then add a give-role or give-achievement block next to each house reveal, shown for that house. You can do it yourself or ask an AI agent connected through the Subo MCP server or API to wire it up."
  - q: "Can I use it for my own personality types?"
    a: "Yes, that's the point of the shape: rename the four houses to your own types (classes in your game, team roles, factions), keep one type at 3 points and one other at 1 on each option, and the reveal and scores follow."
  - q: "What happens on a tie?"
    a: "The first house in the formula wins a tie; with nine questions a tie at the top is rare."
recipeUrl: "/recipes/hogwarts-house-sorting-quiz/"
relatedSlugs: ["lore-trivia-quiz", "rank-your-favorites", "this-or-that-poll"]
pubDate: 2026-10-28
draft: false
---

Gryffindor, Hufflepuff, Ravenclaw or Slytherin? Ask a server and you get an argument. Run this quiz and every member gets an answer, plus all four of their scores to compare in chat.

## Nine questions, no wrong answers

The questions come at it from nine angles: what you value, how you'd spend a free afternoon, how you face a tough challenge, what you'd do about a friend who broke a rule, a magical creature, your role in a group project, what you'd hate most, how you take it when a rival beats you, and where you'd go to unwind.

Every option scores two houses: 3 points to one, 1 to another. The pairs rotate across the quiz so all four houses can reach the same top score, which means the result comes from the member's answers and not from how the questions were written. Options are shuffled, and their emojis describe the option rather than hinting at a house.

## How the house gets picked

The four totals go into a calculated field that names the winning house. That one value drives everything after it: the house's reveal, with its own GIF and a line on what the house values, and then the member's four scores. Your Results show how the whole server splits.

## Make it your own personality test

The structure works for any set of four types. Rename the houses to the classes in your game, the roles on a team or the factions in your lore, keep the 3-and-1 scoring on each option, and the reveal and scores still work. Add a role or achievement per type and members walk away with something to show for it.

*A fan-made quiz, not affiliated with or endorsed by Warner Bros. or J.K. Rowling.*
