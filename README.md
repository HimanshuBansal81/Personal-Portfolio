# Himanshu Bansal — Developer Portfolio

Personal developer portfolio for [himanshubansal.dev](https://himanshubansal.dev).

This website is built as a proof-of-work hub, not just a static resume page. It brings together my backend and full-stack projects, case studies, learning blogs, services, skills, and contact flow in one place for recruiters, collaborators, and potential freelance or SaaS opportunities.

## Live Website

| Name | Link |
| --- | --- |
| Portfolio | [https://himanshubansal.dev](https://himanshubansal.dev) |

## Why I Built This

I built this portfolio to create a central place for my work beyond a resume. A resume can list skills and experience, but a portfolio can show project case studies, technical writing, learning progress, and how I approach engineering problems.

The goal is to make it easier for recruiters, collaborators, and other developers to understand what I build, how I think, and where I am growing as a software developer.

## Features

- Responsive personal portfolio website
- Skills / Tech Stack section grouped by professional stack, modern project stack, and current learning areas
- Project showcase with real project cards
- Dynamic project case study pages
- Blog timeline focused on learning and project-building progress
- Dynamic blog article pages
- Contact page with form integration
- SEO metadata for key pages
- Open Graph metadata for cleaner social sharing
- Dark minimal UI
- Mobile-friendly layout

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | Next.js, React, TypeScript, Tailwind CSS |
| Content | Structured TypeScript data for projects and blog content |
| Integrations | Resend for contact form email delivery, Vercel for deployment |

## Pages And Routes

| Route | Purpose |
| --- | --- |
| `/` | Homepage with hero, about preview, skills, featured projects, services preview, and contact CTA |
| `/about` | About and professional background |
| `/projects` | Project showcase |
| `/projects/[slug]` | Dynamic project case study pages |
| `/services` | Services and collaboration areas |
| `/blog` | Blog learning timeline |
| `/blog/[slug]` | Dynamic blog article pages |
| `/contact` | Contact page and form |

## Project Structure

Simplified view of the important folders and files:

```text
.
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── projects/
│   ├── services/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── content/
├── lib/
│   ├── blog-posts.ts
│   ├── blog.ts
│   └── projects.ts
├── public/
├── sections/
├── package.json
├── package-lock.json
├── tailwind.config.ts
└── tsconfig.json
```

## Local Setup

This project uses npm. The repository includes a `package-lock.json` file.

```bash
git clone https://github.com/HimanshuBansal81/Personal-Portfolio.git
cd Personal-Portfolio
npm install
```

Create a local environment file:

```bash
touch .env.local
```

Add the required environment variables, then start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.

Useful commands:

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server after building |
| `npm run lint` | Run ESLint |

## Environment Variables

The contact form uses Resend when configured.

```env
RESEND_API_KEY= Generate from https://resend.com
```

## Content Management

The site currently uses structured TypeScript data for project and blog content.

| Content | File |
| --- | --- |
| Project cards and project detail pages | `lib/projects.ts` |
| Blog timeline and article content | `lib/blog-posts.ts` |
| Blog helper functions | `lib/blog.ts` |
| Homepage sections | `sections/` |
| Shared UI components | `components/` |

This keeps the project and blog pages connected to the same source of truth instead of duplicating content across cards and detail pages.

## Design Direction

The design direction is dark, minimal, and practical. The goal is to make the portfolio easy to scan for recruiters while still giving developers enough context to understand the work.

The content is proof-of-work focused:

- Project cards give quick context.
- Case studies explain the problem, contribution, architecture, challenges, and learnings.
- Blog articles show how I think through learning, deployment, system design, and career growth.
- The skills section separates professional experience from modern project work and active learning.

## Deployment

The site is deployed on Vercel.

| Environment | URL |
| --- | --- |
| Production | [https://himanshubansal.dev](https://himanshubansal.dev) |

Before deploying, configure required environment variables in the Vercel project settings, especially `RESEND_API_KEY` if contact form email delivery is enabled.

## Future Improvements

- Add more project screenshots
- Add more engineering blog posts
- Add sitemap and RSS support if not already added
- Add analytics if needed
- Improve accessibility further
- Add more detailed project architecture diagrams

## Author

Himanshu Bansal

| Link | URL |
| --- | --- |
| Portfolio | [https://himanshubansal.dev](https://himanshubansal.dev) |
| GitHub | [https://github.com/HimanshuBansal81](https://github.com/HimanshuBansal81) |
| LinkedIn | [https://www.linkedin.com/in/himanshu-bansal-211a62225/](https://www.linkedin.com/in/himanshu-bansal-211a62225/) |
