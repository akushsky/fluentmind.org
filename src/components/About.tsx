import { COLORS } from "../constants/colors";
import { CONTENT } from "../constants/content";
import logo from "../assets/logo_round_blue.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="border-b bg-white"
      aria-labelledby="about-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:flex-row md:py-16">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md rounded-3xl overflow-hidden">
            <img
              src={logo}
              alt={CONTENT.brand.name}
              className="w-full h-auto object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <h2
            id="about-title"
            className="text-2xl font-bold md:text-3xl"
            style={{ color: COLORS.primary }}
          >
            {CONTENT.about.title}
          </h2>
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



