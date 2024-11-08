import { PressableStateCallbackType } from 'react-native';

import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  itemContainer: ({ pressed }: PressableStateCallbackType) => ({
    opacity: pressed ? constants.opacity.md : constants.opacity.lg,
    flexGrow: 1,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: constants.borderWidth.sm,
    borderColor: colors.greyBackground,
  }),
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
  },
  text: {
    color: colors.text,
    fontSize: constants.fontSize.xl,
  },
}));
