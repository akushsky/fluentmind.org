import { COLORS } from "../constants/colors";
import { CONTENT } from "../constants/content";

export default function CareersSection() {
  return (
    <section
      className="border-b bg-white"
      aria-labelledby="careers-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            id="careers-title"
            className="text-2xl font-bold md:text-3xl lg:text-4xl"
            style={{ color: COLORS.primary }}
          >
            {CONTENT.careers.title}
          </h2>
          <p
            className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400"
            style={{ color: COLORS.text.muted }}
          >
            {CONTENT.careers.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            {CONTENT.careers.description}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Benefits */}
          <div>
            <h3
              className="mb-6 text-xl font-bold"
              style={{ color: COLORS.primary }}
            >
              {CONTENT.careers.benefits.title}
            </h3>
            <ul className="space-y-3">
              {CONTENT.careers.benefits.items.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600">
                  <span
                    className="mt-1 text-lg leading-none"
                    style={{ color: COLORS.accent }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Open Positions */}
          <div>
            <h3
              className="mb-6 text-xl font-bold"
              style={{ color: COLORS.primary }}
            >
              {CONTENT.careers.openPositions.title}
            </h3>
            <div className="rounded-2xl border bg-slate-50 p-6">
              <p className="text-sm text-slate-600">
                {CONTENT.careers.openPositions.noPositions}
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl">
            <h3
              className="mb-2 text-xl font-bold"
              style={{ color: COLORS.primary }}
            >
              {CONTENT.careers.application.title}
            </h3>
            <p className="mb-6 text-sm text-slate-600">
              {CONTENT.careers.application.description}
            </p>

            <div className="rounded-3xl border bg-slate-50 p-6 md:p-8">
              <form
                className="space-y-4"
                aria-label="Форма отправки резюме"
              >
                <div>
                  <label
                    htmlFor="career-name"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    {CONTENT.careers.application.form.name}
                  </label>
                  <input
                    id="career-name"
                    type="text"
                    required
                    className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                    style={{ borderColor: COLORS.border }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-email"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    {CONTENT.careers.application.form.email}
                  </label>
                  <input
                    id="career-email"
                    type="email"
                    required
                    className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                    style={{ borderColor: COLORS.border }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-phone"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    {CONTENT.careers.application.form.phone}
                  </label>
                  <input
                    id="career-phone"
                    type="tel"
                    className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                    style={{ borderColor: COLORS.border }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-experience"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    {CONTENT.careers.application.form.experience}
                  </label>
                  <input
                    id="career-experience"
                    type="text"
                    placeholder="Например: 3 года преподавания английского"
                    className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                    style={{ borderColor: COLORS.border }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-languages"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    {CONTENT.careers.application.form.languages}
                  </label>
                  <input
                    id="career-languages"
                    type="text"
                    placeholder="Например: Английский, Русский"
                    className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                    style={{ borderColor: COLORS.border }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="career-message"
                    className="mb-1 block text-xs font-medium text-slate-700"
                  >
                    {CONTENT.careers.application.form.message}
                  </label>
                  <textarea
                    id="career-message"
                    rows={4}
                    className="w-full resize-none rounded-xl border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                    style={{ borderColor: COLORS.border }}
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                  style={{ backgroundColor: COLORS.primary }}
                >
                  {CONTENT.careers.application.form.submit}
                </button>

                <p className="text-[11px] leading-snug text-slate-400">
                  {CONTENT.careers.application.disclaimer}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

