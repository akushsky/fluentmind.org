import { useTranslation } from "react-i18next";
import AnimatedSection from "./AnimatedSection";
import { buildWhatsAppUrl, getCourseMessageKey } from "../utils/whatsapp";

interface CourseItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
}

export default function Courses() {
  const { t } = useTranslation();
  const items = t("courses.items", { returnObjects: true }) as CourseItem[];

  return (
    <section
      id="courses"
      className="border-b bg-white"
      aria-labelledby="courses-title"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-12 text-center">
          <h2
            id="courses-title"
            className="text-2xl font-bold text-primary md:text-3xl lg:text-4xl"
          >
            {t("courses.title")}
          </h2>
          {t("courses.subtitle") && (
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
              {t("courses.subtitle")}
            </p>
          )}
          {t("courses.description") && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              {t("courses.description")}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((course, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <article className="flex h-full flex-col rounded-3xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-primary">
                    {course.title}
                  </h3>
                  {course.subtitle && (
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                      {course.subtitle}
                    </p>
                  )}
                </div>

                {course.description && (
                  <p className="mb-4 flex-1 text-sm text-slate-600">
                    {course.description}
                  </p>
                )}

                {course.features && course.features.length > 0 && (
                  <ul className="mb-4 space-y-2 text-xs text-slate-500">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span
                          className="mt-0.5 text-xs leading-none text-accent"
                          aria-hidden="true"
                        >
                          •
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <a
                  href={buildWhatsAppUrl(
                    t(getCourseMessageKey(course.id)),
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                >
                  {course.cta || "Узнать больше"}
                </a>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
