import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Cadastro from "./Cadastro";

const stackNavigator = createSwitchNavigator({
  Cadastro,
  Login
});

export default createAppContainer(stackNavigator);
