import firebase from 'firebase'; 

var firebaseConfig = {
    apiKey: "AIzaSyAyD7AP0n4gIiJeaHHWeCSFJoUo3BFNGP8",
    authDomain: "ontrack-30e07.firebaseapp.com",
    databaseURL: "https://ontrack-30e07.firebaseio.com",
    projectId: "ontrack-30e07",
    storageBucket: "ontrack-30e07.appspot.com",
    messagingSenderId: "1088197797757",
    appId: "1:1088197797757:web:2e12819fe365b7bcaf8e14",
    measurementId: "G-C3VKZ29LLH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;