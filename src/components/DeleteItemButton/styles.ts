import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  deleteButtonText: {
    color: 'red',
    fontSize: constants.fontSize.md,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: colors.greyBackground,
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: constants.fontSize.lg,
    color: 'red',
  },
}));
