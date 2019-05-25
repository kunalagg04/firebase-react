import app from "firebase/app";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDRdMsnPiq0kQ5xWDYxEkh1q2kW4vEJXg8",
  authDomain: "fir-react-8b316.firebaseapp.com",
  databaseURL: "https://fir-react-8b316.firebaseio.com",
  projectId: "fir-react-8b316",
  storageBucket: "fir-react-8b316.appspot.com",
  messagingSenderId: "835670383567",
  appId: "1:835670383567:web:8a689c5cdb8d4ab7"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
