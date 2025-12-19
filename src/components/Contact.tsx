import { COLORS } from "../constants/colors";
import { CONTENT } from "../constants/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          <div>
            <h2
              id="contact-title"
              className="text-2xl font-bold md:text-3xl"
              style={{ color: COLORS.primary }}
            >
              {CONTENT.contact.title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600 md:text-base">
              {CONTENT.contact.description}
            </p>

            <div className="mt-6 space-y-2 text-sm text-slate-700">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href={`mailto:${CONTENT.contact.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {CONTENT.contact.email}
                </a>
              </p>
              <p>
                <span className="font-semibold">Telegram / WhatsApp:</span>{" "}
                <a
                  href={`tel:${CONTENT.contact.phone.replace(/\s/g, "")}`}
                  className="text-blue-600 hover:underline"
                >
                  {CONTENT.contact.phone}
                </a>
              </p>
              <p className="text-xs text-slate-400">
                {CONTENT.contact.phoneNote}
              </p>
            </div>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-5">
            <h3 className="text-sm font-semibold text-slate-900">
              {CONTENT.contact.form.title}
            </h3>
            <p className="mb-4 mt-1 text-xs text-slate-500">
              {CONTENT.contact.form.description}
            </p>
            <form
              className="space-y-3 text-sm"
              aria-label="Форма быстрой заявки"
            >
              <label htmlFor="contact-name" className="sr-only">
                {CONTENT.contact.form.fields.name}
              </label>
              <input
                id="contact-name"
                type="text"
                placeholder={CONTENT.contact.form.fields.name}
                className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                style={{ borderColor: COLORS.border }}
              />
              <label htmlFor="contact-info" className="sr-only">
                {CONTENT.contact.form.fields.contact}
              </label>
              <input
                id="contact-info"
                type="text"
                placeholder={CONTENT.contact.form.fields.contact}
                className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                style={{ borderColor: COLORS.border }}
              />
              <label htmlFor="contact-goals" className="sr-only">
                {CONTENT.contact.form.fields.goals}
              </label>
              <textarea
                id="contact-goals"
                placeholder={CONTENT.contact.form.fields.goals}
                rows={3}
                className="w-full resize-none rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-offset-1"
                style={{ borderColor: COLORS.border }}
              />
              <button
                type="button"
                className="w-full rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: COLORS.accent }}
              >
                {CONTENT.contact.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

