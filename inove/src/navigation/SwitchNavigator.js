import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Main from '../screens/Main';

const SwitchNavigator = createSwitchNavigator(
  {
    Login: {
      screen: Login,
    },
    Signup: {
      screen: Signup,
    },
    Main: {
      screen: Main,
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(SwitchNavigator);
