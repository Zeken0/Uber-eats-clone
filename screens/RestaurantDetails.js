import { View, Text } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetails/About";
import MenuItem from "../components/RestaurantDetails/MenuItem";

export default function RestaurantDetails() {
  return (
    <View>
      <About />
      <MenuItem />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
    </View>
  );
}
