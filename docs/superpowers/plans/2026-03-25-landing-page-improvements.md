# Fluent Mind Landing Page Improvements — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the Fluent Mind prototype landing page into a polished, mobile-first, multilingual lead generation funnel.

**Architecture:** Conversion-optimized polish of existing React SPA. Restructure homepage sections into a lead-gen funnel, add mobile hamburger menu with sticky CTA, integrate react-i18next for 4-language support (RU/EN/HE/SR) with RTL for Hebrew, polish form UX with simulated submissions, and add framer-motion scroll animations throughout.

**Tech Stack:** React 19 + TypeScript, Vite, Tailwind CSS, react-i18next, framer-motion, tailwindcss-rtl

**Spec:** `docs/superpowers/specs/2026-03-25-landing-page-improvements-design.md`

---

## File Structure

### New files to create:
| File | Responsibility |
|------|---------------|
| `src/i18n.ts` | i18next configuration and initialization |
| `src/locales/ru/translation.json` | Russian translation strings (migrated from content.ts) |
| `src/locales/en/translation.json` | English translation strings |
| `src/locales/he/translation.json` | Hebrew translation strings |
| `src/locales/sr/translation.json` | Serbian translation strings |
| `src/components/MobileMenu.tsx` | Full-screen mobile hamburger menu overlay |
| `src/components/HowItWorks.tsx` | New "How It Works" 3-step section |
| `src/components/FloatingInput.tsx` | Reusable floating-label form input |
| `src/components/FloatingTextarea.tsx` | Reusable floating-label form textarea |
| `src/components/AnimatedSection.tsx` | framer-motion scroll-reveal wrapper |
| `src/components/StickyMobileCTA.tsx` | Sticky bottom CTA bar for mobile |
| `src/components/LanguageSwitcher.tsx` | Language pill selector (used in header + mobile menu) |
| `src/hooks/useFormSubmit.ts` | Simulated form submission hook (validation + loading + success) |

### Files to modify:
| File | Changes |
|------|---------|
| `package.json` | Add framer-motion, react-i18next, i18next, i18next-browser-languagedetector, tailwindcss-rtl |
| `tailwind.config.js` | Add tailwindcss-rtl plugin |
| `index.html` | Fix favicon path |
| `.gitignore` | Add `.superpowers/` |
| `src/main.tsx` | Import i18n config |
| `src/App.tsx` | Add language routing (`/:lang?/`), 404 catch-all, AnimatePresence for page transitions |
| `src/index.css` | Remove `scroll-behavior: smooth` (framer-motion handles it), add RTL utilities |
| `src/components/Layout.tsx` | Add RTL dir attribute, add StickyMobileCTA |
| `src/components/Header.tsx` | Add hamburger button, language switcher, mobile menu trigger, active section highlight |
| `src/components/Hero.tsx` | Simplify: remove inline form, single CTA, staggered fade-up animation |
| `src/components/About.tsx` | Condense content, add fade-in animation |
| `src/components/Teachers.tsx` | Remove placeholder cards, fix Lorem ipsum, clean description, add slide animation |
| `src/components/TeacherCard.tsx` | Add hover gold border transition |
| `src/components/Courses.tsx` | Add per-card CTA, fan-in animation |
| `src/components/Contact.tsx` | New form UX with FloatingInput, simulated submission, trust signals |
| `src/components/Careers.tsx` | Same form UX upgrades as Contact |
| `src/components/Footer.tsx` | Use i18n |
| `src/components/ScrollToTop.tsx` | Fix `window.pageYOffset` → `window.scrollY`, add fade+scale animation |
| `src/pages/Home.tsx` | Reorder sections: Hero → HowItWorks → Courses → Teachers → About → Contact |
| `src/types/index.ts` | Add FormState type |

### Files to delete:
| File | Reason |
|------|--------|
| `src/constants/colors.ts` | Consolidated into Tailwind config + CSS variables |
| `src/constants/content.ts` | Migrated to i18n translation files |

---

## Task 1: Install Dependencies & Technical Fixes

**Files:**
- Modify: `package.json`
- Modify: `index.html`
- Modify: `.gitignore`
- Modify: `tailwind.config.js`
- Modify: `src/components/ScrollToTop.tsx`

- [ ] **Step 1: Install new dependencies**

Run:
```bash
npm install framer-motion react-i18next i18next i18next-browser-languagedetector
npm install -D tailwindcss-rtl
```

- [ ] **Step 2: Fix favicon path in index.html**

In `index.html`, change:
```html
<link rel="icon" type="image/png" href="/src/assets/logo.png" />
```
to:
```html
<link rel="icon" type="image/png" href="/logo.png" />
```
Then copy `src/assets/logo.png` to `public/logo.png`:
```bash
cp src/assets/logo.png public/logo.png
```

- [ ] **Step 3: Add .superpowers/ to .gitignore**

Append to `.gitignore`:
```
.superpowers/
```

- [ ] **Step 4: Add tailwindcss-rtl plugin**

In `tailwind.config.js`, add the plugin:
```javascript
plugins: [
  require('tailwindcss-rtl'),
],
```

- [ ] **Step 5: Fix deprecated window.pageYOffset**

In `src/components/ScrollToTop.tsx`, replace:
```typescript
if (window.pageYOffset > 300) {
```
with:
```typescript
if (window.scrollY > 300) {
```

- [ ] **Step 6: Add 404 catch-all route**

