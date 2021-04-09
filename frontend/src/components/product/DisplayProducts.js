import React from "react";
import { Grid, TextField } from "@material-ui/core";
import Product from "./Product";

class DisplayProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      products: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.displayProducts = this.displayProducts.bind(this);
    this.displaySearchBar = this.displaySearchBar.bind(this);
  }

  componentDidMount() {
    this.setState({ products: this.props.products });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.products !== prevProps.products) {
      this.setState({ products: this.props.products });
    }
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value });
    if (event.target.value === "") {
      this.setState({ products: this.props.products });
    } else {
      const filteredData = this.props.products.filter(
        (product) => product.name === event.target.value
      );
      this.setState({ products: filteredData });
      console.log(filteredData);
    }
  }

  displayProducts() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={3}
        style={{
          paddingTop: "2%",
        }}
      >
        {this.state.products &&
          this.state.products.map((product) => (
            <Grid item key={product.productID}>
              <Product
                canBuy={product.quantity > 0 ? true : false}
                canOpen={true}
                canEditProduct={this.props.isUserShop}
                product={product}
              />
            </Grid>
          ))}
      </Grid>
    );
  }

  displaySearchBar() {
    return (
      <div style={{ paddingTop: "20px", paddingBottom: "30px" }}>
        <TextField
          value={this.state.searchValue}
          onChange={(event) => {
            this.handleChange(event);
          }}
        />
      </div>
    );
  }

  render() {
    return (
      <div
        style={{
          width: "99vw",
          height: this.props.isUserShop ? "80vh" : "77vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>{this.displaySearchBar()}</Grid>

          <Grid item>{this.displayProducts()}</Grid>
        </Grid>
      </div>
    );
  }
}

export default DisplayProducts;
