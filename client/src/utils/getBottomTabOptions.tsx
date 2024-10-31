import { ReactNode } from 'react';
import { TextStyle } from 'react-native';

import { AntDesign, Entypo } from '@expo/vector-icons';
import { ParamListBase, RouteProp } from '@react-navigation/native';

import { IconParams } from '@/types/icons';
import { ThemeColors } from '@/types/theme';

import { showBottomTab } from './showBottomTab';

type GetBottomTabOptionsProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList,
> = {
  icon: IconParams;
  route?: RouteProp<ParamList, RouteName>;
};

type TabBarIconPops = {
  focused: boolean;
};

type StyleReturnType = {
  tabBarIcon: (props: TabBarIconPops) => ReactNode;
  tabBarLabelStyle: TextStyle;
  tabBarStyle: TextStyle;
};

export const getBottomTabOptions = (colors: ThemeColors) => {
  return <ParamList extends ParamListBase, RouteName extends keyof ParamList>({
    icon: { type, name },
    route,
  }: GetBottomTabOptionsProps<ParamList, RouteName>): StyleReturnType => ({
    tabBarIcon: ({ focused }: TabBarIconPops) => {
      if (type === 'AntDesign') {
        return <AntDesign name={name} size={20} color={focused ? colors.primary : colors.grey} />;
      }
      return <Entypo name={name} size={20} color={focused ? colors.primary : colors.grey} />;
    },
    tabBarLabelStyle: {
      fontWeight: 'bold',
      fontSize: 12,
    },
    tabBarStyle: {
      backgroundColor: showBottomTab(route) ? colors.background : colors.greyDark,
      borderColor: showBottomTab(route) ? colors.background : colors.greyDark,
    },
  });
};
