import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  editIcon: (pressed) => ({
    color: pressed ? colors.primaryPressed : colors.primary,
    fontSize: constants.fontSize.xl2,
  }),
  editButton: {
    marginRight: constants.margin.lg,
  },
}));
