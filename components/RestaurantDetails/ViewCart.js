import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

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
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 15,
            borderRadius: 30,
            width: 300,
            position: "relative",
          }}
        >
          <Text style={{ color: "white", fontSize: 20 }}>ViewCart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
