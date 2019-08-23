import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.titulo}>My Cards</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Teste")}
        >
          <Icon
            size={100}
            name="cards"
            type="material-community"
            color="#000"
          />

          <Text>Add Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class Cadastro extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text style={styles.text}>Cadastro</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

const nav = createStackNavigator({
  HomeScreen: Home,
  Teste: Cadastro
});

const AppContainer = createAppContainer(nav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  },
  titulo: {
    fontSize: 20
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.0,
    elevation: 5
  }
});
export default class Login extends React.Component {
  render() {
    return <AppContainer />;
  }
}
