import { createStylesheet } from '@/helpers/createStylesheet';

export const getCommonStyles = createStylesheet(({ constants }) => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: constants.padding.md,
    paddingBottom: 0,
  },
}));
