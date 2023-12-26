import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { translations as enTranslations } from './en';
import { translations as deTranslations } from './de';
import { translations as duTranslations } from './du';
const resources = {
  en: { translation: enTranslations },
  de: { translation: deTranslations },
  du: {translation: duTranslations },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
