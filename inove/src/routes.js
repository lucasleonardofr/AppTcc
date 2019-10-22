import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Perfil from './pages/Perfil';

Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Cards: {
      screen: Main,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="id-card" size={20} color={focused ? '#234282' : '#ddd'} />
        ),
      }),
    },
    Contatos: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon name="users" size={20} color={focused ? '#234282' : '#ddd'} />
        ),
      }),
    },
    Perfil: {
      screen: Perfil,
      navigationOptions: () => ({
        tabBarIcon: ({focused}) => (
          <Icon
            name="user-circle-o"
            size={20}
            color={focused ? '#234282' : '#ddd'}
          />
        ),
      }),
    },
  },

  {
    barStyle: {
      backgroundColor: '#fff',
    },
  },
);
export default createAppContainer(mainNavigation);
