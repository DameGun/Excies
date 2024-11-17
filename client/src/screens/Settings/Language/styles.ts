import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  languageItem: {
    display: 'flex',
  },
  englishName: {
    color: colors.text,
    fontSize: constants.fontSize.md,
  },
  originName: {
    color: colors.text,
    fontSize: constants.fontSize.sm,
  },
}));
