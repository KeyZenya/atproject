import { Navigation } from "react-native-navigation";

import StartScreen from "./src/screens/Start/Start";
import LoginScreen from "./src/screens/Login/Login";

// Register Screens
Navigation.registerComponent("at.StartScreen", () => StartScreen);
Navigation.registerComponent("at.LoginScreen", () => LoginScreen);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: "at.StartScreen",
    title: "Login",
    navigatorStyle: {
      navBarHidden: true,
      screenBackgroundColor: '#000'
    }
  }
});