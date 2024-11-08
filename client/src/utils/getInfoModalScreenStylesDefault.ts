import { createStylesheet } from '@/helpers/createStylesheet';

export const getInfoModalScreenStylesDefault = createStylesheet(({ colors, constants }) => ({
  container: {
    marginTop: constants.margin.lg,
    marginHorizontal: constants.margin.lg,
  },
  text: {
    color: colors.grey,
    paddingLeft: constants.padding.sm,
    paddingVertical: constants.padding.sm,
    textTransform: 'uppercase',
  },
  icon: {
    alignSelf: 'center',
    fontSize: constants.fontSize.xl3,
    color: colors.primary,
  },
}));
