import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

import ListingScreen from "../screens/ListingScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import navigationTheme from "./navigationTheme";
import NewListingButton from "./NewListingButton";
import routes from "./routes";
import Screen from "../components/Screen";
import OfflineNotice from "../components/OfflineNotice";

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
  </Stack.Navigator>
);
const ListingNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      activeTintColor: "tomato",
      inactiveTintColor: "grey",
    }}
  >
    <Tab.Screen
      name="ListingsNavigator"
      component={ListingNavigator}
      options={{
        title: "Feed",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="ListingEdit"
      component={ListingEditScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <NewListingButton
            onPress={() => navigation.navigate(routes.LISTING_EDIT)}
          />
        ),
      })}
    />
    <Tab.Screen
      name="AccountNavigator"
      component={AccountNavigator}
      options={{
        title: "Account",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="account" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default function AppNavigator() {
  return <TabNavigator />;
}
