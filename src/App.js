import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider, Consumer } from "./MyContext";

const Nav = () => {};

class LoginForm extends Component {
  state = {};
  render() {
    return (
      <Consumer>
        {value => {
          const { viewer } = value.state;
          const { logIn, logOut } = value.actions;
          return viewer ? (
            <React.Fragment>
              <h3>Logged In As: {viewer}</h3>
              <button onClick={logOut}>Log Out</button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <input
                placeholder="Name Please!"
                ref={r => (this.inputRef = r)}
              />
              <button
                type="submit"
                onClick={() => {
                  logIn(this.inputRef.value);
                }}
              >
                Log in
              </button>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Consumer>
              {({ state: { viewer } }) => (
                <h1 className="App-title">
                  {viewer ? `Welcome ${viewer}!` : "Log In Yo!"}
                </h1>
              )}
            </Consumer>
          </header>
          <div className="App-intro">
            <LoginForm />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
