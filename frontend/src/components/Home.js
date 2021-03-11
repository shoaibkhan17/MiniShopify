import React from "react";
import UserService from "../services/UserService";
import TopMenu from "./TopMenu";
import { Box, Section, Button } from "react-bulma-components";
import { connect } from "react-redux";
import { setAuthenticated } from "../redux/actions";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.test = this.test.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.test();
  }

  test() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  signOut() {
    this.props.setAuthenticated(false);
  }

  render() {
    return (
      <div>
        <TopMenu title="Home Page" />
        <Button onClick={this.signOut} className="is-primary">
          Sign Out
        </Button>
        <h1> USERS TABLE </h1>
        <table class="table">
          <thead>
            <tr>
              <td> Username </td>
              <td> Name </td>
              <td> Number </td>
              <td> Email </td>
              <td> Password </td>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr key={user.id}>
                <td> {user.username} </td>
                <td> {user.name} </td>
                <td> {user.number} </td>
                <td> {user.email} </td>
                <td> {user.password} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default connect(null, { setAuthenticated })(Home);
