---
title: "How to Create a Discord Poll with Reactions and with a Bot like Subo"
description: "Learn multiple ways to create polls in Discord - from simple reaction polls to advanced bot-powered surveys with Subo."
pubDate: "May 07 2023"
tags: ["tutorial", "discord", "polls", "how-to"]
author: "Subo Team"
draft: false
---

# How to Create a Discord Poll with Reactions and with a Bot like Subo

Discord is a popular communication platform that allows users to chat with each other in real-time.

Discord has come a long way since its inception as a niche messaging app for gamers. Today, it is a powerhouse for creators and entrepreneurs to engage with their audience. Discord has become a popular platform for businesses to communicate with their customers and employees. It provides a way for businesses like OpenAI to create communities around their products and services and get feedback from their customers. Discord has also become a popular platform for content creators like Mr Beast to engage with their audience, build communities around their content, interact with their fans and even monetize. **Discord has evolved into a versatile platform that can be used by anyone who wants to connect with others and build communities**. It is widely used by gamers, creators, clubs, businesses, and web3 communities to stay connected and share information.

Discord is mostly defined by real-time, mostly unstructured chat, but **one of its most popular features is the ability to create and share polls**. Polls are a great way to get instant feedback from your community or team members and make agile decisions based on their input.

In this article, we will discuss 2 popular ways to create a poll on Discord:

- the basic way offered by default in Discord
- the more advanced way with a third-party bot like Subo

### 1. Native Way of Creating Polls with Reactions

Discord has a native way of creating polls using reactions. The poll will be contained in a normal text message, and users will be able to vote with reactions. Here is how to create a native poll on Discord:

- Just write a normal message. Write your question, then the options (possible answers) with a corresponding emoji for each option. The emojis can represent numbers (eg. 1️⃣; 2️⃣;3️⃣), yes/no (✅;❌), thumbs up/down (👍;👎) or represent the content (e.g. :pizza:; :hotdog:;:popcorn:). If your server was boosted to level 1, you can also create and upload your own custom emojis)
- Add reactions (emojis) to the message. The vote will count will start at 1 (as if you voted for each option).
- Add a ping (eg. @everyone) if you want to notify your community to start voting
- Once your users have voted, you can see the aggregated counts easily. You can also see the details of who voted for what by clicking on 'View Reactions'

### 2. Pros and Cons of Discord Reaction Polls

Because they come natively with Discord, reaction polls do not require any third-party bot. They are free to use and fully supported by Discord. They are relatively simple to create and most users understand how to vote.

However, there are many limitations to native reaction polls:
- they do not support anonymous voting or hybrid visibility options like voters-only
- they have no official start or end, so people can keep voting or change their vote whenever they want, even after you made a decision or the question is relevant
- users can react to as many answers as they want. They may vote for 'yes'and 'no' at the same time, on purpose or not. If you want people to select only one (or a maximum of 3) option, that is not possible.
- in fact, users can add other their own emoji reactions so the poll can quickly become very messy
- native polls are public, for everyone to see and vote on, regardless of their roles

### 3. Benefits of Using a Survey Bot like Subo for Creating Polls

Using a Survey Bot like Subo provides several benefits over native Discord polls.

1. Subo supports different levels of **anonymous voting**. This means that users can vote without revealing their identity to other voters. This is useful when you want to get honest feedback from your community or team members.

2. It is also possible with Subo polls to **hide the results** in cases where you don't want voters to be influenced by other people's earlier votes. Results can be revealed to voters only after they vote ('voters-only' polls), or even hidden until the end of the poll ('hidden'polls).

2. **Scheduling and time limits**: Subo allows you to draft your poll ahead of time and schedule it to open exactly when you want to. Likewise, a time limit can be set and communicated to voters so that they know how much time they have left.

3. Subo supports both **single and multiple selections** (it also supports open text and numeric answers in survey mode). That way, you can make sure that people vote for only one option (eg. yes/no questions). There are also cases where you want to make sure people only select a specific number of options (eg. 'top 3 books to read next month').

