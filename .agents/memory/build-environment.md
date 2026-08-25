---
name: Artifact build environment
description: Environment variables required when building the Gulf Ventures web artifact outside its managed workflow
---

The web artifact's Vite configuration requires both `PORT` and `BASE_PATH` during a manual production build. Use the artifact's configured values rather than relying on shell defaults.

**Why:** A plain build can fail before compilation when either variable is missing, even though the managed development workflow supplies them automatically.

**How to apply:** For the Gulf Ventures web artifact, run manual builds with `PORT=20332 BASE_PATH=/` or use the managed production build configuration. Its Preview route expects the workflow's `20332` listener to be mapped to external port `3001`; mapping that listener only to the default web port can produce a blank Preview pane or `502`.