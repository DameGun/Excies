import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ constants }) => ({
  logo: {
    height: constants.headerLogoSize,
    width: constants.headerLogoSize,
    marginRight: constants.margin.md,
  },
}));
