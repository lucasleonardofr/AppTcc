import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

export default class Dashboard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>Contato</Text>
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
