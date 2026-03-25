import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";

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
            <AnimatedSection
              key={index}
              delay={index * 0.2}
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
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
