import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import translationEn from '@/assets/locales/en.json';
import translationRu from '@/assets/locales/ru.json';
import { FALLBACK_LNG, SupportedLanguageCodes } from '@/constants/i18n';
import { StorageItemsKeys } from '@/constants/token';
import { getUserLocales } from '@/utils/getUserLocale';
import { getStorageItem } from '@/utils/storage';

const resources = {
  [SupportedLanguageCodes.English]: { translation: translationEn },
  [SupportedLanguageCodes.Russian]: { translation: translationRu },
};

async function initI18n() {
  let savedLanguage = await getStorageItem(StorageItemsKeys.Language);

  if (!savedLanguage) {
    savedLanguage = getUserLocales().languageCode!;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v4',
    lng: savedLanguage,
    fallbackLng: FALLBACK_LNG,
    resources,
    interpolation: {
      escapeValue: false,
    },
  });
}

initI18n();

export default i18n;
