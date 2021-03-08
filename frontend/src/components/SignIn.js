import React from "react";
import { Box, Section, Button } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Redirect } from "react-router";
import UserService from "../services/UserService";
import FormField from "./FormField";
import TopMenu from "./TopMenu";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isAuthenticated: undefined,
      redirectToCreateAccount: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextState.username !== this.state.username ||
      nextState.password !== this.state.password ||
      nextState.isAuthenticated !== this.state.isAuthenticated ||
      nextState.redirectToCreateAccount !== this.state.redirectToCreateAccount
    ) {
      return true;
    }
    return false;
  }

  async handleSubmit() {
    var obj = {
      username: this.state.username,
      password: this.state.password,
    };

    var authenticateResponse = await UserService.authenticateMerchant(obj);
    this.setState({ isAuthenticated: authenticateResponse });

    if (authenticateResponse) {
      this.props.setAuthenticated(true);
    }
  }

  render() {
    return (
      <div>
        {this.state.redirectToCreateAccount && (
          <Redirect to={{ pathname: "/create-account" }} />
        )}

        <TopMenu title={"Sign In"} />

        <Section style={{ textAlign: "left" }}>
          <Box className="has-background-black-ter">
            <Box>
              {this.state.isAuthenticated === false && (
                <label className="label has-text-danger">
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

            <a
              onClick={() => this.setState({ redirectToCreateAccount: true })}
              className="has-text-white"
            >
              Click here to create an account
            </a>
          </Box>
        </Section>
      </div>
    );
  }
}

export default SignIn;
