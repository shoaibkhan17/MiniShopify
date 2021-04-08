import React from "react";
import { connect } from "react-redux";
import TopBar from "../topBar/TopBar";
import BrowseShops from "./BrowseShops";
import DisplayShops from "./DisplayShops";

const mapStateToProps = (state) => {
  return { userShops: state.userShops, shops: state.shops };
};

class UserShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // this.getShops = this.getShops.bind(this);
  }

  componentDidMount() {
    // this.getShops();
    console.log(this.props.userShops);
    console.log(this.props.shops);
  }

  //   async getShops() {
  //     await ShopService.getAllShops();
  //   }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <TopBar />
        <BrowseShops shops={this.props.userShops} canEdit={true} />
        {/* {this.props.userShops[0]} */}
        {/* <DisplayShops shops={this.props.shops} /> */}
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(UserShops);