4. **Control who can vote with Roles**: there are times were you only want users of your community with specific responsibilities or privileges to vote.

Another common case is for creators to grant a role for premium subscriptions from services like [Patreon](https://www.patreon.com/home) or [Discord's own server subscriptions](https://discord.com/blog/server-and-creator-subscriptions).  Another common use case is in the world of web3 (eg. Discord communities for NFT projects, DAOs): in order to vote for some decisions, users must have a Discord role, which can sometimes be token-gated (i.e. verified by a third-party app like [Collab.Land](https://www.collab.land/)).

5. **Incentive votes with Roles**, giveaways and more: to make sure as many people as possible participate in a poll, a Survey Bot like Subo make it possible to reward participation with a role. The role itself can be used to unlock access to exclusive content, channels, or to a giveaway.

6. **Repeated polls made easy with Cloning**; Subo makes it possible to duplicate (or clone) a poll in a click. If you want to repeat the same poll are regular intervals (e.g. ask daily 'what game are we playing today?), you don't have to retype the whole thing again.

7. **Visibility/ repost**: because native polls are regular messages, they tend to disappear from view in channels with a lot of activity. Subo polls can be reposted in the same channel or another channel to keep it always fresh and top of mind.

8. **Vote change**: while votes can be changed in a native reaction poll, Subo also gives you the option to make a vote permanent. In that case, voters are not able to recast their vote.

9. **Further analysis and combination with survey data**: as a survey platform, Subo allows you to export polls in the same data file formats as you would with a multi-question survey. This allows you to combine data collected from polls and surveys for a more holistic view of your community.

### How to Create a Poll Using Subo

To create a poll using Subo, you need to invite the bot to your Discord server. You can do this by visiting the [Subo website](/invite) and clicking on the "Invite Subo" button. After that, you need to authorize the bot to access your server and give Subo the right permissions.

Once the bot is added to your server, you can create a poll by typing `/poll` followed by your question and options. Options should be separated by semi-colons `;`

This will create a poll with the question "What do you use for your animation?" and three options: Unity, Unreal and Blender.

You can also add other options to the command to customize your poll. For example:

- `Max_select 1` limits the number of options selected to 1
- `start 2h30m` schedules the poll to start in 2.5 hours
- `end 1w` sets the time limit for the poll to be open for one week
- `vote_change No` prevents users from changing their vote
- `show_results Voters-only` : vote results are not shown in the poll embed, but voters can reveal the results after voting. `show_results Hidden` : votes are not shown to anyone. Only the creator can see results and share them
- `chart_emoji 👍`: replaces the default 🟩 emoji used to draw the chart into 👍
- `anonymous 🥷Anonymous`: Users can only see the aggregated results, but not who voted for what
- `anonymous 🗳️ Transparent`: in addition to the aggregated results, users can also click the 🗳️ button and see who voted what

Simply hit ENTER when you are happy with your command. Don't worry, there is another step  review and confirm everything, and you can always edit later.

Subo will display a summary of the poll you are about to publish. Review all the details. Hit `Start Now` to publish your poll immediately. (if you have scheduled your poll to open in the future, you are already good to go and can dismiss the message). If you want to make changes or personalize further, click the `EDIT` button. It will give you additional options:

- `Poll name`: give your project a unique a memorable name.
- `Required role`: restrict the poll to only users with certain roles in your Discord server
- `Post Channel`: pick another channel to post or repost your poll.
- `Results Sharing`: Results can be automatically shared in a channel of your choice after the poll closes.
- `Clone Poll`: Duplicate your poll for repeated use
- `Role Reward`: Reward your poll participants with a (new) role

### Conclusion

Polls are a great way to get feedback from your community on Discord. While Discord has a native way of creating polls using reactions, it has many limitations. Subo is a third-party poll bot which you can invite to your Discord server. It provides advanced features for creating polls on Discord such as anonymous voting, maximum answer selections, hidden or semi-hidden results, required roles, advanced scheduling, time limits and much more. Subo is a survey bot, so if needed you can also ask multiple questions in a survey, or combine the data from multiple polls and surveys to get a more detailed and holistic view of your community.