import { COLORS } from "../constants/colors";
import { CONTENT } from "../constants/content";

export default function About() {
  return (
    <section
      id="about"
      className="border-b bg-white"
      aria-labelledby="about-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:py-16">
        <div className="relative flex-1" aria-hidden="true">
          <div
            className="h-full w-[85%] rounded-3xl"
            style={{ backgroundColor: COLORS.accent }}
          />
          <div className="absolute inset-6 rounded-3xl border bg-slate-100/80" />
        </div>

        <div className="flex-1 space-y-6">
          <h2
            id="about-title"
            className="text-2xl font-bold md:text-3xl"
            style={{ color: COLORS.primary }}
          >
            {CONTENT.about.title}
          </h2>
          <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
            {CONTENT.about.subtitle}
          </p>
          <div className="space-y-4 text-sm leading-relaxed text-slate-600 md:text-base">
            {CONTENT.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <blockquote
            className="mt-4 border-l-4 pl-4"
            style={{ borderColor: COLORS.accent }}
          >
            <p className="text-sm italic text-slate-700">
              "{CONTENT.about.quote}"
            </p>
            <footer className="mt-2 text-xs font-medium text-slate-500">
              — {CONTENT.about.quoteAuthor}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

