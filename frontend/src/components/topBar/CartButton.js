import { IconButton, Tooltip, Badge } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { cartProducts: state.cartProducts };
};

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
              <Badge
                badgeContent={
                  this.props.cartProducts && this.props.cartProducts.length
                }
                color="primary"
              >
                <ShoppingCartIcon htmlColor="white" />
              </Badge>
            </IconButton>
          </Tooltip>
        )}
      />
    );
  }
}

export default connect(mapStateToProps, {})(CartButton);
