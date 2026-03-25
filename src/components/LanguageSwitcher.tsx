import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const LANGUAGES = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "he", label: "HE" },
  { code: "sr", label: "SR" },
];

interface LanguageSwitcherProps {
  variant: "desktop" | "mobile";
}

export default function LanguageSwitcher({ variant }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const switchLanguage = (code: string) => {
    void i18n.changeLanguage(code);
    const pathParts = location.pathname.split("/").filter(Boolean);
    const currentLang = LANGUAGES.find((l) => l.code === pathParts[0]);
    const restPath = currentLang ? pathParts.slice(1).join("/") : pathParts.join("/");
    const newPath = code === "ru" ? `/${restPath}` : `/${code}/${restPath}`;
    navigate(newPath || "/", { replace: true });
  };

  if (variant === "mobile") {
    return (
      <div>
        <span className="text-[11px] uppercase tracking-wider text-white/50">Язык</span>
        <div className="mt-2 flex gap-2">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLanguage(lang.code)}
              className={`rounded-md px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                i18n.language === lang.code
                  ? "border border-accent bg-accent/20 text-accent"
                  : "border border-white/15 bg-white/5 text-white/60"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 text-xs">
      {LANGUAGES.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1">
          <button
            onClick={() => switchLanguage(lang.code)}
            className={`rounded px-1.5 py-0.5 transition-colors ${
              i18n.language === lang.code
                ? "bg-primary text-white"
                : "text-slate-500 hover:text-primary"
            }`}
          >
            {lang.label}
          </button>
          {i < LANGUAGES.length - 1 && <span className="text-slate-300">|</span>}
        </span>
      ))}
    </div>
  );
}
