import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product";

class DisplayProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid
          container
          justify="center"
          spacing={3}
          style={{
            margin: "2%",
            width: "96%",
          }}
        >
          {this.props.products &&
            this.props.products.map((product) => (
              <Grid item key={product.productID}>
                <Product
                  canBuy={true}
                  canEditProduct={true}
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
