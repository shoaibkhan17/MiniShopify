import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { setShops } from "../redux/actions";
import ShopService from "../services/ShopService";
import Shop from "./Shop";

const mapStateToProps = (state) => {
  return { shops: state.shops };
};
class DisplayShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.getShops = this.getShops.bind(this);
  }

  componentDidMount() {
    this.getShops();
  }

  async getShops() {
    await ShopService.getAllShops();
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
          {this.props.shops &&
            this.props.shops.map((shop) => (
              <Grid item key={shop.shopID}>
                <Shop canEditShop={true} canOpen={true} shop={shop} />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, { setShops })(DisplayShops);
