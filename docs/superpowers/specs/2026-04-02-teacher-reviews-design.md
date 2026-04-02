# Teacher Reviews Feature

## Context

Nastya wants to add the ability to view reviews for each teacher on the landing page. Reviews will be added manually (no user-submitted reviews). The teachers section currently displays 3 teacher cards with name, initials, languages, description, and specialties. There are no reviews or testimonials anywhere on the site.

## Requirements

- Each review contains: author name + review text
- Reviews are translated into all 4 languages (ru, en, he, sr) via i18n
- Reviews are accessed via a "Reviews" button on each teacher card that opens a modal
- Expected volume: 1-3 reviews per teacher
- If a teacher has no reviews, the button is hidden (not disabled)

## Data Model

### New type in `src/types/index.ts`

```typescript
export interface Review {
  author: string;
  text: string;
}
```

### Extended `Teacher` interface

```typescript
export interface Teacher {
  id: string;
  name: string;
  initials: string;
  languages: string[];
  description: string;
  specialties: string[];
  reviews?: Review[];  // new optional field
}
```

### Data storage

Reviews live inside each teacher object in `src/locales/{lang}/translation.json`:

```json
{
  "teachers": {
    "reviewsButton": "Отзывы ({{count}})",
    "reviewsTitle": "Отзывы — {{name}}",
    "items": [
      {
        "id": "anastasia-dulich",
        "name": "Анастасия Дулич",
        "reviews": [
          { "author": "Мария", "text": "Отличный преподаватель!" },
          { "author": "Иван", "text": "Помогла подготовиться к собеседованию." }
        ]
      }
    ]
  }
}
```

Teachers without reviews simply omit the `reviews` field or use an empty array.

## Components

### New: `src/components/ReviewsModal.tsx`

Modal window displaying reviews for a teacher.

**Props:** `teacher: Teacher`, `isOpen: boolean`, `onClose: () => void`

**Behavior:**
- Dark overlay background (semi-transparent)
- Header: `teachers.reviewsTitle` interpolated with teacher name + close button (x)
- Body: list of reviews, each showing quoted text + author name
- Closes on: overlay click, x button, Escape key
- Body scroll lock when open
- Animation: overlay fade-in + content slide-up (using Framer Motion `AnimatePresence` + `motion.div`, consistent with existing `MobileMenu` pattern)
- Responsive: full-width on mobile with padding, max-width on desktop
- RTL: inherits from page `dir` attribute, close button stays top-right

### Modified: `src/components/TeacherCard.tsx`

**Changes:**
- Add `useState` for `reviewsOpen`
- Conditionally render reviews button when `teacher.reviews?.length > 0`
- Button uses text/link styling (not accent) to avoid competing with the primary CTA
- Button placed between specialties list and "Sign up" button
- Renders `ReviewsModal` when `reviewsOpen` is true

**Card layout with reviews:**

```
┌────────────────────────────┐
│  [AD]  Анастасия Дулич     │
│        АНГЛИЙСКИЙ · РУССКИЙ │
│                            │
│  Индивидуальный подход...  │
│                            │
│  • Индивидуальные занятия  │
│  • Подготовка к экзаменам  │
│  • Разговорная практика    │
│                            │
│  Отзывы (2)     ← text btn│
│                            │
│  [ Записаться к Анастасии ]│
└────────────────────────────┘
```

## i18n Keys

New keys added to `teachers` namespace in all 4 locale files:

| Key | ru | en | he | sr |
|-----|----|----|----|----|
| `teachers.reviewsButton` | Отзывы ({{count}}) | Reviews ({{count}}) | ביקורות ({{count}}) | Recenzije ({{count}}) |
| `teachers.reviewsTitle` | Отзывы — {{name}} | Reviews — {{name}} | ביקורות — {{name}} | Recenzije — {{name}} |

## Files to Modify

1. `src/types/index.ts` — add `Review` interface, extend `Teacher`
2. `src/components/ReviewsModal.tsx` — new file
3. `src/components/TeacherCard.tsx` — add reviews button + modal state
4. `src/locales/ru/translation.json` — add i18n keys + sample reviews
5. `src/locales/en/translation.json` — add i18n keys + sample reviews
6. `src/locales/he/translation.json` — add i18n keys + sample reviews
7. `src/locales/sr/translation.json` — add i18n keys + sample reviews

## Initial Content

Add placeholder reviews for 1-2 teachers (e.g., Anastasia) so the feature can be visually verified. Nastya will replace them with real reviews later. Teachers without placeholder reviews will have no `reviews` field — their cards won't show the button.

## Out of Scope

- Star ratings
- Author photos
- User-submitted reviews (form)
- Pagination (not needed for 1-3 reviews)

## Verification

1. `npm run dev` — site loads without errors
2. Switch between all 4 languages — reviews translate correctly
3. Teacher card without reviews — no button visible
4. Teacher card with reviews — button shows count, modal opens/closes
5. Modal closes on: x button, overlay click, Escape
6. Mobile viewport — modal is responsive
7. Hebrew (RTL) — modal layout mirrors correctly
8. `npm run build` — no TypeScript or build errors
