# Appex Athletics

Appex Athletics is a single-page fitness site. The header shows the Appex Athletics name and links to products, merchandise, technology, and membership. The footer lists the club address, a main phone number, an alternative phone number, a main email, and an alternative email.

## Sections

The home page is one scrolling page:

- **Home** — headline “Boost Your Power Now,” a short introduction to the fitness suites, and a read-more button.
- **Products** — Fitness suite inductions, Fitness programme, Taster sessions, and Lifting workshops.
- **Merchandise** — shorts, shoes, and clothes, each with a link to view the collection.
- **Technology** — connected gym equipment, including SYNRGY360, a WLinear training rig, Watt bikes, and Life Fitness cardio tracked in the LFconnect app.
- **Instructors** — inductions, personal programmes, taster sessions, and lifting workshops.
- **Join** — a membership form for name, email, and message.
- **Footer** — brand summary, links to Products, Merchandise, and Technology, and contact details.

## Contact

These details appear in the footer.

- **Address:** 27 Stadium Road, Indiranagar, Bengaluru 560038, India
- **Phone:** +91 80 4120 6600
- **Alternative phone:** +91 80 4120 6601
- **Email:** hello@appexathletics.com
- **Alternative email:** support@appexathletics.com

The alternative phone and email are for follow-up when the main line is busy.

## Stack

Next.js 13, React 18, Tailwind CSS, and Framer Motion. Product and merchandise copy lives in `constant/data.js`. Section components live in `components`.

## Prerequisites

- Node.js 18 or newer
- npm

## Setup

```bash
npm install
npm run dev
```

The dev server prints a local URL, usually `http://localhost:3000/`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the Next.js development server |
| `npm run build` | Creates a production build |
| `npm start` | Serves the production build |
| `npm run lint` | Runs the Next.js linter |
