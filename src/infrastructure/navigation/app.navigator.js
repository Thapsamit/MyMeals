import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurant.navigator";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../utils/safe-area.component";

import { MapScreen } from "../../features/map/screens/map.screens";
const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => {
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

//
const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return (
    <SafeArea>
      <Text>Settings Screen</Text>
    </SafeArea>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          options={{ headerShown: false }}
          name="Restaurants"
          component={RestaurantsNavigator}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Map"
          component={MapScreen}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Settings"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
