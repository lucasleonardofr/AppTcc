console.disableYellowBox = true;
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Icon} from 'react-native-elements';
import {KeyboardAvoidingView, ScrollView} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.titulo}>My Cards</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Teste')}>
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
  static navigationOptions = {
    title: 'Adicionar cartão',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'normal',
      alignSelf: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      width: '74%',
    },
    backTitle: '',
  };
  state = {
    telefone: '',
    email: '',
    endereco: '',
    instagram: '',
    facebook: '',
    linkedin: '',
    twitter: '',
    descricao: '',
  };

  handleTelefone = text => {
    this.setState({telefone: text});
  };
  handleEmail = text => {
    this.setState({email: text});
  };
  handleEndereco = text => {
    this.setState({endereco: text});
  };
  handleInstagram = text => {
    this.setState({instagram: text});
  };
  handleFacebook = text => {
    this.setState({facebook: text});
  };
  handleLinkedin = text => {
    this.setState({linkedin: text});
  };
  handleTwitter = text => {
    this.setState({twitter: text});
  };
  handleDescricao = text => {
    this.setState({descricao: text});
  };

  dados = (
    telefone,
    email,
    endereco,
    instagram,
    facebook,
    linkedin,
    twitter,
    descricao,
  ) => {
    // eslint-disable-next-line no-alert
    alert(
      'telefone: ' +
        telefone +
        ' email: ' +
        email +
        'endereco: ' +
        endereco +
        'instagram: ' +
        instagram +
        'facebook: ' +
        facebook +
        'linkedin: ' +
        linkedin +
        'twitter: ' +
        twitter +
        'descricao: ' +
        descricao,
    );
  };
  render() {
    return (
      <View style={styles.containerx}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView behavior="padding" enabled>
            <View style={styles.SectionStyle}>
              <Icon name="mobile" type="font-awesome" color="#000" />

              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                selectionColor="#234282"
                placeholder="Telefone"
                keyboardType="number-pad"
                placeholderTextColor="#234282"
                autoCapitalize="none"
                onChangeText={this.handleTelefone}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Icon name="email" type="material-icons" color="#000" />
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                selectionColor="#234282"
                placeholder="Email"
                placeholderTextColor="#234282"
                autoCapitalize="none"
                onChangeText={this.handleEmail}
              />
            </View>

            <View style={styles.SectionStyle}>
              <Icon name="location-on" type="material-icons" color="#000" />
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                selectionColor="#234282"
                placeholder="Endereço"
                placeholderTextColor="#234282"
                autoCapitalize="none"
                onChangeText={this.handleEndereco}
              />
            </View>

            <View style={styles.SectionStyle}>
              <Icon name="instagram" type="feather" color="#000" />
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                selectionColor="#234282"
                placeholder="Instagram"
                placeholderTextColor="#234282"
                autoCapitalize="none"
                onChangeText={this.handleInstagram}
              />
            </View>

            <View style={styles.SectionStyle}>
              <Icon name="facebook-official" type="font-awesome" color="#000" />
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                selectionColor="#234282"
                placeholder="Facebook"
                placeholderTextColor="#234282"
                autoCapitalize="none"
                onChangeText={this.handleFacebook}
              />
            </View>

            <View style={styles.SectionStyle}>
              <Icon name="linkedin-square" type="font-awesome" color="#000" />
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                selectionColor="#234282"
                placeholder="Linkedin"
                placeholderTextColor="#234282"
                autoCapitalize="none"
                onChangeText={this.handleLinkedin}
              />
            </View>

            <View style={styles.SectionStyle}>
              <Icon name="twitter-square" type="font-awesome" color="#000" />
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                selectionColor="#234282"
                placeholder="Twitter"
                placeholderTextColor="#234282"
                autoCapitalize="none"
                onChangeText={this.handleTwitter}
              />
            </View>

            <View style={styles.SectionStyle}>
              <Icon name="text" type="entypo" color="#000" />
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                selectionColor="#234282"
                placeholder="Descrição"
                maxLength={400}
                placeholderTextColor="#234282"
                autoCapitalize="none"
                onChangeText={this.handleDescricao}
                //multiline={true}
              />
            </View>

            <TouchableOpacity
              style={styles.submitButton}
              onPress={() =>
                this.dados(
                  this.state.telefone,
                  this.state.email,
                  this.state.endereco,
                  this.state.instagram,
                  this.state.facebook,
                  this.state.linkedin,
                  this.state.twitter,
                  this.state.descricao,
                )
              }>
              <Text style={styles.submitButtonText}>Enviar </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}

const nav = createStackNavigator({
  HomeScreen: Home,
  Teste: Cadastro,
});

const AppContainer = createAppContainer(nav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 10,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.0,
    elevation: 5,
  },
  input: {
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    height: 45,
  },
  texto: {
    marginTop: 15,
    fontSize: 23,
    color: '#000',
    textAlign: 'center',
  },
  containerx: {
    paddingTop: 23,
  },
  submitButton: {
    backgroundColor: '#234282',
    padding: 10,
    margin: 30,
    height: 60,
    borderRadius: 2,
    fontWeight: 'bold',
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 25,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#234282',
    height: 40,
    borderRadius: 5,
    margin: 10,
    paddingLeft: 6,
  },
  textInput: {
    flex: 1,
  },
});
export default class Login extends React.Component {
  render() {
    return <AppContainer />;
  }
}
