import { Avatar, Grid, IconButton, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import React from "react";
import {deleteProductFromCart } from "../../redux/actions";
import { connect } from "react-redux";

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
    this.setState({ selectedQuantity: this.props.item.selectedQuantity });
  }

  updateQuantity(number) {
    if (this.state.selectedQuantity + number > 0) {
      const quantity = this.state.selectedQuantity;
      this.setState({ selectedQuantity: quantity + number });
      this.props.setTotal(this.props.total + this.props.item.cost * number);
    }
  }

  removeProductFromCart(){
    this.props.deleteProductFromCart(this.props.item)
  }

  render() {
    return (
      <Grid
        container
        style={{
          backgroundColor: "#FAFAFA",
          height: "50px",
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
          <Avatar src={this.props.item.picture} />
          <Typography style={{ fontSize: "12px", paddingLeft: "5px" }}>
            {this.props.item.name}
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
            {this.props.item.cost}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "5px",
            backgroundColor: "#EEF1F1",
            height: "20px",
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
          <Typography style={{ fontSize: "12px" }}>
            {this.state.selectedQuantity}
          </Typography>
          <IconButton onClick={() => this.updateQuantity(1)}>
            <AddIcon fontSize="small" />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={2}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography style={{ fontSize: "12px" }}>
            {this.state.selectedQuantity * this.props.item.cost}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton
          onClick={this.removeProductFromCart}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    );
  }
}

export default connect(undefined, {deleteProductFromCart})(CartItem);
