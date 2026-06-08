# MarkdownPress

> Drop Markdown files in /posts — get a fast, static blog. Zero CMS, zero database.

## What it does
A minimal Next.js blog where your posts ARE your files. Write `.md` files in `/posts`, run `npm run build`, and get a fully static blog with a home page and post pages. Deploy to Vercel, GitHub Pages, or any static host.

## Quick Start
```bash
git clone https://github.com/MrHassan2027/MarkdownPress
cd MarkdownPress
npm install
npm run dev
# Open http://localhost:3000
```

## Post Format
```markdown
---
title: My First Post
date: 2026-06-08
tags: [javascript, tutorial]
excerpt: A short summary for the homepage card.
---

Your post content here in **Markdown**.
```

## Features
- Static generation — zero server required
- Frontmatter: title, date, tags, excerpt
- Reading time estimate
- Syntax-highlighted code blocks via `rehype-highlight`
- `npm run build` exports a fully static site

## Tech Stack
| Tool | Why |
|------|-----|
| Next.js 14 (App Router) | Static site generation |
| `gray-matter` | YAML frontmatter parsing |
| `remark` + `rehype` | Markdown → HTML pipeline |
| `rehype-highlight` | Code block syntax highlighting |
