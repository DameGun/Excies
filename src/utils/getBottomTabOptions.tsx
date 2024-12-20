import { Text } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { ParamListBase, Route, RouteProp } from '@react-navigation/native';

import { createStylesheet } from '@/helpers/createStylesheet';
import type { IconNames } from '@/types/icons';

import { showBottomTab } from './showBottomTab';

type BottomTabOptionProps = {
  route: RouteProp<ParamListBase, string>;
  navigation: any;
};

export const getBottomTabStyles = createStylesheet(({ colors, constants }) => ({
  tabBarIcon: (focused: boolean) => ({
    color: focused ? colors.primary : colors.grey,
    fontSize: constants.fontSize.xl,
  }),
  tabBarLabelStyle: (focused: boolean) => ({
    fontWeight: 'bold',
    fontSize: constants.fontSize.sm,
    color: focused ? colors.primary : colors.grey,
  }),
  tabBarStyle: (route?: Partial<Route<string>>) => ({
    backgroundColor: showBottomTab(route) ? colors.background : colors.greyDark,
    borderColor: showBottomTab(route) ? colors.background : colors.greyDark,
    height: 'auto',
  }),
}));

export const getBottomTabOptions =
  (styles: ReturnType<typeof getBottomTabStyles>) =>
  (title: string, iconName: IconNames) =>
  ({ route }: BottomTabOptionProps): BottomTabNavigationOptions => ({
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: styles.tabBarStyle(route),
    tabBarLabel: ({ focused }) => <Text style={styles.tabBarLabelStyle(focused)}>{title}</Text>,
    tabBarIcon: ({ focused }) => (
      <MaterialCommunityIcons name={iconName} style={styles.tabBarIcon(focused)} />
    ),
  });
