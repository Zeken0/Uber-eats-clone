import { View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetails/About";
import MenuItems from "../components/RestaurantDetails/MenuItems";
import ViewCart from "../components/RestaurantDetails/ViewCart";

export default function RestaurantDetails({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.2} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} />
    </View>
  );
}
