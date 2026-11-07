# Grok Night · DSH Theme

> A **GrokBot-inspired** warm-charcoal theme for the DeepSeek Harness Web UI.  
> Unofficial community project, not affiliated with xAI, SpaceXAI, or DeepSeek.

[中文](./README.md) · [Disclaimer](./DISCLAIMER.md) · [MIT License](./LICENSE)

Grok Night takes the warm-charcoal canvas, amber accent, and hairline borders of the
Grok Night / Grok Day palette family and turns them into a single theme layer built
entirely from DSH theme tokens. It also adds an original robot mark to the empty-session
hero, so a fresh conversation has a face.

| Dark · Grok Night | Light · Grok Day |
|---|---|
| canvas `#101012`, raised `#17181b` | canvas `#f6f4ee`, paper `#fffdf8` |
| text `#f0eee8` / `#c3bfb5` | text `#1b1a17` / `#565249` |
| amber `#e0af68` | deep amber `#8a5a12` |
| green `#9ece6a` · orange `#ff9e64` · red `#f7768e` | green `#2f7d3f` · orange `#a05c00` · red `#c0354d` |

## Features

- **Light and dark by design** — follows the host's Light / Dark / System preference
  instead of hijacking it.
- **Complete semantic layer** — roughly 60 `--dsw-*` tokens: surfaces, text, brand,
  buttons, borders, interaction states, status colors, code blocks, bubbles, inputs,
  menus, sidebar, scrollbars, and diffs.
- **Original robot mark** — registered into `conversation.hero.brand.mark`, shown only on
  the blank-session hero; hand-written SVG that follows the active accent color.
- **One override layer** — colors are injected through `ctx.theme.overrideTokens()`.
  No host files modified, no DOM injection, no `document.body` writes. The layer is
  restacked after every `theme/change` so other skins cannot bury it.
- **Fully reversible** — disable or remove the bundle in Settings → Plugins and the
  previous appearance returns. No persisted state to clean up.
- **Plain JavaScript** — `client.js` is the whole client half. No build step, no runtime
  dependencies.

## Install

```sh
dsh plugin --profile desktop add git+https://github.com/saber0616/dsh-grok-night-theme.git
```

Restart `dsh web` afterwards and refresh the browser tab.

For a local checkout, point `plugin_manager`'s `install_bundle` at this directory.

## Uninstall

```sh
dsh plugin --profile desktop remove dsh-grok-night-theme
```

Or disable/remove the bundle in Settings → Plugins.

## Compatibility

Developed and verified against DeepSeek Harness `0.2.1-rc.5` (desktop profile), using
`ctx.theme.overrideTokens()` and the `conversation.hero.brand.mark` slot. It coexists with
other token-override skins: Grok Night re-stacks its own tokens after each theme change,
while tokens it does not set stay under host/other-plugin control. A wallpaper/glass skin
system may still contribute its own custom tokens; disable it for the pure Grok Night
canvas.

## Structure

| File | Purpose |
|---|---|
| `client.js` | Web Client module: token layer + robot mark |
| `index.js` | Host half; only gives the Loader a valid row |
| `cordis.patch.yml` | Inserts the `grok-night-theme` row |
| `locale/en.json`, `locale/zh.json` | Plugin-manager title and description |
| `icon.svg` | Original plugin icon |
| `DISCLAIMER.md` | Unofficial / trademark / asset notice |

## Customize

Every color lives in the `TOKENS` object in `client.js`, declared as `{ light, dark }`
pairs. Edit, reload the plugin, and the layer is applied as-is. New token keys only need
to be added to the same map; they are written to CSS variables verbatim.

## Credits and notice

- Palette inspired by the publicly documented **Grok Night / Grok Day** terminal schemes
  (for example [iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)
  and [Grok Theme for Raycast](https://github.com/szamski/grok-raycast)).
- No xAI product code, UI assets, fonts, or icons are included. The robot mark and all
  code are original.
- “Grok”, “Grok Bot”, and “GrokBot” are trademarks of their respective owners and are
  used only to describe the visual inspiration.

## License

[MIT](./LICENSE) © 2026 saber0616
