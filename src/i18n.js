import i18n from 'i18next';
import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
    .use(Backend)
    // .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        backend: {
            loadPath: 'locales/{{lng}}/{{ns}}.json',
        },
        // have a common namespace used around the full app
        ns: ['translations'],
        defaultNS: 'translations',
        debug: false,
        react: {
            wait: true
        }
    });


export default i18n;