import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      flex: 1,
      fontSize: 18,
    },
    itemFirstStyle: {
      borderTopWidth: 1,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    itemLastStyle: {
      borderBottomWidth: 1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    icon: {
      paddingHorizontal: 10,
    },
    borderContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
    },
    border: {
      borderBottomWidth: 1,
      borderBottomColor: colors.grey,
    },
    infoRightContainer: {
      flexDirection: 'row',
      paddingRight: 10,
      gap: 5,
      alignItems: 'center',
    },
    infoRightText: {
      fontSize: 18,
      color: colors.grey,
    },
  });
