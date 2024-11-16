import { initReactI18next } from 'react-i18next';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getLocales } from 'expo-localization';
import i18n from 'i18next';

import translationEn from '@/assets/locales/en.json';
import translationRu from '@/assets/locales/ru.json';
import { FALLBACK_LNG, LANGUAGE_STORAGE_KEY, SupportedLanguageCodes } from '@/constants/i18n';

const resources = {
  [SupportedLanguageCodes.English]: { translation: translationEn },
  [SupportedLanguageCodes.Russian]: { translation: translationRu },
};

async function initI18n() {
  let savedLanguage = await AsyncStorage.getItem(LANGUAGE_STORAGE_KEY);

  if (!savedLanguage) {
    savedLanguage = getLocales()[0].languageCode!;
  }

  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
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
