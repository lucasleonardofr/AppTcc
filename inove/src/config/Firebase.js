import firebase from 'firebase';
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  MESSAGE_SENDER_ID,
  APP_ID,
} from 'react-native-dotenv';
//import Main from '../screens/Main';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: 'in9card.appspot.com',
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID,
  measurementId: 'G-7D6DE81FFW',
};

//Initialize Firebase

const Firebase = firebase.initializeApp(firebaseConfig);

/*
if (!firebase.apps.length) {
  Firebase;
}

writeUserData(telefone,
  email,
  endereco,
  instagram,
  facebook,
  linkedin,
  twitter,
  descricao){
  firebase
    .database()
    .ref('Users/')
    .set({
      telefone,
      email,
      endereco,
      instagram,
      facebook,
      linkedin,
      twitter,
      descricao
    })
    .then(data => {
      //sucess callback
      console.log('data', data);
    })
    .catch(error => {
      //error callback
      console.log('error', error);
    });
}
*/
export default Firebase;
