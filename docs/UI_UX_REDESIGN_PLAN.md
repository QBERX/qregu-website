# QRegu Website - UI/UX Redesign Plan

**Tarih:** 2026-03-22
**Durum:** ✅ Tamamlandı (Phase 1-4)
**Süre:** ~2 saat

---

## Hedef

Mevcut tasarımı "AI tarafından oluşturulmuş" görünümünden kurtarıp, daha profesyonel, human-touch, enterprise-grade bir görünüme kavuşturmak.

---

## Design Referansları

| Referans | URL | Alınacak Özellikler |
|----------|-----|---------------------|
| **21st.dev** | https://21st.dev | Modern component patterns, clean aesthetics |
| **shadcn/ui** | https://ui.shadcn.com | Card styles, button variants, form inputs |
| **Anthropic** | https://anthropic.com | Typography, spacing, trust-building design |
| **Linear** | https://linear.app | Gradient text, micro-interactions, dark sections |
| **Vercel** | https://vercel.com | Hero patterns, bento grids, glassmorphism |

---

## Etkilenen Sayfalar

- `index.html` - Ana sayfa
- `contact.html` - İletişim formu
- `use-cases/banking.html` - Bankacılık
- `use-cases/fintech.html` - Fintech
- `use-cases/capital-markets.html` - Sermaye Piyasaları
- `use-cases/insurance.html` - Sigorta
- `privacy-policy.html` - Gizlilik Politikası
- `terms-of-service.html` - Kullanım Koşulları

---

## Phase 1: Foundation ✅ IN PROGRESS

### 1.1 Color Palette
```css
/* Mevcut → Hedef */
--p: #7C3AED    →  #6366F1  (daha muted indigo)
--pl: #A78BFA   →  #818CF8  (light indigo)
--pd: #5B21B6   →  #4F46E5  (dark indigo)
--pb: #F5F3FF   →  #EEF2FF  (indigo background)
--ink: #0A0A0F  →  #111827  (softer black)
--muted: #52525B → #4B5563  (better contrast)
```

### 1.2 Typography
- Font: Inter (Google Fonts)
- Font smoothing: antialiased
- Letter spacing: tighter for headings

### 1.3 Spacing System (8px grid)
```css
--space-1: 4px;  --space-2: 8px;   --space-3: 12px;
--space-4: 16px; --space-5: 20px;  --space-6: 24px;
--space-8: 32px; --space-10: 40px; --space-12: 48px;
```

### 1.4 Shadow System
```css
--shadow-sm: subtle
--shadow-md: medium depth
--shadow-lg: elevated
--shadow-glow: purple glow for hover
```

### 1.5 Transitions
```css
--ease-out: cubic-bezier(0.16, 1, 0.3, 1)
--duration-fast: 150ms
--duration-normal: 250ms
```

---

## Phase 2: Components

### 2.1 Buttons
- [ ] Primary: gradient hover, lift effect
- [ ] Ghost: border color transition
- [ ] CTA: glow on hover

### 2.2 Cards
- [ ] Default: subtle shadow, hover lift
- [ ] Glass: backdrop-filter blur (dark sections)
- [ ] Elevated: stronger shadow

### 2.3 Form Inputs
- [ ] Focus glow effect
- [ ] Better placeholder color
- [ ] Validation states

### 2.4 Navigation
- [ ] Underline animation on hover
- [ ] Active state indicator

---

## Phase 3: Sections (index.html)

### 3.1 Hero Section
- [ ] Gradient text for emphasis
- [ ] Floating screenshot (perspective transform)
- [ ] Badge pulse animation

### 3.2 Sectors Section
- [ ] Glassmorphism cards
- [ ] Hover: scale + glow + border
- [ ] Stagger animation

### 3.3 Impact Section
- [ ] Overlapping screenshots
- [ ] Feature cards with hover

### 3.4 Discovery Section
- [ ] Connected node timeline
- [ ] Progress bar animation

### 3.5 Workflow Section
- [ ] Vertical timeline with connector
- [ ] Step hover effects

### 3.6 Mobile Section
- [ ] 3D perspective phones
- [ ] Feature card lifts

### 3.7 ROI Calculator
- [ ] Custom slider styling
- [ ] Animated number counting
- [ ] Highlight card gradient

### 3.8 Pricing Section
- [ ] Featured card elevated
- [ ] Gradient border
- [ ] Check animation

### 3.9 FAQ Section
- [ ] Smooth accordion
- [ ] Chevron rotation

### 3.10 CTA Section
- [ ] Animated gradient background
- [ ] Button glow

---

## Phase 4: Subpages

### 4.1 contact.html
- [ ] Split layout (form + info)
- [ ] Floating labels
- [ ] Success animation

### 4.2 use-cases/*.html
- [ ] Icon gradient backgrounds
- [ ] Timeline improvements
- [ ] Staggered reveal

### 4.3 Legal pages
- [ ] Table of contents
- [ ] Better section dividers

---

## Phase 5: Polish

- [ ] Scroll reveal animations (CSS only)
- [ ] Loading states
- [ ] Mobile refinements
- [ ] Performance (will-change)
- [ ] Cross-browser test

---

## Güvenlik Notları

| Endişe | Durum |
|--------|-------|
| HTML yapısı değişir mi? | ❌ Hayır, sadece CSS |
| Responsive bozulur mu? | ❌ Hayır, breakpoint'ler korunuyor |
| Accessibility bozulur mu? | ❌ Hayır, focus states korunuyor |
| Performance etkilenir mi? | ✅ Olumlu, GPU-accelerated |

---

## İlerleme

- [x] Plan oluşturuldu
- [x] Phase 1: Foundation ✅
- [x] Phase 2: Components ✅
- [x] Phase 3: Sections ✅
- [x] Phase 4: Subpages ✅
- [ ] Phase 5: Polish (test & verify)

---

**Son Güncelleme:** 2026-03-22