---
name: Quality Precision
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#41474e'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#71787f'
  outline-variant: '#c1c7cf'
  surface-tint: '#28638e'
  primary: '#004268'
  on-primary: '#ffffff'
  primary-container: '#1d5a85'
  on-primary-container: '#9fd0ff'
  inverse-primary: '#97ccfd'
  secondary: '#006c47'
  on-secondary: '#ffffff'
  secondary-container: '#8bf4bf'
  on-secondary-container: '#00714b'
  tertiary: '#373f54'
  on-tertiary: '#ffffff'
  tertiary-container: '#4e566c'
  on-tertiary-container: '#c4cbe6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cde5ff'
  primary-fixed-dim: '#97ccfd'
  on-primary-fixed: '#001d32'
  on-primary-fixed-variant: '#004a74'
  secondary-fixed: '#8ef7c1'
  secondary-fixed-dim: '#71daa7'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005235'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '800'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0em
  badge-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system is tailored for a senior QA engineer, builder, and developer tools creator. It projects ironclad stability, technical precision, and modern engineering maturity. The tone is deeply trustworthy, calculated, and high-utility—avoiding marketing fluff and consumer-app playfulness in favor of authoritative SaaS execution.

The design movement is **Modern Technical SaaS Minimal**:
- Pristine, neutral surfaces dominated by deliberate whitespace and systematic alignment.
- Crisp structural divisions via delicate, low-contrast borders rather than heavy drop shadows.
- Strictly solid fills—no color gradients, no blurred multi-stop background meshes, and zero purple/violet chromatic noise.
- Visual anchors built around robust navy foundations, verified status teals, and high-contrast slate typography to signify reliability, test coverage, and enterprise grade execution.

## Colors

The palette establishes a high-trust technical environment. Surfaces lean into cool off-whites, text hits sharp slate contrasts, and accents signify depth and positive validation.

- **Primary (`#1D5A85`)**: Deep Navy. Represents stability, analytical rigor, and core architectural confidence. Used for primary actions, active navigation states, strong headings, and high-emphasis brand cues.
- **Secondary (`#2F9E6F`)**: Verified Teal-Green. Represents clean test suites, successful deployments, metrics, feature checkmarks, and positive callout badges.
- **Tertiary / Base Dark (`#0F172A`)**: Near-Black Slate. Provides uncompromising legibility for titles and hero typography. A secondary text shade (`#1E293B`) serves dense technical copy.
- **Neutral / Slate Scale**:
  - Border & Dividers: `#E2E8F0` (crisp slate boundary)
  - Surface Subdued: `#F1F5F9` (card backgrounds, code block chrome)
  - Surface Canvas: `#F8FAFC` (ambient background)
  - Muted Text: `#64748B` (captions, secondary metrics, metadata)
- **Palette Restrictions**: Strictly no purple, violet, indigo, or ambient gradient fills. All interactive states, badges, and surfaces utilize flat, solid hex values.

## Typography

Typography establishes an immediate hierarchy of architectural stability and readability:

- **Display & Headings (Plus Jakarta Sans)**: Used in heavy weights (700, 800) with slight negative tracking to deliver punchy, confident SaaS messaging, tool titles, and section headers.
- **Body & Controls (Inter)**: The standard for high-density legibility. Highly neutral, non-distracting, optimized for reading product feature manifests, documentation excerpts, and case studies.
- **Code & Metadata (JetBrains Mono)**: Reinforces the engineering ethos. Applied to error code logs, terminal snippets, technical tags, telemetry stats, and system status indicators.

## Layout & Spacing

The layout is built on a responsive 12-column grid system bounded by a max container width of `1200px` to maintain optimal line lengths and scannability.

- **Desktop (1024px+)**: 12 columns, `1.5rem` (24px) gutters, `2rem` (32px) page margin. Ample vertical rhythm (`space-xl` between sections) conveys premium clarity.
- **Tablet (768px - 1023px)**: 8 columns, `1.5rem` gutters, `1.5rem` margin. Two-column cards reflow into singular or stacked units.
- **Mobile (< 768px)**: 4 columns, `1rem` (16px) gutters, `1rem` margin. All primary panels expand to full width.
- **Component Flow**: Interior elements follow a consistent 8pt-derived rhythm (4px, 8px, 16px, 24px, 40px) ensuring tight grouping between labels, controls, and description blocks.

## Elevation & Depth

This system avoids expressive drop shadows and skeuomorphic gradients in favor of **Tonal Layers & Crisp Low-Contrast Outlines**:

- **Borders over Shadows**: Spatial definition is delivered by a 1px solid border in `#E2E8F0` across cards, headers, and code containers.
- **Surface Layering**:
  - **Base Canvas**: Solid `#F8FAFC`.
  - **Panel / Card Surface**: Solid `#FFFFFF` enclosed in `#E2E8F0`.
  - **Subdued / Nested Surface**: Solid `#F1F5F9` (used for code blocks, terminal mockups, and input backgrounds).
- **Interactive Lift**: On hover, interactive cards do not sprout colored glows; they produce a surgical micro-elevation: `box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05)` with a border shift to `#CBD5E1`.

## Shapes

The shape language reflects modern engineering software: restrained, purposeful, and structured. 

- Base controls (inputs, buttons, pill tags) default to `rounded-lg` (`0.5rem` / 8px).
- Larger layout surfaces, feature cards, and visual callouts use `rounded-xl` (`0.75rem` / 12px).
- Full circular/pill treatments are reserved exclusively for compact status chips and test status badges.

## Components

### Buttons
- **Primary**: Solid Deep Navy (`#1D5A85`) background, `#FFFFFF` text, `rounded-lg`, font weight 600. Hover state darkens cleanly to `#164669`. Focus visible uses an offset 2px solid `#1D5A85` outline.
- **Secondary / Ghost**: White `#FFFFFF` background, 1px solid border `#E2E8F0`, text `#1E293B`. Hover state shifts to `#F1F5F9` background with `#0F172A` text.
- **Tertiary Accent**: Teal-Green (`#2F9E6F`) background, `#FFFFFF` text, reserved exclusively for conversion events (e.g., "Get ErrorZero", "Run Audit").

### Status Badges & Chips
- Built with `JetBrains Mono` at `12px` (`badge-label`), uppercase with tracking.
- **Success / Passed**: Solid `#2F9E6F` text on an unbordered `#ECFDF5` light background with a `0.375rem` leading secondary dot.
- **Tooling / Category Chip**: Bordered 1px `#E2E8F0`, background `#FFFFFF`, text `#64748B`.

### Cards & Feature Containers
- Background `#FFFFFF`, 1px solid `#E2E8F0`, corner radius `rounded-xl`.
- Padding conforms strictly to `space-lg` (24px).
- Internal layout cleanly groups the header, code preview/illustration, and metric summary without decorative divider lines.

### Inputs & Form Elements
- **Text Inputs**: Height 42px, background `#FFFFFF`, border 1px solid `#CBD5E1`, text `#0F172A`, placeholder `#94A3B8`, radius `rounded-lg`. Focus state activates a crisp 1px ring in `#1D5A85` with zero glow.
- **Checkboxes & Radios**: Custom square/round 18px boxes, border 1.5px `#94A3B8`. Selected state fills with solid `#2F9E6F` displaying a crisp white SVG check icon.

### Terminal & Code Blocks (Product-Specific)
- Background `#0F172A` with contrasting white/slate text (`#F8FAFC`) and `#2F9E6F` prompt arrows or status flags.
- Window chrome features a 1px border `#1E293B` and `#JetBrains Mono` output lines at `13px`.