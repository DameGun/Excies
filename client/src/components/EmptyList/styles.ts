import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  headerText: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: constants.fontSize.xl,
    marginTop: constants.margin.md,
  },
  commonText: {
    color: colors.grey,
    marginBottom: constants.margin.md,
  },
  icon: {
    color: colors.grey,
    fontSize: constants.fontSize.xl3,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: constants.gap.sm,
  },
}));
