# Working on Zuhayrium

Read [DESIGN.md](DESIGN.md) before designing or implementing changes. It records the website's purpose, content model, constraints, references, and experiment criteria. Follow the user's current instructions when they change the scope or direction.

## Current repository

The site is built with [Eleventy](https://www.11ty.dev/), pinned to an exact version in `package.json`, from `src/` into `_site/`. `_site/` is deployed and is not committed.

- `src/blogs/`: essays. Each is plain HTML (or Markdown) with front matter: `title`, `standfirst`, `date`. `blogs.11tydata.json` applies the layout and the `writing` and `record` collections.
- `src/activities/`: record entries without a page. Each has front matter (`title`; `date`, which is the start and places the entry; optional `end`, `stamp` and `period`) and its note as content. `activities.11tydata.json` sets `permalink: false` and the `record` collection.
- `src/index.njk` and `src/writing.njk`: the record (essays and activities, grouped by period) and the writing list (essays only), both generated.
- `src/_includes/`: layouts. `base.njk` is the document shell; `article.njk` is the essay page.
- `src/css/main.css`, `src/404.html`, and root files such as `.htaccess` and `robots.txt`.
- `eleventy.config.js`:
  - date filters that keep the precision a date was written with (day, month, or year);
  - grouping into periods;
  - the `outline` filter, which adds heading ids and builds "On this page";
  - passthrough copy;
  - file-style URLs (`/blogs/x.html`).
- `templates/essay.html` and `templates/activity.html`: starter files. They sit outside `src/`, so they are never built.

`npm run build` builds the site, and `npm start` serves it with live reload at <http://localhost:8080>. There is no test runner. The starter files in `templates/` explain how to add essays and activities. The README belongs to the owner and stays brief, so keep workflow notes here, and keep them accurate as tooling changes.

Deployment is `.github/workflows/deploy.yml`, which runs only on pushes to `main`:

1. It builds with Eleventy.
2. It deploys `_site/` to the Cloudflare Pages project `zuhayrium` with Wrangler, which updates production at zuhayrium.com.

Other branches are never deployed, because Pages preview sites are public. Preview locally with `npm start`. The workflow needs the repository secrets `CLOUDFLARE_API_TOKEN` (an API token with the account permission Cloudflare Pages: Edit) and `CLOUDFLARE_ACCOUNT_ID`. Actions are pinned to commit SHAs. Update the SHA and its version comment together.

Treat the essays as dated sources of public content and writing style. So is the former About page, which is in git history. Confirm time-sensitive claims before presenting them as current. Do not infer new portfolio facts from private writing samples or fabricate missing content.

## Design work

- Follow the content and accessibility requirements in `DESIGN.md`.
- The selected design system, the chronological fieldbook chosen in November 2026, is recorded under "Design system" in `DESIGN.md`. Follow it for new pages. Propose and record changes there before implementing them.
- Authors write only page content and front matter. Lists, contents, and surrounding structure belong in layouts and `eleventy.config.js`, never in hand-maintained copies.
- Explain major design decisions using the actual content, audience, and reading task.
- Use real or explicitly identified fixture content. Support a one-line activity and a substantial project account in the same system.
- Preserve the owner's direct, curious, personal voice. Keep descriptions specific and factual.
- Use optional design skills selectively. One overall design direction should guide the work; accessibility and code review can be separate passes. No additional skill package is required by this repository.

## Engineering

- Produce static files that can be hosted without an application backend or database. Build-time templates and content processing are acceptable when useful.
- Keep core reading and navigation available without JavaScript. Use native links, buttons, headings, and form controls with appropriate semantics.
- Keep interactive code local to the pages and features that need it. A complex demonstration must not impose its dependencies on unrelated pages.
- Keep content easy to edit. Reuse actual repeated templates, metadata, and styles; avoid speculative abstractions and unnecessary dependencies.
- Keep CSS understandable: a small set of shared values, clear component responsibilities, and controlled selector specificity. Resolve conflicting rules at their source.
- Use clear names. Comments should explain reasoning, assumptions, or non-obvious algorithms. Remove dead code, obsolete comments, and unused assets introduced by the work.
- Keep changes focused. Do not overwrite unrelated work or reformat untouched parts of the repository.
- Publish only the intended public material, including in generated data, comments, maps, and assets. Only `_site/` (built from `src/`) is deployed, so keep templates, drafts, fixtures, and notes outside `src/`. Sparse entries need no special disclosure treatment.
- Document how to build, preview, and update the site when those procedures change. A fresh checkout should be understandable without conversation history.

## Parallel design experiments

When the user requests experiments with subagents, follow the shared specimen and evaluation process in `DESIGN.md`.

- The coordinating agent supplies the same content and scope to every experiment before parallel implementation starts.
- Each experiment owns `experiments/<concept-slug>/`, with an independently previewable entry page and a short `README.md`.
- Keep styles, scripts, and edits inside the assigned experiment directory. Coordinate shared fixtures before dispatch; treat them as read-only during parallel work.
- Keep the original site and other experiments intact. Promote an experiment into the main site when the user requests that step.
- Return the design hypothesis, entry path, preview instructions, tradeoffs, and verified or unverified checks. Give the coordinator enough evidence to compare the results.
- Do not turn one experiment's palette or layout into shared project guidance while alternatives are being explored.

This section describes how requested experiments should run. Writing or updating these guidelines does not itself start experiments.

## Verification

Use checks appropriate to the change. Documentation-only changes need link/path and diff review. Avoid introducing a test framework for a reversible content or style change.

For website changes:

- Preview the rendered pages with supported browser tools when available. Check narrow and wide layouts, long content, keyboard navigation, visible focus, enlarged text, and reduced motion as relevant.
- Check navigation, section anchors, image paths, and directly opening nested pages. Make sure core content survives unavailable scripts or optional embeds.
- Check heading structure, control labels, image descriptions, contrast, and media alternatives. Address actual problems rather than assuming a minimal appearance is accessible.
- Verify interactive behavior and edge cases. For a simulation, check the underlying model or algorithm as well as the controls and rendering.
- Run configured builds and relevant checks once tooling exists. Add meaningful tests for consequential logic; keep their maintenance proportional to what they protect.
- Inspect the final diff for unintended changes, duplication, CSS conflicts, dead code, and unnecessary dependencies.
- Report what was actually checked and any material gaps. Do not claim browser inspection, accessibility conformance, or test passes without evidence.

Use [Google's code-review criteria](https://google.github.io/eng-practices/review/reviewer/looking-for.html) as a useful review reference: design, functionality, complexity, naming, comments, and tests. Review visual quality and source quality separately.
