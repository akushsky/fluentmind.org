import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!isHomePage) return;

    const sections = ["about", "teachers", "courses", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHomePage]);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [],
  );

  return (
    <>
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

        <button
          className="flex flex-col gap-1 md:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Открыть меню"
        >
          <span className="block h-0.5 w-5 rounded-sm bg-primary" />
          <span className="block h-0.5 w-5 rounded-sm bg-primary" />
          <span className="block h-0.5 w-5 rounded-sm bg-primary" />
        </button>

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
              <a
                href="#about"
                onClick={(e) => handleAnchorClick(e, "#about")}
                className={`transition-colors hover:underline ${activeSection === "about" ? "font-semibold text-primary" : ""}`}
              >
                {t("nav.about")}
              </a>
              <a
                href="#teachers"
                onClick={(e) => handleAnchorClick(e, "#teachers")}
                className={`transition-colors hover:underline ${activeSection === "teachers" ? "font-semibold text-primary" : ""}`}
              >
                {t("nav.teachers")}
              </a>
              <a
                href="#courses"
                onClick={(e) => handleAnchorClick(e, "#courses")}
                className={`transition-colors hover:underline ${activeSection === "courses" ? "font-semibold text-primary" : ""}`}
              >
                {t("nav.courses")}
              </a>
              <a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, "#contact")}
                className={`transition-colors hover:underline ${activeSection === "contact" ? "font-semibold text-primary" : ""}`}
              >
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
          <LanguageSwitcher variant="desktop" />
          {isHomePage && (
            <a
              href="#contact"
              onClick={(e) => handleAnchorClick(e, "#contact")}
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
            >
              {t("nav.trialLesson")}
            </a>
          )}
        </nav>
      </div>
    </header>
    <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
