import React from "react";
import { Redirect } from "react-router";
import UserService from "../services/UserService";
import { connect } from "react-redux";
import { setAuthenticated } from "../redux/actions";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Tooltip,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { toast } from "bulma-toast";
import "../styling/styles.css";

const mapStateToProps = (state) => {
  return { isAuthenticated: state.isAuthenticated };
};

const theme = createMuiTheme({
  spacing: [0, 4, 8, 16, 32, 64],
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "demo@minishopify.com",
      password: "demo12345",
      authenticateFailed: false,
      redirectToCreateAccount: false,
      showPassword: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.testing = this.testing.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (
  //     nextState.email !== this.state.email ||
  //     nextState.password !== this.state.password ||
  //     nextProps.isAuthenticated !== this.props.isAuthenticated ||
  //     nextState.authenticateFailed !== this.state.authenticateFailed ||
  //     nextState.redirectToCreateAccount !== this.state.redirectToCreateAccount ||
  //     nextState.toggle
  //   ) {
  //     return true;
  //   }
  //   return false;
  // }

  async handleSubmit() {
    var obj = {
      email: this.state.email,
      password: this.state.password,
    };

    // var authenticateResponse = await UserService.authenticateMerchant(obj);
    var authenticateResponse = false;

    UserService.testing();

    if (!authenticateResponse) {
      this.setState({ authenticateFailed: true });
    } else {
      toast({
        message: "Welcome back " + obj.email + "!",
        type: "is-primary",
        dismissible: true,
        pauseOnHover: true,
      });
    }

    this.props.setAuthenticated(authenticateResponse);
  }

  async testing() {
    await UserService.createShop();
  }

  toggleVisibility() {
    const visibility = this.state.showPassword;
    this.setState({ showPassword: !visibility });
  }

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div style={{ backgroundColor: teal[50] }}>
        {this.state.redirectToCreateAccount && (
          <Redirect to={{ pathname: "/create-account" }} />
        )}

        {this.props.isAuthenticated && <Redirect to={{ pathname: "/" }} />}

        <Grid container component="main" style={{ height: "100vh" }}>
          <div className="LeftGridPhoto" />
          <div className="RightGrid">
            <div className="AuthPlacement">
              <p>
                Don't have an account?
                <a
                  className="AuthRedirectLink"
                  onClick={() =>
                    this.setState({ redirectToCreateAccount: true })
                  }
                >
                  Get started
                </a>
              </p>
            </div>

            <div className="SignInGrid">
              <div className="AuthDescriptionBox">
                <div className="AuthDescription">
                  <Typography
                    component="h1"
                    variant="h5"
                    style={{ paddingBottom: "10px", alignSelf: "start" }}
                  >
                    Sign in to MiniShopify
                  </Typography>

                  <Typography
                    component="h1"
                    variant="subtitle1"
                    style={{ paddingBottom: "10px", alignSelf: "flex-start" }}
                  >
                    Enter your details below.
                  </Typography>
                </div>

                <div>
                  <Tooltip title="Firebase">
                    <img
                      className="FireboxImg"
                      src="/static/icons/firebase.png"
                    />
                  </Tooltip>
                </div>
              </div>
              {/* <Alert severity="info" variant="filled">
                <p>
                  Use email : test / password : test
                </p>
              </Alert> */}
              <form
                style={{ width: "100%", marginTop: "1px" }}
                noValidate
                action={undefined}
              >
                <TextField
                  helperText={
                    this.state.authenticateFailed ? "Invalid Input." : ""
                  }
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle htmlColor="rgb(0, 171, 85)" />
                      </InputAdornment>
                    ),
                  }}
                  value={this.state.email}
                  onChange={(event) =>
                    this.setState({ email: event.target.value })
                  }
                  error={this.state.authenticateFailed}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  required
                  autoFocus
                  style={{ borderRadius: "12px" }}
                />

                <TextField
                  helperText={
                    this.state.authenticateFailed ? "Invalid Input." : ""
                  }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={this.toggleVisibility}>
                          {this.state.showPassword ? (
                            <Visibility htmlColor="rgb(0, 171, 85)" />
                          ) : (
                            <VisibilityOff htmlColor="rgb(0, 171, 85)" />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={this.state.password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                  error={this.state.authenticateFailed}
                  color="primary"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Password"
                  type={this.state.showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  style={{ borderRadius: "20px" }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{
                    padding: "10px",
                    margin: theme.spacing(3, 0, 2),
                    backgroundColor: "rgb(0, 171, 85)",
                    borderRadius: "12px",
                  }}
                  onClick={this.handleSubmit}
                >
                  Sign In
                </Button>
              </form>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, { setAuthenticated })(SignIn);
