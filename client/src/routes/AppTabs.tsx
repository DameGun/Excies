import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useStyles } from '@/hooks/useStyles';
import { getBottomTabOptions } from '@/utils/getBottomTabOptions';
import { getCommonHeaderScreenOptions } from '@/utils/getCommonHeaderScreenOptions';

import { ExerciseListStack } from './ExerciseListStack';

const Tab = createBottomTabNavigator();

export function AppTabs() {
  const commonScreenOptions = useStyles(getCommonHeaderScreenOptions);
  const bottomTabOptions = useStyles(getBottomTabOptions);

  return (
    <Tab.Navigator screenOptions={commonScreenOptions}>
      <Tab.Screen
        name='Home'
        component={ExerciseListStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          ...bottomTabOptions({
            icon: { type: 'AntDesign', name: 'home' },
            route,
          }),
        })}
      />
    </Tab.Navigator>
  );
}
