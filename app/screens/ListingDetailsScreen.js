import { StyleSheet, View } from "react-native";
import React from "react";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors.json";
import AppText from "../components/AppText";
import ListItem from "../components/list/ListItem";

export default function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View>
      <Image
        tint="light"
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].url }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{"$" + listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/favicon.png")}
            title={"Ben Fouquet"}
            subtitle={"BG international"}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: { padding: 20 },
  userContainer: { marginVertical: 40 },
  image: {
    width: "100%",
    height: 300,
  },
  title: { fontSize: 24, fontWeight: "500" },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
