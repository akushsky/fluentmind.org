import { useState, useMemo, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import FloatingInput from "./FloatingInput";
import FloatingTextarea from "./FloatingTextarea";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import type { TFunction } from "i18next";

function buildCareersWhatsAppMessage(
  t: TFunction,
  fields: {
    name: string;
    email: string;
    phone: string;
    experience: string;
    languages: string;
    message: string;
  },
): string {
  const lines = [t("whatsapp.messages.careersIntro")];
  lines.push(t("whatsapp.messages.careersName", { value: fields.name.trim() }));
  lines.push(t("whatsapp.messages.careersEmail", { value: fields.email.trim() }));

  if (fields.phone.trim()) {
    lines.push(t("whatsapp.messages.careersPhone", { value: fields.phone.trim() }));
  }
  if (fields.experience.trim()) {
    lines.push(
      t("whatsapp.messages.careersExperience", { value: fields.experience.trim() }),
    );
  }
  if (fields.languages.trim()) {
    lines.push(
      t("whatsapp.messages.careersLanguages", { value: fields.languages.trim() }),
    );
  }
  if (fields.message.trim()) {
    lines.push(t("whatsapp.messages.careersAbout", { value: fields.message.trim() }));
  }

  return lines.join("\n");
}

export default function CareersSection() {
  const { t } = useTranslation();
  const benefitItems = t("careers.benefits.items", {
    returnObjects: true,
  }) as string[];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [languages, setLanguages] = useState("");
  const [message, setMessage] = useState("");

  const validationRules = useMemo(
    () => ({
      name: (v: string) => (v.trim() ? null : t("form.errors.nameRequired")),
      email: (v: string) => {
        if (!v.trim()) return t("form.errors.emailRequired");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()))
          return t("form.errors.emailInvalid");
        return null;
      },
    }),
    [t],
  );

  const { state, validate } = useFormSubmit(validationRules);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate({ name, email })) return;

    const text = buildCareersWhatsAppMessage(t, {
      name,
      email,
      phone,
      experience,
      languages,
      message,
    });
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="border-b bg-white" aria-labelledby="careers-title">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            id="careers-title"
            className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl"
          >
            {t("careers.title")}
          </h2>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
            {t("careers.subtitle")}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
            {t("careers.description")}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
          {/* Benefits */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-primary">
              {t("careers.benefits.title")}
            </h3>
            <ul className="space-y-3">
              {benefitItems.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-slate-600"
                >
                  <span
                    className="mt-1 text-lg leading-none text-accent"
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
            <h3 className="mb-6 text-xl font-bold text-primary">
              {t("careers.openPositions.title")}
            </h3>
            <div className="rounded-2xl border bg-slate-50 p-6">
              <p className="text-sm text-slate-600">
                {t("careers.openPositions.noPositions")}
              </p>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <div className="mt-16">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-2 text-xl font-bold text-primary">
              {t("careers.application.title")}
            </h3>
            <p className="mb-6 text-sm text-slate-600">
              {t("careers.application.description")}
            </p>

            <div className="rounded-3xl border bg-slate-50 p-6 md:p-8">
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                aria-label="Форма отправки резюме"
              >
                  <FloatingInput
                    id="career-name"
                    label={t("careers.application.form.name")}
                    required
                    value={name}
                    onChange={setName}
                    error={state.errors.name}
                  />
                  <FloatingInput
                    id="career-email"
                    label={t("careers.application.form.email")}
                    type="email"
                    required
                    value={email}
                    onChange={setEmail}
                    error={state.errors.email}
                  />
                  <FloatingInput
                    id="career-phone"
                    label={t("careers.application.form.phone")}
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                  />
                  <FloatingInput
                    id="career-experience"
                    label={t("careers.application.form.experience")}
                    value={experience}
                    onChange={setExperience}
                  />
                  <FloatingInput
                    id="career-languages"
                    label={t("careers.application.form.languages")}
                    value={languages}
                    onChange={setLanguages}
                  />
                  <FloatingTextarea
                    id="career-message"
                    label={t("careers.application.form.message")}
                    value={message}
                    onChange={setMessage}
                    rows={4}
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                  >
                    {t("careers.application.form.submit")}
                  </button>
                </form>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
