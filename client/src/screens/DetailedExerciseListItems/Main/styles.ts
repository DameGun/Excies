import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    addButtonContainer: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      height: 80,
      width: 80,
      alignSelf: 'center',
      bottom: 10,
    },
    addButton: {
      width: 80,
      height: 80,
      borderRadius: 40,
    },
    itemInfoMainContainer: {
      flexDirection: 'row',
      gap: 30,
    },
    time: {
      fontSize: 14,
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
      fontSize: 18,
    },
    itemInfoTextLeft: {
      color: colors.primary,
      fontSize: 12,
      paddingLeft: 2,
      paddingBottom: 2,
    },
    itemInfoNumberRight: {
      color: colors.primary,
      fontWeight: 'bold',
      fontSize: 18,
    },
    itemInfoTextRight: {
      color: colors.primary,
      fontSize: 12,
      paddingLeft: 2,
      paddingBottom: 2,
    },
  });
