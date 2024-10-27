import { StyleSheet } from 'react-native';

export const getStyles = (props) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: props.colors.greyDark,
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
      color: props.colors.grey,
      textTransform: 'uppercase',
      fontSize: 12,
    },
    primaryColor: props.colors.primary,
    greyColor: props.colors.greyBackground,
    inputsContainer: {
      gap: 10,
    },
    input: {
      borderWidth: 2,
      backgroundColor: props.colors.greyBackground,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 5,
    },
    inputButtonsContainer: {
      flexDirection: 'row',
    },
    inputButton: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      padding: 2,
      paddingVertical: 10,
    },
    inputButtonText: {
      color: props.colors.text,
      fontSize: 18,
    },
    inputButtonNumber: {
      color: props.colors.text,
      backgroundColor: props.colors.greyPressed,
      paddingVertical: 3,
      paddingHorizontal: 10,
      borderRadius: 8,
      fontSize: 18,
      overflow: 'hidden',
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
      color: props.colors.text,
      fontSize: 20,
    },
    numberButtonsContainer: {
      flex: 1,
      marginTop: 15,
    },
  });
