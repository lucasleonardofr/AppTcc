import React, { Component } from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Cadastro from "./Cadastro";

const stackNavigator = createSwitchNavigator({
  Cadastro
});

export default createAppContainer(stackNavigator);
