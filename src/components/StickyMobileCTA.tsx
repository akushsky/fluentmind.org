import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

export default function StickyMobileCTA() {
  const { t } = useTranslation();
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const isHomePage = location.pathname === "/" || /^\/[a-z]{2}\/?$/.test(location.pathname);

  useEffect(() => {
    if (!isHomePage) {
      setVisible(false);
      return;
    }

    const contactSection = document.getElementById("contact");
    if (!contactSection) return;

    let isContactVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isContactVisible = entry.isIntersecting;
        if (isContactVisible) setVisible(false);
      },
      { threshold: 0.2 }
    );

    const handleScroll = () => {
      if (!isContactVisible) {
        setVisible(window.scrollY > 400);
      }
    };

    observer.observe(contactSection);
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-accent/30 bg-primary/95 px-4 py-2 backdrop-blur md:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-white">{t("stickyCta.label")}</span>
            <a
              href="#contact"
              className="rounded-md bg-accent px-4 py-2 text-xs font-semibold text-primary"
            >
              {t("stickyCta.button")}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
