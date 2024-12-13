import type { SupportedLanguageCodes } from '@/constants/i18n';

type LanguageDataType = {
  id: string;
  code: string;
  name: string;
  originName: string;
};

type LanguageParameter = {
  language: SupportedLanguageCodes;
};

export type { LanguageDataType, LanguageParameter };
