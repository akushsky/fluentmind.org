import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CareersPage from "./pages/Careers";

const SUPPORTED_LANGS = ["en", "he", "sr"];

function LanguageWrapper() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const targetLang = lang && SUPPORTED_LANGS.includes(lang) ? lang : "ru";
    if (i18n.language !== targetLang) {
      void i18n.changeLanguage(targetLang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    document.documentElement.dir = i18n.language === "he" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <Layout />;
}

export default function FluentMindLanding() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageWrapper />}>
          <Route index element={<Home />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
        <Route path="/:lang" element={<LanguageWrapper />}>
          <Route index element={<Home />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
