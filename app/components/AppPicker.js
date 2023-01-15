import {
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  View,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import defaultStyles from "../config/styles.js";
import PickerItem from "./PickerItem";
import colors from "../config/colors.json";
import PickerItemFlat from "./PickerItemFlat";

export default function AppPicker({
  icon,
  items,
  placeholder,
  selectedItem,
  onSelectItem,
  width = "100%",
  withIcons,
  ...otherProps
}) {
  const [visible, setVisible] = useState(false);
  const PickerItemComponent = withIcons ? PickerItem : PickerItemFlat;

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setVisible(!visible)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              style={styles.icon}
              color={defaultStyles.colors.mediumgrey}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.mediumgrey}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={visible} animationType="slide">
        <Button title="close" onPress={() => setVisible(!visible)} />
        <FlatList
          data={items}
          numColumns={withIcons ? 3 : 1}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              onPress={() => {
                setVisible(false);
                onSelectItem(item);
              }}
              {...otherProps}
            />
          )}
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.offwhite,
    borderRadius: 25,
    flexDirection: "row",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: { margin: 10 },
  placeholder: { color: colors.mediumgrey, marginLeft: 10 },
  text: { flex: 1, marginLeft: 10 },
});
