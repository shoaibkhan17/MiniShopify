import { IconButton, Icon, Tooltip, Badge } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

class CartButton extends React.Component {
  render() {
    return (
      <Route
        render={({ history }) => (
          <Tooltip title={"Cart"}>
            <IconButton
              onClick={() => {
                history.push("/checkout");
              }}
              style={{ marginRight: "10px" }}
            >
              <Badge badgeContent={1} color="primary">
                <ShoppingCartIcon htmlColor="white" />
              </Badge>
            </IconButton>
          </Tooltip>
        )}
      />
    );
  }
}

export default CartButton;
