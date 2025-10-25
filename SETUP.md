# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

### Step 3: Test Cal.com Integration

Your Cal.com is already configured! 

1. **Current Setup**
   - Cal.com link: `avjo-ai-0szqep/30min`
   - Integration: `@calcom/embed-react`
   - Layout: Month view modal

2. **Test It**
   - Go to [http://localhost:3000](http://localhost:3000)
   - Scroll to "Book Call" section
   - Click "Schedule Your Free Consultation"
   - Cal.com modal should open!

3. **Use Your Own Cal.com** (Optional)
   - Sign up at [cal.com](https://cal.com) if you want your own
   - Create an event type (e.g., "30min")
   - Update `data-cal-link` in `app/page.tsx` (line ~134)
   - Example: `"your-username/30min"`

## 🎨 Customize Your Site

### Update Content

Edit `app/page.tsx` to change:
- **Hero headline** (line ~12): Your main pitch
- **Services** (line ~40-80): What you offer
- **About section** (line ~90-130): Why choose you
- **Footer** (line ~170): Your company info

### Change Colors

Edit `app/globals.css` to modify:
- Primary color (blue by default)
- Background colors
- Dark mode colors

### Add Your Logo

1. Add logo file to `public/` folder
2. Import in `app/page.tsx`
3. Add to hero or navigation section

## 📦 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

Done! Your site is live in ~2 minutes.

## 🆘 Need Help?

Common issues:

**Site won't start?**
- Make sure Node.js 18+ is installed
- Delete `node_modules` and run `npm install` again

**Cal.com not showing?**
- Check your Cal.com username is correct
- Make sure the event type exists
- Clear browser cache

**Want to change styling?**
- All styles are in Tailwind classes
- Modify classes directly in `app/page.tsx`
- Check [Tailwind docs](https://tailwindcss.com/docs) for reference

## 📝 Next Steps

1. ✅ Set up Cal.com integration
2. ✅ Customize content and copy
3. ✅ Add your branding/logo
4. ✅ Test on mobile devices
5. ✅ Deploy to production
6. 🎯 Drive traffic to your site!

## 💡 Pro Tips

- Keep the design minimal - less is more
- Make your value proposition crystal clear
- Test the booking flow yourself
- Add Google Analytics (optional)
- Consider adding a contact form backup
- Update meta tags for SEO in `app/layout.tsx`

Happy building! 🎉

