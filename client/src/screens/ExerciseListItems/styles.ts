import { StyleSheet } from 'react-native';

import { ThemeColors } from '@/types/theme';

export const getStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    addExerciseButton: {
      marginHorizontal: 20,
      marginBottom: 20,
      marginTop: 5,
      height: 50,
      backgroundColor: colors.greyBackground,
    },
    addExerciseText: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    iconColor: {
      color: colors.primary,
    },
    shadow: {
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 15,
    },
  });
