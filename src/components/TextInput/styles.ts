import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  input: {
    borderWidth: constants.borderWidth.md,
    borderRadius: constants.borderRadius.md,
    padding: constants.padding.sm,
    borderColor: colors.greyBackground,
    outlineWidth: 0,
    color: colors.text,
  },
  placeholderColor: {
    color: colors.grey,
  },
  error: {
    color: 'red',
    marginVertical: constants.margin.xs,
    fontSize: constants.fontSize.sm,
    height: constants.gap.lg,
  },
}));
