import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const features = t("hero.features", { returnObjects: true }) as string[];

  return (
    <section className="border-b bg-slate-50" aria-labelledby="hero-title">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center md:py-20">
        <p className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
          {t("hero.badge")}
        </p>
        <h1
          id="hero-title"
          className="text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl"
        >
          {(t("hero.title") as string).split("\n").map((line: string, i: number) => (
            <span key={i}>
              {line}
              {i < (t("hero.title") as string).split("\n").length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 md:text-lg">
          {t("hero.description")}
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-primary shadow-md transition-all hover:shadow-lg"
        >
          {t("hero.cta.primary")}
        </a>
        <ul className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-500">
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
