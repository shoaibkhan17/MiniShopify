import { Button } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";

class RedirectUserShopsButton extends React.Component {
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
              history.push("/home");
            }}
          >
            My Shops
          </Button>
        )}
      />
    );
  }
}

export default RedirectUserShopsButton;