In `src/App.tsx`, add a catch-all route inside `<Routes>`:
```tsx
<Route path="*" element={<Navigate to="/" replace />} />
```
Import `Navigate` from `react-router-dom`.

- [ ] **Step 7: Verify build**

Run:
```bash
npm run build
```
Expected: Build succeeds with no errors.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "chore: install dependencies and fix technical issues

- Add framer-motion, react-i18next, i18next, tailwindcss-rtl
- Fix favicon path for production builds
- Fix deprecated window.pageYOffset
- Add 404 catch-all route
- Add .superpowers/ to .gitignore"
```

---

## Task 2: Content Cleanup

**Files:**
- Modify: `src/components/Teachers.tsx`
- Modify: `src/constants/content.ts`

- [ ] **Step 1: Fix Anastasia's bio in Teachers.tsx**

In `src/components/Teachers.tsx`, replace Anastasia's description:
```typescript
description:
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Более N лет преподавания, индивидуальный подход, внимание к живой разговорной речи и уверенности в общении.",
```
with:
```typescript
description:
  "Индивидуальный подход, внимание к живой разговорной речи и уверенности в общении. Подготовка к экзаменам и собеседованиям.",
```

- [ ] **Step 2: Remove placeholder teacher cards**

In `src/components/Teachers.tsx`, delete the entire block that renders placeholder cards:
```tsx
{CONTENT.teachers.placeholderCards.map((placeholder, index) => (
  <article
    key={`placeholder-${index}`}
    className="flex flex-col items-start justify-center rounded-3xl border border-dashed bg-white/60 p-5 text-sm text-slate-400"
    aria-label="Место для будущей карточки преподавателя"
  >
    {placeholder}
  </article>
))}
```

- [ ] **Step 3: Clean up content.ts**

In `src/constants/content.ts`:
- Remove the `placeholderCards` array from `teachers`
- Remove the prototype disclaimer text from `hero.form.disclaimer`, `contact.form.disclaimer`, and `careers.application.disclaimer`
- Remove any "можно будет добавить" dev notes from `teachers.description`

- [ ] **Step 4: Verify dev server**

Run:
```bash
npm run dev
```
Check localhost — no Lorem ipsum, no placeholder cards, no prototype disclaimers visible.

- [ ] **Step 5: Commit**

```bash
git add src/components/Teachers.tsx src/constants/content.ts
git commit -m "fix: remove placeholder content and Lorem ipsum from production

- Fix Anastasia's bio (remove Lorem ipsum and 'N лет' placeholder)
- Remove 2 empty teacher placeholder cards
- Remove prototype disclaimers from forms
- Remove dev notes from content"
```

---

## Task 3: i18n Infrastructure & Russian Translation

**Files:**
- Create: `src/i18n.ts`
- Create: `src/locales/ru/translation.json`
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`
- Modify: `src/types/index.ts`

- [ ] **Step 1: Create i18n config**

Create `src/i18n.ts`:
```typescript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ru from "./locales/ru/translation.json";

const resources = {
  ru: { translation: ru },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    supportedLngs: ["ru", "en", "he", "sr"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
  });

export default i18n;
```

- [ ] **Step 2: Create Russian translation file**

Create `src/locales/ru/translation.json` by migrating all strings from `src/constants/content.ts`. Structure the JSON to mirror the current CONTENT object:

