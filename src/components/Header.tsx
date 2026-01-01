import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { COLORS } from "../constants/colors";
import { CONTENT } from "../constants/content";

export default function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header
      className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur"
      style={{ borderColor: COLORS.border }}
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3">
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
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium md:flex"
          aria-label="Основная навигация"
        >
          {!isHomePage && (
            <Link to="/" className="hover:underline">
              {CONTENT.navigation.home}
            </Link>
          )}
          {isHomePage && (
            <>
              <a href="#about" className="hover:underline">
                {CONTENT.navigation.about}
              </a>
              <a href="#teachers" className="hover:underline">
                {CONTENT.navigation.teachers}
              </a>
              <a href="#courses" className="hover:underline">
                {CONTENT.navigation.courses}
              </a>
              <a href="#contact" className="hover:underline">
                {CONTENT.navigation.contact}
              </a>
            </>
          )}
          <Link
            to="/careers"
            className={`hover:underline ${location.pathname === "/careers" ? "font-semibold" : ""}`}
          >
            {CONTENT.navigation.careers}
          </Link>
          {isHomePage && (
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: COLORS.primary }}
            >
              {CONTENT.navigation.trialLesson}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}

