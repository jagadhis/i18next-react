import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translation: require('./locales/en/translation.json')
    },
    es: {
      translation: require('./locales/es/translation.json')
    }
  },
  ns: ['translation'],
  defaultNS: 'translation'
});

i18n.languages = ['en', 'es'];

export default i18n;