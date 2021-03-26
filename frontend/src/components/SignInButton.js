import { Button } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";

class SignInButton extends React.Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <Button
            variant="outlined"
            style={{ color: "black", fontVariant: "unicase" }}
            onClick={() => {
              history.push("/sign-in");
            }}
          >
            Sign In
          </Button>
        )}
      />
    );
  }
}

export default SignInButton;
