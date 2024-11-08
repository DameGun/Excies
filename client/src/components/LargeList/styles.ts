import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  listsContainer: {
    marginTop: constants.margin.lg,
  },
  header: {
    backgroundColor: colors.greyBackground,
    paddingLeft: constants.padding.md,
    color: colors.grey,
    fontWeight: 'bold',
    paddingVertical: constants.padding.xs,
    fontSize: constants.fontSize.md,
  },
  separator: {
    paddingVertical: constants.padding.xl,
  },
}));
