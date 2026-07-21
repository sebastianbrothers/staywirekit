# @sendwirekit/ui

## 0.2.1

### Patch Changes

- 46a7dc4: faq1/faq2 default items are now 8 distinct sendwire-voice Q&As each (previously one
  repeated item); testimonials1 defaults are 6 distinct testimonials across the three
  audiences. Mobile section rhythm tightened: spacing.section 80px → 64px (desktop
  unchanged at 160px).
- Updated dependencies [46a7dc4]
  - @sendwirekit/tokens@0.1.1

## 0.2.0

### Minor Changes

- All 30 blocks extracted from static-copy demos to props-with-defaults: every copy
  string (headings, body, badges, CTAs, nav labels, prices, quotes, item arrays) is
  now an optional prop defaulting to the current sendwire copy, with an exported
  `<Name>Props` interface per block. Rendered output is byte-identical when no props
  are passed; named exports unchanged. Re-branding a block is now a prop override or
  defaults edit — no markup edits.
