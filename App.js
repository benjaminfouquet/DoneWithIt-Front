import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNetInfo } from "@react-native-community/netinfo";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import Screen from "./app/components/Screen";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  const netInfo = useNetInfo();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Screen>
      {netInfo.isInternetReachable === false && netInfo.type !== "unknown" && (
        <OfflineNotice />
      )}
      <NavigationContainer theme={navigationTheme}>
        {loggedIn ? (
          <AppNavigator />
        ) : (
          <AuthNavigator onLogin={() => setLoggedIn(true)} />
        )}
      </NavigationContainer>
    </Screen>
  );
}
