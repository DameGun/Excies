import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { onLogout } from "../redux/slices/authSlice";

const Tab = createBottomTabNavigator();

export default function AppStack({ screenOptions }) {
  const dispatch = useDispatch();

  return (
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "",
            headerLeft: () => (
              <Button 
                title="logout"
                onPress={() => dispatch(onLogout())}
              />
            )
          }}
      />
      </Tab.Navigator>
  );
}
