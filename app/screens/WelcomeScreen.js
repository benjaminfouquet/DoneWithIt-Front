import { Image, View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";

import routes from "../navigation/routes";
import AppButton from "../components/AppButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: "https://picsum.photos/200/300" }}
      resizeMode="cover"
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/favicon.png")} style={styles.logo} />
        <Text style={styles.logoText}>Sell what you don't need</Text>
      </View>

      <AppButton
        title="login"
        onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
      />
      <AppButton
        onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
        title="register"
        color="secondary"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
  logo: { width: 100, height: 100, top: 20 },
  logoContainer: { alignItems: "center", top: 20, position: "absolute" },
  logoText: { top: 20, fontSize: 25, fontWeight: "500" },
});