```json
{
  "brand": {
    "name": "Fluent Mind",
    "tagline": "Нейроспециалисты онлайн"
  },
  "nav": {
    "home": "Главная",
    "about": "О нас",
    "teachers": "Специалисты",
    "courses": "Курсы",
    "contact": "Контакты",
    "careers": "Карьера",
    "trialLesson": "Записаться"
  },
  "hero": {
    "badge": "Нейроспециалисты онлайн",
    "title": "Онлайн школа\nс нейроподходом",
    "description": "Индивидуальные уроки и мини-группы с профессиональными преподавателями, которые учитывают особенности восприятия каждого ученика.",
    "cta": "Записаться на пробный урок",
    "features": [
      "Индивидуальные занятия",
      "Гибкое расписание",
      "Авторские материалы"
    ]
  },
  "howItWorks": {
    "title": "Как это работает",
    "steps": [
      {
        "number": "1",
        "title": "Запишитесь",
        "description": "Оставьте заявку — мы свяжемся с вами в течение часа"
      },
      {
        "number": "2",
        "title": "Пройдите диагностику",
        "description": "Бесплатная оценка уровня и подбор программы под ваши цели"
      },
      {
        "number": "3",
        "title": "Начните заниматься",
        "description": "Индивидуальные или групповые занятия в удобное для вас время"
      }
    ]
  },
  "courses": {
    "title": "Наши курсы",
    "subtitle": "Программы для любого уровня и возраста",
    "description": "Мы подбираем программу обучения индивидуально, учитывая ваши цели, уровень и особенности восприятия.",
    "items": [
      {
        "title": "Индивидуальные занятия",
        "subtitle": "Персональный подход",
        "description": "Занятия один на один с преподавателем. Программа полностью адаптирована под ваши цели и темп.",
        "features": [
          "Гибкое расписание",
          "Индивидуальная программа",
          "Авторские материалы",
          "Регулярная обратная связь"
        ],
        "cta": "Записаться"
      },
      {
        "title": "Мини-группы",
        "subtitle": "2–4 человека",
        "description": "Занятия в небольших группах для разговорной практики и взаимной мотивации.",
        "features": [
          "Разговорная практика",
          "Комфортная атмосфера",
          "Групповые задания",
          "Доступная цена"
        ],
        "cta": "Записаться"
      },
      {
        "title": "Специализированные программы",
        "subtitle": "Целевая подготовка",
        "description": "Подготовка к экзаменам, собеседованиям, переезду или работе на иностранном языке.",
        "features": [
          "Подготовка к экзаменам",
          "Бизнес-коммуникация",
          "Подготовка к переезду",
          "Профессиональная лексика"
        ],
        "cta": "Узнать больше"
      }
    ]
  },
  "teachers": {
    "title": "Наши специалисты",
    "description": "Профессиональные преподаватели с опытом работы и индивидуальным подходом к каждому ученику."
  },
  "about": {
    "title": "Наша миссия",
    "paragraphs": [
      "Fluent Mind — это онлайн-школа, которая объединяет профессиональных преподавателей и нейроподход к обучению.",
      "Мы верим, что каждый человек уникален, и подбираем методы обучения, которые работают именно для вас.",
      "Наши преподаватели не просто учат язык — они помогают вам чувствовать себя уверенно в новой языковой среде."
    ],
    "quote": "Мы не просто учим языку — мы помогаем вам думать на нём.",
    "quoteAuthor": "Команда Fluent Mind"
  },
  "contact": {
    "title": "Как с нами связаться",
    "email": "annydulich@gmail.com",
    "form": {
      "title": "Запишитесь на бесплатную консультацию",
      "description": "Оставьте свои контакты, и мы подберём подходящую программу обучения.",
      "fields": {
        "name": "Ваше имя",
        "phone": "Телефон или WhatsApp",
        "message": "Сообщение (необязательно)"
      },
      "submit": "Записаться на пробный урок →",
      "trustSignals": "Бесплатно • Без обязательств • Ответим в течение часа"
    }
  },
  "careers": {
    "title": "Карьера в Fluent Mind",
    "subtitle": "Присоединяйтесь к нашей команде",
    "description": "Мы ищем преподавателей и специалистов, которые разделяют наши ценности и нейродружелюбный подход.",
    "benefits": {
      "title": "Почему с нами",
      "items": [
        "Гибкий график и полностью удалённая работа",
        "Поддерживающая команда единомышленников",
        "Возможность развиваться в нейропедагогике",
        "Авторские методические материалы",
        "Конкурентная оплата"
      ]
    },
    "openPositions": {
      "title": "Открытые позиции",
      "noPositions": "Сейчас открытых вакансий нет, но мы всегда рады познакомиться с новыми специалистами. Отправьте своё резюме, и мы свяжемся с вами, когда появится подходящая позиция."
    },
    "application": {
      "title": "Отправить резюме",
      "description": "Расскажите о себе — мы обязательно рассмотрим вашу кандидатуру.",
      "form": {
        "name": "Имя",
        "email": "Email",
        "phone": "Телефон",
        "experience": "Опыт работы",
        "languages": "Языки",
        "message": "Расскажите о себе",
        "submit": "Отправить резюме"
      }
    }
  },
  "footer": {
    "copyright": "© {{year}} Fluent Mind. Все права защищены.",
    "tagline": "Учим языки с заботой о том, как вы думаете."
  },
  "stickyCta": {
    "label": "Пробный урок — бесплатно",
    "button": "Записаться"
  },
  "form": {
    "sending": "Отправляем...",
    "success": "Спасибо! Мы свяжемся с вами в ближайшее время.",
    "errors": {
      "nameRequired": "Пожалуйста, укажите ваше имя",
      "phoneRequired": "Пожалуйста, укажите телефон",
      "phoneInvalid": "Пожалуйста, введите корректный номер телефона",
      "emailRequired": "Пожалуйста, укажите email",
      "emailInvalid": "Пожалуйста, введите корректный email"
    }
  }
}
```

- [ ] **Step 3: Import i18n in main.tsx**

In `src/main.tsx`, add at the top (before App import):
```typescript
import "./i18n";
```

- [ ] **Step 4: Add language routing to App.tsx**

Replace `src/App.tsx` with:
```tsx
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CareersPage from "./pages/Careers";

const SUPPORTED_LANGS = ["en", "he", "sr"];

function LanguageWrapper() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const targetLang = lang && SUPPORTED_LANGS.includes(lang) ? lang : "ru";
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <Layout />;
}

export default function FluentMindLanding() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageWrapper />}>
          <Route index element={<Home />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
        <Route path="/:lang" element={<LanguageWrapper />}>
          <Route index element={<Home />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- [ ] **Step 5: Verify dev server loads with i18n**

Run:
```bash
npm run dev
```
Expected: Site loads normally. Console shows no i18n errors. Russian text still displays.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add i18n infrastructure with Russian translation

- Set up react-i18next with language detection
- Create Russian translation file from content.ts
- Add language-aware routing (/:lang?/)
- Add RTL dir attribute toggle for Hebrew"
```

---

## Task 4: Migrate Components to i18n

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/About.tsx`
- Modify: `src/components/Teachers.tsx`
- Modify: `src/components/TeacherCard.tsx`
- Modify: `src/components/Courses.tsx`
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/Careers.tsx`
- Modify: `src/components/Footer.tsx`
- Delete: `src/constants/content.ts`
- Delete: `src/constants/colors.ts`

This task replaces all `CONTENT.xxx` references with `t("xxx")` from `useTranslation()`, and all `COLORS.xxx` inline styles with Tailwind classes using the configured `primary` and `accent` colors.

