import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage.js";
import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from "./components/Login/Login";
import styled, { css, createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
* html {
  box-sizing: border-box;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-size: 62.5%;
  font-family: sans-serif;
  background-image: linear-gradient(
    to right,
    #5853c9,
    #c33082,
    #f56f32,
    #fed371
  );
  height: 100%;
}

  `;

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  state = {
    loggedIn: ""
  };

  componentDidMount() {
    this.setState({
      loggedIn: localStorage.getItem("username")
    });
  }

  render() {
    return (
      <div>
        <Reset />
        <GlobalStyles />
        <ComponentFromWithAuthenticate loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}
export default App;
