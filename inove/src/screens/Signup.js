import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import Firebase from '../config/Firebase';

class Signup extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSignUp = async () => {
    const {email, password} = this.state;
    try {
      const {user} = await Firebase.auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      const userReference = Firebase.firestore()
        .collection('users')
        .doc(user.uid);

      await userReference.set({
        email: user.email,
      });

      this.props.navigation.navigate('Main');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          value={this.state.name}
          onChangeText={name => this.setState({name})}
          placeholder="Nome Completo"
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          placeholder="Email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder="Senha"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '85%',
    margin: 10,
    padding: 15,
    fontSize: 16,
    borderColor: '#d3d3d3',
    borderBottomWidth: 1,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#234282',
    borderColor: '#234282',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonSignup: {
    fontSize: 12,
  },
});

export default Signup;
