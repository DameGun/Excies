import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  input: (isActive: boolean) => ({
    borderColor: isActive ? colors.primary : colors.grey,
    borderWidth: constants.borderWidth.lg,
    backgroundColor: colors.greyBackground,
    borderRadius: constants.borderRadius.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: constants.padding.sm,
  }),
  inputTitle: {
    color: colors.text,
    fontSize: constants.fontSize.xl,
  },
  inputButtonsContainer: {
    flexDirection: 'row',
  },
}));
