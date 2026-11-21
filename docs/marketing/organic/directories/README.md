# Directories (bot lists and agent/MCP directories)

The app stores of our category. Listing copy for every directory, so name (Subo), domain
(subo.gg) and claims stay consistent: [listing-kit.md](listing-kit.md).

## Bot directories (core done 2026-07)

Listed and refreshed with kit copy: **top.gg, Discord App Directory, discordbotlist.com,
discord.bots.gg, DiscordForge, Void Bots, botlist.me, Discord Extreme List, DiscordMe,
Disforge** (now discordbots.net).

- **Open:** top.gg listing soft refresh (templates, prediction contests, new screenshots;
  manual edit). Commands lists via API for top.gg and discordbotlist.com (low value).
- **Parked:** discords.com (Save hangs). Shortlist to evaluate only when idle: discordlist.gg,
  TopCord, discordbots.app.
- **Dead, don't re-check:** infinitybots.gg, discord-botlist.eu, Wumpus.store, Vipercord, yabl.xyz,
  Carbonitex, discadia (servers only now). Green pings on the mezotv tracker are unreliable.

## Agent / MCP directories (server `https://api.subo.ai/mcp`, OAuth live 2026-10-14)

| Surface | State |
|---|---|
| Official MCP Registry | ✅ `gg.subo/survey-bot` v1.1.0. DNS TXT on the subo.gg apex proves the namespace: leave it |
| Listing repo `https://github.com/subo-gg/subo-mcp` | ✅ Source of truth is `Code/subo-mcp/` (outside both repos); the user uploads through the GitHub web UI. Answer engines quote its README |
| Glama | ✅ Claimed, healthy |
| awesome-remote-mcp-servers PR #1210 | 🟡 Open, CI clean, waiting on the maintainer |
| Claude Connectors Directory | 🟡 Submitted 2026-10-15, in review. Status `https://claude.ai/directory/manage`; replies go to the contact email. Keep the `Connecting` server's test data until live |
| Meta Muse Platform Connector | 🟡 Application switched to OAuth, not yet reviewed. Risk: DCR clients with no grant are pruned after 30 days |
| ChatGPT Plugins Directory | 🟡 Package ready 2026-11-16: `Code/subo-mcp/chatgpt-plugin/subo-chatgpt-plugin-1.0.0.zip` (EN + FR/ES/DE translations, 5 + 3 test cases, demo `https://youtu.be/KGhazaHcBK0`, unlisted). All 8 cases pass with `reviewer` on `Plugin FTW`. Pick **CIMD** in the portal |
| mcp.directory, mcpservers.com | Only if it's a five-minute form; many pick up registry entries on their own |

**Reviewer identity:** Discord account `connect_the_connectors`, one test server per directory
(`Connecting` for Claude, `Muse_Connector_Test` for Meta, `Plugin FTW` for ChatGPT). ChatGPT
reviewers sign in as the Subo password account `reviewer` ("Sign in another way" on
`/app/login`). **Never ask for or store its credentials**: the user types them into each portal.

## Next actions

1. **ChatGPT:** upload the ZIP, verify the domain (token into prod `.env`), fill Review details
   (sign-in steps, no mailbox fallback), submit. `developerName` must match the verified identity
   (ClearSwell LLC business verification). Shipped app-side 2026-11-16: password reviewer login,
   tool annotations, domain-token route, `api.subo.ai` icons.
2. **App-side items to hand over** (edit-only from here; the app session ships them):
   - Projects created or cloned through the API don't inherit the community's default
     participant channel (`post_channel_id: null`). Seen in Plugin FTW and ExtraSwell 108857.
   - Server instructions: say API keys are made on the Account page, so agents can point there.
   - DCR pruning: exempt never-used clients or lengthen the window (Meta risk).
   - Answer `tools/list` without a key, so Glama and Smithery can inspect the server.
   - Account page `Web_ApiKeys_Mcp_Desc`: one line saying claude.ai can sign in without a key.
3. **On Claude listing going live:** add *"How do I connect Subo to Claude?"* to the GEO baseline.
4. **Watch** PR #1210 and Meta Muse; mark done on merge or approval.

## Traps

- **Registry versions are immutable** and names are permanent: run `mcp-publisher validate`
  and get the user's sign-off before every publish. Key `~/.subo-mcp-registry/key.pem`,
  publisher `~/mcp-publisher.exe`, run in **Git Bash**.
- **Cloud routines can't reach glama.ai**, and they read the repo as pushed.
- **The user is new to GitHub PRs and command lines:** give click-by-click steps and say which
  app (Git Bash vs PowerShell).

**Deliberately not doing:** a `/mcp/` page (the tutorial is the spoke page), moving the
endpoint off `api.subo.ai` (every listing carries it).

Full history (registry rename, OAuth build, test-case drafting): [log.md](log.md) and the
archive, section *MCP server = the agent-era "directory" play*.
