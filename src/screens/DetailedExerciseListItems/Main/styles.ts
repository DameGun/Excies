import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  addButtonContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: constants.margin.md,
  },
  addButton: {
    borderRadius: constants.borderRadius.xl,
  },
  icon: {
    fontSize: constants.fontSize.xl2,
  },
  itemInfoMainContainer: {
    flexDirection: 'row',
    gap: constants.gap.xl,
  },
  time: {
    fontSize: constants.fontSize.md,
    color: colors.grey,
  },
  itemInfoSubContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  itemInfoNumberLeft: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: constants.fontSize.lg,
  },
  itemInfoTextLeft: {
    color: colors.primary,
    fontSize: constants.fontSize.sm,
    paddingLeft: constants.padding.xs,
    paddingBottom: constants.padding.xs,
  },
  itemInfoNumberRight: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: constants.fontSize.lg,
  },
  itemInfoTextRight: {
    color: colors.primary,
    fontSize: constants.fontSize.sm,
    paddingLeft: constants.padding.xs,
    paddingBottom: constants.padding.xs,
  },
}));
