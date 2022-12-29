import { View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetails/About";
import MenuItems from "../components/RestaurantDetails/MenuItems";

export default function RestaurantDetails({ route }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
    </View>
  );
}
