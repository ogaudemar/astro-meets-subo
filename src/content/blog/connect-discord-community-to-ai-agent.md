---
title: "How to connect your Discord community to an AI agent with the Subo MCP server"
description: "Set up the Subo MCP server in Claude Code or another AI app: create an agent key, run one command in a terminal, restart, and check for 43 operations. Includes the safety labels and key hygiene."
pubDate: "Sep 18 2026"
author: "Subo Team"
heroImage: "/images/blog/subo-mcp-server/grok-bot-connection.png"
tags: ["tutorial", "api", "mcp", "ai-agents"]
draft: false
faq:
  - q: "What is the Subo MCP server address?"
    a: "<code>https://api.subo.ai/mcp</code>. Your AI app authenticates with the header <code>Authorization: Bearer sbo_live_…</code>, using an API key of type Bot or agent created on the Account page of the Subo web app."
  - q: "Which AI apps can connect to Subo?"
    a: "Any app that supports the Model Context Protocol and lets you add a remote (HTTP) server with a custom header. We have connected Subo from Claude Code and from Grok Bot. The Account page gives you a one-line command for Claude Code and a JSON block for other apps."
  - q: "I added the connection but my AI app does not see Subo. What went wrong?"
    a: "Usually one of three things. The command was pasted into an AI chat instead of a terminal. The connection was added with Claude Code's default local scope from a different folder than the one you are working in. Or the app was not restarted: a connection added while a session is running never appears in that session."
  - q: "Can the agent delete my projects or message my members without asking?"
    a: "Every operation is labeled, and deleting or reaching members carries a Destructive or Outward label your AI app can read. In its default and accept-edits modes, Claude Code asks before each of those calls and shows you the label. In auto mode, it goes ahead with an action you asked for by name. Do not add Outward or Destructive operations to your app's always-allow list."
  - q: "What is /subo:weekly_review?"
    a: "A ready-made command that comes with the Subo connection. It reviews your recent projects and their responses and recommends what to run next, without changing anything. It looks back 14 days unless you give it a number, such as <code>/subo:weekly_review 30</code>."
  - q: "Can one connection manage several communities?"
    a: "No. One key belongs to one community. If you run several, create an agent key in each and add one connection per community, with a different name for each."
  - q: "Does it cost anything?"
    a: "No. If you are an Admin of the community and your plan lets you create an API key, you can connect an agent. Requests count against the same per-minute API rate limit as any other use of that key, which ordinary agent use stays far below."
---

The Subo MCP server lets an AI assistant run your Subo community for you: build a project from a sentence, check its script, launch it, read the responses and the analysis. MCP stands for Model Context Protocol, the open standard AI apps use to connect to outside tools. If your AI app supports MCP, it can connect to Subo.

Setup takes about five minutes. Most of the problems we have seen came from three small things (where you run the command, which folder you run it from, and whether you restart the app afterwards), so this guide spends more time on those than on the command itself.

What you need:

