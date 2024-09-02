import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import swedish from './locales/sv.json';
import icelandic from './locales/is.json';

i18next.use(initReactI18next).init({
    lng: 'sv', // Default language
    fallbackLng: 'sv', // Default language
    debug: true, // change to false when done
    resources: {
      en: {
        translation: en
      },
      sv: {
        translation: swedish
      },
      is: {
        translation: icelandic
      },
    },
  });