import { StyleSheet } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";

import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import usersApi from "../api/users";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

export default function RegisterScreen() {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const { logIn } = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const regResult = await registerApi.request(userInfo);
    if (!regResult.ok) {
      if (regResult.data) {
        setError(regResult.data.error);
      } else {
        setError("An unexpected error occured");
      }
      return;
    }

    const authResult = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    logIn(authResult.data);
  };

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormField
            name="name"
            autocapitalize="none"
            autocorrect={false}
            icon="account"
            placeholder="Name"
            textContentType="name"
          />
          <AppFormField
            name="email"
            autocapitalize="none"
            autocorrect={false}
            icon="email"
            placeholder="Email Address"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            autocapitalize="none"
            autocorrect={false}
            icon="lock"
            placeholder="Password"
            textContentType="password"
            secureTextEntry
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
});
