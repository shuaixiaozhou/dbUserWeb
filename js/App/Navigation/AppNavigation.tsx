import { createSwitchNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from '../Containers/LoginScreen'
import styles from "./Styles/NavigationStyles";
import LaunchScreen from "../Containers/LaunchScreen";


export const MainNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LoginScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});

// Manifest of possible screens
const PrimaryNav = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: createAppContainer(MainNav) }
}, {
  // Default config for all screens
  headerMode: "none",
  initialRouteName: "LoginScreen",
  navigationOptions: {
    headerStyle: styles.header
  }
});



export default createAppContainer(PrimaryNav);
