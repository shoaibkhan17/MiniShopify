import React from "react";
import TopBar from "./topBar/TopBar";
import { connect } from "react-redux";
import { setShops } from "../redux/actions";
import BrowseShops from "./shop/BrowseShops";
import ShopService from "../services/ShopService";

const mapStateToProps = (state) => {
  return { isAuthenticated: state.isAuthenticated, shops: state.shops };
};

class Home extends React.Component {
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
      <div
        style={{
          height: "100vh",
        }}
      >
        <TopBar />
        <BrowseShops
          shops={this.props.shops}
          canEdit={false}
          title={"Browse Shops"}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, { setShops })(Home);
