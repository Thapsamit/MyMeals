import React from "react";
import { SettingsScreen } from "../../features/settings/screens/settings.screens";
import { createStackNavigator } from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screens";
import { CameraScreen } from "../../features/settings/screens/camera.screen";
const SettingsStack = createStackNavigator();
export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};
