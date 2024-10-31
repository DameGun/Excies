import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    button: {
      borderRadius: 8,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
    text: {
      textAlign: 'center',
      color: colors.text,
    },
    buttonContainer: {
      gap: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
