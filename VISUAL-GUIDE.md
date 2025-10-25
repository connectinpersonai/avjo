# Visual Guide - Avjo AI Website

This document describes the visual layout and design of each section.

---

## 🎨 Overall Design Philosophy

- **Minimalistic**: Clean, uncluttered design
- **Modern**: Contemporary UI with subtle gradients
- **Professional**: Business-appropriate styling
- **Conversion-focused**: Clear CTAs throughout

---

## 📱 Sections Overview

### 1. Hero Section

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│           Stop Wasting Time on                      │
│              Repetitive Tasks                       │
│                                                     │
│    We're an experienced AI team that builds         │
│    fast, scalable applications and automates        │
│    your workflows with the latest AI technology.   │
│                                                     │
│              [Book a Call →]                        │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Visual Details**:
- Background: Gradient from white to light blue
- Headline: 4xl-7xl font size (responsive)
- "Repetitive Tasks" in primary blue color
- Large, prominent CTA button
- Centered alignment
- Generous padding (py-24 to py-32)

---

### 2. Services Section

```
┌─────────────────────────────────────────────────────┐
│                   What We Do                        │
│                                                     │
│    We help small and mid-scale businesses           │
│    leverage AI to work smarter, not harder.         │
│                                                     │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│  │   ⚡    │  │   🚀    │  │   🧠    │            │
│  │   AI    │  │  Fast   │  │ Latest  │            │
│  │Automation│  │  Dev    │  │AI Tech  │            │
│  │         │  │         │  │         │            │
│  └─────────┘  └─────────┘  └─────────┘            │
└─────────────────────────────────────────────────────┘
```

**Visual Details**:
- Three equal-width cards
- Icons in light blue circles
- Card hover effect (border color change)
- Responsive grid (1 column mobile, 3 desktop)
- Card borders with subtle shadow

---

### 3. About Section

```
┌─────────────────────────────────────────────────────┐
│                Why Choose Us?                       │
│                                                     │
│   We're not just another AI agency. We're a         │
│   team of experienced developers and AI             │
│   specialists who stay on the cutting edge.         │
│                                                     │
│  ┌──────────────┐  ┌──────────────┐               │
│  │ Experienced  │  │   Latest     │               │
│  │    Team      │  │ Technology   │               │
│  └──────────────┘  └──────────────┘               │
│  ┌──────────────┐  ┌──────────────┐               │
│  │    Fast      │  │  Scalable    │               │
│  │  Delivery    │  │  Solutions   │               │
│  └──────────────┘  └──────────────┘               │
└─────────────────────────────────────────────────────┘
```

**Visual Details**:
- Light background (secondary/30)
- 2x2 grid of benefit cards
- Cards with white background and shadow
- Responsive (1 column mobile, 2 desktop)
- Centered text alignment

---

### 4. Book Call Section

```
┌─────────────────────────────────────────────────────┐
│        Ready to Transform Your Business?            │
│                                                     │
│   Book a free consultation call and let's           │
│   discuss how AI can help automate your             │
│   workflows and scale your business.                │
│                                                     │
│  ┌─────────────────────────────────────────┐       │
│  │                                         │       │
│  │      [Cal.com Calendar Widget]          │       │
│  │                                         │       │
│  │    (Month view with available slots)    │       │
│  │                                         │       │
│  └─────────────────────────────────────────┘       │
│                                                     │
│     No commitment required. Let's talk              │
│            about your needs.                        │
└─────────────────────────────────────────────────────┘
```

**Visual Details**:
- Centered content
- Dashed border around calendar area
- Light background for calendar container
- Reassurance text below calendar
- Maximum width container (max-w-2xl)

---

### 5. Footer

```
┌─────────────────────────────────────────────────────┐
│          © 2025 Avjo AI. All rights reserved.       │
└─────────────────────────────────────────────────────┘
```

**Visual Details**:
- Top border
- Light background
- Centered text
- Small font size
- Minimal padding

---

## 🎨 Color Palette

### Light Mode
- **Primary**: `hsl(221.2, 83.2%, 53.3%)` - Blue
- **Background**: `hsl(0, 0%, 100%)` - White
- **Foreground**: `hsl(222.2, 84%, 4.9%)` - Dark gray
- **Secondary**: `hsl(210, 40%, 96.1%)` - Light gray
- **Border**: `hsl(214.3, 31.8%, 91.4%)` - Light border

### Dark Mode (Auto-detected)
- **Primary**: `hsl(217.2, 91.2%, 59.8%)` - Lighter blue
- **Background**: `hsl(222.2, 84%, 4.9%)` - Dark gray
- **Foreground**: `hsl(210, 40%, 98%)` - Off-white
- **Secondary**: `hsl(217.2, 32.6%, 17.5%)` - Dark blue-gray

---

## 📐 Spacing & Layout

