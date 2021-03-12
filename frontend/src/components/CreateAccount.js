import React from "react";
import { Section, Box, Button } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import UserService from "../services/UserService";
import FormField from "./FormField";
import TopMenu from "./TopMenu";
import { Redirect } from "react-router";
import {toast} from 'bulma-toast'

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      number: "",
      email: "",
      password: "",
      redirectToSignIn: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    var obj = {
      username: this.state.username,
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      password: this.state.password,
    };
    var [success, message] = [false, "Please enter username and password."]

    if(obj.username !== "" && obj.password !== ""){
        [success, message] = await UserService.createAccount(obj);
    }

    toast({
      message: message,
      type: success ? 'is-primary' : 'is-danger',
      dismissible: true,
      pauseOnHover: true,
    })
  }

  render() {
    return (
      <div>
        {this.state.redirectToSignIn && (
          <Redirect to={{ pathname: "/sign-in" }} />
        )}

        <TopMenu title={"Create your account!"} />

        <Section style={{ textAlign: "left" }}>
          <Box className="has-background-black-ter">
            <Box>
              <FormField
                label="Username"
                value={this.state.username}
                onChange={(event) =>
                  this.setState({ username: event.target.value })
                }
                placeholder={"e.g. username"}
              />

              <FormField
                label="Name"
                value={this.state.name}
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
                placeholder={"name"}
              />

              <FormField
                label="Number"
                value={this.state.number}
                onChange={(event) =>
                  this.setState({ number: event.target.value })
                }
                placeholder={"number"}
              />

              <FormField
                label="Email"
                value={this.state.email}
                onChange={(event) =>
                  this.setState({ email: event.target.value })
                }
                placeholder={"email"}
              />

              <FormField
                label="Password"
                value={this.state.password}
                onChange={(event) =>
                  this.setState({ password: event.target.value })
                }
                type="password"
                placeholder={"**********"}
              />

              <Button onClick={this.handleSubmit} className="is-primary">
                Create Account
              </Button>
            </Box>

            <a
              onClick={() => this.setState({ redirectToSignIn: true })}
              className="has-text-white"
            >
              If you already have an account, click here to sign in.
            </a>
          </Box>
        </Section>

      </div>
    );
  }
}

export default CreateAccount;
