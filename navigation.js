import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShows: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}