- [ ] **Step 1: Update Header.tsx**

Replace `CONTENT` and `COLORS` imports with:
```typescript
import { useTranslation } from "react-i18next";
```
Use `const { t } = useTranslation();` and replace:
- `CONTENT.brand.name` → `t("brand.name")`
- `CONTENT.navigation.home` → `t("nav.home")`
- `style={{ color: COLORS.primary }}` → `className="text-primary"`
- `style={{ backgroundColor: COLORS.primary }}` → `className="bg-primary"`
- etc.

- [ ] **Step 2: Update Hero.tsx**

Same pattern. Replace all CONTENT/COLORS with t()/Tailwind classes. The hero features should use `t("hero.features", { returnObjects: true })` to get the array.

- [ ] **Step 3: Update About.tsx**

Replace CONTENT/COLORS with t()/Tailwind. Paragraphs: `t("about.paragraphs", { returnObjects: true })`.

- [ ] **Step 4: Update Teachers.tsx and TeacherCard.tsx**

Teachers data stays hardcoded in component (not translatable for now — teacher names/bios are proper nouns). Replace section title/description with t(). Replace COLORS with Tailwind classes.

- [ ] **Step 5: Update Courses.tsx**

Replace CONTENT/COLORS. Course items: `t("courses.items", { returnObjects: true })`.

- [ ] **Step 6: Update Contact.tsx**

Replace CONTENT/COLORS. Form fields/labels use t().

- [ ] **Step 7: Update Careers.tsx (component)**

Replace all CONTENT/COLORS references with t()/Tailwind classes.

- [ ] **Step 8: Update Footer.tsx**

Replace CONTENT. Use `t("footer.copyright", { year: new Date().getFullYear() })` for dynamic year.

- [ ] **Step 9: Delete constants files**

```bash
rm src/constants/colors.ts src/constants/content.ts
rmdir src/constants
```

- [ ] **Step 10: Verify build**

Run:
```bash
npm run build
```
Expected: No TypeScript errors. No references to deleted constants files.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "refactor: migrate all components from hardcoded content to i18n

- Replace CONTENT.xxx with t() translations in all components
- Replace COLORS inline styles with Tailwind primary/accent classes
- Delete constants/colors.ts and constants/content.ts"
```

---

## Task 5: Mobile Hamburger Menu & Language Switcher

**Files:**
- Create: `src/components/LanguageSwitcher.tsx`
- Create: `src/components/MobileMenu.tsx`
- Modify: `src/components/Header.tsx`

**Note:** LanguageSwitcher is created first because MobileMenu imports it.

- [ ] **Step 1: Create LanguageSwitcher component**

Create `src/components/LanguageSwitcher.tsx` (full code in former Task 6 below — create both `desktop` and `mobile` variants in one component).

- [ ] **Step 2: Create MobileMenu component**

Create `src/components/MobileMenu.tsx`:
```tsx
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/" || /^\/[a-z]{2}\/?$/.test(location.pathname);

  const menuItems = isHomePage
    ? [
        { href: "#courses", label: t("nav.courses") },
        { href: "#teachers", label: t("nav.teachers") },
        { href: "#about", label: t("nav.about") },
        { href: "#contact", label: t("nav.contact") },
      ]
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-30 bg-primary"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                <span className="text-xs font-semibold text-accent">FM</span>
              </div>
              <span className="text-sm font-semibold text-white">{t("brand.name")}</span>
            </div>
            <button
              onClick={onClose}
              className="text-2xl text-white"
              aria-label="Закрыть меню"
            >
              ✕
            </button>
          </div>

          <nav className="px-6 pt-8">
            <div className="space-y-0">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-white/10 py-4 text-lg font-medium text-white"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to={isHomePage ? "/careers" : "/"}
                onClick={onClose}
                className="block border-b border-white/10 py-4 text-lg font-medium text-white/60"
              >
                {isHomePage ? t("nav.careers") : t("nav.home")}
              </Link>
            </div>

            <div className="mt-8">
              <LanguageSwitcher variant="mobile" />
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="mt-6 block rounded-lg bg-accent py-3.5 text-center text-[15px] font-semibold text-primary"
            >
              {t("hero.cta")}
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 3: Update Header.tsx with hamburger button and language switcher**

Add state and hamburger button to Header. Add `useState` for `menuOpen`. Render hamburger icon visible on mobile (`md:hidden`), MobileMenu component. Add `<LanguageSwitcher variant="desktop" />` in the desktop nav before the CTA button.

Key additions to Header:
```tsx
const [menuOpen, setMenuOpen] = useState(false);

// In JSX, after the logo div:
<button
  className="flex flex-col gap-1 md:hidden"
  onClick={() => setMenuOpen(true)}
  aria-label="Открыть меню"
>
  <span className="block h-0.5 w-5 bg-primary rounded-sm" />
  <span className="block h-0.5 w-5 bg-primary rounded-sm" />
  <span className="block h-0.5 w-5 bg-primary rounded-sm" />
</button>

// After header closing tag:
<MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
```

- [ ] **Step 4: Verify mobile menu and language switcher**

Run dev server, open browser at mobile width (375px). Verify:
- Hamburger icon appears on mobile, hidden on desktop
- Tapping hamburger opens full-screen overlay with slide-down animation
- Menu shows section links, careers link, language switcher, CTA
- Tapping X or any link closes the menu
- Desktop: language pills visible in nav, clicking changes language and URL
- Mobile: language pills visible in hamburger menu

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add mobile hamburger menu and language switcher

