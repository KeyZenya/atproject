import { Navigation } from "react-native-navigation";

import StartScreen from "./src/screens/Start/Start";

// Register Screens
Navigation.registerComponent("at.StartScreen", () => StartScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "at.StartScreen",
    title: "Login"
  }
});