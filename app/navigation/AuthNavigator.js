import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import navigationTheme from "./navigationTheme";

const Stack = createStackNavigator();

const StackNavigator = ({ onLogin }) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    <Stack.Screen name="LoginScreen">
      {() => <LoginScreen onLogin={onLogin} />}
    </Stack.Screen>
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
  </Stack.Navigator>
);

export default function AuthNavigator({ onLogin }) {
  return <StackNavigator onLogin={onLogin} />;
}

const styles = StyleSheet.create({});
