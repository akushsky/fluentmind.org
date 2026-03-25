import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const features = t("hero.features", { returnObjects: true }) as string[];
  const title = t("hero.title");

  return (
    <section className="border-b bg-slate-50" aria-labelledby="hero-title">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:items-center md:py-20">
        <div className="flex-1 space-y-6">
          <p className="inline rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
            {t("hero.badge")}
          </p>
          <h1
            id="hero-title"
            className="text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl"
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="max-w-xl text-base text-slate-600 md:text-lg">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#courses"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md transition-opacity hover:opacity-90"
            >
              {t("hero.cta.primary")}
            </a>
            <a
              href="#teachers"
              className="rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              {t("hero.cta.secondary")}
            </a>
          </div>
          <ul className="flex flex-wrap gap-6 text-xs text-slate-500">
            {features.map((feature, index) => (
              <li key={index}>• {feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <div className="relative mx-auto max-w-md rounded-3xl border bg-white p-6 shadow-sm">
            <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              {t("hero.form.title")}
            </div>
            <div className="space-y-3 text-sm text-slate-600">
              <p>{t("hero.form.description")}</p>
              <form className="space-y-3" aria-label="Форма записи на пробный урок">
                <label htmlFor="trial-name" className="sr-only">
                  {t("hero.form.fields.name")}
                </label>
                <input
                  id="trial-name"
                  type="text"
                  placeholder={t("hero.form.fields.name")}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                />
                <label htmlFor="trial-contact" className="sr-only">
                  {t("hero.form.fields.contact")}
                </label>
                <input
                  id="trial-contact"
                  type="text"
                  placeholder={t("hero.form.fields.contact")}
                  className="w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                />
                <label htmlFor="trial-request" className="sr-only">
                  {t("hero.form.fields.request")}
                </label>
                <textarea
                  id="trial-request"
                  placeholder={t("hero.form.fields.request")}
                  rows={3}
                  className="w-full resize-none rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                />
                <button
                  type="button"
                  className="w-full rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  {t("hero.form.submit")}
                </button>
              </form>
              <p className="text-[11px] leading-snug text-slate-400">
                {t("hero.form.disclaimer")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
