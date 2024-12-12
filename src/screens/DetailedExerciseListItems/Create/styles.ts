import { StyleSheet } from 'react-native';

import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  container: {
    backgroundColor: colors.greyDark,
    borderTopLeftRadius: constants.borderRadius.lg,
    borderTopRightRadius: constants.borderRadius.lg,
    padding: constants.padding.md,
    gap: constants.gap.md,
  },
  inputsContainer: {
    gap: constants.gap.md,
  },
  submitButton: {
    marginTop: constants.margin.xs,
  },
  submitButtonText: {
    fontWeight: 'bold',
    fontSize: constants.fontSize.md,
    color: 'black',
  },
  numberButtonsContainer: {
    marginTop: constants.margin.lg,
  },
  overlay: StyleSheet.absoluteFill,
}));
