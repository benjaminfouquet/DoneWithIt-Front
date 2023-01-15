import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles.js";

export default function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          style={styles.icon}
          color={defaultStyles.colors.mediumgrey}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.mediumgrey}
        style={[defaultStyles.text, styles.textInput]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.offwhite,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: { marginLeft: 5 },
  textInput: { marginLeft: 10 },
});
