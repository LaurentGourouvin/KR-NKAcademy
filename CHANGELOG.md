<div align="center">

# 🇰🇷 KR-NKAcademy Changelog

### _Natural Korean Acquisition — From Zero to TOPIK II_

<p align="center">
  <img src="public/assets/KR-NKAcademy.png" alt="KR-NKAcademy Logo" width="250" />
</p>
</div>

<p align="center">All notable changes to this project will be documented in this file.</p>

## [0.1.0] — 2025-11-14

### Added

- Initial project structure (Next.js, Tailwind v4, TypeScript strict).
- Public data folder `/public/data/weekXX`.
- TypeScript models for all NKAcademy data types.
- `getWeekData()` service to load sentences, chunks, dialogs, exercises, and metadata from week folders.
- Full test suite with Vitest + filesystem mocking.
- Global `weekOverview.json` + types + `getWeekOverview()` service.
- Zod schemas for all JSON structures.
- Pre-build validation script (`npm run test:prebuild`) validating all week data.
- GitHub Action running validation + build on push/PR.

### Fixed

- Input validation for week ranges (1–52).
- Error handling for invalid or missing JSON files.

### Security

- Build is blocked if the content data is malformed (CI prebuild validation).

---

## [0.0.1] — 2025-10-13

### Added

- Project initialization.
