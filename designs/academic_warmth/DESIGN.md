---
name: Academic Warmth
colors:
  surface: '#fff9e6'
  surface-dim: '#e0dac3'
  surface-bright: '#fff9e6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#faf4dc'
  surface-container: '#f4eed6'
  surface-container-high: '#eee8d1'
  surface-container-highest: '#e8e3cb'
  on-surface: '#1e1c0e'
  on-surface-variant: '#41493d'
  inverse-surface: '#333121'
  inverse-on-surface: '#f7f1d9'
  outline: '#717a6c'
  outline-variant: '#c1c9ba'
  surface-tint: '#2e6b27'
  primary: '#165413'
  on-primary: '#ffffff'
  primary-container: '#306d29'
  on-primary-container: '#a9ed99'
  inverse-primary: '#94d786'
  secondary: '#63603a'
  on-secondary: '#ffffff'
  secondary-container: '#e7e1b1'
  on-secondary-container: '#67643d'
  tertiary: '#105510'
  on-tertiary: '#ffffff'
  tertiary-container: '#2c6e27'
  on-tertiary-container: '#a6ee97'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f49f'
  primary-fixed-dim: '#94d786'
  on-primary-fixed: '#002201'
  on-primary-fixed-variant: '#135211'
  secondary-fixed: '#eae4b4'
  secondary-fixed-dim: '#cec89a'
  on-secondary-fixed: '#1f1c01'
  on-secondary-fixed-variant: '#4b4824'
  tertiary-fixed: '#acf59d'
  tertiary-fixed-dim: '#91d883'
  on-tertiary-fixed: '#002201'
  on-tertiary-fixed-variant: '#0c530e'
  background: '#fff9e6'
  on-background: '#1e1c0e'
  surface-variant: '#e8e3cb'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Literata
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
  section-gap: 80px
---

## Brand & Style
The design system is built on the philosophy of "Academic Warmth"—merging the rigor of traditional education with the approachability of modern AI. It aims to create a "sanctuary for focus," moving away from the high-stress, neon-lit aesthetics of typical technology platforms toward something that feels like a premium library or a well-lit study.

The visual style is **Modern Organic**. It draws from Apple’s precision, Notion’s functional minimalism, and Duolingo’s friendly accessibility. The target audience includes students and lifelong learners who value a calm, distraction-free environment that prioritizes legibility and cognitive ease. The emotional response should be one of quiet confidence and focused optimism.

## Colors
The palette is rooted in nature and classical academia. The **Primary Background (#FBF5DD)** acts as a digital "parchment," reducing eye strain compared to pure white. The **Secondary Background (#E7E1B1)** is used for subtle grouping and UI layering.

The **Dark Green (#0D530E)** is the primary engine for readability, providing high-contrast text that feels authoritative yet softer than pure black. **Primary Forest Green (#306D29)** is reserved for primary actions, success states, and progress markers, symbolizing growth and clarity. This system does not support dark mode, as the light-on-cream aesthetic is core to the brand identity.

## Typography
The typography strategy uses a "Serif-for-Structure, Sans-for-System" approach. 

**Literata** is used for all headlines and long-form educational content. Its scholarly, bookish character reinforces the platform's academic credibility. **Plus Jakarta Sans** is used for UI elements, labels, and secondary body text. Its soft, rounded terminals complement the shape language and maintain a friendly, contemporary feel. 

Large-scale display text should use tighter letter spacing, while small labels benefit from slight tracking (0.02em) to ensure accessibility on the cream background.

## Layout & Spacing
This design system employs a **Fixed Grid** philosophy for desktop to maintain a sense of focus and curated content, while transitioning to a **Fluid Grid** for mobile. 

The spacing rhythm is built on an **8px base unit**. Layouts should prioritize "whitespace as a feature," using generous margins (64px on desktop) to prevent cognitive overload. Cards and containers should use a 24px gutter to maintain a distinct separation of ideas. Section gaps are intentionally large (80px) to provide clear visual breathing room between different learning modules.

## Elevation & Depth
Depth is conveyed through **Tonal Layering** and **Soft Ambient Shadows**. Rather than using harsh black shadows, this design system uses shadows tinted with the brand's Dark Green, keeping them organic and "heavy" but soft.

- **Level 1 (Base):** Primary Background (#FBF5DD).
- **Level 2 (Inlay):** Secondary Background (#E7E1B1) used for wells or recessed areas (e.g., sidebar, search bars).
- **Level 3 (Floating):** White or #FBF5DD cards with a 15% opacity Dark Green shadow (Blur: 20px, Y-Offset: 4px). This creates a "hovering paper" effect.
- **Level 4 (Interactive):** Active buttons or modals use a more pronounced shadow (Blur: 40px, Y-Offset: 12px) to suggest physical lift.

## Shapes
The shape language is defined by **High Circularity**. Following the "student-friendly" mandate, sharp corners are strictly avoided.

Containers and primary cards use a radius of **24px** (Level 3 / Pill-shaped logic), giving the UI a tactile, friendly, and safe feel. Buttons and input fields should follow this roundedness, often appearing fully pill-shaped or with a minimum of 16px radius. This softness balances the "serious" academic typography.

## Components

### Buttons
- **Primary Action:** Solid Forest Green (#306D29) with white or cream text. Pill-shaped. Subtle 2px "press" animation.
- **Secondary Action:** Ghost style with a 2px Forest Green border or solid Secondary Background (#E7E1B1).

### Cards
- **Learning Card:** White or primary background color, 24px corner radius, soft ambient shadow. Large internal padding (minimum 32px) to ensure content doesn't feel cramped.

### Input Fields
- **Search/Form Fields:** Secondary Background (#E7E1B1) fill, no border by default. On focus, a 2px Forest Green border appears. Font should be Plus Jakarta Sans 16px.

### Progress Indicators
- **Course Tracker:** Thick 12px rounded tracks. The unfilled track should be a 10% opacity version of the Forest Green, with the filled track being the solid Primary Forest Green.

### Chips & Badges
- **Topic Tags:** Small, pill-shaped elements using the Secondary Background (#E7E1B1) with Dark Green text. No shadows.

### Feedback Elements
- **Tooltips/Hints:** AI-generated hints should appear in a subtle box with a slight Forest Green tint and a distinctive "AI" icon using a book-and-sparkle motif.