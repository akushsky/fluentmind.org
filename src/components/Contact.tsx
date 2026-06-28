import { useState, useMemo, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import FloatingInput from "./FloatingInput";
import FloatingTextarea from "./FloatingTextarea";
import { useFormSubmit } from "../hooks/useFormSubmit";
import AnimatedSection from "./AnimatedSection";
import ContactChannels from "./ContactChannels";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function Contact() {
  const { t } = useTranslation();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const validationRules = useMemo(
    () => ({
      name: (v: string) => (v.trim() ? null : t("form.errors.nameRequired")),
      phone: (v: string) => {
        if (!v.trim()) return t("form.errors.phoneRequired");
        if (!/^[+\d][\d\s\-()]{6,}$/.test(v.trim()))
          return t("form.errors.phoneInvalid");
        return null;
      },
    }),
    [t],
  );

  const { state, validate } = useFormSubmit(validationRules);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate({ name, phone })) return;

    const requestPart = message.trim()
      ? t("whatsapp.messages.contactFormRequest", { request: message.trim() })
      : "";
    const text = t("whatsapp.messages.contactForm", {
      name: name.trim(),
      phone: phone.trim(),
      request: requestPart,
    });
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="bg-white"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          <AnimatedSection direction="left">
            <h2
              id="contact-title"
              className="text-2xl font-bold text-primary md:text-3xl"
            >
              {t("contact.title")}
            </h2>

            <div className="mt-6 rounded-3xl border bg-slate-50 p-5 shadow-sm md:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                {t("contact.channels.eyebrow")}
              </p>
              <p className="mt-2 mb-5 text-sm leading-relaxed text-slate-600">
                {t("contact.channels.description")}
              </p>
              <ContactChannels />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border bg-slate-50 p-5 md:p-6"
            >
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  {t("contact.form.title")}
                </div>
                <p className="mb-4 text-sm text-slate-600">
                  {t("contact.form.description")}
                </p>
                <div className="space-y-3">
                  <AnimatedSection delay={0.2}>
                    <FloatingInput
                      id="contact-name"
                      label={t("contact.form.fields.name")}
                      required
                      value={name}
                      onChange={setName}
                      error={state.errors.name}
                    />
                  </AnimatedSection>
                  <AnimatedSection delay={0.3}>
                    <FloatingInput
                      id="contact-phone"
                      label={t("contact.form.fields.contact")}
                      type="tel"
                      required
                      value={phone}
                      onChange={setPhone}
                      error={state.errors.phone}
                    />
                  </AnimatedSection>
                  <AnimatedSection delay={0.4}>
                    <FloatingTextarea
                      id="contact-message"
                      label={t("contact.form.fields.request")}
                      value={message}
                      onChange={setMessage}
                    />
                  </AnimatedSection>
                  <AnimatedSection delay={0.5}>
                    <button
                      type="submit"
                      className="btn-accent w-full rounded-full px-4 py-2 text-sm shadow-sm transition-opacity hover:opacity-90"
                    >
                      {t("contact.form.submit")}
                    </button>
                    <p className="mt-2 text-center text-[11px] leading-snug text-slate-400">
                      {t("contact.form.trustSignals")}
                    </p>
                  </AnimatedSection>
                </div>
              </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
