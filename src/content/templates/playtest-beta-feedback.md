---
title: "Discord Playtest Feedback Template | Rate, Score & Ask Why"
description: "Four one-tap 1-to-5 rating scales plus two open questions. Their average is a satisfaction score you can compare build over build, with the 'why' in players' own words."
slug: "playtest-beta-feedback"
templateId: 102101
kind: "hub"
dimension: "understand"
audiences: ["Gamers", "Businesses"]
features: ["Rating scales", "Calculated field", "Satisfaction score", "Open-ended follow-ups"]
eyebrow: "Discover · Feedback survey"
heroTitle: "A playtest survey that scores itself"
heroSubtitle: "Four one-tap rating scales tell you how much players enjoyed the build. Two open questions tell you why. Subo averages the four ratings into a single satisfaction score between 1.0 and 5.0, so you can compare this playtest to the last one at a glance."
ctaLabel: "Use this template"
workedExample: "an indie studio's beta weekend"
featureCallouts:
  - emoji: "⭐"
    title: "One-tap rating scales"
    desc: "Fun, engagement, polish and would-recommend, each a 1-to-5 scale answered with a single tap on a face emoji. No typing, so more players actually finish."
  - emoji: "📊"
    title: "A score you can compare"
    desc: "A calculated field averages the four ratings into one satisfaction score per session, on the same 1.0 to 5.0 range as the questions. Watch it move build over build instead of eyeballing raw answers."
  - emoji: "💬"
    title: "The why, in their words"
    desc: "Two open questions capture what players loved and what they'd change, so the number always comes with the story behind it."
  - emoji: "🎮"
    title: "Send it while it's fresh"
    desc: "Fire it the moment a playtest, beta weekend, or content drop ends, when impressions are sharpest, right inside Discord or on the web."
steps:
  - title: "Clone and name your build"
    desc: "Swap in your game or build name. Keep the four rating questions or adjust them to what you're testing this round."
  - title: "Keep or rename the four scales"
    desc: "Fun, engagement, polish and recommend are the satisfaction inputs. Rename them to the dimensions you care about, or add a fifth and extend the formula to divide by five."
  - title: "Publish and collect"
    desc: "Players rate in four taps and answer two quick open questions. Every session gets a satisfaction score automatically."
  - title: "Read the score and the why"
    desc: "Compare satisfaction across playtests in the results, then read the open answers to know exactly what to fix before launch."
faq:
  - q: "Is this an NPS survey?"
    a: "No, it's a satisfaction survey. The recommend question is a 1-to-5 rating like the other three, not the 0-to-10 NPS instrument, which keeps all four dimensions on one comparable scale. If you want NPS specifically, the <a href=\"/templates/nps-reason-followup\">NPS template</a> uses the native NPS question and branches on the score."
  - q: "Do players have to type?"
    a: "Only if they want to. The four ratings are one-tap emoji answers, and the two open questions are optional depth. Most players finish in under a minute."
  - q: "Can I use it outside of games?"
    a: "Yes. It works as a product or beta CSAT survey, an event or workshop feedback form, or a post-purchase check-in. Rename the four dimensions to fit what you're measuring."
  - q: "Where does the satisfaction score come from?"
    a: "A rating answer is stored as the number the player tapped, so a calculated field averages the four: (fun + engagement + polish + recommend) / 4. The result sits on the same 1.0 to 5.0 range as the questions themselves, which is what makes it comparable across builds without a spreadsheet."
  - q: "How do players answer the ratings?"
    a: "One tap on a face emoji, in Discord or on the web. Each scale runs 1 to 5 with a word at each end, and every scale reports its own average and a point-by-point distribution, so a polish problem never hides behind a good fun score."
recipeUrl: "/recipes#understand"
relatedSlugs: ["feature-roadmap-vote", "player-onboarding-profiler", "playtester-beta-recruitment"]
pubDate: 2026-07-02
updatedDate: 2026-08-16
draft: false
---

A `👍`/`👎` in a channel tells you nothing you can act on. This survey turns "how was the playtest?" into a number you can track and a set of reasons you can fix, in the time it takes a player to tap four faces.

Run it right after a playtest, beta weekend, or content drop. Players rate fun, engagement, polish, and how likely they'd recommend it, then tell you in their own words what landed and what didn't. Subo scores every session so you can see whether this build actually beat the last one.

## A number and a story, not just raw answers

Most feedback forms leave you with a pile of answers and no summary. Here the answer to each rating *is* a number, so a calculated field averages the four into one satisfaction score per response, between 1.0 and 5.0. Compare that score across playtests to see the trend, then drop into the open answers when you need the why behind the move.

Each of the four scales also reports its own average and distribution, which is the part a pile of option counts can never give you: a build that scores 4.4 on fun and 2.6 on polish is a very different problem from one that sits at 3.5 across the board.

The example runs four ratings and two open questions on a studio's beta weekend. Rename the dimensions and it fits any build you're testing.

## Variants

- **Product or beta CSAT:** rename the scales to setup, performance, value, and recommend for a SaaS beta check-in.
- **Event feedback:** repoint it at a tournament, workshop, or community event and ask how it went.
- **Classic NPS:** swap the recommend rating for an NPS question and branch detractors into a "what went wrong?" follow-up. The [NPS template](/templates/nps-reason-followup) already builds that.
- **Words instead of faces:** swap a rating for an opinion scale where the wording of each point matters more than the tap target.
- **Quick pulse:** keep only two ratings and one open question for a 20-second post-session pulse, and divide the formula by two.
