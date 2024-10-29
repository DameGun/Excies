import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) => ({
  inputButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 2,
    paddingVertical: 10,
  },
  inputButtonText: {
    color: colors.text,
    fontSize: 18,
  },
  inputButtonNumber: {
    color: colors.text,
    backgroundColor: colors.greyPressed,
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 18,
    overflow: 'hidden',
  },
});
