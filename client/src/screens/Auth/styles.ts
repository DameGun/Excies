import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ constants }) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: constants.margin.lg,
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
