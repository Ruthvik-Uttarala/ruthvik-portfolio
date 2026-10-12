# Ruthvik Uttarala Portfolio

Production portfolio for Ruthvik Uttarala, a software engineer focused on backend and REST API engineering, full-stack applications, AWS cloud infrastructure, asynchronous systems, and applied AI.

The site preserves an editorial bento-grid design while organizing recruiter-facing evidence around current experience and the October 12, 2026 resume.

## Featured work

- **Flowwick** — authenticated commerce workflows, 33 API route files, Shopify and Instagram publishing, OAuth, and AI-assisted merchant-editable content.
- **NovaArchitect** — AWS discovery, Bedrock analysis with validation and recovery, seven REST endpoints, and 41 automated test functions.
- **OptimalHub** — PDFextract asynchronous processing and PARKSOL idempotent parking-event workflows.
- **PlantVillage** — FastAPI services, RAG evaluation through LangSmith traces, and regression coverage across Python and TypeScript.

## Tech stack

- Next.js App Router
- TypeScript and React
- Tailwind CSS
- Motion
- Vercel

## Local verification

Install from the committed lockfile and run the same checks used before release:

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
```

Run the production build locally with:

```bash
npm run start
```

## Resume

`public/resume.pdf` is generated from the canonical October 12, 2026 DOCX without rewriting its content. The `/resume` route redirects to `/resume.pdf`, and download links use `Ruthvik_Uttarala_Resume.pdf` as the suggested filename.

## Deployment

The repository is connected to the existing Vercel project serving:

```txt
https://ruthvik-portfolio-uttarala-ruthvik.vercel.app
```

Pushes to `main` trigger the production deployment workflow. Verify the linked Vercel account and project before any manual deployment because similarly named projects exist in more than one account.
