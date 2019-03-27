import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  onChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  login = event => {
    event.preventDefault();
    if (this.state.username === "trish" && this.state.password === "password") {
      localStorage.setItem("username", this.state.username);
      document.location.reload();
    } else {
      localStorage.removeItem("username");
    }
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={this.onChange}
          />
          <input
            type="text"
            placeholder="password"
            name="password"
            onChange={this.onChange}
          />
          <button onClick={this.login}>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
