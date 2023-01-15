import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import React from "react";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors.json";
import AppText from "./AppText";

export default function Card(props) {
  const { imageUrl, title, subtitle, onPress, thumbnailUrl } = props;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          tint="light"
          uri={imageUrl}
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{"$" + subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: "#fff",
    height: 270,
    width: "100%",
    borderRadius: 25,
    elevation: 5,
    overflow: "hidden",
  },
  detailsContainer: { padding: 8, paddingLeft: 20 },
  image: { width: "100%", height: "75%" },
  subtitle: {
    color: colors.secondary,
    fontWeight: "600",
  },
});
