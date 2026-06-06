# n8n-nodes-textdotlk Security and Profile Package Visibility Plan

**Goal:** Harden `n8n-nodes-textdotlk`, resolve actionable security/tooling findings, and add the npm package to Naveen's GitHub profile packages section.

**Architecture:** Keep the n8n community node declarative and minimal. Fix dependency pinning first so validation is reproducible, then harden user-controlled route/body parameters, then document/package/profile improvements. Avoid changing Text.lk API behavior unless tests or docs confirm the current route/payload shape is wrong.

**Tech Stack:** TypeScript, n8n community node API, `@n8n/node-cli`, npm, GitHub profile README.

---

## Current verified state

**Local repo:** `<local-workspace>/n8n-nodes-textdotlk`

**Clone status:** Repo was missing from the GitHub workspace and has been cloned from `https://github.com/NPFernando/n8n-nodes-textdotlk.git`.

**Profile repo:** `<local-workspace>/NPFernando`

**Published npm package:** `n8n-nodes-textdotlk@0.1.1`

**Validation commands already run:**

```bash
cd <local-workspace>/n8n-nodes-textdotlk
npm ci --ignore-scripts
npm audit --omit=dev
npm audit
npm run lint
npm run build
npx tsc --noEmit
```

**Verified findings:**

1. `npm audit --omit=dev` reports 3 production/peer-tree vulnerabilities through installed `n8n-workflow@1.113.0`:
   - `form-data@4.0.0` critical boundary randomness advisory.
   - `lodash@4.17.21` high prototype-pollution/code-injection advisories.
2. Full `npm audit` reports 21 total vulnerabilities: 5 moderate, 12 high, 4 critical.
3. `npm run lint` and `npm run build` both fail with `ERR_REQUIRE_ESM` from `@n8n/node-cli@0.13.0` requiring ESM-only `change-case@5.4.4` from CommonJS.
4. `npm ci` on the current WSL Node runtime (`node v18.19.1`, `npm 9.2.0`) reports multiple engine warnings. Current n8n tooling expects Node 20+.
5. Direct source check passes: `npx tsc --noEmit` exits cleanly.
6. Targeted secret/unsafe-code scan found no hardcoded credential values in source. The credential uses n8n password masking and injects the Text.lk access token through n8n's generic authentication header, not through committed source values.
7. Several path parameters are interpolated directly into request URLs: `uid` and `group_id` in SMS/contact/group operations. These should be constrained or encoded to reduce malformed-route and path-injection risk.
8. `package.json` exposes a personal Gmail address under `author.email`; for public portfolio/package hygiene this should be replaced with a no-reply/public contact or omitted.
9. GitHub profile README already lists the repo under `## Featured projects`, but there is no dedicated packages/npm section.

---

## Scope and safety

**Do not read or use real Text.lk API tokens.** Use mock values and static validation only unless Naveen explicitly provides test credentials.

**Do not commit/push until requested.** Naveen usually prefers commit/push for GitHub projects after modifications, but this plan only prepares the implementation sequence.

**Rollback:** Use Git. For each task, inspect with `git diff`; revert individual files with `git checkout -- <file>` or discard all local changes with `git reset --hard HEAD` if no commit has been made.

---

## Implementation tasks

### Task 1: Pin the supported Node.js runtime

**Objective:** Make local and CI validation use a runtime compatible with current n8n tooling.

**Files:**
- Create: `.nvmrc`
- Modify: `package.json`
- Modify: `README.md`

**Steps:**

1. Create `.nvmrc` with:

```text
20
```

2. Add `engines` to `package.json`:

```json
"engines": {
  "node": ">=20.19 <23",
  "npm": ">=10"
}
```

3. Add README development prerequisite:

```markdown
## Development

Prerequisites:

- Node.js 20 LTS or newer compatible with n8n community-node tooling
- npm 10+

```bash
npm ci
npm run lint
npm run build
npx tsc --noEmit
```
```

4. Verify:

```bash
node --version
npm --version
```

**Expected:** Node 20+ and npm 10+ before continuing with build/lint validation.

