# GeoCoat — Mineral Silicate Paint Landing Page

## Original Problem Statement
> Build a landing page: Build a visually stunning 3D website for my company GeoCoat which deals into Mineral Silicate Paint.

## Architecture
- **Backend:** FastAPI + MongoDB (Motor async). Routes under `/api`.
- **Frontend:** React 19 + Tailwind + framer-motion + lenis smooth-scroll + react-three-fiber 3D + shadcn UI.
- **Design:** Light theme · Organic & Earthy archetype. Outfit (heading) + Manrope (body). Color palette: #F5F5F0 / #3A4538 / #C05A45 / #DDA74F.

## User Personas
- Architects & interior designers specifying premium finishes
- Conservators working on heritage masonry
- High-end residential clients
- Commercial developers seeking long-life facades

## Core Requirements (static)
1. Visually stunning, distinctive 3D hero
2. Editorial layout for storytelling about mineral silicate chemistry
3. Interactive color palette (8 mineral hues)
4. Bento grid showcasing material benefits
5. Lead-capture contact form persisted to MongoDB
6. Mobile-responsive premium experience

## Implemented (Dec 2025)
- Hero with react-three-fiber 3D mineral crystals + parallax scroll fade
- Sticky glassmorphism navigation w/ mobile drawer
- Editorial about section + image collage
- Bento grid "Why Mineral Silicate" with 8 benefits
- Interactive color palette (8 swatches w/ live sample swap)
- Dark "Applications" gallery (heritage / residential / commercial / institutional)
- Vertical timeline "Process" with sticky image rail
- Typographic testimonials
- Contact form → `POST /api/contact` with email validation + toast feedback
- Keyword marquee, grain overlays, footer
- Backend endpoints: GET/POST `/api/contact`, GET `/api/`, status checks

## Backlog
- **P1:** Downloadable brochure / spec PDF on palette section
- **P1:** Admin dashboard to view captured leads (`/api/contact` already returns them)
- **P2:** GLTF/USD-textured 3D crystal models with environment HDRI
- **P2:** Multi-language (EN/PT/HI) support
- **P2:** CMS-driven testimonials & case studies
- **P2:** Newsletter subscription + email notification on new lead

## Test Coverage
- Backend pytest: 9/9 passing (root, contact CRUD, validation, sort order)
- Frontend Playwright E2E: hero/3D, navigation, palette swatches, features grid, contact submission with backend persistence
- Test report: `/app/test_reports/iteration_1.json`
