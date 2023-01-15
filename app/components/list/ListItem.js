import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import React from "react";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "../AppText";
import colors from "../../config/colors.json";

export default function ListItem({
  title,
  subtitle,
  image,
  onPress,
  renderRightActions,
  style,
  IconComponent,
  showChevron = false,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor={colors.mediumgrey}>
          <View style={[styles.container, style]}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              {title && (
                <AppText style={styles.title} numberOfLines={1}>
                  {title}
                </AppText>
              )}
              {subtitle && (
                <AppText style={styles.subtitle} numberOfLines={2}>
                  {subtitle}
                </AppText>
              )}
            </View>
            {showChevron && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                color={colors.mediumgrey}
              />
            )}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  image: { width: 70, height: 70, borderRadius: 35 },
  title: { fontWeight: "bold", marginLeft: 10 },
  subtitle: { color: colors.mediumgrey, marginLeft: 10 },
  detailsContainer: {
    justifyContent: "center",
    flex: 1,
  },
});
