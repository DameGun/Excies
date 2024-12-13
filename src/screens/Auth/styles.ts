import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    paddingHorizontal: constants.margin.lg,
    gap: constants.gap.xl,
  },
  innerContainer: {
    paddingHorizontal: constants.padding.xl,
  },
  buttonText: {
    fontSize: constants.fontSize.md,
  },
  button: {
    marginTop: constants.margin.sm,
  },
  logo: {
    height: '15%',
    width: 'auto',
    resizeMode: 'contain',
  },
}));
