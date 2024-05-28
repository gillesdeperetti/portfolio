import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    whitelist: ['en', 'fr'],
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  }, () => {
    updateMetaTags();

    i18n.on('languageChanged', () => {
      updateMetaTags();
    });

    function updateMetaTags() {
      document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translatedText = i18n.t(key);
        if (element.tagName === 'TITLE') {
          document.title = translatedText;
        } else if (element.hasAttribute('content')) {
          element.setAttribute('content', translatedText);
        } else {
          element.innerText = translatedText;
        }
      });
    }
  });

export default i18n;
