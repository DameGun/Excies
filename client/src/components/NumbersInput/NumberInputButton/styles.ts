import { PressableStateCallbackType } from 'react-native';

import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  inputButton: ({ pressed }: PressableStateCallbackType) => ({
    opacity: pressed ? constants.opacity.md : constants.opacity.lg,
    flexDirection: 'row',
    alignItems: 'center',
    gap: constants.gap.sm,
    padding: constants.padding.xs,
    paddingVertical: constants.padding.sm,
  }),
  inputButtonText: {
    color: colors.text,
    fontSize: constants.fontSize.lg,
  },
  inputButtonNumber: {
    color: colors.text,
    backgroundColor: colors.greyPressed,
    paddingVertical: constants.padding.xs,
    paddingHorizontal: constants.padding.sm,
    borderRadius: constants.borderRadius.md,
    fontSize: constants.fontSize.lg,
    overflow: 'hidden',
  },
}));
