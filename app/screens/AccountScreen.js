import { StyleSheet, FlatList, View } from "react-native";
import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/list/ListItem";
import colors from "../config/colors.json";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/list/ListItemSeparator";
import routes from "../navigation/routes";
import useAuth from "../auth/useAuth";

export default function AccountScreen({ title, subtitle, image, navigation }) {
  const { user, logOut } = useAuth();
  console.log(user);
  const accountFields = [
    {
      onPress: () => console.log("pressed"),
      title: "My Listings",
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    {
      onPress: () => navigation.navigate(routes.MESSAGES),
      title: "My Messages",
      name: "email",
      backgroundColor: colors.secondary,
    },
  ];

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assets/favicon.png")}
          style={styles.listItem}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={accountFields}
          keyExtractor={(message) => message.title}
          renderItem={({ item }) => (
            <ListItem
              onPress={item.onPress}
              title={item.title}
              style={styles.listItem}
              IconComponent={
                <Icon
                  name={item.name}
                  iconColor={colors.white}
                  backgroundColor={item.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
      <ListItem
        onPress={() => logOut()}
        title={"Log out"}
        style={styles.listItem}
        IconComponent={
          <Icon
            name={"logout"}
            iconColor={colors.white}
            backgroundColor={colors.lightyellow}
          />
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.offwhite },
  listItem: { backgroundColor: colors.white },
  container: {
    marginVertical: 20,
  },
});
