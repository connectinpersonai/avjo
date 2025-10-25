# Product Requirements Document (PRD)
## AI Agency Bookcall Website - Avjo AI

**Version**: 1.0  
**Date**: October 25, 2025  
**Status**: ✅ Implemented

---

## 1. Executive Summary

### Product Name
Avjo AI - AI Agency & Consulting Website

### Purpose
A minimalistic, conversion-focused landing page designed to generate leads for an AI consulting agency through scheduled calls.

### Target Audience
Small to mid-scale businesses looking to:
- Automate repetitive tasks with AI
- Build fast and scalable applications
- Implement AI solutions quickly

### Primary Goal
Convert website visitors into booked consultation calls via Cal.com integration.

---

## 2. Core Value Proposition

**Main Hook**: "Stop Wasting Time on Repetitive Tasks"

**Key Messages**:
- Experienced AI team with latest technology
- Fast, scalable application development
- AI automation for business workflows
- Rapid implementation and delivery

---

## 3. Technical Stack

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| Framework | Next.js 15 | Fast, SEO-friendly, static generation |
| Styling | Tailwind CSS | Rapid development, minimal bundle size |
| UI Components | shadcn/ui | Beautiful, accessible, customizable |
| Language | TypeScript | Type safety, better DX |
| Calendar | Cal.com | Free, embeddable, professional |
| Icons | Lucide React | Lightweight, consistent design |
| Deployment | Static (Vercel) | Fast, free, automatic deployments |

---

## 4. Website Structure

### 4.1 Hero Section
**Purpose**: Capture attention and communicate value immediately

**Elements**:
- Bold headline addressing pain point
- Clear subheading explaining solution
- Primary CTA button: "Book a Call"
- Clean, minimal design with gradient background

**Copy**:
- Headline: "Stop Wasting Time on Repetitive Tasks"
- Subheading: "We're an experienced AI team that builds fast, scalable applications..."
- CTA: "Book a Call →"

### 4.2 Services Section
**Purpose**: Explain what the agency offers

**Elements**:
- Section title: "What We Do"
- Three service cards with icons
- Hover effects for interactivity

**Services**:
1. **AI Automation** (⚡ icon)
   - Automate repetitive business tasks
   
2. **Fast Development** (🚀 icon)
   - Rapid, scalable application development
   
3. **Latest AI Tech** (🧠 icon)
   - Cutting-edge AI solutions

### 4.3 About Section
**Purpose**: Build credibility and trust

**Elements**:
- Section title: "Why Choose Us?"
- Brief introduction paragraph
- Four benefit cards in 2x2 grid

**Benefits**:
1. Experienced Team
2. Latest Technology
3. Fast Delivery
4. Scalable Solutions

### 4.4 Book Call Section
**Purpose**: Convert visitors into leads

**Elements**:
- Section title: "Ready to Transform Your Business?"
- Persuasive copy
- Cal.com embedded calendar
- Reassurance text: "No commitment required"

**Integration**:
- Cal.com inline embed
- Month view layout
- Configurable event type

### 4.5 Footer
**Purpose**: Provide basic information

**Elements**:
- Copyright notice
- Company name
- Minimal design

---

## 5. Design Requirements

