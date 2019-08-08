import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Cadastro")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    backgroundColor: "#fff"
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
