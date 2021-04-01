import React from "react";
import { connect } from "react-redux";
import TopBar from "../TopBar";
import { Breadcrumbs, Typography, Link } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import { PRIMARY_THEME_COLOR } from "../../constants/constants";
import ShopService from "../../services/ShopService";
import DisplayProducts from "./DisplayProducts";

const mapStateToProps = (state) => {
  return { shops: state.shops };
};

class ShopProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopID: this.props.match ? this.props.match.params.shopID : "",
      myShop: null,
      shopProducts: null,
    };
    this.getShopDetails = this.getShopDetails.bind(this);
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

  async getShopProduct() {
    const productList = await ShopService.getShopProducts(this.state.shopID);
    this.setState({ shopProducts: productList });
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

          <div>{"OPEN SHOP "}</div>
          <div>{this.state.myShop && this.state.myShop.name}</div>

          <DisplayProducts products={this.state.shopProducts} />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(ShopProducts);
