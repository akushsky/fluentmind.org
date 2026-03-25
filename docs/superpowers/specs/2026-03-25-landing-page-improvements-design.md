# Fluent Mind Landing Page — Conversion-Optimized Polish

**Date:** 2026-03-25
**Approach:** B — Conversion-Optimized Polish
**Goal:** Transform the current prototype landing page into a polished, mobile-first, multilingual lead generation funnel.

## Context

Fluent Mind is a Russian-language neuro-friendly online language school. The current landing page (React + Vite + Tailwind) has significant gaps: Lorem ipsum in production content, non-functional forms with "prototype" disclaimers, no mobile navigation, placeholder teacher cards, and no internationalization. The primary goal is lead generation — getting visitors to sign up for a trial lesson.

## Constraints

- Stay with current stack: Vite + React + Tailwind CSS + TypeScript
- Keep existing brand identity: purple (#2d2764) + gold (#bfa371) + Poppins font
- No backend — forms simulate submission, easy to wire up later
- SEO is not a priority (leads come from social channels)
- No new content sections (no blog, pricing, social proof)

## Design

### 1. Page Structure & Conversion Funnel

Restructure homepage sections to follow a lead-generation funnel:

| Order | Section | Purpose | Change |
|-------|---------|---------|--------|
| 1 | Hero | Hook & single CTA | Simplified — one CTA ("Записаться на пробный урок"), no inline form, features as visual icons |
| 2 | How It Works | Reduce anxiety | NEW — 3-step visual (Запишитесь → Пройдите диагностику → Начните заниматься) |
| 3 | Courses | Show what you get | Moved UP from position 4. Each card gets its own CTA scrolling to Contact form |
| 4 | Teachers | Build trust | Moved DOWN from position 3. Only 3 real teachers, no placeholders |
| 5 | About / Mission | Emotional connection | Moved DOWN from position 2. Condensed to key message |
| 6 | Contact / Sign Up | Convert | Single clean form + social links. The final ask |

**Rationale:** Current order puts "About" too early (visitor hasn't decided to care yet) and "Courses" too late (visitor needs to know what's offered before who teaches). The new order follows: Hook → Simplicity → Value → Trust → Emotion → Convert.

### 2. Mobile Experience & Navigation

**Current problem:** Navigation is `hidden md:flex` — completely invisible on mobile. No hamburger menu exists.

**Solution:**

- **Hamburger menu:** Full-screen overlay with large touch targets. Slide-down animation with fade.
- **Menu contents:** Section links (Курсы, Специалисты, О нас, Контакты, Карьера) + language switcher (RU/EN/HE/SR pills) + primary CTA button.
- **Sticky bottom CTA bar:** Always visible on mobile — "Пробный урок — бесплатно" with "Записаться" button. Hides via Intersection Observer when the contact form section enters the viewport.
- **Header language badge:** Compact current-language indicator (e.g., "RU") that opens the language selector.
- **Hero on mobile:** Single CTA button, badge + headline + one paragraph. No inline form.

### 3. Animations & Microinteractions

Using `framer-motion` for all animations. Guiding principles:
- Respect `prefers-reduced-motion` — all animations disabled for users who prefer it
- Fast durations: 300-500ms max
- Animate once — sections don't replay on re-scroll
- Only animate `transform` and `opacity` (GPU-accelerated)

**Scroll-triggered section entrances:**

| Section | Animation | Details |
|---------|-----------|---------|
| Hero | Staggered fade-up | Badge → Headline → Description → CTA, 100ms apart. Features icons fade in as group after CTA |
| How It Works | Step-by-step reveal | Steps appear one at a time. Simple CSS border/line animates between steps (not elaborate SVG path drawing) |
| Courses | Cards fan in | Slide up + fade, 150ms stagger. Hover: lift (translateY -4px) + shadow deepen |
| Teachers | Cards slide from sides | Alternate left/right entry. Hover: border transitions to gold |
| About | Gentle fade-in | Simple fade-up. Quote left-border draws down |
| Contact | Form fields stagger | Fields appear one by one, 100ms apart. Submit button arrives last with subtle pulse |

**Always-on microinteractions:**
- **Button hover:** Scale 1.02 + shadow lift + color shift. Gold buttons get shimmer sweep.
- **Form focus:** Input border animates gray → gold. Floating label animates up with color change.
- **Smooth scroll:** All anchor links use smooth scroll with easing. Header nav highlights active section.
- **Page transitions:** Home ↔ Careers uses fade-crossover via `AnimatePresence`.
- **Language switch:** Content crossfades — no page reload.
- **Scroll-to-top:** Existing button gets fade+scale entrance.

### 4. Internationalization (i18n)

Using `react-i18next` + `i18next`.

**Translation files:** `src/locales/{ru,en,he,sr}/translation.json` — one JSON per language with all page copy.

**Current `constants/content.ts` eliminated** — all hardcoded Russian strings move into `ru/translation.json`.

**Language detection & routing:**
- URL prefix: `/en/`, `/he/`, `/sr/` with `/` defaulting to Russian
- Routes: `/:lang?/` and `/:lang?/careers`
- Language preference stored in `localStorage` for return visits

**RTL support for Hebrew:**
- `dir="rtl"` applied to `<html>` when Hebrew is active
- `tailwindcss-rtl` plugin handles layout flipping automatically
- Entire layout mirrors: nav, text alignment, card flow direction

**Desktop:** Compact language pills (RU | EN | HE | SR) in the nav bar.
**Mobile:** Language switcher inside hamburger menu as pill buttons.
**Transition:** Content crossfades on language switch — no page reload.

### 5. Form UX Polish

**Current problems:** All 4 forms have `type="button"` with no handlers. Prototype disclaimers visible to users.

**Solution — make forms feel production-ready without a backend:**

**Visual improvements:**
- Floating labels — animate up when field is focused/filled
- Gold accent border on focus (#bfa371)
- Prototype disclaimers removed, replaced with trust signals: "Бесплатно • Без обязательств • Ответим в течение часа"
- CTA copy: "Записаться" → "Записаться на пробный урок →" (specific + directional)
- CTA color: gold background on dark text (more prominent than current dark button)
- Phone field label: "Телефон или WhatsApp" (matches audience communication habits)
- Message field explicitly marked optional — reduces friction

**Simulated submission flow:**
1. **Validation:** Client-side — name required, loose phone validation (not empty + digits/spaces/dashes/plus, no strict country format since audience spans RU/IL/RS/EN). Invalid fields highlight red with shake animation.
2. **Loading state:** Button shows spinner + "Отправляем..." for 1.5 seconds. Button disabled during this time.
3. **Success screen:** Form replaced by checkmark animation + "Спасибо! Мы свяжемся с вами в ближайшее время."

This is implemented as a `setTimeout` — easy to replace with a real API call later by swapping the timeout for a `fetch`.

### 6. Content Cleanup

- Remove Lorem ipsum from Anastasia's teacher bio — show only real info (languages, specialties)
- Remove "Более N лет" placeholder text
- Remove 2 empty teacher placeholder cards — show only 3 real teachers
- Remove "можно будет добавить" dev notes from `content.ts`
- Remove all "prototype" form disclaimers

### 7. Technical Fixes

- Fix favicon path: `/src/assets/logo.png` → proper Vite import
- Fix deprecated `window.pageYOffset` → `window.scrollY` in ScrollToTop.tsx
- Consolidate color definitions: keep Tailwind config + CSS variables, delete `constants/colors.ts`, use Tailwind classes in all components
- Add 404 catch-all route with redirect to home
- Add `.superpowers/` to `.gitignore`

### 8. New Dependencies

| Package | Purpose |
|---------|---------|
| `framer-motion` | Scroll animations, page transitions, microinteractions |
| `react-i18next` + `i18next` | Internationalization framework |
| `i18next-browser-languagedetector` | Auto-detect user's language preference |
| `tailwindcss-rtl` | RTL layout support for Hebrew |

### 9. Out of Scope (Deferred)

- Backend/API for form submissions
- SSR/SSG for SEO (framework migration to Next.js/Astro)
- New content sections (pricing, blog, testimonials, social proof)
- CMS for content management
- Analytics/tracking integration
- Real teacher photos (currently using initials avatars)
