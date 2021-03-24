import React from "react";
import UserService from "../services/UserService";
import TopBar from "./TopBar";
import { connect } from "react-redux";
import { setAuthenticated } from "../redux/actions";
import DisplayShops from "./DisplayShops";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.test = this.test.bind(this);
    this.signOut = this.signOut.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {}

  test() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
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
        <DisplayShops />
      </div>
    );
  }
}

export default connect(null, { setAuthenticated })(Home);
