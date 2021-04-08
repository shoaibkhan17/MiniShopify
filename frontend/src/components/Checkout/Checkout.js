import React, { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Summary from "./Summary";
import { connect, useDispatch, useSelector } from "react-redux";

const mapStateToProps = (state) => {
  return { cartProducts: state.cartProducts };
};

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
    };

    // this.setItems = this.setItems.bind(this);
    this.setTotal = this.setTotal.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    this.calculateTotal();
  }

  calculateTotal() {
    var total = 0;
    this.props.cartProducts.forEach((item) => {
      total += item.cost * item.selectedQuantity;
    });
    this.setState({ total: total });
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
              borderRadius: "5px",
              boxShadow: "-2px 0px 5px rgba(0, 0, 0, 0.3)",
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
                {`Cart (${this.props.cartProducts.length} items)`}
              </Typography>
              {this.props.cartProducts.length === 0 ? (
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
                  {this.props.cartProducts.map((item) => {
                    return (
                      <CartItem
                        item={item}
                        // selectedQuantity={item.selectedQuantity}
                        // items={this.props.items}
                        total={this.state.total}
                        setTotal={this.setTotal}
                        // setItems={this.setItems}
                      />
                    );
                  })}
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid style={{ paddingLeft: "20px" }}>
          <Summary items={this.props.cartProducts} total={this.state.total} />
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(Checkout);
