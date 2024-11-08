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
}));
