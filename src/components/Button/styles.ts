import type { PressableStateCallbackType } from 'react-native';

import { createStylesheet } from '@/helpers/createStylesheet';
import type { StylesObjectTypes } from '@/types/styles';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  buttonContainer: (isHaveIcon: boolean) => ({
    gap: constants.gap.sm,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: isHaveIcon ? 'row' : 'column',
  }),
  button:
    (isDisabled?: boolean, ...extraStyles: StylesObjectTypes[]) =>
    ({ pressed }: PressableStateCallbackType) => [
      {
        opacity: pressed ? constants.opacity.md : constants.opacity.lg,
        borderRadius: constants.borderRadius.md,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: isDisabled ? colors.grey : colors.primary,
        padding: constants.padding.sm,
      },
      extraStyles,
    ],
  text: {
    textAlign: 'center',
    color: colors.text,
    fontWeight: 'bold',
  },
}));
