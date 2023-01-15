import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import ListItem from "../components/list/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/list/ListItemSeparator";
import ListItemDeleteAction from "../components/list/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/favicon.png"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/favicon.png"),
  },
];

export default function MessagesScreen() {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, seTrefreshing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            showChevron
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/favicon.png"),
            },
          ])
        }
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
