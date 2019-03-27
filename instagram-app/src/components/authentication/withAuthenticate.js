import React, { Component } from "react";
import App from "../../App";

const withAuthenticate = App => Login => props => {
  if (!props.loggedIn) {
    return <Login />;
  }
  return <App />;
};
export default withAuthenticate;
