/**
 * Grok Night theme (GrokBot-inspired) — Web Client half.
 *
 * Grok Night is a warm-charcoal, amber-accented skin built from the Grok
 * Night / Grok Day palette family. It is applied as one `overrideTokens`
 * layer so the built-in light/dark preference keeps working; the layer is
 * restacked after any theme change so other skin layers cannot bury it.
 *
 * The only extra surface is an original robot mark in the empty-session
 * hero, which the conversation package exposes as a dedicated slot.
 */
window.__ModuleLoader__.load({
  id: 'dsh-grok-night-theme',
  factory(require) {
    const React = require('react')
    const h = React.createElement

    const SOURCE = 'dsh-grok-night-theme'
    const ACCENT = 'var(--dsw-alias-brand-primary, #e0af68)'

    /** Semantic alias tokens for Grok Night (dark) and Grok Day (light). */
    const TOKENS = {
      /* Surfaces */
      '--dsw-alias-bg-base': { light: '#f6f4ee', dark: '#101012' },
      '--dsw-alias-bg-layer-1': { light: '#fffdf8', dark: '#17181b' },
      '--dsw-alias-bg-layer-2': { light: '#f1eee6', dark: '#1c1e22' },
      '--dsw-alias-bg-layer-3': { light: '#e9e5da', dark: '#24262b' },
      '--dsw-alias-bg-module-platform': { light: '#ede9df', dark: '#1a1c20' },
      '--dsw-alias-bg-overlay': { light: '#fffdf8', dark: '#1b1d21' },
      '--dsw-alias-bg-skeleton': {
        light: 'rgba(27, 26, 23, 0.045)',
        dark: 'rgba(240, 238, 232, 0.045)',
      },
      '--dsw-menu-surface-fill': {
        light: 'rgba(255, 253, 248, 0.96)',
        dark: 'rgba(28, 30, 34, 0.96)',
      },
      '--dsw-alias-menu-group-header-fill': {
        light: 'rgba(255, 253, 248, 0.94)',
        dark: 'rgba(23, 24, 27, 0.94)',
      },
      '--dsw-specific-sidebar-fill': { light: '#efebe2', dark: '#0c0c0e' },
      '--dsw-specific-tip': {
        light: 'rgba(255, 253, 248, 0.97)',
        dark: 'rgba(28, 30, 34, 0.96)',
      },

      /* Type */
      '--dsw-alias-label-primary': { light: '#1b1a17', dark: '#f0eee8' },
      '--dsw-alias-label-secondary': { light: '#565249', dark: '#c3bfb5' },
      '--dsw-alias-label-tertiary': { light: '#7d786d', dark: '#9a958b' },

      /* Brand and actions */
      '--dsw-alias-brand-primary': { light: '#8a5a12', dark: '#e0af68' },
      '--dsw-alias-brand-primary-soft': {
        light: 'rgba(138, 90, 18, 0.10)',
        dark: 'rgba(224, 175, 104, 0.14)',
      },
      '--dsw-alias-brand-text': { light: '#fffdf8', dark: '#191307' },
      '--dsw-alias-button-primary-fill': { light: '#8a5a12', dark: '#e0af68' },
      '--dsw-alias-button-primary-hover': { light: '#744a0c', dark: '#ecc488' },
      '--dsw-alias-button-primary-dimmed': {
        light: 'rgba(138, 90, 18, 0.18)',
        dark: 'rgba(224, 175, 104, 0.20)',
      },
      '--dsw-alias-button-elevated-fill': { light: '#fffdf8', dark: '#1c1e22' },
      '--dsw-alias-button-tool-bar-fill': {
        light: 'rgba(27, 26, 23, 0.06)',
        dark: 'rgba(240, 238, 232, 0.07)',
      },
      '--dsw-alias-button-tool-bar-hover': {
        light: 'rgba(27, 26, 23, 0.11)',
        dark: 'rgba(240, 238, 232, 0.12)',
      },
      '--dsw-alias-interactive-bg-hover': {
        light: 'rgba(138, 90, 18, 0.08)',
        dark: 'rgba(224, 175, 104, 0.10)',
      },
      '--dsw-alias-interactive-bg-active': {
        light: 'rgba(138, 90, 18, 0.14)',
        dark: 'rgba(224, 175, 104, 0.17)',
      },
      '--dsw-alias-interactive-bg-hover-danger': {
        light: 'rgba(192, 53, 77, 0.12)',
        dark: 'rgba(247, 118, 142, 0.18)',
      },
      '--dsw-focus-ring-color': { light: '#8a5a12', dark: '#e0af68' },

      /* Hairlines */
      '--dsw-alias-border-l1': {
        light: 'rgba(27, 26, 23, 0.10)',
        dark: 'rgba(240, 238, 232, 0.08)',
      },
      '--dsw-alias-border-l2': {
        light: 'rgba(27, 26, 23, 0.16)',
        dark: 'rgba(240, 238, 232, 0.13)',
      },
      '--dsw-alias-border-l3': {
        light: 'rgba(27, 26, 23, 0.22)',
        dark: 'rgba(240, 238, 232, 0.18)',
      },
      '--dsw-alias-border-l4': {
        light: 'rgba(27, 26, 23, 0.28)',
        dark: 'rgba(240, 238, 232, 0.24)',
      },
      '--dsw-alias-border-l2-darkmode-thin': {
        light: 'rgba(27, 26, 23, 0.12)',
        dark: 'rgba(240, 238, 232, 0.10)',
      },
      '--dsw-alias-bg-mask-drop': {
        light: 'rgba(60, 54, 42, 0.38)',
        dark: 'rgba(5, 5, 6, 0.68)',
      },

      /* States */
      '--dsw-alias-state-business-primary': { light: '#2f5fb3', dark: '#7aa2f7' },
      '--dsw-alias-state-business-tertiary': {
        light: 'rgba(47, 95, 179, 0.12)',
        dark: 'rgba(122, 162, 247, 0.14)',
      },
      '--dsw-alias-state-success-primary': { light: '#2f7d3f', dark: '#9ece6a' },
      '--dsw-alias-state-warn-primary': { light: '#a05c00', dark: '#ff9e64' },
      '--dsw-alias-state-error-primary': { light: '#c0354d', dark: '#f7768e' },
      '--dsw-alias-state-idle-primary': { light: '#857f73', dark: '#8a877f' },

      /* Code and conversation */
      '--dsw-alias-markdown-code-block': {
        light: 'rgba(27, 26, 23, 0.055)',
        dark: 'rgba(8, 8, 9, 0.46)',
      },
      '--dsw-alias-markdown-inline-code': {
        light: 'rgba(138, 90, 18, 0.10)',
        dark: 'rgba(240, 238, 232, 0.08)',
      },
      '--dsw-alias-markdown-tag': {
        light: 'rgba(138, 90, 18, 0.14)',
        dark: 'rgba(224, 175, 104, 0.16)',
      },
      '--dsw-specific-bubble': {
        light: 'rgba(255, 253, 248, 0.98)',
        dark: 'rgba(26, 28, 32, 0.96)',
      },
      '--dsw-specific-bubble-highlight': {
        light: 'rgba(138, 90, 18, 0.14)',
        dark: 'rgba(224, 175, 104, 0.18)',
      },
      '--dsw-specific-input-major': {
        light: 'rgba(27, 26, 23, 0.055)',
        dark: 'rgba(240, 238, 232, 0.065)',
      },
      '--dsw-specific-menu': {
        light: 'rgba(255, 253, 248, 0.96)',
        dark: 'rgba(28, 30, 34, 0.96)',
      },
      '--dsw-specific-selector': {
        light: 'rgba(27, 26, 23, 0.07)',
        dark: 'rgba(240, 238, 232, 0.08)',
      },
      '--dsw-specific-sidebar-nav-item-active': {
        light: 'rgba(138, 90, 18, 0.13)',
        dark: 'rgba(224, 175, 104, 0.14)',
      },
      '--dsw-specific-sidebar-nav-item-hover': {
        light: 'rgba(27, 26, 23, 0.05)',
        dark: 'rgba(240, 238, 232, 0.05)',
      },

      /* Diff colors */
      '--dsw-alias-file-diff-added-bg': {
        light: 'rgba(47, 125, 63, 0.10)',
        dark: 'rgba(158, 206, 106, 0.12)',
      },
      '--dsw-alias-file-diff-added-gutter': {
        light: 'rgba(47, 125, 63, 0.16)',
        dark: 'rgba(158, 206, 106, 0.17)',
      },
      '--dsw-alias-file-diff-added-marker': { light: '#2f7d3f', dark: '#9ece6a' },
      '--dsw-alias-file-diff-deleted-bg': {
        light: 'rgba(192, 53, 77, 0.09)',
        dark: 'rgba(247, 118, 142, 0.12)',
      },
      '--dsw-alias-file-diff-deleted-gutter': {
        light: 'rgba(192, 53, 77, 0.15)',
        dark: 'rgba(247, 118, 142, 0.17)',
      },
      '--dsw-alias-file-diff-deleted-marker': { light: '#c0354d', dark: '#f7768e' },

      /* Scrollbars */
      '--dsw-alias-scrollbar-bg-l1': {
        light: 'rgba(27, 26, 23, 0.16)',
        dark: 'rgba(240, 238, 232, 0.10)',
      },
      '--dsw-alias-scrollbar-bg-l2': {
        light: 'rgba(27, 26, 23, 0.22)',
        dark: 'rgba(240, 238, 232, 0.15)',
      },
      '--dsw-alias-scrollbar-hover-l1': {
        light: 'rgba(27, 26, 23, 0.30)',
        dark: 'rgba(240, 238, 232, 0.22)',
      },
      '--dsw-alias-scrollbar-hover-l2': {
        light: 'rgba(27, 26, 23, 0.36)',
        dark: 'rgba(240, 238, 232, 0.28)',
      },
    }

    /**
     * Original Grok Night mark: a rounded terminal head with antenna, square
     * eyes and a status mouth. Geometry stays crisp at the host's requested
     * square edge, so the slot can size it without extra layout rules.
     * @param props - owner props (`size`, optional host `className`).
     * @returns the mark element.
     */
    function GrokNightMark(props) {
      const size = typeof props.size === 'number' && props.size > 0 ? props.size : 48
      return h(
        'svg',
        {
          viewBox: '0 0 64 64',
          width: size,
          height: size,
          className: props.className,
          role: 'img',
          'aria-label': 'Grok Night',
          style: { display: 'block', flex: 'none' },
        },
        h('rect', {
          x: 8, y: 16, width: 48, height: 38, rx: 13,
          fill: 'none', stroke: ACCENT, strokeWidth: 3.5,
        }),
        h('path', {
          d: 'M32 16V9', stroke: ACCENT, strokeWidth: 3.5, strokeLinecap: 'round',
        }),
        h('circle', { cx: 32, cy: 7, r: 3, fill: ACCENT }),
        h('rect', { x: 3, y: 29, width: 4, height: 12, rx: 2, fill: ACCENT }),
        h('rect', { x: 57, y: 29, width: 4, height: 12, rx: 2, fill: ACCENT }),
        h('rect', { x: 20, y: 28, width: 8, height: 8, rx: 2, fill: ACCENT }),
        h('rect', { x: 36, y: 28, width: 8, height: 8, rx: 2, fill: ACCENT }),
        h('path', {
          d: 'M24 44h16', stroke: ACCENT, strokeWidth: 3.5, strokeLinecap: 'round',
        }),
        h('circle', { cx: 32, cy: 44, r: 1.6, fill: 'var(--dsw-alias-brand-text, #191307)' }),
      )
    }

    return {
      inject: ['theme', 'slots'],
      apply(ctx) {
        let layer = null
        let painting = false

        // `overrideTokens` replaces this source's layer and restacks it on
        // top. Re-stacking after every theme change keeps Grok Night above other
        // skin layers; the guard absorbs the `theme/change` our own paint
        // emits, so this never recurses.
        const paint = () => {
          if (painting) return
          painting = true
          try {
            layer = ctx.theme.overrideTokens(SOURCE, TOKENS)
          } finally {
            painting = false
          }
        }

        ctx.effect(() => {
          paint()
          return () => {
            if (layer) {
              layer()
              layer = null
            }
          }
        })
        ctx.on('theme/change', paint)

        // The empty-session hero exposes a dedicated brand-mark slot. It is
        // currently unoccupied, so this adds the Grok Night mark without
        // replacing any shipped occupant.
        ctx.slots.inject('conversation.hero.brand.mark', () =>
          ctx.slots.register(
            { name: 'conversation.hero.brand.mark' },
            GrokNightMark,
          ),
        )
      },
    }
  },
})
