import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD-ZFBWLwlSDQMIREZHTps1dwzFM6CgVUk",
    authDomain: "login-react-db94f.firebaseapp.com",
    databaseURL: "https://login-react-db94f.firebaseio.com",
    projectId: "login-react-db94f",
    storageBucket: "login-react-db94f.appspot.com",
    messagingSenderId: "622486652984",
    appId: "1:622486652984:web:6c32220fc5a98d27"
};
firebase.initializeApp(firebaseConfig);

export default firebase;
