# INKED CREATIONS - Tattoo Studio Website

A modern, responsive website for a tattoo studio built with Next.js, React, and Tailwind CSS. Features a WhatsApp-integrated booking system.

## Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Theme** - Modern aesthetic with red accent colors
- **WhatsApp Booking** - 3-step booking form that sends requests directly to WhatsApp
- **Sections Included:**
  - Hero with call-to-action
  - Services showcase
  - Artist profiles
  - Gallery portfolio
  - Contact information
  - Footer with newsletter

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** JavaScript (JSX)
- **Styling:** Tailwind CSS
- **Icons:** SVG icons
- **Build Output:** Static export

## Project Structure

```
src/app/
├── components/
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Artists.jsx
│   ├── Gallery.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── BookingModal.jsx
├── page.jsx
├── layout.js
└── globals.css
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

Static files go to `dist/` folder.

## Customization

### Change WhatsApp Number

Edit `src/app/components/BookingModal.jsx` line 59:

```javascript
const vendorWhatsApp = "15551234567"; // Your WhatsApp number
```

### Update Business Info

- `layout.js` - Site title
- `Contact.jsx` - Address, phone, hours
- `Navigation.jsx` - Logo

## License

MIT License
