import React from "react";
import { connect } from "react-redux";
import { PRIMARY_THEME_COLOR } from "../../constants/constants";
// import ShopService from "../services/ShopService";
import DisplayShops from "./DisplayShops";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import { IconButton } from "@material-ui/core";
import AddShop from "./AddShop";

// const mapStateToProps = (state) => {
//   return { shops: state.shops };
// };

class BrowseShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addNewShop = this.addNewShop.bind(this);
    this.closeAddShop = this.closeAddShop.bind(this);
  }

  addNewShop() {
    this.setState({ addingShop: true });
  }

  closeAddShop() {
    this.setState({ addingShop: false });
  }

  render() {
    return (
      <div>
        <DisplayShops shops={this.props.shops} />

        {/* <IconButton onClick={this.addNewShop}>
          <AddCircleRoundedIcon
            fontSize="large"
            htmlColor={PRIMARY_THEME_COLOR}
          />
        </IconButton>

        {this.state.addingShop && (
          <AddShop
            addingShop={this.state.addingShop}
            onClose={this.closeAddShop}
          />
        )} */}
      </div>
    );
  }
}

export default BrowseShops;
