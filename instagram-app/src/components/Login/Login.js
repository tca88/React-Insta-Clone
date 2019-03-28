import React, { Component } from "react";
import styled, { css } from "styled-components";
import {
  Button,
  Text,
  Form,
  InputField
} from "../ReusableStyles/ReusableStyles";
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
      <Form loginForm>
        <InputField
          login
          type="text"
          placeholder="username"
          name="username"
          onChange={this.onChange}
        />
        <InputField
          login
          type="password"
          placeholder="password"
          name="password"
          onChange={this.onChange}
        />
        <Button login onClick={this.login}>
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
