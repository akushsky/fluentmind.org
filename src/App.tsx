import logo from "./assets/logo.png";
import React from "react";

const primary = "#2d2764";
const accent = "#bfa371";

export default function FluentMindLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Шапка */}
      <header
        className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur"
        style={{ borderColor: "#e5e7eb" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-3">
          <img src={logo} alt="Fluent Mind" className="h-10 w-auto" />  
  	    <div className="leading-tight">
              <div
                className="text-lg font-semibold tracking-wide"
                style={{ color: primary }}
              >
                Fluent Mind
              </div>
              <div className="text-xs text-slate-500">
                Online Language School
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#about" className="hover:underline">
              О школе
            </a>
            <a href="#teachers" className="hover:underline">
              Преподаватели
            </a>
            <a href="#contact" className="hover:underline">
              Записаться
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm"
              style={{ backgroundColor: primary }}
            >
              Пробный урок
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-20">
          <div className="flex-1 space-y-6">
            <p
              className="inline rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]"
              style={{
                backgroundColor: "#f3f4f6",
                color: primary,
              }}
            >
              Английский и русский онлайн
            </p>
            <h1
              className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
              style={{ color: primary }}
            >
              Языковая школа Fluent Mind:
              <br />
              говорите свободно и уверенно
            </h1>
            <p className="max-w-xl text-base text-slate-600 md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod tincidunt, sapien nec laoreet volutpat, justo risus
              condimentum mauris, ut faucibus elit nunc a felis.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md"
                style={{ backgroundColor: primary }}
              >
                Записаться на пробный урок
              </a>
              <a
                href="#teachers"
                className="rounded-full border px-6 py-3 text-sm font-semibold"
                style={{ borderColor: primary, color: primary }}
              >
                Смотреть преподавателей
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-slate-500">
              <span>• Индивидуальные занятия</span>
              <span>• Гибкий онлайн-график</span>
              <span>• Авторские материалы</span>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto max-w-md rounded-3xl border bg-white p-6 shadow-sm">
              <div
                className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: accent }}
              >
                Пробный урок
              </div>
              <div className="space-y-3 text-sm text-slate-600">
                <p>
                  Оставьте контакты — мы подберём формат занятий и уровень
                  именно под вас.
                </p>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring"
                    style={{ borderColor: "#e5e7eb" }}
                  />
                  <input
                    type="text"
                    placeholder="Email или Telegram"
                    className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring"
                    style={{ borderColor: "#e5e7eb" }}
                  />
                  <select
                    className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring bg-white"
                    style={{ borderColor: "#e5e7eb" }}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Какой язык вас интересует?
                    </option>
                    <option>Английский</option>
                    <option>Русский</option>
                    <option>Оба языка</option>
                  </select>
                  <button
                    type="button"
                    className="w-full rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm"
                    style={{ backgroundColor: accent }}
                  >
                    Отправить заявку
                  </button>
                </form>
                <p className="text-[11px] leading-snug text-slate-400">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных
                  данных. Форма пока не отправляет данные — это прототип.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* О школе / миссия */}
      <section id="about" className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:py-16">
          <div className="relative flex-1">
            <div
              className="h-full w-[85%] rounded-3xl"
              style={{ backgroundColor: accent }}
            />
            <div className="absolute inset-6 rounded-3xl border bg-slate-100/80" />
          </div>

          <div className="flex-1 space-y-6">
            <h2
              className="text-2xl font-bold md:text-3xl"
              style={{ color: primary }}
            >
              Наша миссия
            </h2>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
              Mission Statement
            </p>
            <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <p>
                Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                consequat. Duis autem vel eum iriure dolor in hendrerit.
              </p>
            </div>

            <div className="mt-4 border-l-4 pl-4" style={{ borderColor: accent }}>
              <p className="text-sm italic text-slate-700">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.”
              </p>
              <p className="mt-2 text-xs font-medium text-slate-500">
                — Fluent Mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Преподаватели */}
      <section id="teachers" className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="mb-8 flex items-baseline justify-between gap-4">
            <div>
              <h2
                className="text-2xl font-bold md:text-3xl"
                style={{ color: primary }}
              >
                Преподаватели
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Дальше можно будет добавить отдельные карточки для каждого
                учителя.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Анастасия */}
            <article className="flex flex-col rounded-3xl border bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold text-white"
                  style={{ backgroundColor: primary }}
                >
                  AD
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    Анастасия Дулич
                  </h3>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.16em]"
                    style={{ color: accent }}
                  >
                    Английский · Русский
                  </p>
                </div>
              </div>

              <p className="mb-3 text-sm text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Более
                N лет преподавания, индивидуальный подход, внимание к живой
                разговорной речи и уверенности в общении.
              </p>

              <ul className="mb-4 mt-auto space-y-1 text-xs text-slate-500">
                <li>• Индивидуальные и парные занятия</li>
                <li>• Подготовка к экзаменам и собеседованиям</li>
                <li>• Разговорная практика для взрослых</li>
              </ul>

              <button
                type="button"
                className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm"
                style={{ backgroundColor: primary }}
              >
                Записаться к Анастасии
              </button>
            </article>

            <article className="flex flex-col items-start justify-center rounded-3xl border border-dashed bg-white/60 p-5 text-sm text-slate-400">
              Будущая карточка преподавателя. Здесь можно будет добавить фото,
              специализацию и краткое описание.
            </article>
            <article className="flex flex-col items-start justify-center rounded-3xl border border-dashed bg-white/60 p-5 text-sm text-slate-400">
              Ещё одна карточка для расширения команды Fluent Mind.
            </article>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
            <div>
              <h2
                className="text-2xl font-bold md:text-3xl"
                style={{ color: primary }}
              >
                Давайте подберём формат обучения
              </h2>
              <p className="mt-3 max-w-xl text-sm text-slate-600 md:text-base">
                Здесь можно будет подключить реальную форму, интеграцию с
                Telegram, WhatsApp или календарём. Сейчас это статический
                прототип.
              </p>

              <div className="mt-6 space-y-2 text-sm text-slate-700">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  hello@fluentmind.school
                </p>
                <p>
                  <span className="font-semibold">Telegram / WhatsApp:</span>{" "}
                  +1 (234) 567-89-00
                </p>
                <p className="text-xs text-slate-400">
                  (Подставь реальные контакты, когда будут готовы)
                </p>
              </div>
            </div>

            <div className="rounded-3xl border bg-slate-50 p-5">
              <h3 className="text-sm font-semibold text-slate-900">
                Быстрая заявка
              </h3>
              <p className="mb-4 mt-1 text-xs text-slate-500">
                Форма-заглушка для демонстрации верстки.
              </p>
              <form className="space-y-3 text-sm">
                <input
                  type="text"
                  placeholder="Имя"
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring"
                  style={{ borderColor: "#e5e7eb" }}
                />
                <input
                  type="text"
                  placeholder="Как с вами связаться?"
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring"
                  style={{ borderColor: "#e5e7eb" }}
                />
                <textarea
                  placeholder="Кратко о ваших целях (например: разговорный английский для работы)"
                  rows={3}
                  className="w-full resize-none rounded-xl border px-3 py-2 text-sm outline-none focus:ring"
                  style={{ borderColor: "#e5e7eb" }}
                />
                <button
                  type="button"
                  className="w-full rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm"
                  style={{ backgroundColor: accent }}
                >
                  Оставить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="border-t bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row">
          <span>© {new Date().getFullYear()} Fluent Mind.</span>
          <span>Онлайн-школа английского и русского языков.</span>
        </div>
      </footer>
    </div>
  );
}

