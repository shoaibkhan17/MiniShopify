import React from "react";
import { connect } from "react-redux";
import TopBar from "../topBar/TopBar";
import ShopService from "../../services/ShopService";
import DisplayProducts from "./DisplayProducts";
import { Grid, IconButton, Typography } from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import AddProduct from "./AddProduct";
import firebase from "../../services/firebase.config";
import { setProducts } from "../../redux/actions";

const mapStateToProps = (state) => {
  return {
    shops: state.shops,
    products: state.products,
    userShops: state.userShops,
  };
};

class ShopProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopID: this.props.match ? this.props.match.params.shopID : "",
      openedShop: null,
      addingProduct: false,
      userShop: false,
    };
    this.getShopDetails = this.getShopDetails.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.displayShopProducts = this.displayShopProducts.bind(this);
    this.isUserShop = this.isUserShop.bind(this);
  }

  componentDidUpdate(prevProps, nextState) {}

  componentWillUnmount() {
    this.props.setProducts([]);
  }

  componentDidMount() {
    this.getShopDetails();
    this.getShopProduct();
  }

  getShopDetails() {
    if (this.props.shops) {
      const openedShop = this.props.shops
        .filter((shop) => shop.shopID === this.state.shopID)
        .pop();

      this.setState({ openedShop: openedShop });
      if (firebase.auth().currentUser) {
        const userEmail = firebase.auth().currentUser.email;
        if (openedShop.ownerEmail === userEmail) {
          this.setState({ userShop: true });
        }
      }
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

  isUserShop() {
    return false;
  }

  displayShopProducts() {
    return (
      <div>
        <DisplayProducts
          products={this.props.products}
          isUserShop={this.state.userShop}
          title={this.props.openedShop && this.props.openedShop.name}
        />
        {this.state.addingProduct && (
          <AddProduct
            shopID={this.state.shopID}
            addingProduct={this.state.addingProduct}
            onClose={() => this.closeAddProduct()}
          />
        )}
        {this.state.userShop && (
          <IconButton>
            <AddCircleRoundedIcon
              fontSize="large"
              onClick={() => this.addProduct()}
              htmlColor="black"
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
        <div>
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
                {this.state.openedShop && this.state.openedShop.name}
              </Typography>
            </Grid>

            <Grid item>{this.displayShopProducts()}</Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, { setProducts })(ShopProducts);
