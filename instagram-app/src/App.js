import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage.js";
import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from "./components/Login/Login";

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
        <ComponentFromWithAuthenticate loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}
export default App;
