import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import Login from "./Login";
import Dashboard from "./Dashboard";

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
export default createAppContainer(mainNavigation);
