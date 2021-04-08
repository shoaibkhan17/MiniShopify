import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
  CardMedia,
  CardContent,
  Divider,
  Zoom,
  Chip,
} from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EditProduct from "./EditProduct";
import { EMPTY_PRODUCT_IMG_URL } from "../../constants/constants";
import ShopService from "../../services/ShopService";
import { addProductToCart } from "../../redux/actions";

const mapStateToProps = (state) => {
  return { products: state.products };
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopID: this.props.match ? this.props.match.params.shopID : "",
      myShop: null,
      currentProduct: null,
    };

    this.openEditProduct = this.openEditProduct.bind(this);
    this.closeEditProduct = this.closeEditProduct.bind(this);
    this.getProductImg = this.getProductImg.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  openEditProduct(product) {
    this.setState({ currentProduct: product });
  }

  closeEditProduct() {
    this.setState({ currentProduct: null });
  }

  addToCart() {
    const obj = this.props.product;
    obj.selectedQuantity = 1;
    this.props.addProductToCart(obj);
  }

  componentDidUpdate(prevProps, nextState) {}

  getProductImg() {
    if (this.props.product) {
      if (this.props.product.picture === "") {
        return EMPTY_PRODUCT_IMG_URL;
      }
      return this.props.product.picture;
    }
    return EMPTY_PRODUCT_IMG_URL;
  }

  render() {
    return (
      <div>
        {this.props.canEditProduct && this.state.currentProduct && (
          <EditProduct
            selectedProduct={this.state.currentProduct}
            onClose={() => this.closeEditProduct()}
          />
        )}
        <Card
          style={{
            minWidth: "300px",
            maxWidth: "300px",
            minHeight: "300px",
            boxShadow:
              "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
            borderRadius: "16px",
          }}
        >
          <CardHeader
            avatar={<StorefrontIcon color="primary" />}
            title={this.props.product && this.props.product.name}
            action={
              this.props.canEditProduct && (
                <Tooltip TransitionComponent={Zoom} title="Edit Product">
                  <IconButton
                    onClick={() => this.openEditProduct(this.props.product)}
                  >
                    <MoreVertIcon color="secondary" />
                  </IconButton>
                </Tooltip>
              )
            }
          />
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={this.getProductImg()}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.product && this.props.product.description}
            </Typography>
            <Divider style={{ margin: "10px" }}></Divider>
            <Typography variant="body2" color="textSecondary" component="p">
              Cost: ${this.props.product && this.props.product.cost}
            </Typography>
            <Divider style={{ margin: "10px" }}></Divider>
            <Typography
              style={{ marginBottom: "15px" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Quantity: {this.props.product && this.props.product.quantity}
            </Typography>
            {this.state.currentProduct === null && this.props.canBuy && (
              <IconButton onClick={this.addToCart}>
                <AddShoppingCartIcon
                  style={{
                    color: "#43C701",
                    margin: "5px",
                  }}
                />
              </IconButton>
            )}
            {!this.props.canBuy && this.props.canOpen && (
              <Chip label="OUT OF STOCK" color="secondary" />
            )}
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, { addProductToCart })(Product);
