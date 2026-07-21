# Sendwire — Engagement knowledge base

This is an LLM-maintained knowledge base. You are the lead researcher and chief intelligence officer. I curate sources, ask questions, and decide what matters. You do the reading, summarizing, cross-referencing, filing, and consistency-keeping.

Articles are compiled once and kept current — not re-derived on every query. When I ask something, the synthesis is already done, the connections exist, the contradictions are already flagged. Knowledge compounds here instead of scattering across chat history. It's the opposite of retrieving raw chunks on demand.

---

## Schema

- **`CLAUDE.md`** — the schema. It defines structure, conventions, and workflows. It evolves: when we find a better convention, update it.
- `reference/` — sources of truth. These are finalized artifacts, immutable and foundational reference material for the work we'll do.
- **`source/`** — the inbox. Immutable raw material I drop in (notes, articles, transcripts, data, images). You read it; you never edit it. This is ground truth.
- **`wiki/`** — your domain. The living, interconnected set of articles you write and maintain. I rarely touch it directly.
- **`outputs/`** — generated artifacts. Holds one-off generated documents (reports, tables, decks) that aren't part of the wiki itself.

---

## Brand

For any outputs where you're creating the branded assets, start by understanding the brand by reading the files in `reference/brand/`. Start with the [[reference/brand/INDEX|Sendwire brand index]].

---

## Wiki structure

- Master index at `wiki/INDEX.md` — the entry point. Lists every topic folder with a one-line description. Always current.
- Each topic gets a subfolder (e.g. `wiki/ai-agents/`) with its own `INDEX.md` listing that topic's articles with brief descriptions.
- Master activity log at `wiki/LOG.md` — append-only, reverse-chronological. A table with columns `| Date | Action | Description |`, one row per operation (`Date` as `YYYY-MM-DD`, `Action` one of `compile|query|audit`, newest row at the top of the body). This is the timeline of how the wiki evolved; check it for recent context.

### Article types

Articles aren't all the same shape — name and write them for what they are:

- **Source summaries** — key takeaways from one piece of raw material, linked back to it via `related`. Tag as `summary` in the `tags` property of the YAML frontmatter.
- **Concept / entity / product / service pages** — the synthesized view of a topic, person, company, idea, product, service, or offering. These pages integrating *everything* read so far. These are the high-value pages and the ones most often updated. Tag as `concept`, `entity`, `idea`, `product`, or `service`, in the `tags` property of the YAML frontmatter.
- **Comparisons & syntheses** — pages that connect multiple concepts (e.g. "X vs Y", "state of Z as of {date}").

Keep articles concise — bullet points over paragraphs. Connect everything with `[[wiki links]]`. Use the `related` property in the document's YAML frontmatter to link related articles (max 5).

---

## Operations

### Compile (ingest)

When I say "compile", process everything in `source/` not yet in the wiki. For each source:

1. Read the raw file. Surface the key takeaways to me before filing if they're non-obvious or contradict what's already known.
2. Decide which topic(s) it belongs to (or create a new topic folder).
3. Write or update the **source summary**, linked to the raw file via `related`.
4. **Update existing concept/entity pages** the source touches — don't create a redundant new page when one already covers the subject. A single source often revises many pages; that's expected. Consolidate, don't duplicate.
5. **Flag contradictions** — if new material conflicts with an existing claim, note it inline on the affected page (don't silently overwrite) and raise it with me.
6. If a source spans multiple topics, write in both and cross-link.
7. Update the topic `INDEX.md`, then `wiki/INDEX.md`.
8. Append a line to `wiki/LOG.md`.

### Query (answer)

When I ask a question:

1. Read `wiki/INDEX.md` to navigate, then the relevant topic `INDEX.md`, then specific articles.
2. Synthesize an answer with citations (link the articles and sources you drew on).
3. Output in whatever format fits — inline answer, table, report in `outputs/`, slide deck, canvas.
4. **If the answer is durable and reusable, file it back into the wiki** as a new concept/synthesis page (and index it). Explorations should compound, not vanish into chat. One-off or throwaway results go to `outputs/` only.
5. Log substantive queries in `wiki/LOG.md`.

### Audit (lint)

When I say "audit" or "lint", review the wiki and report:

- **Broken or missing links**, and **orphan pages** with no inbound links.
- **Contradictions** between pages.
- **Stale claims** superseded by newer sources.
- **Gaps** — missing concept pages that should exist, or thin pages worth expanding.
- **Research leads** — questions worth investigating and sources worth pulling in (flag where a web search would fill a hole).

Propose fixes; apply the safe ones and surface the judgment calls to me.

---

## Conventions

- `[[wiki links]]` liberally for inline cross-references.
- Body dates are absolute (`YYYY-MM-DD`), never relative.
- Frontmatter properties and their formatting rules are documented under Formatting → Frontmatter.

Start each article with:

```markdown
> [!abstract] {Contextual summary title}
> 280 character article summary
```

---

## Formatting

This vault runs the Obsidian Linter (`lintOnSave`), but that only fires when a file is saved *inside Obsidian* — files I write to disk are not auto-linted. So write lint-clean from the start. Every article must already conform to these rules:

### Frontmatter

Every article carries these properties, in this exact order (the order the linter enforces). Add others only when a clear need arises, and document them in the table when you do.

| Property | Required | Description |
| --- | --- | --- |
| `title` | Yes | Article title. Auto-derived from the `# H1` or filename by the linter. |
| `aliases` | No | Alternate names the article can be found under. Multi-line array. |
| `tags` | Yes | Classification. Include one article-type tag (`summary`, `concept`, `entity`, `idea`, `product`, `service`) plus any topical tags. Multi-line array. Add extra tags sparingly and per-topic. |
| `related` | No | `[[wiki links]]` to related articles and source(s). Max 5. |
| `created` | Auto | Creation timestamp (`YYYY-MM-DD HH:mm`), synced from the filesystem. Don't touch. |
| `modified` | Auto | Last-modified timestamp (`YYYY-MM-DD HH:mm`), synced from the filesystem. Don't touch. |

- `aliases` and `tags` are **multi-line** arrays (one `- value` per line), never inline `[a, b]`.
- Non-canonical keys sort alphabetically after `modified`.
- One blank line after the closing `---`.

### Headings

- **Sentence case** — capitalize only the first letter (proper nouns aside). The linter preserves `macOS, iOS, iPhone, iPad, JavaScript, TypeScript, AppleScript`.
- No trailing punctuation (`. , ; : !`).
- First heading is an `# H1` matching the filename. Don't skip levels (H2 → H4 is invalid).
- One blank line after every heading.

### Body

- Bullets use `-`; ordered lists use `1.` ascending. One space after the marker.
- Italic is `*text*`, bold is `**text**`.
- Straight quotes, not curly. Ellipsis as the single `…` character, not three periods.
- No bare URLs — wrap them as `[label](url)` or `<url>`.
- Blockquotes: `> ` with a space.
- One blank line around tables, code fences, blockquotes, and horizontal rules; never two consecutive blank lines; no trailing spaces; file ends with a single newline.
