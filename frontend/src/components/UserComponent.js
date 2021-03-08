import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.test();
  }

  test() {
    UserService.getUsers().then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <div>
        <h1> USERS TABLE </h1>
        <table>
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

export default UserComponent;
