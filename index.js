import './js/App/Config/ReactotronConfig'
import ReactNative, { AppRegistry, YellowBox } from 'react-native'
import App from './js/App/Containers/App'

YellowBox.ignoreWarnings(['Require cycle:']);

try {
  ReactNative.I18nManager.allowRTL(false) // Because We Using Our Custom Rtl
} catch (e) {
  console.log(e)
}

AppRegistry.registerComponent('dbUser', () => App);
