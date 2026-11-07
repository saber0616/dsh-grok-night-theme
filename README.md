# Grok Night · DSH 主题

> **GrokBot-inspired** 暖炭主题，为 DeepSeek Harness Web UI 而作。  
> 非官方社区项目，与 xAI / SpaceXAI / DeepSeek 均无隶属关系。

[English](./README.en.md) · [免责声明](./DISCLAIMER.md) · [MIT License](./LICENSE)

Grok Night 取 Grok Night / Grok Day 色板家族的暖炭底色、琥珀强调色与发丝边框，做成一枚
纯 token 的主题叠加层。它在**新会话空白页**放了一枚原创机器人标记，并把整套语义色统一到同一
种克制的暖黑气质里。

| 暗色 · Grok Night | 亮色 · Grok Day |
|---|---|
| 画布 `#101012`、抬升面 `#17181b` | 画布 `#f6f4ee`、纸面 `#fffdf8` |
| 文字 `#f0eee8` / `#c3bfb5` | 文字 `#1b1a17` / `#565249` |
| 琥珀强调 `#e0af68` | 深琥珀 `#8a5a12` |
| 状态：绿 `#9ece6a` · 橙 `#ff9e64` · 红 `#f7768e` | 状态：绿 `#2f7d3f` · 橙 `#a05c00` · 红 `#c0354d` |

## 特性

- **明暗双生**：`light` 走暖纸色 Grok Day，`dark` 走暖炭 Grok Night；跟随 DSH 的
  外观设置（Light / Dark / System），不劫持主题偏好。
- **一套完整语义层**：覆盖背景、层级、文字、品牌、按钮、边框、交互态、状态色、代码块、
  气泡、输入框、菜单、侧栏、滚动条、diff 等约 60 个 `--dsw-*` token。
- **原创机器人标记**：注册在 `conversation.hero.brand.mark`，只出现在空白会话页；SVG 手写，
  随当前强调色着色。
- **一枚叠加层**：全部色值通过 `ctx.theme.overrideTokens()` 注入；不改宿主文件、不注入 DOM、
  不写 `document.body`。`theme/change` 后自动重新置顶，避免被其他皮肤层压住。
- **可逆**：在「设置 → 插件」停用或移除本插件即整体还原；没有需要手动清理的持久状态。
- **纯 JavaScript 单文件**：`client.js` 即全部客户端逻辑，无构建步骤、无运行时依赖。

## 安装

### 从 GitHub 安装（推荐）

```sh
dsh plugin --profile desktop add git+https://github.com/saber0616/dsh-grok-night-theme.git
```

安装后重启 `dsh web`（或按你平时的方式重启 DSH），再刷新浏览器页面。

### 从本地目录安装

在 DSH 的 `plugin_manager` 中使用 `install_bundle`，target 指向本仓库目录：

```
install_bundle  target: /absolute/path/to/dsh-grok-night-theme
```

## 卸载

```sh
dsh plugin --profile desktop remove dsh-grok-night-theme
```

或在「设置 → 插件」里停用/移除本 bundle。停用后主题层随之移除，界面恢复之前的外观。

## 兼容性

- 面向 DeepSeek Harness Web Client，依赖 `ctx.theme.overrideTokens()` 与
  `conversation.hero.brand.mark` 槽位；在 DSH `0.2.1-rc.5` 的 desktop profile 上开发与验证。
- 与其它使用 `overrideTokens` 的皮肤插件可以共存：Grok Night 会在每次 `theme/change` 时
  重新置顶自己设置的 token；未设置的 token 仍由宿主或其他插件决定。
- 若同时启用了带壁纸/玻璃材质的皮肤系统，对方的自定义 token 仍可能参与；想要纯 Grok Night
  画布，可暂时停用其它皮肤插件。

## 结构

| 文件 | 作用 |
|---|---|
| `client.js` | Web Client 模块：token 叠加层 + 机器人标记 |
| `index.js` | Host 半边，仅提供 Loader 行 |
| `cordis.patch.yml` | 插入 `grok-night-theme` 插件行 |
| `locale/en.json`、`locale/zh.json` | 插件管理器的标题与描述 |
| `icon.svg` | 插件图标（原创） |
| `DISCLAIMER.md` | 非官方 / 商标与素材声明 |

## 自定义

所有色值集中在 `client.js` 的 `TOKENS` 对象里，按 `{ light, dark }` 成对声明。改完值后重新
加载插件（或重启 DSH Web）即可。新增 token 时只需追加同名键；主题层会原样写入 CSS 变量。

## 致谢与声明

- 配色灵感来自公开记录的 **Grok Night / Grok Day** 终端色板（如
  [iTerm2-Color-Schemes](https://github.com/mbadolato/iTerm2-Color-Schemes) 与
  [Grok Theme for Raycast](https://github.com/szamski/grok-raycast)）。
- 不含 xAI 的产品代码、界面素材、字体或图标；机器人标记与全部代码为原创。
- “Grok”“Grok Bot”“GrokBot”是其各自权利人的商标，本仓库仅在描述视觉风格时提及。

## License

[MIT](./LICENSE) © 2026 saber0616
