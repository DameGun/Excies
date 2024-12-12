import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors }) => ({
  newList: {
    color: colors.primary,
  },
}));
