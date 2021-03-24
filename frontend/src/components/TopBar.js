import React from "react";
import { Button } from "react-bulma-components";
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
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import { green } from "@material-ui/core/colors";

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: false,
      anchorEl: null,
    };

    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {}

  signOut() {
    this.props.setAuthenticated(false);
  }

  openMenu(event) {
    this.setState({ openDropdown: true, anchorEl: event.currentTarget });
  }

  closeMenu() {
    this.setState({ openDropdown: false });
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: "lightblue" }}>
          <Toolbar>
            <IconButton edge="start" color="inherit">
              <SearchIcon />
            </IconButton>
            <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
            <IconButton edge="end" color="inherit" onClick={this.openMenu}>
              <AccountCircle fontSize="large" />
            </IconButton>
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
                  Your Name
                </Typography>
                <Typography variant="subtitle2" style={{ flexGrow: 1 }}>
                  youremail@gmail.com
                </Typography>
              </div>
              <Divider />
              <MenuItem onClick={this.closeMenu}>
                <ListItemIcon>
                  <HomeIcon style={{ color: green[500] }} />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </MenuItem>

              <MenuItem onClick={this.closeMenu}>
                <ListItemIcon>
                  <PersonIcon style={{ color: green[500] }} />
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
                }}
                onClick={this.signOut}
              >
                Sign Out
              </Button>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default connect(null, { setAuthenticated })(TopBar);
