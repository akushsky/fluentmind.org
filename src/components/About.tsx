import { useTranslation } from "react-i18next";
import logo from "../assets/logo_round_blue.jpg";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const { t } = useTranslation();
  const paragraphs = t("about.paragraphs", { returnObjects: true }) as string[];

  return (
    <section
      id="about"
      className="border-b bg-white"
      aria-labelledby="about-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:py-16">
        <AnimatedSection direction="left" className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md rounded-3xl overflow-hidden">
            <img
              src={logo}
              alt={t("brand.name")}
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.1} className="flex-1 space-y-6">
          <h2
            id="about-title"
            className="text-2xl font-bold text-primary md:text-3xl"
          >
            {t("about.title")}
          </h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-4 border-l-4 border-accent pl-4">
            <p className="text-sm italic text-slate-700">
              "{t("about.quote")}"
            </p>
            <footer className="mt-2 text-xs font-medium text-slate-500">
              — {t("about.quoteAuthor")}
            </footer>
          </blockquote>
        </AnimatedSection>
      </div>
    </section>
  );
}
