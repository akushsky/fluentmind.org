import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const isHomePage = location.pathname === "/" || /^\/[a-z]{2}\/?$/.test(location.pathname);

  const menuItems = isHomePage
    ? [
        { href: "#courses", label: t("nav.courses") },
        { href: "#teachers", label: t("nav.teachers") },
        { href: "#about", label: t("nav.about") },
        { href: "#contact", label: t("nav.contact") },
      ]
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-30 bg-primary"
        >
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/15">
                <span className="text-xs font-semibold text-accent">FM</span>
              </div>
              <span className="text-sm font-semibold text-white">{t("brand.name")}</span>
            </div>
            <button
              onClick={onClose}
              className="text-2xl text-white"
              aria-label="Закрыть меню"
            >
              ✕
            </button>
          </div>

          <nav className="px-6 pt-8">
            <div className="space-y-0">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="block border-b border-white/10 py-4 text-lg font-medium text-white"
                >
                  {item.label}
                </a>
              ))}
              <Link
                to={isHomePage ? "/careers" : "/"}
                onClick={onClose}
                className="block border-b border-white/10 py-4 text-lg font-medium text-white/60"
              >
                {isHomePage ? t("nav.careers") : t("nav.home")}
              </Link>
            </div>

            <div className="mt-8">
              <LanguageSwitcher variant="mobile" />
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="mt-6 block rounded-lg bg-accent py-3.5 text-center text-[15px] font-semibold text-primary"
            >
              {t("hero.cta.primary")}
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
