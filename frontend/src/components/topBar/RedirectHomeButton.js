import { IconButton, Icon, Tooltip } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";

class RedirectHomeButton extends React.Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <Tooltip title={"Browse Shops"}>
            <IconButton
              onClick={() => {
                history.push("/home");
              }}
            >
              <Icon style={{ fontSize: 35 }}>
                <img
                  alt="edit"
                  src={window.location.origin + "/shopSmall.ico"}
                />
              </Icon>
            </IconButton>
          </Tooltip>
        )}
      />
    );
  }
}

export default RedirectHomeButton;
