---
title: "How to Create a Multi-Question Survey in Your Discord Community with Subo the Survey Bot"
description: "Step-by-step tutorial on creating engaging multi-question surveys in Discord using Subo the Survey Bot, in Discord with /survey or visually in the web app."
pubDate: "Jun 27 2022"
updatedDate: "Jul 24 2026"
tags: ["tutorial", "survey", "discord", "community"] 
author: "Subo Team"
heroImage: "/images/blog/survey-tuto/kittens-invite.png"
faq:
  - q: "How do you create a survey in Discord?"
    a: "Add Subo to your server and type <code>/survey</code>. A private thread opens where you answer Subo's questions to build yours: name the survey, write each question, and pick the question type. You can also start from a <a href=\"/templates/\">template</a>, have AI draft one with <code>/draft</code>, or build it visually in the <a href=\"https://app.subo.gg\">web app</a>."
  - q: "What is the difference between a poll and a survey in Discord?"
    a: "A poll is a single question with a live tally in the channel. A survey is a set of questions asked in sequence, one at a time, with the answers collected per respondent so you can analyse and export them. Subo does both."
  - q: "Should I build my survey in Discord or in the web app?"
    a: "Use <code>/survey</code> in Discord for simple, quick surveys. Build in the web app for anything more involved: skip logic, scoring and quizzes, conversational action blocks, team management, or richer analytics. Everything in the Discord flow has a visual equivalent there."
  - q: "Is Subo free?"
    a: "Subo follows a freemium model: free for most users, with Premium tiers for power users. Every privacy mode, including Anonymous, is available on all plans. See <a href=\"/pricing/\">pricing</a> for what each tier adds."
draft: false
---

Understanding their community is the superpower of the most powerful brands and creators.

Whether you're running a Discord server to connect with your followers, fans, customers, users, colleagues, fellow fans or friends, gathering feedback helps your community feel heard, and helps you understand who they are, what they need, and where to improve.

One of the most effective ways to gather that feedback is a survey.

Subo the Survey Bot lets you create one-question polls and multi-question surveys natively in your Discord server. You can build from scratch with the `/survey` command, let AI draft one for you with `/draft`, or start from a ready-made [template](/templates/).

