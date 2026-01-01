import { COLORS } from "../constants/colors";
import { CONTENT } from "../constants/content";

export default function Courses() {
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
            className="text-2xl font-bold md:text-3xl lg:text-4xl"
            style={{ color: COLORS.primary }}
          >
            {CONTENT.courses.title}
          </h2>
          {CONTENT.courses.subtitle && (
            <p
              className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400"
              style={{ color: COLORS.text.muted }}
            >
              {CONTENT.courses.subtitle}
            </p>
          )}
          {CONTENT.courses.description && (
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
              {CONTENT.courses.description}
            </p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CONTENT.courses.items.map((course, index) => (
            <article
              key={index}
              className="flex flex-col rounded-3xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4">
                <h3
                  className="text-lg font-bold"
                  style={{ color: COLORS.primary }}
                >
                  {course.title}
                </h3>
                {course.subtitle && (
                  <p
                    className="mt-1 text-xs font-semibold uppercase tracking-[0.16em]"
                    style={{ color: COLORS.accent }}
                  >
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
                        className="mt-0.5 text-xs leading-none"
                        style={{ color: COLORS.accent }}
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
                href="#contact"
                className="mt-auto inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: COLORS.primary }}
              >
                {course.cta || "Узнать больше"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

