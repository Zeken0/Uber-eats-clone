import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ViewCart() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        position: "absolute",
        bottom: 130,
        zIndex: 999,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: "black",
            flexDirection: "row",
            justifyContent: "center",
            padding: 15,
            borderRadius: 30,
            width: 300,
            position: "relative",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>View cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
