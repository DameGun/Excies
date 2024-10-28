import { ThemeColors } from '@/types/theme';

import { showBottomTab } from './showBottomTab';

export const getBottomTabOptions = (colors: ThemeColors) => {
  return ({ icon, route }) => {
    return {
      tabBarIcon: ({ focused }) => {
        if (icon) {
          return (
            <icon.namespace
              name={icon.name}
              size={20}
              color={focused ? colors.primary : colors.grey}
            />
          );
        }
      },
      tabBarLabelStyle: {
        fontWeight: 'bold',
        fontSize: 12,
      },
      tabBarStyle: {
        backgroundColor: showBottomTab(route) ? colors.background : colors.greyDark,
        borderColor: showBottomTab(route) ? colors.background : colors.greyDark,
      },
    };
  };
};
