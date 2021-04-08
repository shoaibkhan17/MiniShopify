import React from "react";
import { Grid, TextField } from "@material-ui/core";
import Product from "./Product";
import firebase from "../../services/firebase.config";

class DisplayProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      products: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ products: this.props.products });
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

  render() {
    return (
      <div
        style={{
          width: "99vw",
          height: "77vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <div style={{ paddingTop: "20px", paddingBottom: "40px" }}>
          <TextField
            value={this.state.searchValue}
            onChange={(event) => {
              this.handleChange(event);
            }}
          />
        </div>

        <Grid
          container
          justify="center"
          spacing={3}
          style={{
            margin: "2%",
            width: "96%",
          }}
        >
          {this.state.products &&
            this.state.products.map((product) => (
              <Grid item key={product.productID}>
                <Product
                  canBuy={true}
                  canEditProduct={
                    firebase.auth().currentUser &&
                    firebase.auth().currentUser.email === this.props.ownerEmail
                      ? true
                      : false
                  }
                  product={product}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default DisplayProducts;
