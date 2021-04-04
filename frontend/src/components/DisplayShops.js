import React from "react";
import { connect } from "react-redux";
import { Grid, IconButton } from "@material-ui/core";
import { setShops } from "../redux/actions";
import ShopService from "../services/ShopService";
import Shop from "./Shop";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import AddShop from "./AddShop";

const mapStateToProps = (state) => {
  return { shops: state.shops };
};
class DisplayShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addingShop: false,
    };

    this.getShops = this.getShops.bind(this);
    this.addNewShop = this.addNewShop.bind(this);
    this.closeAddShop = this.closeAddShop.bind(this);
  }

  componentDidMount() {
    this.getShops();
  }

  addNewShop() {
    this.setState({ addingShop: true });
  }

  closeAddShop() {
    this.setState({ addingShop: false });
  }

  async getShops() {
    await ShopService.getAllShops();
  }

  render() {
    return (
      <div>
        {console.log(this.props.shops)}
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

        {this.state.addingShop && (
          <AddShop
            addingShop={this.state.addingShop}
            onClose={this.closeAddShop}
          />
        )}

        <IconButton>
          <AddCircleRoundedIcon
            onClick={this.addNewShop}
            style={{
              color: "#43C701",
              margin: "5px",
              scale: "2",
            }}
          />
        </IconButton>
      </div>
    );
  }
}

export default connect(mapStateToProps, { setShops })(DisplayShops);
