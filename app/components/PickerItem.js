import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import AppText from "./AppText";
import Icon from "./Icon";

export default function PickerItem({ item, onPress, ...otherProps }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon
        size={70}
        name={item.icon}
        iconColor="white"
        backgroundColor={item.backgroundColor}
      />
      <AppText style={styles.text} {...otherProps}>
        {item.label}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", width: "33%", marginVertical: 20 },
  // text: { padding: 20 },
});
