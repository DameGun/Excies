import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ constants }) => ({
  logo: {
    height: constants.headerLogoSize,
    width: 'auto',
    marginRight: constants.margin.lg,
  },
}));
