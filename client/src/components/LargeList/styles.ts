import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      marginTop: 10,
    },
    listsContainer: {
      marginTop: 20,
    },
    itemContainer: {
      paddingLeft: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    listItem: {
      color: colors.text,
      fontSize: 16,
      paddingVertical: 12,
    },
    borderContainer: {
      flex: 1,
      marginLeft: 20,
      borderBottomWidth: 1,
      borderBottomColor: colors.greyBackground,
    },
    header: {
      backgroundColor: colors.greyBackground,
      paddingLeft: 20,
      color: colors.grey,
      fontWeight: 'bold',
      paddingVertical: 2,
      fontSize: 14,
    },
    iconColor: {
      color: colors.primary,
    },
    listItemPressed: {
      backgroundColor: colors.greyBackground,
    },
  });
