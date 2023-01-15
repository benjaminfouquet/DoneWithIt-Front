import { StyleSheet, View } from "react-native";
import React from "react";

import colors from "../config/colors.json";
import AppText from "./AppText";

export default function OfflineNotice() {
  return (
    <View style={styles.offlineNotice}>
      <AppText style={styles.offlineText}>No Internet Connection</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  offlineNotice: {
    width: "100%",
    height: 60,
    // position: "absolute",
    backgroundColor: colors.danger,
    alignItems: "center",
    justifyContent: "center",
  },
  offlineText: { color: colors.white },
});
