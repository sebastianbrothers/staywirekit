# @staywirekit/ui

## 0.3.0

### Minor Changes

- Registry completeness + SB-280 hardening:

  - Add the 5 missing shadcn registry components — `attachment`, `bubble`,
    `marker`, `message`, `message-scroller` (chat/app-interface set), with
    stories, relative imports, and `"use client"` where hooks are used.
    The kit now covers the full shadcn `registry:ui` set (61/61).
  - Destructive Button is now solid in dark mode too (`dark:bg-destructive/60`
    removed) — studio rule from Sharezies SB-280: destructive is solid +
    white, never tinted.

## 0.2.2

### Patch Changes

- Add `./fonts` export so theme-only consumers (apps with their own Tailwind
  entry, e.g. the staywire admin) can import the brand faces without pulling the
  kit's full `./styles` entry. Consumption seam is now: `tokens/preset.css` +
  `ui/theme` + `ui/fonts`.

## 0.2.1

### Patch Changes

- 46a7dc4: faq1/faq2 default items are now 8 distinct staywire-voice Q&As each (previously one
  repeated item); testimonials1 defaults are 6 distinct testimonials across the three
  audiences. Mobile section rhythm tightened: spacing.section 80px → 64px (desktop
  unchanged at 160px).
- Updated dependencies [46a7dc4]
  - @staywirekit/tokens@0.1.1

## 0.2.0

### Minor Changes

- All 30 blocks extracted from static-copy demos to props-with-defaults: every copy
  string (headings, body, badges, CTAs, nav labels, prices, quotes, item arrays) is
  now an optional prop defaulting to the current staywire copy, with an exported
  `<Name>Props` interface per block. Rendered output is byte-identical when no props
  are passed; named exports unchanged. Re-branding a block is now a prop override or
  defaults edit — no markup edits.
