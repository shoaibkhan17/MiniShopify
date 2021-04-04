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

class AddShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerEmail: "",
      name: "",
      description: "",
      picture: "",
      tag: "",
      tags: [],
    };
    this.getShopData = this.getShopData.bind(this);
    this.deleteAllTags = this.deleteAllTags.bind(this);
    this.addTag = this.addTag.bind(this);
    this.createShop = this.createShop(this);
    this.mounted = true;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.mounted;
  }

  async createShop() {
    console.log("trippy creating shop somehow!");
    const success = await ShopService.createShop(this.getShopData());
    if (success) {
      this.props.onClose();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
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
      ownerEmail: this.state.ownerEmail,
      name: this.state.name,
      description: this.state.description,
      picture: this.state.picture,
      tags: this.state.tags,
    };

    return shopObj;
  }

  render() {
    return (
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={this.props.addingShop}
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
            <Shop
              canEditShop={false}
              canOpen={false}
              shop={this.getShopData()}
            />
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
            label="Create Shop"
            // onClick={() => this.createShop()}
            style={{ background: PRIMARY_THEME_COLOR, color: "white" }}
          />
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddShop;
