# SEO: статус на 17.10.2026

Аудит `/seo audit` по https://www.fluentmind.org/ дал стартовую оценку около 45/100.
Сайт — одностраничный React/Vite на Vercel, только русский язык.

## Сделано

| Коммит | Что |
|---|---|
| `cfe134e` | `robots.txt`, `sitemap.xml`, настоящий 404, мета по маршрутам (`usePageMeta`) |
| `d6c06ff` | Пререндер `/`, `/prices`, `/careers` при сборке, гидрация на клиенте |
| `9cf1fc5` | JSON-LD `EducationalOrganization`, `og:image`, кэш `immutable` на `/assets/*`, WebP |
| `3b0563d` | Починена ошибка линтера в `StickyMobileCTA` |
| `74925db` | Самохостинг Poppins, H1 больше не прячется до гидрации |
| `8da4c02` | `LazyMotion`, убраны неиспользуемые локали из бандла (521 → 493 КБ) |

Проверено на проде: `/robots.txt`, `/sitemap.xml` отдаются, `/prices.html` и `/en/prices` редиректят на `/prices`, `/xyz` даёт 404.

## Как устроено

- Сборка: `npm run build` делает клиентский билд, SSR-бандл и `scripts/prerender.mjs`, который кладёт `dist/index.html`, `dist/prices.html`, `dist/careers.html`.
- Мета страниц: `src/seo/routes.ts`. Новая страница добавляется и туда, и в `public/sitemap.xml`.
- `vercel.json`: `cleanUrls`, редиректы `/en|he|sr`, заголовки кэша и безопасности.

## Открытые задачи

1. Search Console: домен подтверждён TXT-записью в Vercel DNS, `sitemap.xml` отправлен (17.10.2026). Проверить статус sitemap и индексацию трёх страниц. Bing Webmaster Tools — импорт из GSC.
2. Замерить Core Web Vitals на проде через PageSpeed Insights в браузере. Мои лабораторные замеры шумные: мобильный LCP 2.5–3.7 с, десктоп 1.1–2.8 с, CLS около 0.
3. Контент: фамилии, образование и опыт преподавателей (затем `Person` в JSON-LD), реальные отзывы, страницы под конкретные запросы.
4. Google Business Profile и единые NAP, если школа привязана к Израилю. Ссылки с профильных площадок.
5. Мёртвый код: `src/locales/en|he|sr` и `src/components/LanguageSwitcher.tsx` не используются, удалить или оставить на случай возврата языков.
6. Если вернутся языки: отдельные URL и `hreflang`.
7. `public/edit-texts.html` отдаётся с прода — закрыть `noindex` или убрать.
8. CSP: сайт больше не грузит Google Fonts, можно аккуратно добавить.
9. Бандл ещё ~490 КБ. Помогла бы ленивая загрузка `/prices` и `/careers`, но для пререндера это отдельная работа.

## Что сделать через 2–4 недели

Повторить `/seo audit https://www.fluentmind.org/`, сравнить с этим статусом и подтянуть данные из Search Console (индексация, показы, клики).
