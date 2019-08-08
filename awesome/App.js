import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Cadastro from "./Cadastro";

Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Cards: {
      screen: Login,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="id-card" size={20} color={focused ? "#0B0B61" : "#ddd"} />
        )
      })
    },
    Contatos: {
      screen: Dashboard,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="list" size={20} color={focused ? "#0B0B61" : "#ddd"} />
        )
      })
    }
  },
  {
    barStyle: {
      backgroundColor: "#fff"
    }
  }
);

/*
Navegação do SwitchNavigator
const StackNavigation = createSwitchNavigator({
  Cadastro
});

const Drawer = createDrawerNavigator(mainNavigation);
const App = createAppContainer(StackNavigation);
*/
