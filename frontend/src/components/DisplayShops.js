import React from "react";
import { connect } from "react-redux";
import {
  IconButton,
  Card,
  CardHeader,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Divider,
  Zoom,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Snackbar,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StorefrontIcon from "@material-ui/icons/Storefront";
import DisplayShopTags from "./DisplayShopTags";
import UserService from "../services/UserService";
import { Alert } from "@material-ui/lab";
import { setShops } from "../redux/actions";

const mapStateToProps = (state) => {
  return { shops: state.shops };
};
class DisplayShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: false,
      anchorEl: null,
      openDialog: false,
      openSnackBar: false,
      currentShop: null,
    };

    this.openShop = this.openShop.bind(this);
    this.editShop = this.editShop.bind(this);
    this.getShops = this.getShops.bind(this);
    this.deleteShop = this.deleteShop.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
    this.renderDialog = this.renderDialog.bind(this);
  }

  componentDidMount() {}

  openShop(shop) {
    console.log("open shop: " + shop.name);
  }

  editShop(shop) {
    this.setState({ openDialog: true, currentShop: shop });
  }

  closeDialog() {
    this.setState({ openDialog: false, currentShop: null });
  }

  closeSnackBar() {
    this.setState({ openSnackBar: false });
  }

  async getShops() {
    var shops = await UserService.getAllShops();
    setShops(shops);
  }

  async deleteShop() {
    if (this.state.currentShop) {
      var success = await UserService.deleteShop(this.state.currentShop.shopID);

      if (success) {
        var getNewShops = await UserService.getAllShops();
        if (getNewShops) {
          this.props.setShops(getNewShops);
        }
      }
      this.setState({ openDialog: false, openSnackBar: true });
    }
  }

  renderDialog() {
    return (
      <Dialog
        open={this.state.openDialog}
        onClose={this.closeDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Edit Shop Menu"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Menu to edit or delete the shop
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.closeDialog} color="primary">
            Test Edit
          </Button>
          <Button onClick={this.deleteShop} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    );
  }

  renderSnackBar() {
    return (
      <Snackbar
        open={this.state.openSnackBar}
        autoHideDuration={6000}
        onClose={this.closeSnackBar}
      >
        <Alert onClose={this.closeSnackBar} severity="success">
          Shop successfully deleted!
        </Alert>
      </Snackbar>
    );
  }

  render() {
    return (
      <div>
        {this.renderDialog()}
        {this.renderSnackBar()}
        <Grid
          container
          justify="center"
          spacing={5}
          style={{ flexGrow: 1, marginTop: "10px", padding: "10px" }}
        >
          {this.props.shops &&
            this.props.shops.map((shop) => (
              <Grid item key={shop.shopID}>
                <Card
                  style={{
                    minWidth: "300px",
                    maxWidth: "300px",
                    minHeight: "300px",
                    boxShadow:
                      "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
                    borderRadius: "16px",
                  }}
                >
                  <CardHeader
                    avatar={<StorefrontIcon color="primary" />}
                    title={shop.name}
                    action={
                      <Tooltip TransitionComponent={Zoom} title="Edit Shop">
                        <IconButton onClick={() => this.editShop(shop)}>
                          <MoreVertIcon color="secondary" />
                        </IconButton>
                      </Tooltip>
                    }
                  />
                  <CardActionArea onClick={() => this.openShop(shop)}>
                    <CardMedia
                      style={{ height: 0, paddingTop: "56.25%" }}
                      image={shop.picture}
                    />
                    <CardContent>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {shop.description}
                      </Typography>
                      <Divider style={{ margin: "10px" }}></Divider>
                      <DisplayShopTags tags={shop.tags} />
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, { setShops })(DisplayShops);
