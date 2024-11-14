import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ colors, constants }) => ({
  centeredView: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalView: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: constants.borderRadius.xl,
    padding: constants.padding.lg,
    backgroundColor: colors.background,
    borderWidth: constants.borderWidth.md,
    borderColor: colors.greyDark,
  },
}));