- **Admin** access to a Subo community, and the [web app](https://app.subo.gg/) open and signed in. Only Admins see **API Access** on the Account page, so only Admins can create the key.
- an AI app that supports MCP. This guide uses **Claude Code**, because the Account page gives you a ready-made command for it. Other apps get a JSON block, covered in step 2. We have connected Subo from Claude Code and from Grok Bot; any app that can add a remote server with a custom header should work the same way.

---

## 1. Create an agent key on the Account page

Open the [Account page](https://app.subo.gg/app/account) in the Subo web app, go to **API Access**, and create a key. Under "This key represents", choose **Bot or agent**, give it a name you will recognize later (such as "Claude Code on my laptop"), and pick its access level. This is how much the key can do, not a role for you: you create the key as an Admin either way.

- **Admin**: everything you can do yourself, including community settings and deleting responses.
- **Creator**: create and edit projects only, with no community settings and no deleting responses. A good choice for a first agent, because there is less it can reach.

![The Create API key dialog with Bot or agent selected, Admin access, an agent name and a description](/images/blog/subo-mcp-server/create-api-key.png)

Create the key. The confirmation panel shows the key once, and below it a section headed **Connect an AI agent** with the connection config already filled in with your new key: a one-line command for Claude Code and a JSON block for other AI apps, each with a copy button.

![The confirmation panel right after creating an agent key: the key, then the "Connect an AI agent" section with the Claude Code command, the JSON block and their copy buttons](/images/blog/subo-mcp-server/account-connect-ai-agent-panel.png)

Copy it now. The key is only ever shown once. If you come back later, every agent key in the list has an **Agent connection (MCP)** section with the same config, but with `YOUR_KEY` in place of the key. If you no longer have the key, regenerate it and the panel comes back with the new one filled in.

---

## 2. Run the command in a terminal, not in a chat

This is the step that trips people up. The Claude Code command is a **terminal** command. Paste it into a chat with your AI assistant and nothing gets installed; worse, your key is now sitting in a conversation.

Open a terminal (Terminal on macOS, PowerShell or Windows Terminal on Windows) and run:

```bash
claude mcp add --transport http --scope user subo https://api.subo.ai/mcp --header "Authorization: Bearer sbo_live_xxxxxxxxxxxxxxxx"
```

That is the command the Account page gives you, with `--scope user` added. The next step explains why.

**Using a different AI app?** Copy the JSON block from the panel instead and add it to your app's MCP configuration file:

```json
{
  "mcpServers": {
    "subo": {
      "type": "http",
      "url": "https://api.subo.ai/mcp",
      "headers": {
        "Authorization": "Bearer sbo_live_xxxxxxxxxxxxxxxx"
      }
    }
  }
}
```

Where that file lives, and whether the outer key is called `mcpServers`, depends on the app, so check its documentation for "remote MCP server". What your app needs to support is a remote (HTTP) server with a custom header. Some apps skip the file and ask for the key in a settings field instead, which is how Grok Bot does it:

![Grok Bot with the Subo agent key saved, reporting a successful read-only check of the connected community](/images/blog/subo-mcp-server/grok-bot-connection.png)

A good first move in any app is the one above: ask it to read something harmless and report back, before you let it change anything.

---

## 3. Pick the right scope

Claude Code can remember a connection in three places, and the default is the one most likely to look broken.

| Scope | Where Subo is available | Use it when |
|---|---|---|
| `local` (the default) | Only in the folder you ran the command from | You want Subo in one project folder only |
| `user` | In every folder, every session | Almost always. This is the one to use |
| `project` | Anyone who opens this folder, through a `.mcp.json` file in it | **Never, for Subo.** That file is often committed to git, and it would carry your key |

If you ran the command without `--scope` from your home folder and then started Claude Code somewhere else, the connection exists but is invisible from where you are. It looks exactly like a failure. Run `claude mcp list` from the folder you work in: if `subo` is missing there, add it again with `--scope user`.

---

## 4. Restart your AI app

A connection added while a session is running never appears in that session. Quit Claude Code completely (or whichever app you use) and start it again. That is why the Account page says so right under the command.

---

## 5. Check that it worked

In Claude Code, type `/mcp`. You should see:

```
subo · connected · 43 tools
```

![Claude Code's /mcp screen showing the Subo connection as connected with 43 tools](/images/blog/subo-mcp-server/claude-code-mcp-connected.png)

43 is the number of operations Subo offers your agent. If Subo shows as failed instead, the most likely cause is the key: a typo, a leftover `YOUR_KEY`, or a key that has since been revoked. Copy the config again from the Account page (regenerate the key if you no longer have it) and re-add the connection.

Then try the ready-made review command that comes with the connection. Type `/subo` in Claude Code and the connection's two commands appear in the list:

![Claude Code's command list after typing /subo, showing /subo:weekly_review and /subo:build_from_goal](/images/blog/subo-mcp-server/claude-code-subo-commands.png)

**`/subo:weekly_review`** reads your recent projects, their responses and their analysis, then writes a short review: what ran, what came back, and one recommendation for your next project, with the questions it would ask. It looks back 14 days unless you give it a number, such as `/subo:weekly_review 30`. It only reads. Nothing gets created until you say yes, and it asks before running an AI analysis, because that uses your community's credits.

If you added the connection under another name, the command follows it: a connection called `subo-gaming` gives you `/subo-gaming:weekly_review`. Other AI apps may show it differently, or not at all; in that case, ask for a review of your recent projects in plain words.

The second command, `/subo:build_from_goal`, is meant to take a goal and build a project from it. Claude Code currently passes it only the first word you type after the command, so for now, describe what you want in your own words instead:

> Draft a short Convo asking members how last week's game night went, with one open question at the end. Check the script, but don't open it yet.

The agent looks for a [template](/templates/) to start from, writes the script, runs Subo's validation, and stops. Review it in the web app if you like, then tell the agent to open it.

---

## 6. Learn the four labels

Every one of the 43 operations carries a label your AI app can read, so it knows which ones to ask you about first.

| Label | What it means | Examples |
|---|---|---|
| Read-only | Looks, changes nothing | List projects, read responses, read the analysis |
| Normal change | Changes your setup, nobody else sees it yet | Create a project, edit a script, clone a template, create a webhook |
| **Outward** | Reaches real people | Open or close a project, grant XP, grant or remove an accomplishment, send a test webhook |
| **Destructive** | Deletes something or invalidates a secret | Delete a project, a block or responses, delete a webhook, rotate a webhook secret, disconnect a verified-audience source |

Whether you are asked depends on your AI app's permission settings. In Claude Code:

- **Default mode and "accept edits" mode** ask before every Subo operation you have not permanently allowed. The prompt includes the label, so a delete says **Destructive** in so many words.
- **Auto mode** decides for itself. An action you asked for by name goes through: "Delete Poll 268" deletes it without a prompt. An action you did not ask for, or a batch it cannot check, is stopped or turned into a question.

Press Shift+Tab in Claude Code to switch modes. If you are new to this, stay in the default mode until you trust how your agent works.

![Claude Code asking permission before deleting a Subo project, with the operation's Destructive label shown in the prompt](/images/blog/subo-mcp-server/claude-code-asks-before-delete.png)

Keep that safety net. The prompt offers "Yes, and don't ask again" so you can stop being asked about an operation. That is fine for reading and for normal changes. Leave Outward and Destructive operations off that list.

Subo has one check of its own: it will not delete a project that is still open. Close it first, then delete it. In our production test we asked the agent to clean up old projects, and before deleting one that was still open, it stopped on its own to ask.

Three things the agent cannot do at all, whatever you ask:

- create, rotate or delete API keys. Minting credentials stays with you, on the Account page.
- change who has access to your community.
- connect a new verified-audience source. That requires signing in to a third-party account, which only a person can do.

---

## 7. Look after the key

The key is what makes the connection work, so treat it like a password.

- **It is stored in plain text** in your AI app's configuration file (for Claude Code, `~/.claude.json`). It is not sent to the AI model in normal use. It **is** exposed if you paste it into a chat, a document or a screenshot.
- **One key, one community.** The connection can only ever reach the community the key was created in. If you manage several communities, create an agent key in each and add each connection under its own name, such as `subo-gaming` and `subo-book-club`.
- **It has your access, never more.** The key acts with exactly the permissions you have right now. If your access in the community is reduced or removed, the key follows within about ten minutes.
- **You can revoke it any time** from the same Account page, and create a new one when you want the connection back.

To remove the connection from Claude Code:

```bash
claude mcp remove subo --scope user
```

---

## More things to ask

- "Clone the prediction contest template and set it up for Sunday's final."
- "Summarize the open-text answers from the last feedback project."
- "Who earned the most XP this month?"
- "Create a webhook that sends every new response to this URL."

For the ideas behind a good project, the [survey design recipes](/recipes/) are written so an agent can follow them directly. If you would rather call the API yourself, the [API quickstart](/api/) covers the same features in code.

The connection panel on the Account page is in English only for now; the rest of the Account page is translated. Questions, or something the agent did that you did not expect? Tell us in the [Support Server](/support/).
