import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  input: {
    flex: 1,
    paddingLeft: constants.padding.sm,
    color: 'white',
  },
  searchIcon: {
    color: colors.grey,
    fontSize: constants.fontSize.xl,
  },
  clearIcon: {
    fontSize: constants.fontSize.xl,
    color: colors.grey,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: constants.gap.md,
    marginHorizontal: constants.margin.lg,
    marginTop: constants.margin.lg,
  },
  searchBar: {
    flex: 2,
    borderWidth: constants.borderWidth.md,
    borderColor: colors.greyBackground,
    borderRadius: constants.borderRadius.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: constants.padding.sm,
  },
  searchBarClicked: {
    flex: 1,
  },
  placeholder: {
    color: colors.grey,
  },
}));
