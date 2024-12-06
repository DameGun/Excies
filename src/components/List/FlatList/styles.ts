import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  listContainer: {
    overflow: 'hidden',
  },
  headerBold: {
    color: colors.text,
    fontSize: constants.fontSize.xl,
    marginBottom: constants.margin.md,
    marginLeft: constants.margin.md,
    fontWeight: 'bold',
  },
  emptyContainer: {
    display: 'flex',
    flex: 1,
    gap: constants.gap.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainEmptyText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: constants.fontSize.md,
  },
  secondaryEmptyText: {
    color: colors.grey,
  },
}));
