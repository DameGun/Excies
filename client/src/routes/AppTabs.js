import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ExerciseListStack from './ExerciseListStack';

import { getBottomTabOptions, getCommonHeaderScreenOptions } from '../constants/common';
import { useHeaderScreenOptions } from '../helpers/customHooks';

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const commonScreenOptions = useHeaderScreenOptions(getCommonHeaderScreenOptions);
  const bottomTabOptions = useHeaderScreenOptions(getBottomTabOptions);

  return (
    <Tab.Navigator screenOptions={commonScreenOptions}>
      <Tab.Screen
        name='Home'
        component={ExerciseListStack}
        options={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          ...bottomTabOptions({
            icon: { namespace: AntDesign, name: 'home' },
            route,
          }),
        })}
      />
    </Tab.Navigator>
  );
}
