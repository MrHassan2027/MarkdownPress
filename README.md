# MarkdownPress

> Drop Markdown files in /posts — get a fast, static blog. Zero CMS, zero database.

## What it does
A minimal Next.js blog where your posts ARE your files. Write `.md` files in `/posts`, run `npm run build`, and get a fully static blog with a home page, post pages, tags, and RSS feed. Deploy to GitHub Pages, Vercel, or any static host.

## Quick Start
```bash
git clone https://github.com/yourusername/MarkdownPress
cd MarkdownPress
npm install
# Create your first post:
echo "---\ntitle: Hello World\ndate: 2026-06-08\ntags: [intro]\n---\n\nHello!" > posts/hello.md
npm run dev
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
- Frontmatter: title, date, tags, excerpt, cover image
- Tag pages: `/tags/javascript`
- RSS feed: `/feed.xml`
- Dark mode toggle
- Reading time estimate
- Open Graph meta tags for social sharing
- `npm run new "Post Title"` scaffolds a new post file

## Tech Stack
| Tool | Why |
|------|-----|
| Next.js 14 (App Router) | Static site generation |
| `gray-matter` | YAML frontmatter parsing |
| `remark` + `rehype` | Markdown → HTML pipeline |
| `rehype-highlight` | Code block syntax highlighting |
| Tailwind CSS | Styling |
