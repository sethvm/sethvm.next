# Case Study Layout Rework — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the approved Free Trial layout redline (findings #1–#6) across the shared case-study component system, validated on `/free-trial`.

**Architecture:** The case-study layout is driven by shared components (`Section`, `FrostedGlass`, `Banner`, `SectionInner`, `Image`) rendered as siblings inside `<main>` (the `Wrapper`). We introduce shared **design tokens** (`styles.scss`) and a **site-wide type ramp** (`globals.scss`), then unify every top-level block onto **one centered content container with a single left edge and a capped text measure** (the "spine"). Decorative elements are made honest (solid card, retired stripe), spacing is put on an 8-pt scale, and the hero is strengthened. The interactive sticky section-nav (the wayfinding half of #6) is split into a follow-up plan — it is an IntersectionObserver subsystem, not a visual-layout change.

**Tech Stack:** Next.js 16 (Pages Router), React 19, TypeScript, Sass (CSS Modules `*.module.scss` + one global `globals.scss` + shared partial `styles.scss`). No test runner — verification is visual/computed-geometry via the Claude Preview tooling (see Verification Protocol).

---

## Scope, assumptions & decisions (READ FIRST — confirm or correct before execution)

These follow your 7 rules. Flagged because the plan is built on them:

1. **Shared components ⇒ site-wide by construction.** Editing `Section`/`FrostedGlass`/etc. changes **all five case studies** (`free-trial`, `paywall-redesign`, `pick-history`, `patient-support-app`, `payment-portal`) and, for `Section`, the **About** page. That is intended (Finding #1 is _consistency_). `/free-trial` is the primary validation page; the others + Home + About are **regression-checked** at every breakpoint (Rule #4).
2. **Global stylesheet = type hierarchy, line-height, and shared tokens only** (Rule #2). Per-block layout lives in each component's `*.module.scss` (Rule #3). New components (`Stat`) get their own module.
3. **Desktop-only layout changes are gated behind `@media (min-width: 992px)`** so Tablet (768–991) and Mobile (<768) render identically to today (Rule #4). The **type ramp (#3)** and **spacing scale (#5)** intentionally apply at all breakpoints (the redline tags them "All"); these are verified for regressions on every breakpoint and page.
4. **The "spine" base is a centered container, not the asymmetric rail.** A centered container fully delivers #1 (one left edge + capped measure) and #2 (kills the dead asymmetric gutter; large screens scale by symmetric margins, not one-sided waste). The **left rail is purely the vehicle for the sticky section-nav (#6)** — so it arrives with that follow-up. No empty rail in the meantime.
5. **`FrostedGlass` keeps its name** (renaming touches imports on 5 pages = churn/risk). Its styling becomes a solid card; a code comment documents this (Rule #6). Rename can be a later cleanup.
6. **Page-markup changes (Stat usage, hero) are done on `/free-trial` only in this iteration** (Rule #7 — the spec is the Free Trial page). Task 11 lists the exact, identical follow-up edits for the other four case studies so they can be applied immediately after sign-off.
7. **Commits:** one commit per task on the `layout-refactor` branch (already checked out). `npm run format` runs before every commit (Rule #5).

**Open question for you:** Fold the sticky section-nav (#6 wayfinding) into this plan, or keep it as the recommended follow-up? Plan currently delivers **#1, #2, #3, #4, #5 in full + the hero half of #6**.

---

## Verification Protocol (referenced by every task — no test runner exists)

Run this after each code change. It is the concrete form of Rule #4.

**Setup (once per session):**

```
preview_start(name="next-dev")        # config already in .claude/launch.json
preview_list()                        # note the serverId
```

**Per task — at EACH width below, screenshot + assert:**

| Width × Height | Breakpoint band  | Must look/measure like                                     |
| -------------- | ---------------- | ---------------------------------------------------------- |
| 375 × 812      | Mobile (<768)    | **Unchanged** from `main` unless the task is tagged All-BP |
| 820 × 1100     | Tablet (768–991) | **Unchanged** from `main` unless tagged All-BP             |
| 1280 × 900     | Desktop (≥992)   | The task's intended change                                 |
| 1440 × 900     | Desktop          | The task's intended change + measure cap behavior          |

Commands per width:

```
preview_resize(serverId, width=W, height=H)
preview_eval(serverId, "(()=>{document.querySelector('main').style.transform='';scrollTo(0,0);return document.readyState})()")
preview_screenshot(serverId)                       # eyeball
preview_inspect(serverId, "<selector>", ["<props>"])  # assert computed values
```

For content below the fold, use the transform trick: `preview_eval(serverId, "document.querySelector('main').style.transform='translateY(-<N>px)'")` then nudge height by 1px (`preview_resize`) to force a fresh capture.

**Regression sweep (tasks that touch globals or shared components):** repeat the desktop screenshot on `/`, `/about`, and `/paywall-redesign`.

**Build gate (every task):**

```
npm run format
npm run lint        # expect: no new errors
npm run build       # expect: compiles, "Compiled successfully"
```

**Geometry assertion helper** (used to prove the "single spine"):

```
preview_eval(serverId, `(()=>{const vw=innerWidth;const L=s=>{const e=[...document.querySelectorAll(s)][0];if(!e)return null;return +(e.getBoundingClientRect().left/vw*100).toFixed(1)};return {section:L('[class*=Section-module][class*=container]'),frosted:L('[class*=FrostedGlass-module][class*=container]'),banner:L('[class*=Banner-module][class*=container]')}})()`)
```

---

## File map

**Modify (shared / global):**

- `src/styles/styles.scss` — add tokens (breakpoints, 8-pt spacing scale, spine metrics). _(Task 1)_
- `src/styles/globals.scss` — type ramp + line-heights (decouple `h4` from `strong`). _(Task 2)_
- `src/components/Wrapper/Wrapper.module.scss` — centered content container at ≥992. _(Task 4)_
- `src/components/Content/Section.module.scss` — single left edge + capped measure at ≥992. _(Task 5, Task 9)_
- `src/components/Content/FrostedGlass.module.scss` — align to spine (Task 6) + solid card (Task 7) + spacing tokens (Task 9).
- `src/components/Content/SectionInner.module.scss` — align inner text to measure at ≥992. _(Task 6)_
- `src/components/Content/Banner.module.scss` — fill container at ≥992 (Task 6) + spacing tokens (Task 9).
- `src/components/BlueBlock/BlueBlock.module.scss` — hide stripe on case studies. _(Task 8)_
- `src/components/NavBar/NavBar.tsx` + `NavBar.module.scss` — page-aware route color. _(Task 8)_

**Create:**

- `src/components/Content/Stat.tsx` + `Stat.module.scss` — large-numeral impact metric. _(Task 3)_
- `src/components/Content/Hero.module.scss` — hero stat-callout row (Task 10). _(Task 10 also edits `free-trial.tsx`)_

**Modify (page markup, free-trial only this iteration):**

- `src/pages/free-trial.tsx` — Stat usage (Task 3), hero callouts (Task 10).

---

## Task 1: Add shared design tokens

**Files:**

- Modify: `src/styles/styles.scss` (append after existing color vars, before `@mixin font-display`)

- [ ] **Step 1: Add tokens**

Append to `src/styles/styles.scss` after the `// hover palette` block (line ~18):

```scss
// ---- breakpoints (md/lg already used across modules; xl used by Home) ----
$bp-md: 768px;
$bp-lg: 992px;
$bp-xl: 1200px;

// ---- spacing scale (8-pt rhythm) ----
$space-1: 8px;
$space-2: 16px;
$space-3: 24px;
$space-4: 32px;
$space-5: 48px;
$space-6: 64px;
$space-7: 96px;

// semantic vertical rhythm (Finding #5). Section gaps scale down per breakpoint.
$gap-block: $space-4; // 32px — spacing within a section
$gap-section-sm: $space-5; // 48px — between sections, mobile
$gap-section-md: $space-6; // 64px — between sections, tablet
$gap-section-lg: $space-7; // 96px — between sections, desktop

// ---- layout spine (Finding #1) ----
$page-max: 1080px; // centered content container; banners/cards/figures fill this
$measure: 680px; // ~66ch cap for body text at 17px base (Finding #1 measure)
$card-pad-lg: 48px; // FrostedGlass interior padding at desktop
```

- [ ] **Step 2: Format + build gate**

```
npm run format
npm run build
```

Expected: compiles successfully. **No visual change** (tokens are unused).

- [ ] **Step 3: Verify no visual diff**

Run Verification Protocol screenshots at 1440 on `/free-trial`. Expected: pixel-identical to `main`.

- [ ] **Step 4: Commit**

```bash
git add src/styles/styles.scss
git commit -m "chore(styles): add layout/spacing/type design tokens"
```

---

## Task 2: Site-wide type ramp (Finding #3 — PRIORITY) · All breakpoints

Fills the H3→body cliff and separates subheads from body. **Decouples `h4` from `strong`** so inline bold and `<Strong>` callouts stay body-sized while subheads grow.

**Files:**

- Modify: `src/styles/globals.scss` (lines ~107–135, the `h1`–`p` size rules)

- [ ] **Step 1: Replace the heading/body size block**

Find (globals.scss, currently):

```scss
h1 {
    font-size: 3em;
}

h2 {
    font-size: 2.75em;
    margin-bottom: 0.2em;
}

h3 {
    font-size: 2.4em;
    margin-bottom: 0.2em;
}

h4,
strong {
    font-size: 1.15em;
}

h5 {
    font-size: 1em;
}

p {
    font-size: 1.15em;
    margin-top: 0;
    margin-bottom: 1em;
    color: styles.$body-font-color;
}
```

Replace with:

```scss
// h1 is Home-only ("G'day, I'm Seth."); left unchanged to keep Home stable (out of spec scope).
h1 {
    font-size: 3em;
}

// Finding #3: fluid modular ramp. Sizes are em (relative to 17px body), fluid via clamp+vw.
// Display tier — case-study page titles. ~44px (mobile) -> ~59px (desktop).
h2 {
    font-size: clamp(2.6em, 1.6em + 3.2vw, 3.5em);
    line-height: 1.08;
    margin-bottom: 0.2em;
}

// Section titles. ~29px -> ~39px. Fills the TOP of the old cliff.
h3 {
    font-size: clamp(1.7em, 1.2em + 1.8vw, 2.3em);
    margin-bottom: 0.3em;
}

// Subsection headings. 24.65px — clearly ABOVE body (19.5px). Fills the BOTTOM of the cliff.
// NOTE: intentionally decoupled from `strong` so inline bold + callouts stay body-sized.
h4 {
    font-size: 1.45em;
}

h5 {
    font-size: 1em;
}

// Inline emphasis / <Strong> callouts — keep at body size (was grouped with h4).
strong {
    font-size: 1.15em;
}

p {
    font-size: 1.15em;
    margin-top: 0;
    margin-bottom: 1em;
    color: styles.$body-font-color;
}
```

- [ ] **Step 2: Format + build gate**

```
npm run format
npm run lint
npm run build
```

Expected: compiles; no lint errors.

- [ ] **Step 3: Verify ramp on /free-trial (All breakpoints)**

Verification Protocol at 375 / 820 / 1280 / 1440. Assert the ramp is distinct (no two adjacent levels equal):

```
preview_inspect(serverId, "h2", ["fontSize"])   # ~44px @375, ~59px @1440
preview_inspect(serverId, "h3", ["fontSize"])   # ~29px -> ~39px
preview_inspect(serverId, "h4", ["fontSize"])   # ~24.7px (constant)
preview_inspect(serverId, "p",  ["fontSize"])   # ~19.5px (constant)
```

Expected: `h2 > h3 > h4 > p` at every width; `h4 ≠ p`.

- [ ] **Step 4: Regression sweep — inline bold & callouts did NOT grow**

On `/free-trial` desktop, inspect a `.bold` label and a `<strong>` callout:

```
preview_inspect(serverId, ".bold", ["fontSize"])     # expect ~19.5px (unchanged)
preview_inspect(serverId, "[class*=IndentInner] strong", ["fontSize"])  # expect ~19.5px
```

Then desktop screenshots of `/`, `/about`, `/paywall-redesign`. Expected: Home greeting unchanged (h1 untouched); About/Card titles unchanged (locally overridden); paywall titles follow the new ramp.

- [ ] **Step 5: Commit**

```bash
git add src/styles/globals.scss
git commit -m "feat(type): fluid modular type ramp; decouple h4 subheads from inline strong (#3)"
```

---

## Task 3: `Stat` component for impact metrics (Finding #3 — PRIORITY) · All breakpoints

Gives headline metrics their own large-numeral style so they dominate. New component + module (Rule #3).

**Files:**

- Create: `src/components/Content/Stat.tsx`
- Create: `src/components/Content/Stat.module.scss`
- Modify: `src/pages/free-trial.tsx` (Impact section, lines ~289–297)

- [ ] **Step 1: Create `Stat.module.scss`**

```scss
@use '../../styles/styles';

// Finding #3: dedicated "stat" style for headline impact metrics.
// Large Gilroy numeral + readable label, on the gold accent rule (reuses IndentInner motif).
.container {
    padding-left: 16px;
    border-left: 5px solid styles.$secondary-color;
    margin-bottom: styles.$space-3; // 24px
}

.value {
    display: block;
    font-family: styles.$font-bold;
    color: styles.$primary-color;
    font-size: clamp(2.75em, 2em + 3.5vw, 4.4em); // ~47px -> ~75px
    line-height: 1;
    margin: 0;
}

.label {
    display: block;
    font-family: styles.$font-medium;
    color: styles.$default-font-color;
    font-size: 1.15em;
    margin-top: 6px;
}
```

- [ ] **Step 2: Create `Stat.tsx`**

```tsx
// Stat — headline impact metric (Finding #3).
// Renders a large primary-color value with a supporting label.
// Place where IndentInner metric headings were previously used.
import styleStat from './Stat.module.scss';

interface Props {
    value: string; // e.g. "34%"
    children: React.ReactNode; // supporting label, e.g. "more subscription purchases"
}

const Stat = ({ value, children }: Props) => (
    <div className={styleStat.container}>
        <span className={styleStat.value}>{value}</span>
        <span className={styleStat.label}>{children}</span>
    </div>
);

export default Stat;
```

- [ ] **Step 3: Use `Stat` in the Impact section of `free-trial.tsx`**

Add the import (after the other Content imports, ~line 10):

```tsx
import Stat from '../components/Content/Stat';
```

Find the Impact block (lines ~289–297):

```tsx
            <IndentInner>
                <Heading type={4}>34% more subscription purchases</Heading>
            </IndentInner>
            <IndentInner>
                <Heading type={4}>27% more invoices created</Heading>
            </IndentInner>
            <IndentInner>
                <Heading type={4}>10% skew towards higher-tier subscription packages</Heading>
            </IndentInner>
```

Replace with:

```tsx
            <Stat value='34%'>more subscription purchases</Stat>
            <Stat value='27%'>more invoices created</Stat>
            <Stat value='10%'>skew towards higher-tier subscription packages</Stat>
```

- [ ] **Step 4: Format + build gate**

```
npm run format
npm run lint
npm run build
```

- [ ] **Step 5: Verify metrics dominate (All breakpoints)**

Verification Protocol; transform to the Impact section (~`translateY(-9080px)` at 1440, then resize-nudge).

```
preview_inspect(serverId, "[class*=Stat-module][class*=value]", ["fontSize","color"])
```

Expected: value ~47px @375 → ~75px @1440, color `rgb(0, 64, 128)`; visually the loudest type on the page. Labels readable beneath.

- [ ] **Step 6: Commit**

```bash
git add src/components/Content/Stat.tsx src/components/Content/Stat.module.scss src/pages/free-trial.tsx
git commit -m "feat(stat): large-numeral impact metric style on Free Trial (#3)"
```

---

## Task 4: Centered content container (Finding #1/#2 — PRIORITY) · Desktop ≥992 only

Narrows `<main>` to a centered `$page-max` column on desktop, so every block can share one edge. Mobile/Tablet untouched.

**Files:**

- Modify: `src/components/Wrapper/Wrapper.module.scss`

- [ ] **Step 1: Add max-width + side padding to the ≥992 rule**

Find:

```scss
.container {
    min-height: 65vh;
    margin: 148px auto 80px auto;

    @media (min-width: 992px) {
        margin: 196px auto 80px auto;
    }
}
```

Replace with:

```scss
@use '../../styles/styles';

.container {
    min-height: 65vh;
    margin: 148px auto 80px auto;

    // Finding #1/#2: on desktop, constrain to a centered content container so all
    // blocks can share one left edge and the canvas scales by symmetric margins
    // (not the old one-sided dead gutter). Mobile/tablet are unaffected.
    @media (min-width: styles.$bp-lg) {
        max-width: styles.$page-max; // 1080px (overrides the global main max-width:1920)
        margin: 196px auto 80px auto;
        padding-left: 24px;
        padding-right: 24px;
    }
}
```

- [ ] **Step 2: Format + build gate** — `npm run format && npm run build`

- [ ] **Step 3: Verify (Desktop changes; Mobile/Tablet unchanged)**

- 375 / 820: screenshots **identical to `main`** (no `max-width` below 992).
- 1280 / 1440: `<main>` is centered, ~1080px wide.

```
preview_inspect(serverId, "main", ["maxWidth","marginLeft","paddingLeft"])  # maxWidth 1080px @1280
```

Note: blocks inside will look misaligned still (fixed in Tasks 5–6) — that's expected here.

- [ ] **Step 4: Regression** — desktop screenshots of `/about`, `/paywall-redesign` (both now centered to 1080). `/` unchanged (Wrapper applies `.container` only to non-home).

- [ ] **Step 5: Commit**

```bash
git add src/components/Wrapper/Wrapper.module.scss
git commit -m "feat(layout): centered 1080px content container on desktop (#1/#2)"
```

---

## Task 5: `Section` onto the spine (Finding #1 — PRIORITY) · Desktop ≥992 only

Removes the 40%-wide / 22%-left-offset desktop rule; left-aligns text to the container edge and caps the measure.

**Files:**

- Modify: `src/components/Content/Section.module.scss`

- [ ] **Step 1: Replace desktop width/offset with spine + measure**

Find:

```scss
.container {
    width: 78%;

    @media (min-width: 768px) {
        width: 75%;
    }

    @media (min-width: 992px) {
        width: 40%;
    }
}

.defaultMargins {
    margin: 96px auto 32px;

    @media (min-width: 768px) {
        margin: 72px auto 36px;
    }

    @media (min-width: 992px) {
        margin: 72px 0 40px 22%;
    }
}

.endMargins {
    margin: 96px auto 132px;

    @media (min-width: 768px) {
        margin: 72px auto 102px;
    }

    @media (min-width: 992px) {
        margin: 72px 0 100px 22%;
    }
}
```

Replace with:

```scss
@use '../../styles/styles';

.container {
    width: 78%;

    @media (min-width: styles.$bp-md) {
        width: 75%;
    }

    // Finding #1: on desktop, fill the centered container but cap text to one measure,
    // left-aligned -> every Section shares the container's left edge.
    @media (min-width: styles.$bp-lg) {
        width: 100%;
        max-width: styles.$measure; // 680px (~66ch)
    }
}

.defaultMargins {
    margin: 96px auto 32px;

    @media (min-width: styles.$bp-md) {
        margin: 72px auto 36px;
    }

    // left-aligned to the container edge (no more 22% offset)
    @media (min-width: styles.$bp-lg) {
        margin: 72px auto 40px 0;
    }
}

.endMargins {
    margin: 96px auto 132px;

    @media (min-width: styles.$bp-md) {
        margin: 72px auto 102px;
    }

    @media (min-width: styles.$bp-lg) {
        margin: 72px auto 100px 0;
    }
}

// replaces a single <br/> between the first and second children
.gap > :first-child + * {
    margin-top: 1em;
}
```

(Vertical numbers stay here for now; Task 9 swaps them for tokens.)

- [ ] **Step 2: Format + build gate** — `npm run format && npm run build`

- [ ] **Step 3: Verify single edge (Desktop; Mobile/Tablet unchanged)**

- 375 / 820: identical to `main`.
- 1280 / 1440: run the **Geometry assertion helper**. Expected: `section` left % equals the container's inner-left for all sections; text wraps at ~680px (`preview_inspect(serverId,"[class*=Section-module][class*=container]",["maxWidth"])` → `680px`).

- [ ] **Step 4: Commit**

```bash
git add src/components/Content/Section.module.scss
git commit -m "feat(layout): Section shares one left edge + capped measure on desktop (#1)"
```

---

## Task 6: `FrostedGlass`, `SectionInner`, `Banner` onto the spine (Finding #1 — PRIORITY) · Desktop ≥992 only

Figures and cards fill the container width but start at the **same left edge** as text.

**Files:**

- Modify: `src/components/Content/FrostedGlass.module.scss`
- Modify: `src/components/Content/SectionInner.module.scss`
- Modify: `src/components/Content/Banner.module.scss`

- [ ] **Step 1: FrostedGlass — fill container at ≥992**

In `FrostedGlass.module.scss`, find:

```scss
@media (min-width: 992px) {
    width: 75%;
    border-radius: 10px;
}
```

Replace with:

```scss
@media (min-width: 992px) {
    width: 100%; // fill the centered container; left edge matches Section (#1)
    border-radius: 10px;
    padding: 40px 48px; // interior padding so inner text/figures inset consistently
}
```

(The base `.container` keeps `padding: 24px 0` for mobile/tablet — leave it.)

- [ ] **Step 2: SectionInner — cap inner text to measure at ≥992**

In `SectionInner.module.scss`, find:

```scss
@media (min-width: 992px) {
    width: 64%;
    margin-left: 10%;
}
```

Replace with:

```scss
@media (min-width: 992px) {
    width: 100%;
    max-width: 680px; // same measure as Section; left edge = card interior-left
    margin-left: 0;
}
```

- [ ] **Step 3: Banner — fill container at ≥992**

In `Banner.module.scss`, find:

```scss
@media (min-width: 992px) {
    width: 70%;
}
```

Replace with:

```scss
@media (min-width: 992px) {
    width: 100%; // fill container; left edge matches Section (#1)
}
```

- [ ] **Step 4: Format + build gate** — `npm run format && npm run build`

- [ ] **Step 5: Verify all blocks share the edge (Desktop; Mobile/Tablet unchanged)**

- 375 / 820: identical to `main`.
- 1280 / 1440: run the **Geometry assertion helper**. Expected: `section`, `frosted`, and `banner` left % are **equal** (the single spine). SectionInner text wraps at 680px and starts at card interior-left.
- Regression: desktop `/paywall-redesign` (uses the same blocks) — confirm aligned spine.

- [ ] **Step 6: Commit**

```bash
git add src/components/Content/FrostedGlass.module.scss src/components/Content/SectionInner.module.scss src/components/Content/Banner.module.scss
git commit -m "feat(layout): align FrostedGlass/SectionInner/Banner to the shared spine on desktop (#1)"
```

---

## Task 7: Honest depth — solid card (Finding #4) · All breakpoints (visual)

Replaces the `blur(84px)` (nothing behind it to blur) with a solid tinted card.

**Files:**

- Modify: `src/components/Content/FrostedGlass.module.scss`

- [ ] **Step 1: Swap blur for solid card**

Find:

```scss
.container {
    background-color: rgb(210, 210, 210, 0.4);
    backdrop-filter: blur(84px);
    padding: 24px 0;
```

Replace with:

```scss
// NOTE: formerly a frosted/blur panel (Finding #4 — the blur had no rich backdrop to act
// on, so it read as flat grey). Now a solid tinted card with a hairline + soft shadow.
// Component name kept as "FrostedGlass" to avoid churn across 5 page imports.
.container {
    background-color: #f0f2f5;
    border: 1px solid rgba(20, 20, 20, 0.08);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 18px 40px -28px rgba(0, 0, 0, 0.22);
    padding: 24px 0;
```

- [ ] **Step 2: Format + build gate** — `npm run format && npm run build`

- [ ] **Step 3: Verify (All breakpoints)**

```
preview_inspect(serverId, "[class*=FrostedGlass-module][class*=container]", ["backgroundColor","backdropFilter","boxShadow"])
```

Expected: `backgroundColor rgb(240, 242, 245)`, `backdropFilter none`, shadow present — at 375 / 820 / 1280. Card reads as solid with subtle depth.

- [ ] **Step 4: Commit**

```bash
git add src/components/Content/FrostedGlass.module.scss
git commit -m "feat(card): replace frosted blur with solid tinted card (#4)"
```

---

## Task 8: Retire the case-study stripe + keep the nav visible (Finding #4) · Desktop ≥992

Removes the thin navy `BlueBlock` on case studies (it collides with the now-centered/wider content). **Because the white "ABOUT" link relied on that navy backdrop, the nav route color must become page-aware** or it turns invisible on `#fafafa`.

**Files:**

- Modify: `src/components/BlueBlock/BlueBlock.module.scss`
- Modify: `src/components/NavBar/NavBar.tsx`
- Modify: `src/components/NavBar/NavBar.module.scss`

- [ ] **Step 1: Hide the thin (case-study) stripe**

In `BlueBlock.module.scss`, find:

```scss
.thin {
    @media (min-width: 992px) {
        left: 80% !important;
    }
}
```

Replace with:

```scss
// Finding #4: the thin case-study stripe collided with the centered content container
// and added an asymmetric band. Retired on case studies. (Home keeps the wide `.block`.)
// Navy returns as the rail's active-section indicator when the sticky nav (#6) lands.
.thin {
    @media (min-width: 992px) {
        display: none;
    }
}
```

- [ ] **Step 2: Make the nav route color page-aware**

In `NavBar.tsx`, replace the body with (adds `useRouter`, follows the existing Wrapper/BlueBlock pattern):

```tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import styleNavBar from './NavBar.module.scss';

const NavBar = () => {
    // On Home the wide BlueBlock sits behind the nav, so the route stays light (white).
    // Elsewhere there is no navy backdrop, so the route must be dark to stay visible (#4).
    const onHomePage = useRouter().pathname === '/';
    const routeClass = onHomePage
        ? styleNavBar.route
        : `${styleNavBar.route} ${styleNavBar.routeDark}`;

    return (
        <header id='header' className={styleNavBar.navbar} aria-label='navbar'>
            <Link href='/' className={styleNavBar.brand} aria-label='Seth Morenos'>
                <span className={styleNavBar.firstName}>SETH</span>&nbsp;
                <span className={styleNavBar.lastName}>MORENOS</span>
            </Link>
            <Link href='/about' className={routeClass} aria-label='About'>
                ABOUT
            </Link>
        </header>
    );
};

export default NavBar;
```

- [ ] **Step 3: Add the dark route variant**

In `NavBar.module.scss`, the `.route` rule currently turns white at ≥992:

```scss
.route {
    font-family: styles.$font-regular;
    font-size: 1.2em;
    color: styles.$primary-color;

    @media (min-width: 992px) {
        position: relative;
        @include no-margin;
        color: styles.$light-font-color;
    }
}
```

Add immediately after it:

```scss
// Finding #4: dark route for pages without the navy BlueBlock backdrop (all but Home).
.routeDark {
    @media (min-width: 992px) {
        color: styles.$primary-color;
    }
}
```

- [ ] **Step 4: Format + build gate** — `npm run format && npm run lint && npm run build`

- [ ] **Step 5: Verify nav visibility on BOTH page types (Desktop)**

- `/free-trial` @1280: `preview_inspect(serverId, "#header a:last-child", ["color"])` → `rgb(0, 64, 128)` (navy, visible on `#fafafa`); stripe gone (`preview_inspect(serverId,"[class*=BlueBlock]",["display"])` → `none`).
- `/` @1280: route still white over the wide blue block: `color rgb(255, 255, 255)`; wide BlueBlock still visible.
- 375 / 820: nav unchanged (route color rules are ≥992 only).

- [ ] **Step 6: Commit**

```bash
git add src/components/BlueBlock/BlueBlock.module.scss src/components/NavBar/NavBar.tsx src/components/NavBar/NavBar.module.scss
git commit -m "feat(layout): retire case-study stripe; page-aware nav route color (#4)"
```

---

## Task 9: One 8-pt spacing scale (Finding #5) · All breakpoints (values scale per BP)

Replaces hand-tuned margins (40/72/92/100/132/148/196) with tokens.

**Files:**

- Modify: `src/components/Content/Section.module.scss`
- Modify: `src/components/Content/FrostedGlass.module.scss`
- Modify: `src/components/Content/Banner.module.scss`

- [ ] **Step 1: Section margins → tokens**

In `Section.module.scss`, replace the `.defaultMargins` and `.endMargins` rules (from Task 5) with:

```scss
// Finding #5: between-section rhythm on the 8-pt scale (scales down per breakpoint).
.defaultMargins {
    margin: styles.$gap-section-sm auto styles.$gap-block; // 48 / 32

    @media (min-width: styles.$bp-md) {
        margin: styles.$gap-section-md auto styles.$gap-block; // 64 / 32
    }

    @media (min-width: styles.$bp-lg) {
        margin: styles.$gap-section-md auto styles.$gap-block 0; // left-aligned spine
    }
}

.endMargins {
    margin: styles.$gap-section-sm auto styles.$gap-section-lg; // 48 / 96

    @media (min-width: styles.$bp-md) {
        margin: styles.$gap-section-md auto styles.$gap-section-lg;
    }

    @media (min-width: styles.$bp-lg) {
        margin: styles.$gap-section-md auto styles.$gap-section-lg 0;
    }
}
```

- [ ] **Step 2: FrostedGlass margins → tokens**

In `FrostedGlass.module.scss`, replace:

```scss
.defaultMargins {
    margin: 100px auto;

    @media (min-width: 768px) {
        margin: 0 auto;
    }
}

.endMargins {
    margin: 40px auto 148px;
}
```

with:

```scss
.defaultMargins {
    margin: styles.$gap-section-lg auto;

    @media (min-width: styles.$bp-md) {
        margin: 0 auto;
    }
}

.endMargins {
    margin: styles.$gap-block auto styles.$gap-section-lg;
}
```

Add `@use '../../styles/styles';` at the top of the file if not already present (it is, from Task 6/7 — verify).

- [ ] **Step 3: Banner margin → token**

In `Banner.module.scss`, add `@use '../../styles/styles';` at top, then replace `margin: 0 auto 92px;` with `margin: 0 auto styles.$gap-section-lg;`.

- [ ] **Step 4: Format + build gate** — `npm run format && npm run build`

- [ ] **Step 5: Verify rhythm (All breakpoints)**

Full-page screenshots at 375 / 820 / 1280 / 1440. Expected: consistent gaps between sections within each breakpoint; visibly tighter on mobile, roomier on desktop; no doubled/collapsed gaps.

- [ ] **Step 6: Commit**

```bash
git add src/components/Content/Section.module.scss src/components/Content/FrostedGlass.module.scss src/components/Content/Banner.module.scss
git commit -m "feat(spacing): 8-pt vertical rhythm via tokens (#5)"
```

---

## Task 10: Strengthen the hero (Finding #6 — visual half) · All breakpoints + ≥992 layout

Lead with the Display title (already from Task 2) and surface the three impact metrics as a callout row above the fold. (No JS; the sticky nav is the follow-up.)

**Files:**

- Create: `src/components/Content/Hero.module.scss`
- Modify: `src/pages/free-trial.tsx` (first `Section`, lines ~24–45)

- [ ] **Step 1: Create `Hero.module.scss`**

```scss
@use '../../styles/styles';

// Finding #6: compact stat callouts in the hero so the 5-second scan lands on impact.
.callouts {
    display: flex;
    flex-direction: column;
    gap: styles.$space-2; // 16px
    margin-top: styles.$space-3; // 24px

    @media (min-width: styles.$bp-md) {
        flex-direction: row;
        gap: styles.$space-4; // 32px
    }
}

.callout {
    padding-left: 12px;
    border-left: 3px solid styles.$secondary-color;
}

.value {
    display: block;
    font-family: styles.$font-bold;
    color: styles.$primary-color;
    font-size: 1.75em;
    line-height: 1;
}

.label {
    display: block;
    font-family: styles.$font-medium;
    color: styles.$body-font-color;
    font-size: 0.95em;
    margin-top: 4px;
}
```

- [ ] **Step 2: Add the callout row to the hero**

In `free-trial.tsx`, import the styles after the other imports:

```tsx
import styleHero from '../components/Content/Hero.module.scss';
```

In the first `<Section ends>`, replace the three metadata paragraphs (Role/Platforms/Impact, lines ~33–44) with the Role/Platforms paragraphs kept and the Impact paragraph swapped for a callout row:

```tsx
            <Paragraph>
                <span className='bold'>Role:</span>
                &nbsp;Sole product designer
            </Paragraph>
            <Paragraph>
                <span className='bold'>Platforms:</span>
                &nbsp;Mobile (<abbr>iOS</abbr> & Android)
            </Paragraph>
            <div className={styleHero.callouts}>
                <div className={styleHero.callout}>
                    <span className={styleHero.value}>34%</span>
                    <span className={styleHero.label}>more subscription purchases</span>
                </div>
                <div className={styleHero.callout}>
                    <span className={styleHero.value}>27%</span>
                    <span className={styleHero.label}>more invoices created</span>
                </div>
                <div className={styleHero.callout}>
                    <span className={styleHero.value}>10%</span>
                    <span className={styleHero.label}>higher-tier skew</span>
                </div>
            </div>
```

- [ ] **Step 3: Format + build gate** — `npm run format && npm run lint && npm run build`

- [ ] **Step 4: Verify hero (All breakpoints)**

- 375: callouts stack vertically, fit above the fold with the title.
- 820 / 1280 / 1440: callouts sit in a row beneath the intro; numbers are prominent (navy). Screenshot each.

- [ ] **Step 5: Commit**

```bash
git add src/components/Content/Hero.module.scss src/pages/free-trial.tsx
git commit -m "feat(hero): impact callouts above the fold on Free Trial (#6 visual)"
```

---

## Task 11: Propagate page-markup changes to the other four case studies (scope completion)

Tasks 3 & 10 changed `free-trial.tsx` markup only. Apply the **same** patterns to the remaining case studies so the system is consistent (Finding #1/#3). Each is the identical transform: import `Stat`, convert IndentInner metric `Heading type={4}` lines into `<Stat>`. (Hero callouts are Free-Trial-specific copy — apply only if each page has a comparable metric set; otherwise leave the hero as-is and rely on the `Stat` blocks lower down.)

**Files (repeat Task 3 Steps 1-flavored edits per file):**

- `src/pages/paywall-redesign.tsx` — the "Validation & Results" `IndentInner`/`Strong` metrics (lines ~249–256): wrap the percentage ones in `<Stat value='18%'>lift in free-to-paid conversion</Stat>`; leave the non-numeric roadmap line as a `Strong` callout.
- `src/pages/pick-history.tsx` — convert its impact metric headings to `<Stat>` (inspect file first).
- `src/pages/patient-support-app.tsx` — same.
- `src/pages/payment-portal.tsx` — same.

- [ ] **Step 1:** For each page, read it, identify metric `IndentInner`+`Heading type={4}` (or numeric `Strong`) lines, add `import Stat from '../components/Content/Stat';`, and replace with `<Stat value='…'>…</Stat>`.
- [ ] **Step 2: Format + build gate** — `npm run format && npm run lint && npm run build`
- [ ] **Step 3: Verify** — desktop + mobile screenshots of all four pages; spine aligned, metrics dominant, no overflow.
- [ ] **Step 4: Commit**

```bash
git add src/pages/paywall-redesign.tsx src/pages/pick-history.tsx src/pages/patient-support-app.tsx src/pages/payment-portal.tsx
git commit -m "feat(stat): apply impact-metric style across remaining case studies (#1/#3)"
```

---

## RECOMMENDED FOLLOW-UP PLAN (not included here): Sticky section nav + scroll progress (#6 wayfinding)

Per the writing-plans Scope Check, the interactive half of #6 is a **separate subsystem** and gets its own plan:

- Add stable `id`s + a per-page section manifest (label + id).
- New `SectionNav` component + module: sticky left-rail list at ≥992, IntersectionObserver scroll-spy to highlight the active section, a thin navy progress indicator; collapses to a top progress bar below 992.
- Convert the centered container (Task 4) into a `grid-template-columns: [rail] minmax(180px,220px) [content] 1fr` on ≥992; the rail hosts `SectionNav`. Content stays on the spine.
- This is where the navy accent returns (rail active-indicator), closing the loop on Task 8.

It's deliberately deferred because it's JS interaction + per-page data, not visual layout — and the visual layout (this plan) should land and be reviewed first.

---

## Self-review (against the redline spec)

- **#1 One spine** → Tasks 4, 5, 6 (container + single edge + capped measure; geometry-asserted). ✅
- **#2 Scale up not sideways** → Tasks 4, 8 (centered container, retired asymmetric stripe; symmetric margins on large screens; measure cap prevents over-long lines). ✅
- **#3 Type hierarchy** → Tasks 2, 3 (ramp + decoupled subheads + Stat style; All-BP, fluid). ✅ (priority)
- **#4 Honest depth / aligned accent** → Tasks 7, 8 (solid card; stripe retired; nav contrast fixed). ✅
- **#5 8-pt rhythm** → Tasks 1, 9 (tokens replace magic numbers). ✅
- **#6 Hero + wayfinding** → Task 10 (hero visual). Wayfinding split to follow-up (flagged). ⚠ by design
- **Rule checks:** global vs module split honored (Rule #2/#3); desktop changes gated ≥992 (Rule #4); `npm run format` each task (Rule #5); comments added on non-obvious changes (Rule #6); scope = spec, free-trial primary (Rule #7); codebase reviewed up front (Rule #1). ✅
- **Placeholder scan:** every code step contains real, complete code. ✅
- **Naming consistency:** `Stat` (`value`/`label`/`container`), `Hero` (`callouts`/`callout`/`value`/`label`), `routeDark`, tokens `$page-max`/`$measure`/`$gap-*` used consistently across tasks. ✅
