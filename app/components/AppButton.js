import React from "react";
import { Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";

import colors from "../config/colors.json";

export default function AppButton(props) {
  const { onPress, title = "Save", color = "primary" } = props;
  return (
    <TouchableOpacity
      style={{ ...styles.button, backgroundColor: colors[color] }}
      onPress={onPress}
      activeOpacity={0.4}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: 10,
    elevation: 3,
    width: "100%",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.4,
    color: "white",
    textTransform: "uppercase",
  },
});
