import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ru from "./locales/ru/translation.json";
import en from "./locales/en/translation.json";
import he from "./locales/he/translation.json";
import sr from "./locales/sr/translation.json";

const resources = {
  ru: { translation: ru },
  en: { translation: en },
  he: { translation: he },
  sr: { translation: sr },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "ru",
    supportedLngs: ["ru", "en", "he", "sr"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "localStorage", "navigator"],
      lookupFromPathIndex: 0,
      caches: ["localStorage"],
    },
  });

export default i18n;
