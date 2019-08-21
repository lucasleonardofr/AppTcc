import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Perfil extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Perfil</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
    color: "#ff8c00",
    fontWeight: "bold"
  }
});
