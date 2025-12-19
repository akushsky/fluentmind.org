import { COLORS } from "../constants/colors";
import { CONTENT } from "../constants/content";

export default function Hero() {
  return (
    <section className="border-b bg-slate-50" aria-labelledby="hero-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-20">
        <div className="flex-1 space-y-6">
          <p
            className="inline rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]"
            style={{
              backgroundColor: COLORS.background.light,
              color: COLORS.primary,
            }}
          >
            {CONTENT.hero.badge}
          </p>
          <h1
            id="hero-title"
            className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
            style={{ color: COLORS.primary }}
          >
            {CONTENT.hero.title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < CONTENT.hero.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="max-w-xl text-base text-slate-600 md:text-lg">
            {CONTENT.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
              style={{ backgroundColor: COLORS.primary }}
            >
              {CONTENT.hero.cta.primary}
            </a>
            <a
              href="#teachers"
              className="rounded-full border px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ borderColor: COLORS.primary, color: COLORS.primary }}
            >
              {CONTENT.hero.cta.secondary}
            </a>
          </div>
          <ul className="flex flex-wrap gap-6 text-xs text-slate-500">
            {CONTENT.hero.features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border bg-white p-6 shadow-sm">
            <div
              className="mb-3 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: COLORS.accent }}
            >
              {CONTENT.hero.form.title}
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <p>{CONTENT.hero.form.description}</p>
              <form className="space-y-3" aria-label="Форма записи на пробный урок">
                <label htmlFor="trial-name" className="sr-only">
                  {CONTENT.hero.form.fields.name}
                </label>
                <input
                  id="trial-name"
                  type="text"
                  placeholder={CONTENT.hero.form.fields.name}
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                  style={{ borderColor: COLORS.border }}
                />
                <label htmlFor="trial-contact" className="sr-only">
                  {CONTENT.hero.form.fields.contact}
                </label>
                <input
                  id="trial-contact"
                  type="text"
                  placeholder={CONTENT.hero.form.fields.contact}
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                  style={{ borderColor: COLORS.border }}
                />
                <label htmlFor="trial-language" className="sr-only">
                  {CONTENT.hero.form.fields.language}
                </label>
                <select
                  id="trial-language"
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1 bg-white"
                  style={{ borderColor: COLORS.border }}
                  defaultValue=""
                >
                  <option value="" disabled>
                    {CONTENT.hero.form.fields.language}
                  </option>
                  {CONTENT.hero.form.languageOptions.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="w-full rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: COLORS.accent }}
                >
                  {CONTENT.hero.form.submit}
                </button>
              </form>
              <p className="text-[11px] leading-snug text-slate-400">
                {CONTENT.hero.form.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

