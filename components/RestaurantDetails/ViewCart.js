import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems);
  const total = items;
  // .map((item) => Number(item.price.replace("$", "")))
  // .reduce((prev, curr) => prev + curr, 0);
  console.log("----------------------------", total);

  // const totalUSD = total.toLocaleString("en", {
  //   style: "currency",
  //   currency: "USD,",
  // });
  // console.log(totalUSD);
  return (
    <>
      {total ? (
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
              <Text style={{ color: "white", fontSize: 20 }}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
