import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors.json";

export default function ViewImageScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.black }}>
      <MaterialCommunityIcons
        name="close"
        size={35}
        color={colors.white}
        style={styles.closeAppButton}
      />
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        color={colors.white}
        style={styles.deleteAppButton}
      />
      <Image
        source={{ uri: "https://picsum.photos/200/300" }}
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  closeAppButton: {
    position: "absolute",
    left: 20,
    top: 30,
  },
  deleteAppButton: {
    position: "absolute",
    right: 20,
    top: 30,
  },
  image: { width: "100%", height: "100%", resizeMode: "contain" },
});
