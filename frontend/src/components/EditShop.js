import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Chip,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Shop from "./Shop";
import { PRIMARY_THEME_COLOR } from "../constants/constants";
import ShopService from "../services/ShopService";
class EditShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // shopData: this.props.selectedShop,
      shopData: null,
      ownerEmail: "",
      shopID: "",
      name: "",
      description: "",
      picture: "",
      tag: "",
      tags: [],
    };
    this.getShopData = this.getShopData.bind(this);
    this.deleteAllTags = this.deleteAllTags.bind(this);
    this.updateShop = this.updateShop.bind(this);
    this.deleteShop = this.deleteShop.bind(this);
    this.discardChanges = this.discardChanges.bind(this);
    this.addTag = this.addTag.bind(this);
    this.mounted = true;
  }

  discardChanges() {
    this.setState({
      name: this.props.selectedShop.name,
      description: this.props.selectedShop.description,
      picture: this.props.selectedShop.picture,
      tags: this.props.selectedShop.tags,
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.mounted;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidMount() {
    this.setState({
      shopData: this.props.selectedShop,
      ownerEmail: this.props.selectedShop.ownerEmail,
      shopID: this.props.selectedShop.shopID,
      name: this.props.selectedShop.name,
      description: this.props.selectedShop.description,
      picture: this.props.selectedShop.picture,
      tags: this.props.selectedShop.tags,
    });
  }

  addTag() {
    if (this.state.tag !== "") {
      const tags = this.state.tags;
      tags.push(this.state.tag);
      this.setState({ tags: tags, tag: "" });
    }
  }

  deleteAllTags() {
    this.setState({ tags: [] });
  }

  getShopData() {
    const shopObj = {
      shopID: this.state.shopID,
      ownerEmail: this.state.ownerEmail,
      name: this.state.name,
      description: this.state.description,
      picture: this.state.picture,
      tags: this.state.tags,
    };

    return shopObj;
  }

  async updateShop() {
    const success = await ShopService.updateShop(this.getShopData());
    if (success) {
      this.props.onClose();
    }
  }

  async deleteShop() {
    const success = await ShopService.deleteShop(this.state.shopID);
    if (success) {
      this.props.onClose();
    }
  }

  componentWillUnmount() {}

  render() {
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={this.props.selectedShop !== null}
        onClose={this.props.onClose}
      >
        <DialogTitle>Edit Shop Menu</DialogTitle>

        <DialogContent>
          <Alert severity="error">
            Deleting a shop will delete all the products it contains.
          </Alert>
        </DialogContent>

        <DialogContent style={{ display: "flex" }}>
          <div
            style={{
              flex: "0 0 330px",
              alignSelf: "center",
            }}
          >
            <Shop canEditShop={false} shop={this.getShopData()} />
          </div>

          <div style={{ flex: 1 }}>
            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              label="Update Name"
              value={this.state.name}
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />

            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              label="Update Description"
              rowsMax={4}
              multiline
              value={this.state.description}
              onChange={(event) => {
                this.setState({ description: event.target.value });
              }}
            />

            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Add Tags"
              value={this.state.tag}
              onChange={(event) => {
                this.setState({ tag: event.target.value });
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={this.addTag}>
                      <AddCircleIcon htmlColor="#00ab55" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              color="secondary"
              style={{ float: "right" }}
              onClick={this.deleteAllTags}
            >
              Delete All Tags
            </Button>

            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              label="Update Picture URL"
              value={this.state.picture}
              onChange={(event) => {
                this.setState({ picture: event.target.value });
              }}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Chip
            label="Update Shop"
            onClick={this.updateShop}
            style={{ background: PRIMARY_THEME_COLOR, color: "white" }}
          />
          <Chip
            label="Discard Changes"
            onClick={this.discardChanges}
            style={{ background: "#ff9800", color: "white" }}
          />
          <Chip
            label="Delete Shop"
            onClick={this.deleteShop}
            color="secondary"
          />
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditShop;
