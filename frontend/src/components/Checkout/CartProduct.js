import { Avatar, Grid, IconButton, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedQuantity: 0,
    };
    this.updateQuantity = this.updateQuantity.bind(this);
    this.removeProductFromCart = this.removeProductFromCart.bind(this);
  }

  componentDidMount() {
    this.setState({
      selectedQuantity: this.props.cartProduct.selectedQuantity,
    });
  }

  updateQuantity(number) {
    if (
      this.state.selectedQuantity + number > 0 &&
      this.state.selectedQuantity + number <= this.props.cartProduct.quantity
    ) {
      const quantity = this.state.selectedQuantity;
      this.props.updateQuantity(
        this.props.cartProduct,
        quantity + number,
        number
      );
      this.setState({ selectedQuantity: quantity + number });
    }
  }

  removeProductFromCart() {
    this.props.removeProduct(this.props.cartProduct);
  }

  render() {
    return (
      <Grid
        container
        style={{
          backgroundColor: "#FAFAFA",
          width: "100%",
          alignItems: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
          marginTop: "10px",
        }}
      >
        <Grid
          item
          xs={5}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Avatar src={this.props.cartProduct.picture} />
          <Typography style={{ fontSize: "12px", paddingLeft: "5px" }}>
            {this.props.cartProduct.name}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Typography style={{ fontSize: "12px" }}>
            ${this.props.cartProduct.cost}
          </Typography>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              xs={2}
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  this.updateQuantity(-1);
                }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography style={{ fontSize: "12px", width: "10px" }}>
                {this.state.selectedQuantity}
              </Typography>
              <IconButton onClick={() => this.updateQuantity(1)}>
                <AddIcon fontSize="small" />
              </IconButton>
            </Grid>

            <Grid item>
              <Typography variant="body2">
                Available: {this.props.cartProduct.quantity}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={2}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "7%",
          }}
        >
          <Typography style={{ fontSize: "12px" }}>
            $
            {(
              this.state.selectedQuantity * this.props.cartProduct.cost
            ).toFixed(2)}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton onClick={this.removeProductFromCart}>
            <DeleteIcon color="secondary" />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default CartItem;
