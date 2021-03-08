import React from "react";
import { Box, Section, Button } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import UserService from "../services/UserService";
import FormField from "./FormField";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuthenticated: undefined,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayErrorMessage = this.displayErrorMessage.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.username !== this.state.username ||
      nextState.password !== this.state.password ||
      nextState.isAuthenticated !== this.state.isAuthenticated
    ) {
      return true;
    }
    return false;
  }

  handleClick() {
    this.props.updateFlag(true);
  }

  async handleSubmit() {
    var obj = {
      username: this.state.username,
      password: this.state.password,
    };

    var authenticateResponse = await UserService.authenticateMerchant(obj);
    this.setState({ isAuthenticated: authenticateResponse });
  }

  displayErrorMessage() {
    return;
  }

  render() {
    return (
      <div>
        <Section style={{ textAlign: "left" }}>
          <Box className="has-background-black-ter">
            <Box>
              {this.state.isAuthenticated === false && (
                <label className="label has-danger">
                  Invalid username and password!
                </label>
              )}
              <FormField
                label="Username"
                value={this.state.username}
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
                placeholder={"e.g. username"}
              />

              <FormField
                label="Password"
                value={this.state.password}
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
                placeholder={"********"}
              />

              <Button onClick={this.handleSubmit} className="is-primary">
                Sign In
              </Button>
            </Box>

            <a onClick={this.handleClick} className="has-text-white">
              Click here to create an account
            </a>
          </Box>
        </Section>
      </div>
    );
  }
}

export default SignIn;
