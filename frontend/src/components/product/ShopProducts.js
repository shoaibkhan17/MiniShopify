import React from "react";
import { connect } from "react-redux";
import TopBar from "../topBar/TopBar";
import ShopService from "../../services/ShopService";
import DisplayProducts from "./DisplayProducts";
import { Grid, IconButton, Typography } from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import AddProduct from "./AddProduct";
import firebase from "../../services/firebase.config";

const mapStateToProps = (state) => {
  return { shops: state.shops, products: state.products };
};

class ShopProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopID: this.props.match ? this.props.match.params.shopID : "",
      myShop: null,
      addingProduct: false,
    };
    this.getShopDetails = this.getShopDetails.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.displayShopProducts = this.displayShopProducts.bind(this);
  }

  componentDidUpdate(prevProps, nextState) {}

  componentDidMount() {
    this.getShopDetails();
    this.getShopProduct();
  }

  getShopDetails() {
    if (this.props.shops) {
      const openedShop = this.props.shops
        .filter((shop) => shop.shopID === this.state.shopID)
        .pop();
      this.setState({ myShop: openedShop });
    }
  }

  addProduct() {
    this.setState({ addingProduct: true });
  }

  closeAddProduct() {
    this.setState({ addingProduct: false });
  }

  async getShopProduct() {
    await ShopService.getShopProducts(this.state.shopID);
  }

  displayShopProducts() {
    return (
      <div>
        <DisplayProducts
          ownerEmail={this.state.myShop ? this.state.myShop.ownerEmail : ""}
          products={this.props.products}
        />
        {this.state.addingProduct && (
          <AddProduct
            shopID={this.state.shopID}
            addingProduct={this.state.addingProduct}
            onClose={() => this.closeAddProduct()}
          />
        )}
        {this.state.myShop &&
          firebase.auth().currentUser &&
          firebase.auth().currentUser.email ===
            this.state.myShop.ownerEmail && (
            <IconButton>
              <AddCircleRoundedIcon
                fontSize="large"
                onClick={() => this.addProduct()}
                style={{
                  color: "#43C701",
                }}
              />
            </IconButton>
          )}
      </div>
    );
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <TopBar />
        <div style={{ height: "90%" }}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="h5"
                style={{ paddingTop: "20px", fontFamily: "cursive" }}
              >
                {this.state.myShop && this.state.myShop.name}
              </Typography>
            </Grid>

            <Grid item>{this.displayShopProducts()}</Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(ShopProducts);