---

### Task 2: Replace wildcard dependencies with known-compatible pinned ranges

**Objective:** Remove dependency drift from `@n8n/node-cli: "*"` and `n8n-workflow: "*"`.

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

**Recommended approach:**

1. Pick a compatible `@n8n/node-cli` version that works with Node 20+ and its required ESLint peer.
2. Align `eslint` to the peer required by the selected `@n8n/node-cli` version.
3. Pin `n8n-workflow` peer range instead of `*`, for example a current n8n v1/v2-compatible range after validating with n8n community-node docs.
4. Reinstall cleanly:

```bash
rm -rf node_modules
npm install
```

5. Verify:

```bash
npm explain @n8n/node-cli n8n-workflow form-data lodash
npm audit --omit=dev
npm run lint
npm run build
npx tsc --noEmit
```

**Expected:** Build/lint no longer fail with `ERR_REQUIRE_ESM`, and production audit findings are reduced or eliminated by newer `n8n-workflow` dependency resolution.

**Important:** Do not blindly run `npm audit fix --force`. The dry run already showed a dependency conflict between `@n8n/node-cli` and `eslint`; resolve versions deliberately.

---

### Task 3: Add dependency security automation

**Objective:** Prevent vulnerable dependency drift from returning.

**Files:**
- Create: `.github/dependabot.yml`
- Create or modify: `.github/workflows/ci.yml`

**Dependabot config:**

```yaml
version: 2
updates:
  - package-ecosystem: npm
    directory: /
    schedule:
      interval: weekly
    open-pull-requests-limit: 5
```

**CI checks:**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm
      - run: npm ci
      - run: npm audit --omit=dev
      - run: npm run lint
      - run: npm run build
      - run: npx tsc --noEmit
```

**Verify locally:**

```bash
npm audit --omit=dev
npm run lint
npm run build
npx tsc --noEmit
```

**Expected:** All commands pass before pushing CI config.

---

### Task 4: Harden route parameter validation

**Objective:** Reduce malformed-route/path-injection risk from `uid` and `group_id` interpolation.

**Files:**
- Modify: `nodes/TextDotLk/resources/sms/get.ts`
- Modify: `nodes/TextDotLk/resources/contact/get.ts`
- Modify: `nodes/TextDotLk/resources/contact/delete.ts`
- Modify: `nodes/TextDotLk/resources/contact/update.ts`
- Modify: `nodes/TextDotLk/resources/contact/create.ts`
- Modify: `nodes/TextDotLk/resources/group/get.ts`
- Modify: `nodes/TextDotLk/resources/group/delete.ts`
- Modify: `nodes/TextDotLk/resources/group/update.ts`

**Implementation options:**

1. If Text.lk IDs are numeric, set parameter type to `number` or add a strict numeric validation description/default.
2. If IDs are opaque strings, add clear descriptions and reject `/`, `?`, `#`, whitespace, and control characters where n8n parameter validation supports it.
3. Prefer routing/body/query parameters over manual URL interpolation when supported by n8n node routing.

**Example for numeric IDs:**

```ts
{
  displayName: 'UID',
  name: 'uid',
  type: 'number',
  default: 0,
  required: true,
  description: 'Numeric Text.lk record ID',
  displayOptions: { show: showOnlyForSmsGet },
}
```

**Verify:**

```bash
npm run lint
npm run build
npx tsc --noEmit
```

**Expected:** TypeScript and n8n node build pass, and route parameters are constrained.

---

### Task 5: Harden SMS/contact/body fields

**Objective:** Add practical limits and clearer expectations for high-risk user-input fields.

**Files:**
- Modify: `nodes/TextDotLk/resources/sms/send.ts`
- Modify: `nodes/TextDotLk/resources/contact/create.ts`
- Modify: `nodes/TextDotLk/resources/contact/update.ts`
- Modify: `nodes/TextDotLk/resources/group/create.ts`
- Modify: `nodes/TextDotLk/resources/group/update.ts`

**Field rules to document/enforce where n8n supports it:**

