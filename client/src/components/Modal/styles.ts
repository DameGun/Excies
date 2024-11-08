import { createStylesheet } from '@/helpers/createStylesheet';

export const getStyles = createStylesheet(({ constants }) => ({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: constants.margin.lg,
    borderRadius: constants.borderRadius.xl,
    padding: constants.padding.lg,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderWidth: constants.borderWidth.md,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
}));
