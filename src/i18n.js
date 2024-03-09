import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false
    },
    backend: {
        loadPath: 'http://localhost:5888/translations/{{lng}}',
        parse: (data) => {
            const parsedData = JSON.parse(data);
            // Return first key of the parsed json data basically extracting tranlsations
            return parsedData[Object.keys(parsedData)[0]];
    },
},
  });

export default i18n;

// i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// i18n
//   .use(initReactI18next)
//   .init({
//     resources: {
//       en: {
//         translations: {
//           greetings: 'Hello, please select your language and city.',
//           submit_button: 'Submit',
//         },
//       },
//       es: {
//         translations: {
//           greetings: 'Hola, por favor selecciona tu idioma y ciudad.',
//           submit_button: 'Enviar',
//         },
//       },
//       hi: {
//         translations: {
//           greetings: 'नमस्ते, कृपया अपनी भाषा और शहर चुनें।',
//           submit_button: 'जमा करना',
//         },
//       },
//     },
//     fallbackLng: 'en',
//     debug: true,
//     ns: ['translations'],
//     defaultNS: 'translations',
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;