### Container Widths
- **Hero**: `max-w-4xl` (896px)
- **Services**: `max-w-7xl` (1280px)
- **About**: `max-w-4xl` (896px)
- **Book Call**: `max-w-2xl` (672px)

### Vertical Spacing
- **Section padding**: `py-24` to `py-32` (96px to 128px)
- **Element spacing**: `mt-6` to `mt-10` (24px to 40px)
- **Card gaps**: `gap-6` to `gap-8` (24px to 32px)

### Horizontal Spacing
- **Page padding**: `px-6` to `px-8` (24px to 32px)
- **Card padding**: `p-6` (24px)

---

## 🔤 Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Fallback**: system-ui, sans-serif

### Font Sizes (Responsive)
- **Hero headline**: 
  - Mobile: `text-4xl` (36px)
  - Tablet: `text-6xl` (60px)
  - Desktop: `text-7xl` (72px)
  
- **Section titles**: 
  - Mobile: `text-3xl` (30px)
  - Desktop: `text-4xl` (36px)

- **Body text**: 
  - Mobile: `text-base` (16px)
  - Desktop: `text-lg` (18px)

- **Card titles**: `text-2xl` (24px)

### Font Weights
- **Headlines**: `font-bold` (700)
- **Card titles**: `font-semibold` (600)
- **Body**: `font-normal` (400)

---

## 🎯 Interactive Elements

### Buttons
- **Primary Button**:
  - Background: Primary blue
  - Text: White
  - Hover: Slightly darker blue (90% opacity)
  - Size: Large (`h-11`, `px-8`)
  - Border radius: Medium (`rounded-md`)

### Cards
- **Default State**:
  - Border: 2px solid light gray
  - Background: White
  - Shadow: Subtle (`shadow-sm`)

- **Hover State**:
  - Border: Primary blue (50% opacity)
  - Smooth transition

### Links
- **CTA Links**:
  - Styled as buttons
  - Arrow icon for direction
  - Smooth hover transitions

---

## 📱 Responsive Breakpoints

### Mobile (< 640px)
- Single column layout
- Stacked cards
- Smaller font sizes
- Full-width buttons
- Reduced padding

### Tablet (640px - 1024px)
- 2-column grid for services
- 2-column grid for benefits
- Medium font sizes
- Balanced spacing

### Desktop (> 1024px)
- 3-column grid for services
- 2-column grid for benefits
- Largest font sizes
- Maximum spacing
- Centered content with max-width

---

## 🎭 Animations & Transitions

### Hover Effects
- **Cards**: Border color transition (200ms)
- **Buttons**: Background opacity transition (200ms)
- **Links**: Color transition (200ms)

### Focus States
- **Buttons**: Ring outline (2px, primary color)
- **Links**: Ring outline with offset
- **Keyboard navigation**: Visible focus indicators

---

## ♿ Accessibility Features

### Visual
- High contrast text
- Sufficient color contrast ratios
- Clear focus indicators
- Readable font sizes

### Semantic
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic HTML elements
- Alt text for icons (via aria-label)
- Descriptive link text

### Navigation
- Keyboard accessible
- Tab order follows visual order
- Skip to content option
- Screen reader friendly

---

## 📊 Component Hierarchy

```
Page
├── Hero Section
│   ├── Heading (h1)
│   ├── Description (p)
│   └── CTA Button
│
├── Services Section
│   ├── Section Title (h2)
│   ├── Description (p)
│   └── Service Cards (3x)
│       ├── Icon
│       ├── Title (h3)
│       └── Description
│
├── About Section
│   ├── Section Title (h2)
│   ├── Description (p)
│   └── Benefit Cards (4x)
│       ├── Title (h3)
│       └── Description
│
├── Book Call Section
│   ├── Section Title (h2)
│   ├── Description (p)
│   ├── Cal.com Widget
│   └── Reassurance Text
│
└── Footer
    └── Copyright Text
```

---

## 🎨 Design Tokens

### Border Radius
- **Small**: `0.25rem` (4px)
- **Medium**: `0.375rem` (6px)
- **Large**: `0.5rem` (8px)

### Shadows
- **Small**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **Medium**: `0 4px 6px -1px rgb(0 0 0 / 0.1)`

### Icons
- **Size**: 24px (h-6 w-6)
- **Stroke width**: 2px
- **Style**: Lucide React icons

---

## 💡 Design Best Practices Applied

✅ **Minimalism**: Clean, uncluttered layout  
✅ **Hierarchy**: Clear visual hierarchy with sizing  
✅ **Whitespace**: Generous spacing between elements  
✅ **Consistency**: Uniform styling across components  
✅ **Contrast**: High contrast for readability  
✅ **Responsiveness**: Mobile-first, fully responsive  
✅ **Accessibility**: WCAG 2.1 AA compliant  
✅ **Performance**: Optimized for fast loading  

---

**Note**: This is a living document. Update as design evolves.

