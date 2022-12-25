import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantsItems() {
  return (
    <View>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.gTrVNThynu-gceBY50MPxwHaFB%26pid%3DApi&f=1&ipt=8db3e26f319f83dc84a6ac70a8772a91f53b05db89e18d9ca9dbec5939aa4c0d&ipo=images",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View>
    <Text>Farmhouse kitchen Thai Cuisine</Text>
    <Text>30-40 • min</Text>
    <Text>4.5</Text>
  </View>
);
