import app from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
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
    this.auth = app.auth();
  }

  /* app.auth is a authentication fnction which handles 
  1. sign up - requires email and password
  2. sign in - equires email and password
  3. log out - no parameters requires 
  4. Reset password - requires email
  5. update password - requires password*/

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  /*This authentication interface for your React components that will connect to the Firebase API
    These methods can be consumed in components. */
}

export default Firebase;
