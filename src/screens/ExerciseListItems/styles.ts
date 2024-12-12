import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  addExerciseButton: {
    marginHorizontal: constants.margin.lg,
    marginBottom: constants.margin.lg,
    marginTop: constants.margin.sm,
    backgroundColor: colors.greyBackground,
  },
  addExerciseText: {
    fontWeight: 'bold',
    fontSize: constants.fontSize.md,
  },
  addButtonIcon: {
    color: colors.primary,
    fontSize: constants.fontSize.xl2,
  },
}));
