import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";

export default class Cadastro extends Component {
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <Text style={styles.text}>Cadastro</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    color: "#ff8c00",
    fontWeight: "bold"
  }
});
