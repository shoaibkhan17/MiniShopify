import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartProduct";
import Summary from "./Summary";
import { connect } from "react-redux";
import { updateCart } from "../../redux/actions";

const mapStateToProps = (state) => {
  return { cartProducts: state.cartProducts };
};

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      cartProducts: [],
    };

    this.setTotal = this.setTotal.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
    this.setLocalCartCopy = this.setLocalCartCopy.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
  }

  componentDidMount() {
    this.calculateTotal(this.props.cartProducts);
    this.setLocalCartCopy(this.props.cartProducts);
  }

  setLocalCartCopy(cartProduct) {
    this.setState({ cartProducts: cartProduct });
  }

  componentWillUnmount() {
    this.props.updateCart(this.state.cartProducts);
  }

  calculateTotal(cartProducts) {
    var total = 0;
    cartProducts.forEach((item) => {
      total += item.cost * item.selectedQuantity;
    });
    this.setState({ total: total });
  }

  removeProduct(product) {
    const currentCartList = this.state.cartProducts;
    const newCartList = currentCartList.filter(
      (cartProduct) => cartProduct.productID !== product.productID
    );
    this.setState({ cartProducts: newCartList });
    this.props.updateCart(newCartList);
    this.this.calculateTotal(newCartList);
  }

  updateQuantity(product, selectedQuantity, number) {
    const itemCost = product.cost;
    const total = this.state.total;
    this.setState({ total: total + itemCost * number });

    const currentCartList = this.state.cartProducts;
    currentCartList.forEach((item) => {
      if (item.productID === product.productID) {
        item.selectedQuantity = selectedQuantity;
        return;
      }
    });

    this.setState({ cartProducts: currentCartList });
  }

  setTotal(cost) {
    this.setState({ total: cost });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "100vh",
          paddingTop: "10%",
        }}
      >
        <Grid>
          <Card
            variant="outlined"
            style={{
              minWidth: "40vw",
              minHeight: "50vh",
              boxShadow:
                "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
              borderRadius: "16px",
            }}
          >
            <CardContent>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
                variant="body1"
              >
                {`Cart (${this.state.cartProducts.length} Products)`}
              </Typography>
              {this.state.cartProducts.length === 0 ? (
                <EmptyCart />
              ) : (
                <>
                  <Grid
                    container
                    style={{
                      backgroundColor: "#EEF1F1",
                      height: "40px",
                      width: "100%",
                      borderRadius: "5px",
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
                      }}
                    >
                      <Typography style={{ fontSize: "12px" }}>
                        Products
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
                        Price
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
                        Quantity
                      </Typography>
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
                        Total
                      </Typography>
                    </Grid>
                  </Grid>
                  {this.state.cartProducts.map((cartProduct) => {
                    return (
                      <CartItem
                        cartProduct={cartProduct}
                        removeProduct={this.removeProduct}
                        total={this.state.total}
                        setTotal={this.setTotal}
                        updateQuantity={this.updateQuantity}
                      />
                    );
                  })}
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid style={{ paddingLeft: "20px" }}>
          <Summary
            cartProducts={this.props.cartProducts}
            total={this.state.total}
          />
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, { updateCart })(Checkout);
