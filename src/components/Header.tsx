import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header
      className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur"
      role="banner"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt={t("brand.name")}
            className="h-10 w-auto"
            loading="eager"
          />
          <div className="leading-tight">
            <div className="text-lg font-semibold tracking-wide text-primary">
              {t("brand.name")}
            </div>
            <div className="text-xs text-slate-500">
              {t("brand.tagline")}
            </div>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium md:flex"
          aria-label="Основная навигация"
        >
          {!isHomePage && (
            <Link to="/" className="hover:underline">
              {t("nav.home")}
            </Link>
          )}
          {isHomePage && (
            <>
              <a href="#about" className="hover:underline">
                {t("nav.about")}
              </a>
              <a href="#teachers" className="hover:underline">
                {t("nav.teachers")}
              </a>
              <a href="#courses" className="hover:underline">
                {t("nav.courses")}
              </a>
              <a href="#contact" className="hover:underline">
                {t("nav.contact")}
              </a>
            </>
          )}
          <Link
            to="/careers"
            className={`hover:underline ${location.pathname === "/careers" ? "font-semibold" : ""}`}
          >
            {t("nav.careers")}
          </Link>
          {isHomePage && (
            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              {t("nav.trialLesson")}
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
