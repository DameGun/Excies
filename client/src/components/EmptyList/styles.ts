import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    headerText: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 22,
      marginTop: 10,
    },
    commonText: {
      color: colors.grey,
      marginBottom: 15,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      width: '100%',
      gap: 5,
    },
    button: {
      padding: 10,
      width: '40%',
    },
  });
