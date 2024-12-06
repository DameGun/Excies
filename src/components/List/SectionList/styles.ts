import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  headerRegular: {
    color: colors.grey,
    fontSize: constants.fontSize.md,
    marginBottom: constants.margin.xs,
    marginLeft: constants.margin.md,
  },
  separator: {
    marginVertical: constants.margin.lg,
  },
}));
