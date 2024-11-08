import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  button: (disabled: boolean) => ({
    backgroundColor: disabled ? colors.grey : colors.primary,
    padding: constants.padding.sm,
    borderRadius: constants.borderRadius.md,
    marginHorizontal: constants.margin.lg,
  }),
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
}));
