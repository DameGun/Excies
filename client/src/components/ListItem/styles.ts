import type { PressableStateCallbackType, ViewStyle } from 'react-native';

import { createStylesheet } from '@/helpers/createStylesheet';
import type { StylesObjectTypes } from '@/types/styles';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  listItemTitle: (isWithExtract: boolean, ...extraStyles: StylesObjectTypes[]) => [
    {
      color: isWithExtract ? colors.text : colors.primary,
      flex: 1,
      fontSize: constants.fontSize.lg,
    },
    ...extraStyles,
  ],
  listItem:
    (isLast: boolean, isFirst: boolean) =>
    ({ pressed }: PressableStateCallbackType) => {
      const commonStyles: ViewStyle = {
        opacity: pressed ? constants.opacity.md : constants.opacity.lg,
        backgroundColor: colors.greyBackground,
      };

      const styles = [commonStyles];

      if (isFirst) {
        styles.push({
          borderTopWidth: constants.borderWidth.md,
          borderTopLeftRadius: constants.borderRadius.lg,
          borderTopRightRadius: constants.borderRadius.lg,
          borderTopColor: 'transparent',
        });
      }

      if (isLast) {
        styles.push({
          borderBottomWidth: constants.borderWidth.md,
          borderBottomLeftRadius: constants.borderRadius.lg,
          borderBottomRightRadius: constants.borderRadius.lg,
          borderBottomColor: 'transparent',
        });
      }

      return styles;
    },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftIconContainer: {
    paddingHorizontal: constants.padding.sm,
  },
  leftIcon: {
    fontSize: constants.fontSize.xl,
    color: colors.primary,
  },
  rightIcon: {
    fontSize: constants.fontSize.xl,
    color: colors.grey,
  },
  borderContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: constants.padding.sm,
  },
  border: {
    borderBottomWidth: constants.borderWidth.md,
    borderBottomColor: colors.grey,
  },
  infoRightContainer: {
    flexDirection: 'row',
    paddingRight: constants.padding.sm,
    gap: constants.gap.sm,
    alignItems: 'center',
  },
  infoRightText: {
    fontSize: constants.fontSize.lg,
    color: colors.grey,
  },
}));
