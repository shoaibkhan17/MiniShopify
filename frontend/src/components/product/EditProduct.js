import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Grid,
  Chip,
  IconButton,
} from "@material-ui/core";
import Product from "../Product";
import { PRIMARY_THEME_COLOR } from "../../constants/constants";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ShopService from "../../services/ShopService";

class EditProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: null,
      productID: "",
      shopID: "",
      name: "",
      description: "",
      picture: "",
      cost: 0,
      quantity: 0,
    };
    this.getProductData = this.getProductData.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.discardChanges = this.discardChanges.bind(this);
    this.mounted = true;
  }

  discardChanges() {
    this.setState({
      name: this.props.selectedProduct.name,
      description: this.props.selectedProduct.description,
      picture: this.props.selectedProduct.picture,
      cost: this.props.selectedProduct.cost,
      quantity: this.props.selectedProduct.quantity,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.mounted;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.setState({
      productData: this.props.selectedProduct,
      productID: this.props.selectedProduct.productID,
      shopID: this.props.selectedProduct.shopID,
      name: this.props.selectedProduct.name,
      description: this.props.selectedProduct.description,
      picture: this.props.selectedProduct.picture,
      cost: this.props.selectedProduct.cost,
      quantity: this.props.selectedProduct.quantity,
    });
  }

  getProductData() {
    const productObj = {
      shopID: this.state.shopID,
      productID: this.state.productID,
      name: this.state.name,
      description: this.state.description,
      picture: this.state.picture,
      cost: this.state.cost,
      quantity: this.state.quantity,
    };

    return productObj;
  }

  async updateProduct() {
    const success = await ShopService.updateProduct(this.getProductData());
    if (success) {
      this.props.onClose();
    }
  }

  async deleteProduct() {
    const success = await ShopService.deleteProduct(this.state.productID);
    if (success) {
      this.props.onClose();
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={this.props.selectedProduct !== null}
        onClose={this.props.onClose}
      >
        <DialogTitle>Edit Product Menu</DialogTitle>
        <DialogContent style={{ display: "flex" }}>
          <div
            style={{
              flex: "0 0 330px",
              alignSelf: "center",
            }}
          >
            <Product
              canEditProduct={false}
              canBuy={false}
              product={this.getProductData()}
            />
          </div>

          <div style={{ flex: 1 }}>
            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              label="Update Name"
              value={this.state.name}
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />

            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              label="Update Description"
              rowsMax={4}
              multiline
              value={this.state.description}
              onChange={(event) => {
                this.setState({ description: event.target.value });
              }}
            />

            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              label="Update Picture URL"
              value={this.state.picture}
              onChange={(event) => {
                this.setState({ picture: event.target.value });
              }}
            />

            <Typography
              style={{
                fontSize: "14px",
                margin: "5px",
                color: "#184800",
              }}
            >
              Update Cost
            </Typography>

            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "15px",
                backgroundColor: "#CFFFB7",
                height: "40px",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <IconButton
                onClick={() => {
                  this.state.cost < 1 &&
                    this.setState({ cost: this.state.cost - 1 });
                }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <input
                type="number"
                value={this.state.cost}
                style={{
                  backgroundColor: "inherit",
                  border: "none",
                  width: "100%",
                  height: "75%",
                  textAlign: "center",
                }}
                onChange={(event) => {
                  event.target.value > 0 &&
                    this.setState({ cost: Number(event.target.value) });
                }}
              />
              <IconButton
                onClick={() => {
                  this.setState({ cost: this.state.cost + 1 });
                }}
              >
                <AddIcon fontSize="small"></AddIcon>
              </IconButton>
            </Grid>

            <Typography
              style={{
                fontSize: "14px",
                margin: "5px",
                color: "#184800",
              }}
            >
              Update Quantity
            </Typography>

            <Grid
              item
              xs={4}
              style={{
                display: "flex",
                justifyContent: "center",
                borderRadius: "15px",
                backgroundColor: "#CFFFB7",
                height: "40px",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  this.state.quantity > 0 &&
                    this.setState({ quantity: this.state.quantity - 1 });
                }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <input
                type="number"
                value={this.state.quantity}
                style={{
                  backgroundColor: "inherit",
                  border: "none",
                  width: "100%",
                  height: "75%",
                  textAlign: "center",
                }}
                onChange={(event) => {
                  event.target.value >= 0 &&
                    this.setState({ quantity: Number(event.target.value) });
                }}
              />
              <IconButton
                onClick={() => {
                  this.setState({ quantity: this.state.quantity + 1 });
                }}
              >
                <AddIcon fontSize="small"></AddIcon>
              </IconButton>
            </Grid>
          </div>
        </DialogContent>

        <DialogActions>
          <Chip
            label="Update Product"
            onClick={this.updateProduct}
            style={{ background: PRIMARY_THEME_COLOR, color: "white" }}
          />
          <Chip
            label="Discard Changes"
            onClick={this.discardChanges}
            style={{ background: "#ff9800", color: "white" }}
          />
          <Chip
            label="Delete Product"
            onClick={this.deleteProduct}
            color="secondary"
          />
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditProduct;
