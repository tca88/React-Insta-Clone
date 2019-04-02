import React from "react";

const withAuthenticate = App => Login => props => {
  if (!props.loggedIn) {
    return <Login />;
  }
  return <App />;
};
export default withAuthenticate;
