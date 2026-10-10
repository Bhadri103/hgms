# HGMS

An independent React, JavaScript, and JSX frontend built from the supplied GGMS reference layouts. Everything needed at runtime belongs to this folder. The original `ggms`, `ggmsmultigym`, and `tools` directories are read-only references and have not been edited. No existing React conversion was used.

## Run

```powershell
cd D:\GGMS\HGMS
npm install
npm run dev
```

Open the URL printed by Vite. The entry route opens `/login`. The local login at `/login` (also available at `/login0bfe`) accepts **admin / HGMS@123**. This is a local demonstration login, not server authentication.

```powershell
npm test
npm run build
npm run preview
```

The production output is `dist`. Configure your static host to serve `index.html` for application paths. The development and production builds do not read the original project.

## Structure

- `src/pages/`: separate editable JSX files organized by the original modules.
- `src/components/`: Header, Sidebar, Footer, Layout, Modal, Toast, forms, navigation, tables, image capture, calendar, and QR components.
- `src/data/`: dummy records, routes, table columns, and source-gap metadata.
- `src/services/`: local persistence, CSV handling, and financial calculations.
- `src/index.css`: Tailwind entry point and global color, typography, button, and component theme.
- `public/assets/`: HGMS-owned static assets.
- `tests/`: calculation, persistence, CSV, and collection-mapping tests.
- `reports/`: source inventory, immutable-source checksums, missing references, build log, and browser evidence.
- `scripts/`: development-only inspection, authoring, and verification utilities.

Records persist in this browser's local storage under `hgms-local-v1`. No PHP endpoint, database, messaging service, or original application API is contacted. CSV imports, camera capture, and generated QR codes are handled locally. Clearing that storage entry restores the initial demo data.

All runtime branding uses HGMS. `src/config/brand.js` centralizes project, currency, and storage settings.

## Verification

The dashboard and shared shell use Tailwind with the existing indigo, dark navy, and accent palette. Edit `src/index.css` to customize the global theme. Inter is bundled locally in weights 400–700. Legacy stylesheets and embedded page style blocks have been retired; remaining module markup receives shared Tailwind component styles.

After `npm run build`, run `npm run test:dashboard` for dashboard interactions and desktop, tablet, and mobile screenshots. Run `npm run test:dashboard -- --all-routes` to include all 124 route smoke checks. This review uses installed Chrome, serves only HGMS on port 5188, and writes evidence to `reports/dashboard-review/`. All 49 original metrics are visible cards. The inclusive date range filters dashboard cards, transaction graphs, the member list, and CSV export. Today/week/month/year subcards use windows ending at the selected end date, intersected with the selected range. Dated demonstration fixtures supplement local records in `src/services/dashboard.js`; missing dates are excluded. Seed member paid balances count as opening receipts, and saved receipts are additional payments. The sales projection averages 3, 6, or 12 completed months before the end-date month and is explicitly an estimate. Changing a range never changes saved records.

`npm run test:browser` launches installed Chrome headlessly and checks all 124 supplied application routes against the production build. `node scripts/verify-browser.mjs --workflows` exercises the shared workflows. These scripts serve HGMS on port 5173 and the read-only reference on 5174 temporarily, and write evidence into `reports/browser/`.

`npm run audit:source` verifies original files against their initial SHA-256 checksums when those reference folders are available. Reference authoring utilities are historical tools, not part of development or production. Do not rerun `author-pages.mjs`, `repair-styles.mjs`, or `extract-navigation.mjs`: they can replace customized layouts or reintroduce retired styles. `retire-legacy-styles.mjs` records the one-time Tailwind migration.

## UI regression review

After building, run `npm run test:ui` to review all 179 original and local routes at 390, 820, and 1440 pixels. The check records visible forms and controls, accessible naming, minimum control heights, page overflow, render failures, and browser errors in `reports/ui-review/results.json`. Representative full-page screenshots are saved alongside it. Horizontally scrolling tables and calendars are intentional, contained regions.

Run `npm run test:ui-workflows` for login, navigation, table filtering/sorting/export, editing, deletion confirmation, batch creation, attendance, member registration, modal dismissal, dashboard dates, and mobile calendar booking. These checks use an isolated browser profile and do not change your browser's saved data. Responsive layout checks are not a certification of all specialized module behavior.

## Completion status

**This is not a verified complete, production-ready replacement.** It contains 120 native JSX reference layouts and working shared local interactions, but exact visual and behavioral parity has not been achieved. Four supplied application files are empty, additional linked screens and assets are absent, and specialized module behavior still needs implementation and verification. See [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) for the concrete limitations. Passing route smoke tests means the pages render; it does not certify every feature.

Demo history is generated locally for 18 months up to the current month, including receipts, expenses, enquiries, attendance, and lifecycle activity. Default views are populated; filters outside that history may correctly return no results. Entry forms provide a Fill demo data action without automatically saving records. The production build blocks fetch/XHR/WebSocket connections through its connect-src policy. No live server authentication is used.

## GitHub Pages

Live demo: https://bhadri103.github.io/hgms/

Run `npm run build:pages` to update the deployable `docs/` folder. Commit and push that folder with the source to `main`. GitHub Pages publishes from `main /docs`. The Pages build uses hash routes so direct links and refreshes work without server rewrites. The normal development build keeps browser routes.
