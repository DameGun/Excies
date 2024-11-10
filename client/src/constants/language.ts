import type { LanguageDataType } from '@/types/i18n';

import { SupportedLanguageCodes } from './i18n';

export const LanguagesData: LanguageDataType[] = [
  {
    id: SupportedLanguageCodes.English,
    code: SupportedLanguageCodes.English,
    originName: 'English',
    name: 'English',
  },
  {
    id: SupportedLanguageCodes.Russian,
    code: SupportedLanguageCodes.Russian,
    originName: 'Русский',
    name: 'Russian',
  },
];
