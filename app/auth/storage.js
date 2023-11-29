import * as SecureStore from "expo-secure-store";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync("authToken", authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync("authToken");
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync("authToken");
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default { getToken, removeToken, storeToken };
