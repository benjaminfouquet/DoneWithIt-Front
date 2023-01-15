import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import AppText from "./AppText";
import Icon from "./Icon";

export default function PickerItemFlat({ item, onPress, ...otherProps }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppText style={styles.text} {...otherProps}>
        {item.label}
      </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20 },
});