### 5.1 Visual Design
- **Style**: Minimalistic, clean, professional
- **Layout**: Single-page, scroll-based
- **Color Scheme**: 
  - Primary: Blue (#3b82f6)
  - Background: White/Dark gray
  - Accent: Secondary blue shades
- **Typography**: Inter font (Google Fonts)
- **Spacing**: Generous whitespace
- **Effects**: Subtle gradients, hover states

### 5.2 Responsive Design
- **Mobile-first approach**
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Grid system**: Responsive grid (1-3 columns)
- **Touch-friendly**: Large tap targets on mobile

### 5.3 Component Library (shadcn/ui)
- Button component (primary, outline variants)
- Card component (services, benefits)
- Layout components
- Consistent design system

---

## 6. Content Strategy

### 6.1 Tone of Voice
- **Conversational**: Friendly, approachable
- **Confident**: Experienced, capable
- **Clear**: No jargon, direct communication
- **Action-oriented**: Focus on results

### 6.2 Copy Structure
- **Headlines**: Problem-focused
- **Subheadings**: Solution-focused
- **Body**: Benefit-focused
- **CTAs**: Action-focused

### 6.3 Key Messaging
1. "Stop wasting time" - addresses pain
2. "Experienced AI team" - builds credibility
3. "Latest technology" - shows expertise
4. "Fast and scalable" - promises results

---

## 7. User Flow

```
Landing (Hero)
    ↓
Interest (Services) - "What can they do?"
    ↓
Trust (About) - "Why should I trust them?"
    ↓
Action (Book Call) - "Let's talk"
    ↓
Conversion (Cal.com) - "Schedule meeting"
```

**Expected Journey**:
1. User arrives via marketing/SEO
2. Hero captures attention (3 seconds)
3. Services explain offerings (10 seconds)
4. About builds credibility (10 seconds)
5. Book Call section converts (30+ seconds)
6. User books consultation call

---

## 8. Technical Requirements

### 8.1 Performance
- **Load Time**: < 3 seconds
- **First Contentful Paint**: < 1.5 seconds
- **Time to Interactive**: < 3 seconds
- **Lighthouse Score**: 90+ on all metrics

### 8.2 SEO
- **Meta tags**: Title, description, OG tags
- **Semantic HTML**: Proper heading hierarchy
- **Structured data**: LocalBusiness schema
- **Mobile-friendly**: Responsive design
- **Fast loading**: Optimized images, minimal JS

### 8.3 Accessibility
- **WCAG 2.1 AA compliance**
- **Keyboard navigation**
- **Screen reader friendly**
- **Sufficient color contrast**
- **Alt text for images**

### 8.4 Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 9. Integration Requirements

### 9.1 Cal.com Integration
- **Embed type**: Inline embed
- **Configuration**: Month view layout
- **Event type**: Configurable (30min consultation)
- **Script loading**: Async, non-blocking
- **Fallback**: Link to Cal.com profile

### 9.2 Analytics (Future)
- Google Analytics 4
- Track: Page views, scroll depth, CTA clicks
- Conversion tracking: Booking completions

---

## 10. Success Metrics

### Primary KPI
- **Number of booked calls per month**

### Secondary KPIs
- Website traffic (unique visitors)
- Conversion rate (visitors → bookings)
- Time on page
- Scroll depth (% reaching Book Call section)
- Mobile vs desktop traffic

### Target Metrics (Month 1)
- 100+ unique visitors
- 5-10% conversion rate
- 5-10 booked calls

---

## 11. Development Phases

### ✅ Phase 1: Foundation (Completed)
- Next.js project setup
- Tailwind CSS configuration
- TypeScript configuration
- Basic project structure

### ✅ Phase 2: UI Components (Completed)
- shadcn/ui integration
- Button component
- Card component
- Utility functions

### ✅ Phase 3: Page Development (Completed)
- Hero section
- Services section
- About section
- Book Call section
- Footer

### ✅ Phase 4: Integration (Completed)
- Cal.com embed setup
- Responsive design
- Mobile optimization
- Performance optimization

### ✅ Phase 5: Documentation (Completed)
- README.md
- SETUP.md
- PRD.md
- Code comments

---

## 12. Future Enhancements (Phase 2)

### Priority 1
- [ ] Add actual Cal.com username/link
- [ ] Add company logo
- [ ] Add favicon
- [ ] Google Analytics integration

### Priority 2
- [ ] Testimonials section
- [ ] Case studies/portfolio
- [ ] Blog/resources section
- [ ] Contact form backup

### Priority 3
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Chat widget integration
- [ ] Video testimonials

---

## 13. Content Checklist

### Before Launch
- [ ] Update Cal.com link with actual username
- [ ] Review and finalize all copy
- [ ] Add company logo
- [ ] Update meta tags with actual domain
- [ ] Test booking flow end-to-end
- [ ] Verify mobile responsiveness
- [ ] Check all links work
- [ ] Proofread all content

---

## 14. Deployment Checklist

### Pre-Deployment
- [x] Build succeeds without errors
- [x] No linting errors (critical)
- [x] All pages render correctly
- [x] Mobile responsive
- [ ] Cal.com integration tested
- [ ] Analytics configured

### Deployment
- [ ] Push to GitHub
- [ ] Connect to Vercel
- [ ] Configure custom domain
- [ ] Set up SSL certificate (automatic)
- [ ] Test production build

### Post-Deployment
- [ ] Test live site on multiple devices
- [ ] Verify Cal.com booking works
- [ ] Check analytics tracking
- [ ] Monitor performance metrics
- [ ] Share with stakeholders

---

## 15. Maintenance Plan

### Weekly
- Monitor booking conversion rate
- Check for any technical issues
- Review analytics data

### Monthly
- Update content based on feedback
- Optimize underperforming sections
- A/B test different copy variations

### Quarterly
- Major content refresh
- Add new case studies/testimonials
- Performance audit
- SEO optimization

---

## 16. Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Cal.com downtime | High | Low | Add contact form backup |
| Slow loading | Medium | Low | Optimize images, lazy loading |
| Poor mobile UX | High | Low | Extensive mobile testing |
| Low conversion | High | Medium | A/B testing, copy optimization |
| Technical issues | Medium | Low | Monitoring, error tracking |

---

## 17. Stakeholder Sign-off

### Approved By
- [ ] Product Owner
- [ ] Technical Lead
- [ ] Design Lead
- [ ] Marketing Lead

### Approval Date
- [ ] _____________

---

## 18. Appendix

### A. Technical Dependencies
```json
{
  "next": "^15.0.3",
  "react": "^18.3.1",
  "tailwindcss": "^3.4.14",
  "typescript": "^5.6.3",
  "lucide-react": "latest",
  "class-variance-authority": "latest",
  "tailwind-merge": "latest"
}
```

### B. File Structure
```
avjo/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── cal-embed.tsx
├── lib/
│   └── utils.ts
├── public/
├── PRD.md
├── README.md
├── SETUP.md
└── package.json
```

### C. Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Cal.com Documentation](https://cal.com/docs)

---

**Document Status**: ✅ Complete  
**Implementation Status**: ✅ Complete  
**Next Steps**: Configure Cal.com and deploy to production

