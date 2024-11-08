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
  headerContainer: {
    flexDirection: 'row',
    gap: constants.gap.sm,
    alignItems: 'center',
    marginLeft: constants.margin.md,
  },
  header: {
    color: colors.grey,
    textTransform: 'uppercase',
    fontSize: constants.fontSize.sm,
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
  createTypeIcon: {
    fontSize: constants.fontSize.md,
    color: colors.primary,
  },
  overlay: [
    StyleSheet.absoluteFill,
    {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  ],
}));
