import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

const SignUp = () => {
  return (
    <div>
      <h1>Hi</h1>
      <SignUpForm />
    </div>
  );
};

//The form is used to sign up a new user to your application with username, email, and password.
class SignUpForm extends React.Component {
  state = { username: "", emailid: "", password1: "", passoword2: "" };

  onSubmit = event => {
    this.props.firebase
      .doCreateUserWithEmailAndPassword(
        this.state.emailid,
        this.state.password1
      )
      .then(authUser => {
        this.setState({ username: "", emailid: "", password1: "" });
      });
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          type="text"
          onChange={event => this.setState({ username: event.target.value })}
          value={this.state.username}
        />
        <input
          name="email"
          type="text"
          onChange={event => this.setState({ emailid: event.target.value })}
          value={this.state.email}
        />
        <input
          name="password1"
          type="password"
          onChange={event => this.setState({ password1: event.target.value })}
          value={this.state.password1}
        />
        <input
          name="passowrd2"
          type="password"
          onChange={event => this.setState({ password2: event.target.value })}
          value={this.state.passowrd2}
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

//The link will be used on the sign in page (login page) later if a user has no account yet.
//It is a redirect to the sign up page, but not used on the sign up page itself.

const SignUpLink = () => {
  return (
    <p>
      Don't have an account ? <Link to={ROUTES.SIGN_UP} />
    </p>
  );
};

export default SignUp;
