import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  listItemContainer: ({ pressed }) => ({
    backgroundColor: pressed ? colors.greyBackground : colors.background,
    height: constants.largeListItemHeight,
    paddingTop: constants.padding.md,
    paddingLeft: constants.padding.md,
    flexDirection: 'row',
  }),
  listItem: {
    color: colors.text,
    fontSize: constants.fontSize.md,
  },
  borderContainer: {
    flex: 1,
    marginLeft: constants.margin.lg,
    borderBottomWidth: constants.borderWidth.md,
    borderBottomColor: colors.greyBackground,
  },
  icon: {
    color: colors.primary,
    fontSize: constants.fontSize.md,
  },
}));
