import React from "react";
import { connect } from "react-redux";
import { setAuthenticated } from "../redux/actions";
import {
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  Menu,
  MenuItem,
  Divider,
  Button,
  Badge,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import SignInButton from "./SignInButton";
import AuthService from "../services/AuthService";
import firebase from "../services/firebase.config";
import { PRIMARY_THEME_COLOR } from "../constants/constants";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const mapStateToProps = (state) => {
  return { isAuthenticated: state.isAuthenticated };
};

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: false,
      anchorEl: null,
      redirectToSignIn: false,
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.signOut = this.signOut.bind(this);
    this.getMenu = this.getMenu.bind(this);
  }

  componentDidMount() {}

  async signOut() {
    await AuthService.signOut();
  }

  openMenu(event) {
    this.setState({ openDropdown: true, anchorEl: event.currentTarget });
  }

  closeMenu() {
    this.setState({ openDropdown: false });
  }

  getMenu() {
    return (
      <Menu
        keepMounted
        open={this.state.openDropdown}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        anchorEl={this.state.anchorEl}
        onClose={this.closeMenu}
        variant="menu"
      >
        <div
          style={{
            marginTop: "16px",
            marginBottom: "16px",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
            {firebase.auth().currentUser
              ? firebase.auth().currentUser.displayName
              : ""}
          </Typography>
          <Typography variant="subtitle2" style={{ flexGrow: 1 }}>
            {firebase.auth().currentUser
              ? firebase.auth().currentUser.email
              : ""}
          </Typography>
        </div>

        <Divider />
        <MenuItem onClick={this.closeMenu}>
          <ListItemIcon>
            <HomeIcon style={{ color: PRIMARY_THEME_COLOR }} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </MenuItem>

        <MenuItem onClick={this.closeMenu}>
          <ListItemIcon>
            <PersonIcon style={{ color: PRIMARY_THEME_COLOR }} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </MenuItem>

        <Button
          variant="outlined"
          style={{
            marginRight: "5%",
            marginTop: "2%",
            marginLeft: "5%",
            borderRadius: "12px",
            width: "90%",
            color: "white",
            backgroundColor: PRIMARY_THEME_COLOR,
          }}
          onClick={this.signOut}
        >
          Sign Out
        </Button>
      </Menu>
    );
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: PRIMARY_THEME_COLOR }}>
          <Toolbar>
            <IconButton edge="start" color="inherit">
              <SearchIcon style={{ color: "black" }} />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
            <IconButton aria-label="cart">
              <Badge badgeContent={69} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {this.props.isAuthenticated && (
              <IconButton edge="end" color="inherit" onClick={this.openMenu}>
                <AccountCircle fontSize="large" />
              </IconButton>
            )}
            {!this.props.isAuthenticated ? <SignInButton /> : this.getMenu()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(mapStateToProps, { setAuthenticated })(TopBar);
