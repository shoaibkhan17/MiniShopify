import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Grid,
  Chip,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Product from "../Product";
import { PRIMARY_THEME_COLOR } from "../../constants/constants";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import ShopService from "../../services/ShopService";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopID: props.shopID,
      name: "",
      description: "",
      picture: "",
      cost: 0,
      quantity: 0,
    };
    this.getProductData = this.getProductData.bind(this);
    this.createProduct = this.createProduct.bind(this);
    this.mounted = true;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.mounted;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async createProduct() {
    const success = await ShopService.addNewProduct(this.getProductData());
    if (success) {
      this.props.onClose();
    }
  }

  getProductData() {
    const productObj = {
      shopID: this.state.shopID,
      name: this.state.name,
      description: this.state.description,
      picture: this.state.picture,
      cost: this.state.cost,
      quantity: this.state.quantity,
    };

    return productObj;
  }

  render() {
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={this.props.addingProduct}
        onClose={this.props.onClose}
      >
        <DialogTitle>Add Product Menu</DialogTitle>
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
              xs={2}
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
                  this.state.cost > 0 &&
                    this.setState({ cost: this.state.cost - 1 });
                }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography style={{ fontSize: "12px" }}>
                {this.state.cost}
              </Typography>
              <IconButton
                onClick={() => {
                  var newCost = this.state.cost + 1;
                  this.setState({ cost: newCost });
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
              xs={2}
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
                  this.state.quantity !== 0 &&
                    this.setState({ quantity: this.state.quantity - 1 });
                }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography style={{ fontSize: "12px" }}>
                {this.state.quantity}
              </Typography>
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
            label="Add Product"
            onClick={this.createProduct}
            style={{ background: PRIMARY_THEME_COLOR, color: "white" }}
          />
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddProduct;
