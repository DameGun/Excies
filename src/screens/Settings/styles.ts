import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ constants }) => ({
  container: {
    padding: constants.padding.md,
  },
}));
