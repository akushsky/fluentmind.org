import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import CareersPage from "./pages/Careers";
import PricesPage from "./pages/Prices";

const LEGACY_LANG_PREFIX = /^\/(en|he|sr)(\/|$)/;

function LegacyLanguageRedirect() {
  const location = useLocation();
  const path = location.pathname.replace(LEGACY_LANG_PREFIX, "/") || "/";
  return (
    <Navigate
      to={`${path}${location.search}${location.hash}`}
      replace
    />
  );
}

function AppShell() {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== "ru") {
      void i18n.changeLanguage("ru");
    }
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "ru";
  }, [i18n]);

  return <Layout />;
}

export function AppRoutes() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Routes>
        <Route path="/en/*" element={<LegacyLanguageRedirect />} />
        <Route path="/he/*" element={<LegacyLanguageRedirect />} />
        <Route path="/sr/*" element={<LegacyLanguageRedirect />} />
        <Route path="/" element={<AppShell />}>
          <Route index element={<Home />} />
          <Route path="prices" element={<PricesPage />} />
          <Route path="careers" element={<CareersPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LazyMotion>
  );
}

export default function FluentMindLanding() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
