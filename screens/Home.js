import {
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/Home/HeaderTabs";
import SearchBar from "../components/Home/SearchBar";
import Categories from "../components/Home/Categories";
import RestaurantsItems from "../components/Home/RestaurantsItems";
import { localRestaurants } from "../components/Home/RestaurantsItems";
import BottomTabs from "../components/Home/BottomTabs";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "W9z9y9KVrX2J1C9kXQOGjRCbtE1EY7_rMRs2GhF2x-f-Hh9DzVXV1t1tuEq-hjl3s0HThufIkn_p-tBjn12TrXzh84v-eSX5iBv1hdpGZmoTXrvh-HkQENETBt-qY3Yx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Oslo");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) => business.transactions)
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTabs}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantsItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eee",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 1,
  },
  headerTabs: {
    backgroundColor: "white",
    padding: 15,
  },
});
