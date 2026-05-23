# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This project uses **pnpm** (versions pinned via Volta: Node 24.5.0, pnpm 10.14.0).

- `pnpm dev` — runs `contentlayer dev` and `next dev` concurrently. Contentlayer must run alongside Next so MDX posts are regenerated; running `next dev` alone leaves `contentlayer/generated` stale.
- `pnpm build` — production build (Contentlayer generates during the Next build).
- `pnpm lint` — `next lint`.
- `pnpm prettier` — formats `src/**/*.{ts,tsx}` (uses `prettier-plugin-tailwindcss` to sort class names).
- `pnpm test` — Jest. `pnpm test:ci` adds `--ci` and is what CI runs.

Run a single test file or case:

```bash
npx jest __tests__/components/molecules/Sidebar.test.tsx
npx jest -t "should mark an item active"
```

CI (`.github/workflows`) triggers on push to `main` and runs build → lint → prettier → `test:ci` in sequence; all must pass. A separate workflow publishes the Jest JUnit report from `test-results/jest-junit.xml`.

## Architecture

Next.js 13 **App Router** portfolio/blog site ("MyCanvas"). Source lives under `src/`; the path alias `@/*` maps to `src/*` (configured in both `tsconfig.json` and `jest.config.js`).

**Blog content (Contentlayer):** Posts are MDX files in `posts/` (named `YYYYMMDD.mdx`) with required frontmatter `title`, `date`, `description`, `tags` (see `contentlayer.config.ts`). Contentlayer compiles them into the typed `allPosts` array imported from `contentlayer/generated`; pages consume that array directly rather than reading the filesystem (e.g. `src/app/blog/page.tsx`). A post's `url` is a computed field (`/blog/<flattenedPath>`). MDX is rendered with remark-gfm/toc and rehype slug/pretty-code/autolink. Generated output lives in `.contentlayer/` and is not committed.

**Components — atomic design:** `src/components/atoms/` and `src/components/molecules/` for reusable pieces; composite/page-level components sit directly in `src/components/`. Routes are in `src/app/<route>/page.tsx`, including dynamic routes `blog/[slug]` and `categories/[slug]`.

**Sidebar navigation** is data-driven: `src/utils/const/sidebarList.ts` lists labels, `iconList.ts` the matching icons, and `utils/url.ts#createUrl` derives the href from a label (e.g. `"ABOUT"` → `/about`). To add a nav item, update both const arrays.

**Snackbar (global toast)** follows the React context pattern: `contexts/SnackbarContext.ts` (context) + `providers/SnackbarProvider.tsx` (state via a reducer in `utils/reducer.ts`) + `hooks/useSnackbar.tsx` (consumer). Components dispatch through the hook rather than managing toast state locally.

**Contact form** posts to the `src/app/api/sendMail/route.ts` route handler, which uses Resend (`RESEND_API_KEY` env var) to send both an admin notification and a user confirmation email.

## Testing notes

Jest runs through `next/jest` with `jest-environment-jsdom` and Testing Library. Tests import their globals explicitly from `@jest/globals`.

When mocking `next/navigation` (e.g. `usePathname`), do **not** reference a `jest.fn()` from inside the `jest.mock` factory — with `@jest/globals` + Babel hoisting the factory runs before `jest` is available and the mock silently fails to apply (the real hook then throws outside a router context). Use a plain mutable variable whose name starts with `mock` instead:

```ts
let mockPathname = '/about';
jest.mock('next/navigation', () => ({ usePathname: () => mockPathname }));
```
