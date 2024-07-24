import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_pl from "./translations/pl/translations.json"
import translation_en from "./translations/en/translations.json"

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'pl',
    lng: 'pl',
    debug: false,
    resources: {
      pl: {
        translation: translation_pl
      },
      en: {
        translation: translation_en
      }
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;