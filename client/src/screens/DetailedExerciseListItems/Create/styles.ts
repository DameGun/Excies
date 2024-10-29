import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.greyDark,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      padding: 20,
      gap: 10,
    },
    headerContainer: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center',
      marginLeft: 10,
    },
    header: {
      color: colors.grey,
      textTransform: 'uppercase',
      fontSize: 12,
    },
    primaryColor: {
      color: colors.primary,
    },
    greyColor: {
      color: colors.greyBackground,
    },
    inputsContainer: {
      gap: 10,
    },
    input: {
      borderWidth: 2,
      backgroundColor: colors.greyBackground,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 5,
    },
    inputButtonsContainer: {
      flexDirection: 'row',
    },
    submitButton: {
      marginTop: 10,
      padding: 12,
    },
    submitButtonText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'black',
    },
    inputTitle: {
      color: colors.text,
      fontSize: 20,
    },
    numberButtonsContainer: {
      flex: 1,
      marginTop: 15,
    },
  });
