import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const SUPPORTED_LANGUAGES = ['en'];
export const DEFAULT_LANGUAGE = SUPPORTED_LANGUAGES[0];

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    load: 'languageOnly',
    debug: false,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: SUPPORTED_LANGUAGES,
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
      caches: [],
    },
    defaultNS: 'common',
    ns: ['common'],
    saveMissing: true,
    missingKeyHandler: (_, __, key) => {
      console.warn('Translation was not found: ' + key);
    },
    parseMissingKeyHandler: () => {
      const warningIcon = '\u2757';

      return warningIcon + ' Failed to load translation';
    },
    backend: {
      loadPath: `./locales/{{lng}}/{{ns}}.json`,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export { i18n };
