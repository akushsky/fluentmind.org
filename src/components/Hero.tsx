import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const features = t("hero.features", { returnObjects: true }) as string[];
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay },
        };

  return (
    <section className="border-b bg-slate-50" aria-labelledby="hero-title">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center md:py-20">
        <motion.p
          {...fadeUp(0)}
          className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
        >
          {t("hero.badge")}
        </motion.p>
        <motion.h1
          {...fadeUp(0.1)}
          id="hero-title"
          className="text-3xl font-bold leading-tight text-primary md:text-4xl lg:text-5xl"
        >
          {(t("hero.title") as string).split("\n").map((line: string, i: number) => (
            <span key={i}>
              {line}
              {i < (t("hero.title") as string).split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-4 max-w-xl text-base text-slate-600 md:text-lg"
        >
          {t("hero.description")}
        </motion.p>
        <motion.a
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.5, delay: 0.3 },
              })}
          href="#courses"
          className="btn-accent mt-6 inline-block rounded-full px-8 py-3.5 text-sm shadow-md transition-all hover:shadow-lg"
        >
          {t("hero.cta.primary")}
        </motion.a>
        <motion.ul
          {...fadeUp(0.4)}
          className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-500"
        >
          {features.map((feature, index) => (
            <li key={index}>• {feature}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
