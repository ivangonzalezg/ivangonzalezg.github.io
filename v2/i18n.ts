import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { content } from './translations';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: content.en
      },
      es: {
        translation: content.es
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;