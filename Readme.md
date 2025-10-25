# Avjo AI - AI Agency & Consulting Website

A minimalistic bookcall website for an AI agency/consultant, built with Next.js, Tailwind CSS, and shadcn/ui.

## Features

- 🎨 Clean, minimalistic design
- 📱 Fully responsive (mobile-first)
- ⚡ Fast static site with Next.js
- 🎯 Lead generation focused
- 📅 Cal.com integration for booking calls
- 🎭 shadcn/ui components
- 🎨 Tailwind CSS styling

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + shadcn/ui
- **Language**: TypeScript
- **Calendar**: Cal.com
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Cal.com account (free at [cal.com](https://cal.com))

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cal.com Setup

Your Cal.com integration is already configured! The site uses:

- **Cal.com Link**: `avjo-ai-0szqep/30min`
- **Layout**: Month view
- **Package**: `@calcom/embed-react`

### How It Works

1. The `CalEmbed` component loads the Cal.com API
2. Users click "Schedule Your Free Consultation" button
3. Cal.com modal opens with your calendar
4. Users can book a 30-minute consultation

### To Update Your Cal.com Link

If you want to use a different Cal.com account:

1. Sign up at [cal.com](https://cal.com)
2. Create an event type (e.g., "30min")
3. Get your Cal.com link
4. Update in `app/page.tsx` (line ~134):
   ```tsx
   data-cal-link="YOUR-USERNAME/30min"
   ```

## Customization

### Update Content

Edit `app/page.tsx` to customize:
- Hero headline and description
- Services offered
- About section content
- Footer information

### Change Colors

Modify the color scheme in `app/globals.css`:
- Update CSS variables for light/dark themes
- Primary color: `--primary`
- Background: `--background`
- Foreground: `--foreground`

### Add Your Branding

1. Update the title and description in `app/layout.tsx`
2. Add your logo to the `public` folder
3. Update the footer with your company info

## Build for Production

```bash
npm run build
npm start
```

## Deploy

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Cloudflare Pages**
- Any static hosting service

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [vercel.com](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

## Project Structure

```
avjo/
├── app/
│   ├── globals.css       # Global styles with Tailwind
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main landing page
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── cal-embed.tsx     # Cal.com script loader
├── lib/
│   └── utils.ts          # Utility functions
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Sections

1. **Hero**: Eye-catching headline with CTA
2. **Services**: Three main service offerings
3. **About**: Why choose your agency
4. **Book Call**: Cal.com calendar integration
5. **Footer**: Copyright and contact info

## License

ISC

## Support

For issues or questions, please open an issue on GitHub or contact us through the booking form.
