import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: constants.margin.md,
  },
  headerLeftContainer: {
    flexDirection: 'row',
    gap: constants.gap.sm,
    alignItems: 'center',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  weightSystemButton: (placement: 'left' | 'right', isActive: boolean) => [
    {
      backgroundColor: isActive ? colors.primary : colors.greyDark,
      paddingHorizontal: constants.padding.sm,
      paddingVertical: constants.padding.xs,
      borderWidth: constants.borderWidth.md,
      borderColor: colors.primary,
    },
    placement === 'left'
      ? {
          borderTopLeftRadius: constants.borderRadius.sm,
          borderBottomLeftRadius: constants.borderRadius.sm,
        }
      : {
          borderTopRightRadius: constants.borderRadius.sm,
          borderBottomRightRadius: constants.borderRadius.sm,
        },
  ],
  weightSystemButtonText: {
    color: colors.text,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  header: {
    color: colors.grey,
    textTransform: 'uppercase',
    fontSize: constants.fontSize.sm,
  },
  createTypeIcon: {
    fontSize: constants.fontSize.md,
    color: colors.primary,
  },
}));
