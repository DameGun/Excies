import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'center',
    },
    itemContainer: {
      flexGrow: 1,
      height: 50,
      width: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: colors.greyBackground,
    },
    text: {
      color: colors.text,
      fontSize: 22,
    },
  });
