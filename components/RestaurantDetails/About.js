import { View, Text, Image } from "react-native";
import React from "react";

const image =
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80";
const title = "Farmhous Kitchen Thai cuisine";
const description = "Thai • Comfort Food • $$ •  • 4  • (2913+)";

export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => <Text>{props.title}</Text>;
