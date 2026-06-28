import i18n from "i18next";
import { initReactI18next } from "react-i18next";
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

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "ru",
  supportedLngs: ["ru"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
