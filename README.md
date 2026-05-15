# Jeannette & Georges Wedding Invitation

A beautiful, luxury wedding invitation website built with React, Vite, Tailwind CSS, and Framer Motion. Deploy-ready for Cloudflare Pages.

## ✨ Features

- **Luxury Design** - Elegant gold, champagne, and blush color palette with serif typography
- **Smooth Animations** - Framer Motion for beautiful page transitions and interactions
- **Mobile-First** - Fully responsive design optimized for all devices
- **FormSubmit Integration** - RSVP form that sends to both couple emails automatically
- **Central Configuration** - Update all wedding details in one place
- **Production-Ready** - Optimized build for Cloudflare Pages

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

This creates an optimized build in the `dist/` folder for deployment.

## 📋 Configuration

Edit `src/config.js` to update all wedding details:

```javascript
time: '6:00 PM'  // Update time here
```

Changes propagate throughout the entire site automatically.

## 📧 RSVP Form

The RSVP form uses **FormSubmit** to send submissions to:
- Main email: `Khorkhehachem@gmail.com`
- CC email: `jeannettebouenek@gmail.com`

Form fields:
- Full name (required)
- Email (required)
- Attendance (required)
- Number of guests (required)
- Dietary restrictions (optional)
- Message (optional)

### How FormSubmit Works

When a user submits the form:
1. FormSubmit receives the submission
2. Automatically sends to both emails (main + CC)
3. Shows success confirmation to user
4. User receives confirmation email

## 🌐 Deploy to Cloudflare Pages

1. Push your repository to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Connect your GitHub repository
4. Set build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
5. Deploy!

Every push to main auto-builds and deploys.

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **FormSubmit** - Form backend service

## 🎨 Design

- Responsive grid layouts
- Smooth scroll behavior
- Animated entrance effects
- Elegant hover states
- Luxury color palette

## 📄 File Structure

```
├── index.html              # HTML entry
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS config
├── postcss.config.js      # PostCSS config
├── package.json           # Dependencies
└── src/
    ├── main.jsx           # React entry
    ├── App.jsx            # Main component
    ├── index.css          # Global styles
    ├── config.js          # Wedding configuration
    └── components/
        ├── Hero.jsx       # Hero section
        ├── Details.jsx    # Wedding details
        ├── RSVP.jsx       # RSVP section
        ├── RSVPForm.jsx   # Form component
        └── Footer.jsx     # Footer
```

## 💍 Couple Information

- **Names:** Jeannette & Georges
- **Wedding Date:** Saturday, June 27, 2026
- **Default Time:** 6:00 PM (editable in config.js)

## 📝 License

Personal use for wedding invitation only.

## 🎉 Have Questions?

Contact: [Khorkhehachem@gmail.com](mailto:Khorkhehachem@gmail.com)

---

Made with 💍 and ✨ for a special celebration
