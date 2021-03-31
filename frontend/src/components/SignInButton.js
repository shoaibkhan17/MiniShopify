import { Button } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import { PRIMARY_THEME_COLOR } from "../constants/constants";

class SignInButton extends React.Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <Button
            variant="outlined"
            style={{
              color: "white",
              borderColor: "white",
              fontVariant: "unicase",
            }}
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
