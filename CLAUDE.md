# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Thanishq Global Solutions - A wholesale medical, lab disposables, and surgical supplies distributor website built with Next.js and Tailwind CSS.

## Build/Dev Commands

```bash
npm install      # Install dependencies
npm run dev      # Run development server (localhost:3000)
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Framework:** Next.js 16 (App Router + Turbopack)
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Font:** Inter (Google Fonts)

## Project Structure

```
src/app/           # App Router pages and layouts
  layout.tsx       # Root layout with metadata
  page.tsx         # Homepage
  globals.css      # Global styles, Tailwind import, and @theme config
```

## Custom Colors (defined in globals.css @theme)

- `primary-*` - Medical blue palette (#0087cd base)
- `secondary-*` - Green palette (#4caf50 base)

## Design Requirements

- **Color Scheme:** Professional medical/commercial (blues, greens, whites)
- **Target Audience:** B2B medical supply business
- **Key Features:**
  - Floating WhatsApp icon with contact number
  - Social media links in footer
  - Contact form section

## Page Sections

1. Hero - Main landing section with animations
2. About/Services - Company information and service offerings
3. Products Overview - Medical, lab disposables, surgical supplies catalog
4. Contact - Get in Touch form

## UI/UX Guidelines

- Responsive and platform-independent design
- Smooth animations with bubbles and curved lines
- Card-based layouts
- Glassmorphism effects
- Clean, trustworthy aesthetic appropriate for medical industry
