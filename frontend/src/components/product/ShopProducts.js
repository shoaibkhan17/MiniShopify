import React from "react";
import { connect } from "react-redux";
import TopBar from "../TopBar";
import HomeIcon from "@material-ui/icons/Home";
import { PRIMARY_THEME_COLOR } from "../../constants/constants";
import ShopService from "../../services/ShopService";
import DisplayProducts from "./DisplayProducts";
import { IconButton, Typography, Breadcrumbs, Link } from "@material-ui/core";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import AddProduct from "./AddProduct";

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

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <TopBar />
        <div style={{ height: "75%" }}>
          <Breadcrumbs style={{ paddingTop: "50px" }}>
            <Link
              style={{
                color: PRIMARY_THEME_COLOR,
                cursor: "pointer",
                display: "flex",
              }}
            >
              <HomeIcon style={{ width: 20, height: 20 }} />
              Browse Shops
            </Link>
            <Typography color="textPrimary">
              {this.state.myShop && this.state.myShop.name}
            </Typography>
          </Breadcrumbs>

          <div>{this.state.myShop && this.state.myShop.name}</div>
          <DisplayProducts products={this.props.products} />
          {this.state.addingProduct && (
            <AddProduct
              shopID={this.state.shopID}
              addingProduct={this.state.addingProduct}
              onClose={() => this.closeAddProduct()}
            />
          )}
          <IconButton>
            <AddCircleRoundedIcon
              fontSize="large"
              onClick={() => this.addProduct()}
              style={{
                color: "#43C701",
              }}
            />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(ShopProducts);