- `recipient` / `mobile`: Sri Lankan E.164-style format, e.g. `94771234567`; avoid spaces and punctuation unless Text.lk explicitly supports them.
- `sender_id`: short alphanumeric sender ID; no control characters.
- `message`: reasonable max length guidance; warn that SMS segment count/cost may vary.
- `schedule_time`: document timezone and exact format expected by Text.lk.
- `name`, `first_name`, `last_name`: trim/control-character guidance.

**Verify:**

```bash
npm run lint
npm run build
npx tsc --noEmit
```

---

### Task 6: Add a privacy/public-package cleanup

**Objective:** Avoid exposing personal email in package metadata and improve public package trust.

**Files:**
- Modify: `package.json`
- Modify: `README.md`

**Changes:**

1. Replace or remove `author.email` in `package.json`.
   - Preferred: use a public/no-reply email or only `"name": "Naveen Fernando"`.
2. Add a short security note to README:

```markdown
## Security

- Store your Text.lk token only in n8n credentials.
- Do not hardcode tokens in workflows or exported workflow JSON.
- Open a GitHub issue for suspected package or node security issues.
```

3. Add a package quality note:

```markdown
## Package

- npm: https://www.npmjs.com/package/n8n-nodes-textdotlk
- Repository: https://github.com/NPFernando/n8n-nodes-textdotlk
```

**Verify:**

```bash
npm pack --dry-run
npm run build
```

**Expected:** Packed files only include `dist` and intended package metadata.

---

### Task 7: Add minimal tests or static validation script

**Objective:** Catch missing node metadata, credentials config, and route regressions without real API tokens.

**Files:**
- Create: `tests/metadata.test.ts` or `scripts/validate-node-package.mjs`
- Modify: `package.json`

**Suggested script approach:**

```json
"scripts": {
  "validate:package": "npm run lint && npm run build && npm audit --omit=dev && npm pack --dry-run"
}
```

If adding tests, verify:

```bash
npm run validate:package
```

**Expected:** Static checks complete without calling Text.lk.

---

### Task 8: Update GitHub profile packages section

**Objective:** Show the package in Naveen's profile under a dedicated packages/npm section, not only inside featured projects.

**Repo:** `<local-workspace>/NPFernando`

**Files:**
- Modify: `README.md`

**Current state:** The project is already listed at `README.md` line 117 under `## Featured projects`.

**Proposed addition near the end, before `## Contact`:**

```markdown
---

## Packages

- [n8n-nodes-textdotlk](https://www.npmjs.com/package/n8n-nodes-textdotlk) — n8n community node package for Text.lk SMS, contact, group, and profile operations. Repository: [NPFernando/n8n-nodes-textdotlk](https://github.com/NPFernando/n8n-nodes-textdotlk).
```

**Verify:**

```bash
cd <local-workspace>/NPFernando
git diff -- README.md
```

**Expected:** Profile README has a clean `## Packages` section near the bottom and keeps wording aligned with Naveen's current Automation/System Engineer profile, without implying active job hunting or freelancing.

---

### Task 9: Final verification and release readiness

**Objective:** Confirm the package is safe to commit/push and publish later.

**Commands:**

```bash
cd <local-workspace>/n8n-nodes-textdotlk
git status --short
npm ci
npm audit --omit=dev
npm run lint
npm run build
npx tsc --noEmit
npm pack --dry-run
```

**Independent review:** Run pre-commit security/quality review on the final diff before committing.

**Expected:**

- No production audit vulnerabilities, or documented upstream-only exceptions.
- Lint/build/typecheck pass.
- No hardcoded secrets.
- `npm pack --dry-run` includes only intended package output.
- Profile README diff only adds the packages section.

---

## Suggested commit grouping after implementation

1. `chore: pin n8n node tooling and node runtime`
2. `ci: add package validation and dependency monitoring`
3. `fix: harden textdotlk node parameters`
4. `docs: add package security and npm metadata notes`
5. In profile repo: `docs: add npm packages section`

Do not publish a new npm version until all validation passes and `CHANGELOG.md` is updated with the security/tooling improvements.