> **Two ways to build, pick by complexity.** This guide walks through creating a survey right inside Discord with `/survey`, which is perfect for simple, quick surveys. For anything more elaborate, like [skip logic](/pricing/), [scoring and quizzes](/blog/scoring-piping-quizzes/), [conversational Action Blocks](/blog/action-blocks-release/), team management, or richer analytics, build visually in the **[Subo web app](https://app.subo.gg)**, which is the recommended way for bigger projects. Everything below has a visual equivalent there. Subo follows a freemium model: free for most users, with Premium tiers for power-users (see [pricing](/pricing/)).

In this post, we'll create a multi-question survey from scratch in Discord with Subo the Survey Bot.

1. [Invite Subo the Survey Bot](/invite/) to your Discord server. Follow the directions to give Subo the recommended permissions.

2. Type `/survey`. You can type the command in the channel where you want to post the survey (or from another channel and move it later).
![Screenshot with the /survey > New command to create a new survey](/images/blog/survey-tuto/survey-1-ljbkw.png) 

Or run the `/home` command and select the `New Survey` button
![Screenshot of /home command](/images/blog/survey-tuto/survey2-wem0u.png)

3. A new private thread called `new-survey` will open for you to chat with Subo in your creator channel. Just answer Subo's questions to create your survey! The `new-survey` thread is private. It can only be seen by you, unless you add someone manually.
![New private thread opens](/images/blog/survey-tuto/survey3-71yb7.png)
![Follow the link to the new private thread](/images/blog/survey-tuto/survey4-yi9cg.png)

4. Name your survey.
![Question to name your survey](/images/blog/survey-tuto/survey5-kkhph.png)

5. Write your first question.
![Entering your first question](/images/blog/survey-tuto/survey6-iy7vf.png)

6. Define what type of question you want.
![Select the question type for your question](/images/blog/survey-tuto/survey7-5v62v.png)

Subo currently supports the following question types:

- `yes/no`: participants can only answer 'yes' or 'no'.
    Example: _Should we transfer the Guild to a new server?_
    💡 Note that 'yes/no' is auto-translated into every language Subo's bot supports: English, French, Spanish, German, Italian, Portuguese, Dutch, Polish, Russian and Turkish. For any language outside that list, pick a single-select question and translate 'yes;no' into your survey's language (example: `ja;nein`).
- `single-select`: Participants can only select one answer among up to 25 choices. You will determine which options to choose from in the next step.
Example: _What do you think is the current Battle Mode's biggest shortcoming?_
- `multi-select`: Participants can select as many answers as they want similar to single choice in that several options are presented.
Example: _What days are you available for our next movie night?_
(Note: you can define later the maximum number of answers your respondents can select with `Edit Questionnaire`).
- `open text`: participants can write anything they want. Use this question type when you want to give maximum freedom for your members to give their opinion.
Example: _How can we make the next server event more fun?_
- `open numeric`: looks like open text, but only accepts numbers (integers) as an answer.
Example: _How much (in $ per month) would you consider an affordable monthly subscription to get access to this premium channel?_

7. For single-select and multi-select, enter up to 25 possible options for the answers, with ";" between each option. You can use text and emojis (standard, custom).

Example: ⚪ _Margarita;_ 🍍 _Hawaiian;_ 🔴 _Pepperoni;_ 🍄 _Regina_
![How to write answer options separated by a semi-colon](/images/blog/survey-tuto/survey8-daoa4.png)

8. Add an image (optional) by pasting the image's URL
![Click Yes to add an image to the question](/images/blog/survey-tuto/survey9-0bz3g.png)
![Pas the image link of the image you want to add to the question](/images/blog/survey-tuto/survey10-zb8cl.png)

9. Add more questions if needed, by repeating steps 5 to 8 for each new question. Add as many questions as your survey needs (see [pricing](/pricing/) for what each plan includes).
![Repeat the process for as many questions as you want in the convo](/images/blog/survey-tuto/survey11-oiqb0.png)

If you only have 1 question to ask, Subo will ask you to choose between poll and survey mode:

- ⚡poll mode: your members can vote and see results publicly in the poll embed
- 📋survey mode: your members will see an invitation message. When they press the button, Subo sends them the survey in a DM so they can answer privately. If their DMs are closed, it falls back to a private thread under the invitation, and then to a web link, so the button always leads somewhere. On an Anonymous survey there is no thread step: it is the DM or the web, because a private thread is readable by anyone with Manage Threads.

10. Your draft is ready.

Now it's time to fine-tune. Click `Continue`

![Message that survey is operational](/images/blog/survey-tuto/survey12-ourcp.png)

11. The next screen will show you details of your project: read it carefully, it is still possible to change everything at this point.

In particular:

- check the full questionnaire: questions, answers, question types, images, maximum selections.
- check that your survey is posted in the channel that you want, is restricted to the right role, with the right time limit, etc. These options come from your server's default settings and can be edited.
- test the survey with the `Test` button
![All convo settings](/images/blog/survey-tuto/survey13-2oldc.png)

If you are happy with your questionnaire and options, hit `Start` to open the survey immediately or ⏰ `Edit Start Mode` to schedule it to launch later.

![more options](/images/blog/survey-tuto/survey14-tme83.png)

Customize the many default options that come from your settings (you can edit those later in `/settings`).

- If you want to make any changes, use one of the buttons 
- You can also take a break, exit and finish the setup later (`Exit`): your project is saved. It's never too late to fix mistakes and make changes. You can edit the survey by running the `/Edit` command.

### **Congratulations!** You have written your first survey!

Want to make it even easier next time? Instead of starting from scratch:

- Start from a ready-made **[template](/templates/)** with the `/template` command and tweak it to fit. See the [template library](/blog/subo-template-library-launch/), or the [recipes](/recipes/) if you would rather see how a survey is built block by block.
- Let Subo's AI **draft** a questionnaire for you based on your objectives with the `/draft` command.
- **[Clone](/blog/clone-surveys-across-servers/)** an existing survey, even across servers, and modify it.
- Build and edit visually in the **[web app](https://app.subo.gg)** when you need [scoring and quizzes](/blog/scoring-piping-quizzes/), [conversational Action Blocks](/blog/action-blocks-release/), or team access. Read [why we built it](/blog/subo-web-app-launch/).

Remember to design effective surveys with clear and concise questions.

Surveying your community in Discord is an essential tool for building a successful and engaged community. By gathering feedback from your members, you can gain valuable insights into their needs, preferences, and pain points. Armed with this information, you can make data-driven decisions about how to improve your server, your products/services, increase engagement, and keep your members happy.