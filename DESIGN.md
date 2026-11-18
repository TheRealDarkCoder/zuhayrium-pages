# Zuhayrium design brief

## What this website is for

This website is an expandable CV and a personal record of work, interests, and ongoing explorations. It should help someone understand what Zuhayr does, what he cares about, what he has contributed, and where they can explore the work further.

The record includes employment, research, projects, teaching, community involvement, volunteering, experiments, and personal hobbies. These can connect to each other. Professional context should be clear, and personal interests should have a proper place in the collection.

The experience should support three reading speeds:

- A quick introduction to the person and the main areas of interest.
- A scan through activities, experience, and supporting evidence.
- A longer exploration of a particular topic, project, or explanation.

The collection can be comprehensive while individual pages remain spacious. The homepage should introduce the person and provide useful starting points. The complete record can grow underneath it.

## What is decided and what is open

The content principles, accessibility requirements, and static publishing constraints in this document apply to all work on the site.

The visual direction was selected on 14 November 2026, after three parallel prototypes: an annotated archive, a chronological fieldbook, and a personal letter with a reference index. The owner chose the **chronological fieldbook** for the record, with a wider, more formal article layout for detail pages. It is described under [Design system](#design-system). Change it deliberately, by updating that section first. The prototypes were removed after the selection.

The essays remain evidence of the owner's voice. Historical biographical claims need confirmation before being presented as current facts.

## Content follows activities

An activity is the basic unit. A blog post, repository, photograph, video, news article, or interactive demonstration can document an activity.

An entry should make its subject and the owner's involvement understandable. Dates, collaborators, role, topic, and organizational context can be included where useful and available. Keep metadata proportional to the entry.

Support this range naturally:

| Published material | Suitable presentation |
| --- | --- |
| A single sentence | A complete entry in a list or index. |
| A short account with evidence | A paragraph with relevant links or media. |
| A substantial explanation | A dedicated page with narrative, references, images, and optional checkpoints. |
| A topic that benefits from exploration | A page with coded illustrations, simulations, animation, or other interactive material. |

These describe possibilities, not mandatory levels or visible badges. Entries can grow without needing a complete redesign. A short entry should feel finished at its intended level of detail.

Keep three questions separate:

1. What state was the work in?
2. How much material has been published about it?
3. When was that account accurate?

A finished contribution can have one sentence. An unfinished experiment can have a detailed explanation. Page length should never imply the importance, maturity, or openness of the underlying work.

## Evidence and discretion

Connect claims to available evidence: repositories, publications, demonstrations, photographs, recordings, project sites, coverage, and personal accounts. Explain the owner's specific contribution when that information is available.

Some work will have very little public detail. Give it an ordinary, concise entry. Avoid confidentiality labels, lock icons, redactions, teasers about undisclosed work, and empty sections inviting speculation about missing information.

Only material intended for publication belongs in the deployed files. Keep unpublished details out of HTML comments, client data, source maps, and assets too.

Never invent roles, qualifications, results, metrics, testimonials, awards, affiliations, or evidence. Private writing retrieved for style is not a source of publishable portfolio facts.

## Checkpoints and time

Ongoing work can have occasional dated notes describing what has been tried, what was learned, the state at that moment, and possible next steps.

Use language such as "Checkpoint — 12 November 2026" or "As of November 2026". Dates below are illustrative, not claims about actual work:

> Checkpoint — 12 November 2026
>
> The prototype works with recorded inputs. The next experiment is to compare its behaviour with noisier measurements.

Next steps record intentions at the time of writing. The site should remain useful through long gaps between updates.

- Distinguish the date of an activity, the date of a checkpoint, and the date a page was edited.
- A spelling correction must not imply that an old project status has been verified again.
- Preserve earlier checkpoints when they help explain the work's development.
- Use ongoing, completed, paused, or similar descriptions only when supported by the content and its date.
- Avoid live indicators, progress percentages, overdue states, and automatic warnings that a project is stale.

## Finding things

Let readers follow both time and subject. Chronology explains experience; topics reveal connections between interests and activities.

The exact navigation is experimental. It should provide clear routes to an introduction, the wider activity record, writing, and individual work where available. Use ordinary links, descriptive titles, stable addresses, and useful section anchors.

An activity can appear in several views without needing separately maintained copies of its account. A compact printable CV can eventually be another view of the collection.

Keep the complete record discoverable. Show representative work on the homepage without making the rest depend on knowing a hidden filter or navigating an elaborate interface. Add search or filtering when the collection warrants it; keep a useful browsable index underneath.

## Visual direction

Aim for a calm, personal, readable website with the directness of early HTML personal sites. Content and links should be immediately available. The identity should grow from the owner's material, interests, voice, and deliberate visual choices.

- Give prose a comfortable line length and line height. Around 60–75 characters per line is a useful starting point, subject to the chosen typeface and content.
- Build a clear hierarchy with size, weight, spacing, and alignment. Test the actual paragraphs, titles, dates, code, and links together.
- Keep links recognizable in their surrounding text. Hover should enhance an already understandable interface.
- Use whitespace to separate ideas and establish rhythm.
- Let illustrations and simulations use more width when their subject requires it.
- Keep recurring elements consistent while allowing different kinds of content to have appropriate layouts.
- Use a restrained palette with sufficient contrast. Both light and dark directions are available to explore.
- Choose typefaces for their actual role. System fonts, serif, sans serif, and monospace are all available choices.

A simple page still needs careful composition. Unusual decoration is optional. A memorable detail should have a relationship to the subject and leave the reading experience comfortable.

## Design system

This system was selected on 14 November 2026. It is implemented in `src/css/main.css` and the Eleventy layouts in `src/_includes/`. The README describes the content workflow.

### Why this direction

- A dated record reads like a familiar CV and shows how interests developed. A contents block at the top reaches any entry without scrolling through the years.
- Every date says what it marks, which keeps the activity, checkpoint, and edit dates distinct, as this brief requires.
- Detail pages use one wider reading column with formal apparatus (dates, contents, numbered references). Long essays and project accounts need comfortable reading more than they need a margin column.

### Page types

| Page | Body class | Structure |
| --- | --- | --- |
| Record (`src/index.njk`) | `record` | Introduction and routes; contents with one row per period; periods oldest first, entries in date order. Generated from essays (`src/blogs/`) and page-less activities (`src/activities/`). |
| Writing list (`src/writing.njk`, served at `/blogs/`) | `record` | Essays oldest first, using the same entry component. Generated. |
| Article (essays, project pages) | `article` | Trail; title; standfirst; dates list; "On this page"; optional latest-update box; sections; optional figures and numbered references; footer link back to the record. |
| Not found (`404.html`) | `record` | A short message and routes onward. |

### Type

- **Narrative:** a Century Schoolbook stack (Century Schoolbook, C059, TeX Gyre Schola, Georgia, serif). It is a textbook face drawn for legibility.
- **Dates:** the system monospace with tabular, lining figures, the logbook voice.
- **Body size:** 17px on record pages. Article pages use 19px, about 70 characters across 42rem.
- **Headings:** sized in em, so they scale with each page's body size.

### Colour

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#fbfbf8` | Page background |
| `--paper-deep` | `#f2f1eb` | Latest-update box, a targeted reference |
| `--ink` | `#1c1d1f` | Text |
| `--ink-soft` | `#565a60` | Glosses, edit dates, quiet notes |
| `--seen` | `#9c3b1e` | The second ink: dates that say when a description was true |
| `--link` | `#1f4ea3` | Links and the focus ring |
| `--rule` | `#d4d3cc` | Hairlines only, never the only cue |

The theme is light only. In the November 2026 review, every text colour measured at least 6:1 against its background.

### Layout

- **Record pages:** at 48em and wider, dates sit in a 9.5rem margin column to the left of the words. On phones they sit above each entry. The measure is 34rem.
- **Article pages:** one centred 42rem column. Figures use the full column width.

### Dates and time

- **Formats:** "9 Nov 2026" in stamps and the dates list; "9 November 2026" in prose and headings. Always include `<time datetime>`.
- **Plain ink:** when something happened, such as *Published*, *Started*, a date or range, or "Before 2015".
- **Second ink (`.seen`):** when a description was true, such as *As of*, *Account dated*, *Checkpoint*, or *Latest checkpoint*. The words carry the meaning; colour only reinforces it. When the record shows such dates, it includes a one-line legend defining them in words.
- **Page edited:** set in grey. It records wording changes only and never re-verifies a checkpoint.
- **Precision:** approximate dates stay approximate.
- **Avoid:** live indicators, "updated N days ago", progress bars, and status pills.

### Checkpoints

Ongoing work keeps its newest checkpoint in a dated "Latest update" box above the article, the way a news page puts an update above the story. Older checkpoints move, unchanged, to "Earlier checkpoints" at the end of the page. The record entry shows only when the work started; the checkpoint lives on the page.

### Components

| Component | Classes |
| --- | --- |
| Record entry | `.entry` with `.stamp`, a title, and `.note` |
| Period heading | `.period` |
| Contents | `.contents`, `.periods`, `.period-link` |
| Introduction routes | `.routes` |
| Aligned to the words column | `.column` |
| Breadcrumb | `.trail` |
| Article apparatus | `.standfirst`; `.dates` with `.seen`, `.edited`, `.gloss`; `.toc` |
| Latest update | `.update` with `.checkpoint` |
| References | `.references` with `.key` |
| Figure | `figure` with `figcaption` |
| Quiet note | `.quiet` |

The layouts generate the record, entry, contents, trail, dates, and "On this page" components.

The latest-update box, references, and figures are written by hand in a page's content when needed. Move a component into the layouts once several pages use it.

### Interactive figures

There are none yet. When one is added:

- **Loading:** load its script only on its page, as a classic deferred script file next to the page.
- **Without JavaScript:**
  - Pre-draw a meaningful default state in the HTML.
  - Show no control that cannot work: reveal controls from the script.
- **Controls:**
  - Use native controls with visible labels, and put the readout in an `<output>`.
  - Style a slider's track and thumb to at least 3:1 against the paper. The native track measures about 2:1 here.
- **Motion:** no autoplay or animation loops; respect reduced motion.
- **Verification:** check the underlying model or equation, not only the rendering.

### Accessibility baseline

- One `h1` per page, with headings in order and landmarks (`header`, `nav`, `main`, `footer`).
- A 3px link-blue focus ring on every link and control.
- Links underlined in running text.
- No horizontal scrolling at 360px.
- Text enlarged to 200% must not clip. One-word titles are capped by viewport width so they do not break mid-word.

## Avoid automatic design choices

Every major visual decision should have an explanation tied to this website. A list of forbidden fonts or colors cannot establish an identity.

Watch for these patterns when they appear without a content-based reason:

- Large generic introductions that delay access to useful material.
- Identical cards imposed on activities of very different lengths.
- Decorative icons, numbering, labels, arrows, and badges attached to every section.
- Gradients, glass effects, shadows, background patterns, and repeated entrance animations added as a default finishing pass.
- A cream-and-serif editorial theme or a dark terminal theme selected merely because it looks distinctive in isolation.
- Stock-like imagery, invented statistics, and abstract graphics used to fill space where actual work should appear.

Each of these devices can serve a real purpose. Keep it when the reason is specific and the result works. Native browser conventions and familiar layouts remain useful.

A useful critique question: if the name and text were replaced with another person's, which design choices would still reveal something about this owner's work and way of thinking?

## Writing and personality

Use concrete descriptions and plain language. Preserve the owner's curiosity, directness, and occasional humor. Let personal voice coexist with precise accounts of roles and contributions.

The existing About page and essays provide examples of that voice. Their old facts and opinions remain dated material. Avoid filling gaps with generic professional slogans or rewriting everything into a uniform promotional tone.

Interface labels should say where a link goes or what a control does. A paragraph, caption, or label should earn the space it takes.

## Interaction and accessibility

Interaction should help someone navigate, understand, inspect, or experiment. A topic can justify a complex simulation or explanation. The surrounding website should remain easy to use.

- Keep core text, navigation, and evidence links available without JavaScript.
- Use semantic HTML, meaningful headings, visible keyboard focus, and descriptive links.
- Keep content readable on narrow screens and when text is enlarged. Handle long titles, URLs, code, and captions without clipping essential information.
- Give controls accessible names and keyboard operation. Provide alternatives to pointer-only gestures where possible.
- Respect reduced motion. Give readers control over sustained animation and meaningful media.
- Supply alt text, captions, transcripts, or descriptions as appropriate to the medium.
- Accompany visual demonstrations with an explanation and a useful fallback where feasible. A simulation's static explanation should remain available if the interactive part fails.
- Check contrast, focus, zoom, and actual navigation separately from visual taste. Restrained styling still needs to be legible.

## Publishing and maintenance

The result must be deployable as static files to a host such as Cloudflare Pages. The core website should run without an application backend, database, or runtime content service.

A build step, reusable templates, content files, and small shared styles are acceptable. Pick tools to reduce maintenance. Adding a one-line activity or a checkpoint should not require layout work.

Load interactive code on the pages that use it. A sophisticated demonstration can have its own implementation and dependencies. Browser-side computation, illustrations, video, and static datasets can provide rich presentation within this publishing model. Features that need external services should remain optional and leave the main account readable.

## Experiments with subagents

Experiments should compare genuinely different ideas about organizing and presenting this material. Changing only colors or typefaces is a limited comparison.

Before dispatching parallel work, the coordinating agent should agree on one shared content specimen and give it to every experiment. Use supplied material and existing public content. If a necessary example does not exist yet, use the same neutral fictional fixture across experiments and label it in the experiment notes. Keep dated biographical source material identified as such.

The shared specimen should exercise:

| Case | What the experiment needs to demonstrate |
| --- | --- |
| A short introduction | Who the owner is and where readers can go next. |
| A one-line activity | A sparse entry that feels complete. |
| A contribution with evidence | A clear role, short explanation, and a few meaningful links. |
| An ongoing experiment | A dated checkpoint and possible next step. |
| A substantial page | Comfortable prose, a figure and caption, section links, and references. |
| An interactive figure | A small real interaction, labelled controls, and an accompanying explanation. |

Use only publicly shareable text for the sparse entry. Its formatting should not hint at an underlying reason for brevity.

For each subagent experiment:

1. State a short design hypothesis and the reader benefit it tests.
2. Work inside `experiments/<concept-slug>/`. Keep styles and scripts scoped to that experiment. Use relative links and an independently previewable entry page.
3. Keep the original site and other experiments intact. Coordinate any shared fixtures before parallel edits.
4. Use the shared content, functional scope, and evaluation criteria. Keep individual implementation tooling as small as the experiment allows.
5. Include a brief `README.md` with the concept, references and borrowed qualities, preview instructions, fixture sources, tradeoffs, and checks actually performed.
6. Review the rendered result when browser tools are available. Record what could not be verified.

Compare results using these questions:

- Can a newcomer understand the person and find relevant work quickly?
- Does the presentation accommodate both sparse and substantial entries?
- Are evidence, roles, dates, and checkpoint meaning clear?
- Is reading comfortable on a phone and a wide screen?
- Can the site be used with a keyboard and enlarged text?
- Does its identity relate to this person's material?
- Can another activity be added easily?
- Is the static output and interactive code proportionate to the experience?

Review design and implementation separately. Attractive rendering alone cannot establish code quality or the correctness of a simulation. Experimental choices become shared design rules when a direction is selected and documented.

## References and what to borrow

| Reference | Relevant quality |
| --- | --- |
| [Dennis Ritchie's Bell Labs material](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/) | Concise annotations connecting work, artifacts, history, and personal context. |
| [Bret Victor](https://worrydream.com/) | Professional work, experiments, and creative interests represented together. |
| [Julia Evans's projects](https://jvns.ca/projects/) | Plain descriptions connected to tools, writing, documentation, and repositories. |
| [Maggie Appleton's garden](https://maggieappleton.com/garden) | Topics and material at different stages of development. |
| [Derek Sivers's Now page](https://sive.rs/now) | A dated account of present activity at a human publishing pace. |
| [Bartosz Ciechanowski's Gears](https://ciechanow.ski/gears/) | Controlled interactive illustrations integrated into an explanation. |
| [Nicky Case](https://ncase.me/) | Playable explanations alongside writing, talks, and personal interests. |
| [Gwern's design notes](https://gwern.net/design) | Typography and rich hypertext on a statically published site; borrow selectively given its implementation complexity. |

The owner's Linus Torvalds reference also informs the preference for direct personal HTML sites. The Helsinki page could not be inspected during the initial research.

Useful process references:

- [Anthropic frontend-design](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md): subject-specific visual choices and self-critique.
- [Impeccable](https://impeccable.style/designing/): focused critique, refinement, and implementation audits.
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines): selective review of interaction and implementation details.
- [W3C page structure guidance](https://www.w3.org/WAI/tutorials/page-structure/): meaningful, navigable document structure.

External references and optional skills support judgment. This brief and the user's current instructions govern the website.
