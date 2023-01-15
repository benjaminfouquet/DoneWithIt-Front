import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Icon({ name, size = 50, backgroundColor, iconColor }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
        // marginRight: 15,
        backgroundColor: backgroundColor,
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
}

const styles = StyleSheet.create({});
