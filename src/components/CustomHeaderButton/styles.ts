import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  button: (disabled: boolean) => ({
    backgroundColor: disabled ? colors.grey : colors.primary,
    padding: constants.padding.xs2,
    borderRadius: constants.borderRadius.md,
    marginHorizontal: constants.margin.md,
  }),
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: constants.fontSize.sm,
  },
}));
