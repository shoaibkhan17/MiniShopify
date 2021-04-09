import { IconButton } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import TopBar from "../topBar/TopBar";
import BrowseShops from "./BrowseShops";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import AddShop from "./AddShop";
import { PRIMARY_THEME_COLOR } from "../../constants/constants";

const mapStateToProps = (state) => {
  return { userShops: state.userShops, isAuthenticated: state.isAuthenticated };
};

class UserShops extends React.Component {
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
      <div style={{ height: "100vh" }}>
        {/** Redirect to home page if you're not authenticated anymore */}
        {!this.props.isAuthenticated && <Redirect to={{ pathname: "/home" }} />}
        <TopBar />
        <BrowseShops
          shops={this.props.userShops}
          canEdit={true}
          title={"My Shops"}
        />

        <IconButton onClick={this.addNewShop}>
          <AddCircleRoundedIcon fontSize="large" htmlColor={"black"} />
        </IconButton>

        {this.state.addingShop && (
          <AddShop
            addingShop={this.state.addingShop}
            onClose={this.closeAddShop}
          />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(UserShops);
