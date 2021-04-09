import React from "react";
import { Redirect } from "react-router";
import AuthService from "../services/AuthService";
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
  Snackbar,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import "../styling/styles.css";
import { PRIMARY_THEME_COLOR } from "../constants/constants";
import { Alert } from "@material-ui/lab";

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
      email: "",
      password: "",
      authenticateFailed: false,
      redirectToCreateAccount: false,
      showPassword: false,
      message: "",
      openNotification: false,
      signInSuccess: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showNotificationPop = this.showNotificationPop.bind(this);
  }

  async handleSubmit() {
    var user = {
      email: this.state.email,
      password: this.state.password,
    };

    if (user.email !== "" && user.password !== "") {
      var [success, message] = await AuthService.signIn(user);

      if (!success) {
        this.setState({ authenticateFailed: true });
      }

      this.setState({
        message: message,
        openNotification: true,
        signInSuccess: success,
      });
    }
  }

  toggleVisibility() {
    const visibility = this.state.showPassword;
    this.setState({ showPassword: !visibility });
  }

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  handleClose() {
    this.setState({ openNotification: false });
  }

  showNotificationPop() {
    return (
      <Snackbar
        open={this.state.openNotification}
        autoHideDuration={6000}
        onClose={this.handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={this.handleClose}
          severity={this.state.signInSuccess ? "success" : "error"}
          variant="filled"
        >
          {this.state.message}
        </Alert>
      </Snackbar>
    );
  }

  render() {
    return (
      <div className="BackgroundAuth">
        {this.showNotificationPop()}
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
                        <AccountCircle htmlColor={PRIMARY_THEME_COLOR} />
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
                            <Visibility htmlColor={PRIMARY_THEME_COLOR} />
                          ) : (
                            <VisibilityOff htmlColor={PRIMARY_THEME_COLOR} />
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
                    backgroundColor: PRIMARY_THEME_COLOR,
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
