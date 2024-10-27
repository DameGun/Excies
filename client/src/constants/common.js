import { Button } from 'react-native';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import Logo from '../components/Logo/index.js';

// Loading

export const MAX_REQUEST_WAITING_EXPIRE_TIME = 8000;

export const MIN_REQUEST_WAITING_EXPIRE_TIME = 100;

// Navigation

export const getCommonHeaderScreenOptions = (props) => {
  return {
    headerStyle: {
      backgroundColor: props.colors.background,
    },
    tabBarStyle: {
      backgroundColor: props.colors.background,
    },
    headerTitle: '',
    headerRight: () => <Logo />,
  };
};

export const getModalHeaderScreenOption = (props) => {
  return {
    headerRight: () => (
      <Button
        disabled={props.disabled}
        title='Done'
        color={props.buttonColor}
        onPress={() => props.onPress()}
      />
    ),
    headerTitle: props.title,
    headerTitleAlign: 'center',
  };
};

export function showBottomTab(route) {
  if (route) {
    return getFocusedRouteNameFromRoute(route) == 'CreateDetailedItemModalScreen' ? false : true;
  }
  return true;
}

export const getBottomTabOptions = (props) => {
  return ({ icon, route }) => {
    return {
      tabBarIcon: ({ focused }) => {
        if (icon) {
          return (
            <icon.namespace
              name={icon.name}
              size={20}
              color={focused ? props.colors.primary : props.colors.grey}
            />
          );
        }
      },
      tabBarLabelStyle: {
        fontWeight: 'bold',
        fontSize: 12,
      },
      tabBarStyle: {
        backgroundColor: showBottomTab(route) ? props.colors.background : props.colors.greyDark,
        borderColor: showBottomTab(route) ? props.colors.background : props.colors.greyDark,
      },
    };
  };
};

export const getInfoModalScreenStylesDefault = (props) => {
  return {
    container: {
      marginTop: 20,
      marginHorizontal: 20,
    },
    text: {
      color: props.colors.grey,
      paddingLeft: 10,
      paddingVertical: 5,
      textTransform: 'uppercase',
    },
    inputContainer: {
      alignItems: 'flex-start',
    },
    icon: {
      alignSelf: 'center',
    },
    input: {
      height: 40,
      width: '100%',
    },
    error: {
      color: 'red',
      marginTop: 10,
    },
    deleteButtonText: {
      color: 'red',
      fontSize: 16,
    },
    deleteButton: {
      padding: 10,
      backgroundColor: props.colors.greyBackground,
      alignItems: 'flex-start',
      marginTop: 40,
      height: 50,
    },
  };
};
