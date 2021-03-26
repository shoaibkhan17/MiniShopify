import React from "react";
import UserService from "../services/UserService";
import TopBar from "./TopBar";
import { connect } from "react-redux";
import DisplayShops from "./DisplayShops";
import { Button } from "@material-ui/core";

const mapStateToProps = (state) => {
  return { isAuthenticated: state.isAuthenticated };
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
    };

    this.signOut = this.signOut.bind(this);
    this.onClick = this.onClick.bind(this);
    this.getShops = this.getShops.bind(this);
    this.addTestShop = this.addTestShop.bind(this);
  }

  componentDidMount() {
    this.getShops();
  }

  async getShops() {
    var shops = await UserService.getAllShops();
    this.setState({ shops: shops });
  }

  async addTestShop() {
    var success = await UserService.addTestShop();
    success && this.getShops();
  }

  signOut() {
    this.props.setAuthenticated(false);
  }

  onClick(shopName) {
    console.log("open shop " + shopName);
  }

  render() {
    return (
      <div style={{ height: "100vh" }}>
        <TopBar />
        <DisplayShops shops={this.state.shops} />
        <br />
        {this.props.isAuthenticated && (
          <Button
            color="secondary"
            variant="outlined"
            onClick={this.addTestShop}
          >
            Add Test Shop
          </Button>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(Home);
