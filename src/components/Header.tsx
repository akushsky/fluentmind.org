import logo from "../assets/logo.png";
import { COLORS } from "../constants/colors";
import { CONTENT } from "../constants/content";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur"
      style={{ borderColor: COLORS.border }}
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt={CONTENT.brand.name}
            className="h-10 w-auto"
            loading="eager"
          />
          <div className="leading-tight">
            <div
              className="text-lg font-semibold tracking-wide"
              style={{ color: COLORS.primary }}
            >
              {CONTENT.brand.name}
            </div>
            <div className="text-xs text-slate-500">
              {CONTENT.brand.tagline}
            </div>
          </div>
        </div>

        <nav
          className="hidden items-center gap-6 text-sm font-medium md:flex"
          aria-label="Основная навигация"
        >
          <a href="#about" className="hover:underline">
            {CONTENT.navigation.about}
          </a>
          <a href="#teachers" className="hover:underline">
            {CONTENT.navigation.teachers}
          </a>
          <a href="#contact" className="hover:underline">
            {CONTENT.navigation.contact}
          </a>
          <a
            href="#contact"
            className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: COLORS.primary }}
          >
            {CONTENT.navigation.trialLesson}
          </a>
        </nav>
      </div>
    </header>
  );
}

