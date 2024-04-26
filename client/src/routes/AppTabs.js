import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExerciseListStack from "./ExerciseListStack";
import { useHeaderScreenOptions } from "../helpers/customHooks";
import { getCommonHeaderScreenOptions } from "../constants/common";

const Tab = createBottomTabNavigator();

export default function AppTabs() {
  const commonScreenOptions = useHeaderScreenOptions(getCommonHeaderScreenOptions);

  return (
      <Tab.Navigator screenOptions={commonScreenOptions}>
        <Tab.Screen
          name="Home"
          component={ExerciseListStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
  );
}
