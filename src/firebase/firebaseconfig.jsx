import firebase from "firebase/app"
import 'firebase/database';


var firebaseConfig = {
    apiKey: "AIzaSyAa2h91JfuksSXgvUxhIu348fYiIaBbRzs",
    authDomain: "rrmb-boiler.firebaseapp.com",
    databaseURL: "https://rrmb-boiler.firebaseio.com",
    projectId: "rrmb-boiler",
    storageBucket: "rrmb-boiler.appspot.com",
    messagingSenderId: "1055911360428",
    appId: "1:1055911360428:web:8065870621bc985a3fec09",
    measurementId: "G-8NVXEGKDB2"
  };

  export default firebase.initializeApp(firebaseConfig);