- Create LanguageSwitcher component (desktop pills + mobile pills)
- Create MobileMenu component with framer-motion animation
- Add hamburger button to Header (visible on mobile only)
- Menu includes nav links, language switcher, and CTA"
```

---

## Task 6: (merged into Task 5)

This task was merged into Task 5 to resolve a dependency (MobileMenu imports LanguageSwitcher). See Task 5 above.

- [ ] **Step 1: Create LanguageSwitcher component**

Create `src/components/LanguageSwitcher.tsx`:
```tsx
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const LANGUAGES = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "he", label: "HE" },
  { code: "sr", label: "SR" },
];

interface LanguageSwitcherProps {
  variant: "desktop" | "mobile";
}

export default function LanguageSwitcher({ variant }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const switchLanguage = (code: string) => {
    i18n.changeLanguage(code);
    // Update URL prefix
    const pathParts = location.pathname.split("/").filter(Boolean);
    const currentLang = LANGUAGES.find((l) => l.code === pathParts[0]);
    const restPath = currentLang ? pathParts.slice(1).join("/") : pathParts.join("/");
    const newPath = code === "ru" ? `/${restPath}` : `/${code}/${restPath}`;
    navigate(newPath || "/", { replace: true });
  };

  if (variant === "mobile") {
    return (
      <div>
        <span className="text-[11px] uppercase tracking-wider text-white/50">Язык</span>
        <div className="mt-2 flex gap-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                i18n.language === lang.code
                  ? "border border-accent bg-accent/20 text-accent"
                  : "border border-white/15 bg-white/5 text-white/60"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 text-xs">
      {LANGUAGES.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1">
          <button
            onClick={() => switchLanguage(lang.code)}
            className={`rounded px-1.5 py-0.5 transition-colors ${
              i18n.language === lang.code
                ? "bg-primary text-white"
                : "text-slate-500 hover:text-primary"
            }`}
          >
            {lang.label}
          </button>
          {i < LANGUAGES.length - 1 && <span className="text-slate-300">|</span>}
        </span>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Add LanguageSwitcher to Header**

In the desktop nav of `Header.tsx`, add before the CTA button:
```tsx
<LanguageSwitcher variant="desktop" />
```

- [ ] **Step 3: Verify language switching**

Test on dev server:
- Desktop: Language pills visible in nav, clicking changes language and URL
- Mobile: Language pills visible in hamburger menu
- URL updates to `/en/`, `/he/`, `/sr/` or `/` for Russian
- Content crossfades (will be smoother after animation task)

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add language switcher for desktop and mobile

- Desktop: compact pills in nav bar (RU | EN | HE | SR)
- Mobile: pill buttons in hamburger menu
- Switches language and updates URL prefix"
```

---

## Task 7: Page Restructuring & HowItWorks Section

**Files:**
- Create: `src/components/HowItWorks.tsx`
- Modify: `src/pages/Home.tsx`
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Create HowItWorks component**

Create `src/components/HowItWorks.tsx`:
```tsx
import { useTranslation } from "react-i18next";

interface Step {
  number: string;
  title: string;
  description: string;
}

export default function HowItWorks() {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", { returnObjects: true }) as Step[];

  return (
    <section className="border-b bg-white" aria-labelledby="how-it-works-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2
          id="how-it-works-title"
          className="mb-10 text-center text-2xl font-bold text-primary md:text-3xl"
        >
          {t("howItWorks.title")}
        </h2>

        <div className="relative flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-4">
          {/* Connecting line (desktop) */}
          <div className="absolute top-10 hidden h-0.5 w-full bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 md:block" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 flex flex-1 flex-col items-center text-center"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg">
                {step.number}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {step.title}
              </h3>
              <p className="max-w-xs text-sm text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Simplify Hero.tsx**

Remove the inline trial lesson form from Hero. Keep: badge, title, description, single CTA button, features list. The CTA scrolls to `#contact`.

Replace the form `<div className="flex-1">...</div>` with nothing — the hero becomes a single-column centered layout:
```tsx
export default function Hero() {
  const { t } = useTranslation();
  const features = t("hero.features", { returnObjects: true }) as string[];

  return (
    <section className="border-b bg-slate-50" aria-labelledby="hero-title">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center md:py-20">
        <p className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          {t("hero.badge")}
        </p>
        <h1
          id="hero-title"
          className="text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl"
        >
          {t("hero.title").split("\n").map((line: string, i: number) => (
            <span key={i}>
              {line}
              {i < t("hero.title").split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 md:text-lg">
          {t("hero.description")}
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-primary shadow-md transition-all hover:shadow-lg"
        >
          {t("hero.cta")}
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Reorder sections in Home.tsx**

Update `src/pages/Home.tsx`:
```tsx
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Courses from "../components/Courses";
import Teachers from "../components/Teachers";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Courses />
      <Teachers />
      <About />
      <Contact />
    </>
  );
}
```

- [ ] **Step 4: Verify new page structure**

Run dev server. Verify sections appear in order: Hero → How It Works → Courses → Teachers → About → Contact. Hero has no form, just centered headline + single CTA.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: restructure homepage as lead-gen funnel

- Add 'How It Works' 3-step section
- Simplify Hero: remove inline form, single centered CTA
- Reorder: Hero → How It Works → Courses → Teachers → About → Contact"
```

---

## Task 8: Form UX Polish

**Files:**
- Create: `src/components/FloatingInput.tsx`
- Create: `src/components/FloatingTextarea.tsx`
- Create: `src/hooks/useFormSubmit.ts`
- Modify: `src/types/index.ts`
- Modify: `src/components/Contact.tsx`
- Modify: `src/components/Careers.tsx` (component)

- [ ] **Step 1: Add FormState type**

In `src/types/index.ts`, add:
```typescript
export type FormStatus = "idle" | "submitting" | "success" | "error";

export interface FormState {
  status: FormStatus;
  errors: Record<string, string>;
}
```

- [ ] **Step 2: Create FloatingInput component**

Create `src/components/FloatingInput.tsx`:
```tsx
import { useState } from "react";

interface FloatingInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function FloatingInput({
  id,
  label,
  type = "text",
  required = false,
  value,
  onChange,
  error,
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        className={`peer w-full rounded-lg border-2 bg-white px-3.5 pb-2 pt-5 text-sm outline-none transition-colors ${
          error
            ? "border-red-400 focus:border-red-500"
            : focused
              ? "border-accent"
              : "border-slate-200"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute start-3.5 transition-all duration-200 ${
          isActive
            ? "top-1 text-[10px] font-medium text-accent"
            : "top-3.5 text-sm text-slate-400"
        }`}
      >
        {label}{required && " *"}
      </label>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
```

- [ ] **Step 3: Create FloatingTextarea component**

Create `src/components/FloatingTextarea.tsx`:
```tsx
import { useState } from "react";

interface FloatingTextareaProps {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  rows?: number;
}

export default function FloatingTextarea({
  id,
  label,
  required = false,
  value,
  onChange,
  rows = 3,
}: FloatingTextareaProps) {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative">
      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={rows}
        className={`peer w-full resize-none rounded-lg border-2 bg-white px-3.5 pb-2 pt-5 text-sm outline-none transition-colors ${
          focused ? "border-accent" : "border-slate-200"
        }`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute start-3.5 transition-all duration-200 ${
          isActive
            ? "top-1 text-[10px] font-medium text-accent"
            : "top-3.5 text-sm text-slate-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
}
```

- [ ] **Step 4: Create useFormSubmit hook**

Create `src/hooks/useFormSubmit.ts`:
```typescript
import { useState, useCallback } from "react";
import type { FormState } from "../types";

type ValidationRules = Record<string, (value: string) => string | null>;

export function useFormSubmit(validationRules: ValidationRules) {
  const [state, setState] = useState<FormState>({
    status: "idle",
    errors: {},
  });

  const validate = useCallback(
    (fields: Record<string, string>): boolean => {
      const errors: Record<string, string> = {};
      for (const [field, rule] of Object.entries(validationRules)) {
        const error = rule(fields[field] || "");
        if (error) errors[field] = error;
      }
      setState({ status: "idle", errors });
      return Object.keys(errors).length === 0;
    },
    [validationRules]
  );

  const submit = useCallback(
    (fields: Record<string, string>) => {
      if (!validate(fields)) return;

      setState({ status: "submitting", errors: {} });

      // Simulated submission — replace setTimeout with fetch() when backend is ready
      setTimeout(() => {
        setState({ status: "success", errors: {} });
      }, 1500);
    },
    [validate]
  );

  const reset = useCallback(() => {
    setState({ status: "idle", errors: {} });
  }, []);

  return { state, submit, reset };
}
```

- [ ] **Step 5: Rewrite Contact.tsx with new form UX**

Rewrite `src/components/Contact.tsx` to use FloatingInput, FloatingTextarea, useFormSubmit. Include:
- Floating labels with gold focus
- Trust signals instead of disclaimer
- Gold CTA button with specific copy
- Simulated submission flow (validation → spinner → success)
- Social links section stays but uses cleaner layout

The form section should look like:
```tsx
// When status === "success":
<div className="flex flex-col items-center justify-center rounded-3xl border bg-slate-50 p-8 text-center">
  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  </div>
  <p className="text-lg font-semibold text-primary">{t("form.success")}</p>
</div>

// When status === "submitting", button shows:
<button disabled className="w-full rounded-lg bg-accent/70 py-3.5 text-sm font-semibold text-primary">
  {t("form.sending")}
</button>

// Default state, button shows:
<button type="submit" className="w-full rounded-lg bg-accent py-3.5 text-sm font-semibold text-primary shadow-md transition-all hover:shadow-lg">
  {t("contact.form.submit")}
</button>

// Trust signals below button:
<p className="mt-3 text-center text-[11px] text-slate-400">
  {t("contact.form.trustSignals")}
</p>
```

- [ ] **Step 6: Update Careers.tsx form with same UX**

Apply same FloatingInput and useFormSubmit pattern to the careers application form. Same simulated submission flow.

- [ ] **Step 7: Verify forms**

Test both Contact and Careers forms:
- Floating labels animate on focus
- Validation shows errors for empty required fields
- Submit shows spinner for 1.5s then success screen
- No prototype disclaimers visible
- Trust signals shown below Contact CTA

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: polish form UX with floating labels and simulated submission

- Create FloatingInput and FloatingTextarea components
- Create useFormSubmit hook with validation and simulated submission
- Update Contact and Careers forms
- Replace prototype disclaimers with trust signals
- Add validation → loading → success flow"
```

---

## Task 9: Scroll Animations

**Files:**
- Create: `src/components/AnimatedSection.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/HowItWorks.tsx`
- Modify: `src/components/Courses.tsx`
- Modify: `src/components/Teachers.tsx`
- Modify: `src/components/About.tsx`
- Modify: `src/components/Contact.tsx`

- [ ] **Step 1: Create AnimatedSection wrapper**

Create `src/components/AnimatedSection.tsx`:
```tsx
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  className,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const initialX = direction === "left" ? -40 : direction === "right" ? 40 : 0;
  const initialY = direction === "up" ? 30 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: Add staggered fade-up to Hero**

Wrap Hero elements in AnimatedSection with increasing delays:
- Badge: delay 0
- Headline: delay 0.1
- Description: delay 0.2
- CTA: delay 0.3
- Features: delay 0.4

Use `motion.div` directly in Hero since it animates on load (not scroll):
```tsx
<motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }}>
  {/* badge */}
</motion.p>
```

- [ ] **Step 3: Add step-by-step reveal to HowItWorks**

Wrap each step in AnimatedSection with stagger:
```tsx
{steps.map((step, index) => (
  <AnimatedSection key={index} delay={index * 0.2}>
    {/* step content */}
  </AnimatedSection>
))}
```

- [ ] **Step 4: Add fan-in to Courses cards**

Wrap each course card in AnimatedSection with stagger:
```tsx
<AnimatedSection key={index} delay={index * 0.15}>
  <article className="... hover:-translate-y-1 hover:shadow-md transition-all">
```

- [ ] **Step 5: Add alternating slide-in to Teachers**

Wrap teacher cards with alternating direction:
```tsx
<AnimatedSection
  key={teacher.id}
  direction={index % 2 === 0 ? "left" : "right"}
  delay={index * 0.2}
>
```

- [ ] **Step 6: Add fade-in to About**

Wrap About content in AnimatedSection with default fade-up.

- [ ] **Step 7: Add stagger to Contact form fields**

Wrap each form field in AnimatedSection with increasing delay.

- [ ] **Step 8: Verify animations**

Run dev server, scroll through page. Verify:
- Each section animates in on first scroll
- Animations don't replay on re-scroll (viewport `once: true`)
- Durations are 300-500ms, feels snappy
- No layout shift or jank

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: add scroll-triggered animations to all sections

- Create AnimatedSection wrapper using framer-motion
- Hero: staggered fade-up on load
- HowItWorks: step-by-step reveal
- Courses: cards fan in with stagger
- Teachers: alternating left/right slide-in
- About: gentle fade-in
- Contact: form fields stagger in
- Respects prefers-reduced-motion"
```

---

## Task 10: Microinteractions & Page Transitions

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/components/ScrollToTop.tsx`
- Modify: `src/components/TeacherCard.tsx`
- Modify: `src/index.css`

- [ ] **Step 1: Add page transition with AnimatePresence**

In `src/App.tsx`, wrap `<Outlet />` in Layout with AnimatePresence. In `src/components/Layout.tsx`:
```tsx
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

// Inside Layout component:
const location = useLocation();

// Replace <Outlet /> with:
<AnimatePresence mode="wait">
  <motion.main
    key={location.pathname}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
  >
    <Outlet />
  </motion.main>
</AnimatePresence>
```

- [ ] **Step 2: Animate ScrollToTop button**

In `ScrollToTop.tsx`, replace the conditional render with framer-motion:
```tsx
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// Replace the return:
return (
  <AnimatePresence>
    {isVisible && (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-lg transition-transform hover:scale-110"
        aria-label="Прокрутить наверх"
      >
        {/* svg icon */}
      </motion.button>
    )}
  </AnimatePresence>
);
```

- [ ] **Step 3: Add hover effects to TeacherCard**

In `TeacherCard.tsx`, add hover transition on the card border:
```tsx
className="... transition-all hover:border-accent hover:shadow-md"
```

- [ ] **Step 4: Add button and form focus styles to index.css**

Add to `src/index.css`:
```css
/* Button hover shimmer for gold buttons */
.btn-accent {
  @apply relative overflow-hidden bg-accent text-primary font-semibold;
}

.btn-accent::after {
  content: '';
  @apply absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent;
  transition: transform 0.5s ease;
}

.btn-accent:hover::after {
  @apply translate-x-full;
}
```

- [ ] **Step 5: Remove scroll-behavior from CSS**

In `src/index.css`, remove:
```css
html {
  scroll-behavior: smooth;
}
```
Smooth scroll is handled by the anchor link click handlers instead (native `scrollIntoView({ behavior: "smooth" })`).

- [ ] **Step 6: Verify microinteractions**

Test:
- Page transitions fade between Home ↔ Careers
- ScrollToTop button fades + scales in/out
- Teacher cards border goes gold on hover
- Gold buttons have shimmer on hover

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add microinteractions and page transitions

- AnimatePresence page fade transition
- ScrollToTop fade+scale animation
- TeacherCard hover gold border
- Gold button shimmer effect
- Remove CSS scroll-behavior (use JS smooth scroll)"
```

---

## Task 11: Sticky Mobile CTA

**Files:**
- Create: `src/components/StickyMobileCTA.tsx`
- Modify: `src/components/Layout.tsx`

- [ ] **Step 1: Create StickyMobileCTA component**

Create `src/components/StickyMobileCTA.tsx`:
```tsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function StickyMobileCTA() {
  const { t } = useTranslation();
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const isHomePage = location.pathname === "/" || /^\/[a-z]{2}\/?$/.test(location.pathname);

  useEffect(() => {
    if (!isHomePage) {
      setVisible(false);
      return;
    }

    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(contactSection);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-accent/30 bg-primary/95 px-4 py-2 backdrop-blur md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-white">{t("stickyCta.label")}</span>
            <a
              href="#contact"
              className="rounded-md bg-accent px-4 py-2 text-xs font-semibold text-primary"
            >
              {t("stickyCta.button")}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Step 2: Add StickyMobileCTA to Layout**

In `src/components/Layout.tsx`, import and add `<StickyMobileCTA />` alongside `<ScrollToTop />`.

- [ ] **Step 3: Verify sticky CTA**

Test on mobile width:
- CTA bar appears after scrolling past hero
- CTA bar hides when contact section enters viewport
- Not visible on desktop
- Tapping "Записаться" scrolls to contact form

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add sticky mobile CTA bar

- Shows 'Пробный урок — бесплатно' on mobile after scrolling past hero
- Hides via IntersectionObserver when contact form is visible
- Hidden on desktop"
```

---

## Task 12: RTL Support for Hebrew

**Files:**
- Modify: `src/index.css`
- Modify: `tailwind.config.js`

- [ ] **Step 1: Verify tailwindcss-rtl is configured**

Confirm `tailwind.config.js` has the plugin (added in Task 1):
```javascript
plugins: [require('tailwindcss-rtl')],
```

- [ ] **Step 2: Add RTL-specific CSS utilities**

In `src/index.css`, add:
```css
/* RTL adjustments */
[dir="rtl"] .space-x-6 > * + * {
  margin-left: 0;
  margin-right: 1.5rem;
}
```

Note: Most RTL handling is automatic via:
- `document.documentElement.dir = "rtl"` (set in App.tsx LanguageWrapper)
- `tailwindcss-rtl` plugin swaps `start`/`end` utilities
- FloatingInput uses `start-3.5` instead of `left-3.5` (already done in Task 8)

- [ ] **Step 3: Test RTL layout**

Navigate to `/he/` on dev server. Verify:
- Text aligns right
- Nav layout mirrors
- Cards flow right-to-left
- Form labels float correctly
- No visual breakage

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add RTL support for Hebrew

- Ensure tailwindcss-rtl plugin swaps directional utilities
- Add RTL-specific CSS overrides where needed
- Layout mirrors correctly in Hebrew mode"
```

---

## Task 13: Translation Files (EN, HE, SR)

**Files:**
- Create: `src/locales/en/translation.json`
- Create: `src/locales/he/translation.json`
- Create: `src/locales/sr/translation.json`
- Modify: `src/i18n.ts`

- [ ] **Step 1: Create English translation**

Create `src/locales/en/translation.json` — translate all Russian strings to English. Mirror exact same JSON structure as `ru/translation.json`.

Key translations:
- `brand.tagline` → "Neuro-specialists online"
- `hero.title` → "Online school\nwith neuro-approach"
- `hero.cta` → "Book a trial lesson"
- `contact.form.trustSignals` → "Free • No commitment • We'll respond within an hour"
- etc.

- [ ] **Step 2: Create Hebrew translation**

Create `src/locales/he/translation.json` — translate to Hebrew. Same JSON structure.

Key translations:
- `hero.title` → "בית ספר אונליין\nעם גישה נוירו-ידידותית"
- `hero.cta` → "הרשמו לשיעור ניסיון"
- etc.

- [ ] **Step 3: Create Serbian translation**

Create `src/locales/sr/translation.json` — translate to Serbian. Same JSON structure.

Key translations:
- `hero.title` → "Onlajn škola\nsa neuro pristupom"
- `hero.cta` → "Zakažite probni čas"
- etc.

- [ ] **Step 4: Register translations in i18n.ts**

Update `src/i18n.ts` to import and register all translation files:
```typescript
import ru from "./locales/ru/translation.json";
import en from "./locales/en/translation.json";
import he from "./locales/he/translation.json";
import sr from "./locales/sr/translation.json";

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  he: { translation: he },
  sr: { translation: sr },
};
```

- [ ] **Step 5: Verify all languages**

Test each language route on dev server:
- `/` — Russian (default)
- `/en/` — English
- `/he/` — Hebrew (RTL)
- `/sr/` — Serbian

Verify all content renders, no missing keys in console, RTL works for Hebrew.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: add English, Hebrew, and Serbian translations

- Full translation files for EN, HE, SR
- Register all languages in i18n config
- All 4 languages now functional"
```

---

## Task 14: Final Polish & Verification

**Files:**
- Various minor fixes across components

- [ ] **Step 1: Active section highlight in header**

In `Header.tsx`, add scroll spy logic to highlight the current section in desktop nav. Use IntersectionObserver on each section to track which one is in view, apply `font-semibold text-primary` to the active nav link.

- [ ] **Step 2: Smooth scroll for anchor links**

Add click handler to anchor links that uses `scrollIntoView({ behavior: "smooth" })` instead of relying on CSS `scroll-behavior`.

- [ ] **Step 3: Full build verification**

Run:
```bash
npm run build
```
Expected: Build succeeds with no errors or warnings.

- [ ] **Step 4: Visual review**

Start preview server:
```bash
npm run preview
```
Walk through every section on:
- Desktop (1440px)
- Tablet (768px)
- Mobile (375px)

Check all languages, verify animations, forms, mobile menu, sticky CTA.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "polish: active section highlight, smooth scroll, final review

- Add scroll spy for active nav section highlighting
- Smooth scroll via JS for anchor links
- Verify build and visual review across breakpoints"
```
