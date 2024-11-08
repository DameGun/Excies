import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useStyles } from '@/hooks/useStyles';
import { getBottomTabOptions, getBottomTabStyles } from '@/utils/getBottomTabOptions';
import {
  getCommonHeaderScreenOptions,
  getCommonHeaderScreenStyles,
} from '@/utils/getCommonHeaderScreenOptions';

import { ExerciseListStack } from './ExerciseListStack';

const Tab = createBottomTabNavigator();

export function AppTabs() {
  const styles = useStyles(getCommonHeaderScreenStyles, getBottomTabStyles);

  return (
    <Tab.Navigator screenOptions={getCommonHeaderScreenOptions(styles)}>
      <Tab.Screen
        name='Home'
        component={ExerciseListStack}
        options={getBottomTabOptions(styles, 'home')}
      />
    </Tab.Navigator>
  );
}
