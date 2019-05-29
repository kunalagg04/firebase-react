import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import FirebaseContext from "./components/Firebase/context";
import Firebase from "./components/Firebase/firebase";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />{" "}
  </FirebaseContext.Provider>,
  document.getElementById("root")
);

// Doing it this way, we can be assured that Firebase is only instantiated once
//and that it is injected via React’s Context API to React’s component tree.
//Now, every component that is interested in using Firebase has access to the Firebase instance with a FirebaseContext.Consumer component

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
