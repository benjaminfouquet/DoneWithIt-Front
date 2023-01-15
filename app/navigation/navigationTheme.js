import { DefaultTheme } from "@react-navigation/native";

import colors from "../config/colors.json";

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    background: colors.white,
  },
};

export default myTheme;
