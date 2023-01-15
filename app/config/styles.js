import { Platform } from "react-native";

import colors from "../config/colors.json";

export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.darkgrey,
  },
};
