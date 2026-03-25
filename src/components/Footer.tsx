import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t bg-slate-50" role="contentinfo">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row">
        <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
        <span>{t("footer.tagline")}</span>
      </div>
    </footer>
  );
}
