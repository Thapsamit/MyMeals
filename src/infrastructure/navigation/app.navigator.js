import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurant.navigator";
import { Text, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeArea } from "../../utils/safe-area.component";
import { MapScreen } from "../../features/map/screens/map.screens";
import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantsContextProvider } from "../../services/restaurants.context";
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
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings Screen</Text>
      <Button title="Logout" onPress={() => onLogout()}></Button>
    </SafeArea>
  );
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
