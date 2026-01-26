import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enText from "../locales/en.json";
import ptText from "../locales/pt.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: {
        translation: enText,
      },
      pt: {
        translation: ptText,
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
