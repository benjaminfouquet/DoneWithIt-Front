import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import Screen from "./app/components/Screen";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const netInfo = useNetInfo();
  return (
    <Screen>
      {netInfo.isInternetReachable === false && netInfo.type !== "unknown" && (
        <OfflineNotice />
      )}
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </Screen>
  );
}
