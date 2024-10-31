import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    input: {
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      borderColor: colors.greyBackground,
      color: colors.text,
    },
    placeholderColor: {
      color: colors.grey,
    },
    error: {
      color: 'red',
      marginTop: 10,
    },
  });
