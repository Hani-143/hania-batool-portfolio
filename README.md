# Hania Batool — Portfolio Website

Production-ready Next.js 14 (App Router) site for Hania Batool's personal
brand: resume writing, CV design, LinkedIn optimization, content and
creative design.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Editing content

Nearly all text on the site lives in `data/content.ts` — edit that file to
change copy, service lists, contact details, etc. without touching any
component.

## Images

Located in `public/images/`. Mapped as:
- `hero.jpg` — hero section (beige blazer, laptop)
- `about.jpg` — About Hania (garden portrait)
- `executive.jpg` — Personal Branding / Executive section
- `resume.jpg` — Resume & CV section (CV workspace)
- `branding.jpg` — Gallery / personal branding portrait
- `content.jpg` — Content Writing / AI Content sections
- `testimonial.jpg` — sourced testimonial graphic (not displayed as an
  image; the text was transcribed into `data/content.ts` instead)

## Resume PDFs

Located in `public/resumes/`. **Both sample files have had the phone
number and personal email address of the original candidate redacted**
(the underlying text was removed, not just visually covered) before being
published, since these documents belong to third parties, not Hania, and
were not confirmed safe to publish with full contact details. Formatting,
layout and content are otherwise untouched. Replace these with resumes
you have explicit permission to publish, following the same filenames, to
update the Resume Showcase section.

## Contact form

The form validates on the client only — there is no backend wired up yet.
Connect it to Formspree, Resend, or a similar service by replacing the
`handleSubmit` logic in `components/Contact.tsx`.
