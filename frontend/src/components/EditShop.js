import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Chip,
  Paper,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
  Divider,
  Grid,
  Box,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Shop from "./Shop";
import DisplayShopTags from "./DisplayShopTags";
import { PRIMARY_THEME_COLOR } from "../constants/constants";

const clips = ["test", "Test1"];
class EditShop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // shopData: this.props.selectedShop,
      shopData: null,
      name: "",
      description: "",
      picture: "",
      tag: "",
      tags: [],
    };
    this.closeDialog = this.closeDialog.bind(this);
    this.getShopData = this.getShopData.bind(this);
    this.deleteAllTags = this.deleteAllTags.bind(this);
    this.addTag = this.addTag.bind(this);
  }

  closeDialog() {
    // this.props.closeUpdate();
    console.log("close edit shop dialog");
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // if (this.props.selectedShop !== prevProps.selectedShop) {
  //   //   this.setState({ shopData: this.props.selectedShop });
  //   // }
  // }

  componentDidMount() {
    this.setState({
      shopData: this.props.selectedShop,
      name: this.props.selectedShop.name,
      description: this.props.selectedShop.description,
      picture: this.props.selectedShop.picture,
      tags: this.props.selectedShop.tags,
    });
  }

  addTag() {
    const tags = this.state.tags;
    tags.push(this.state.tag);
    this.setState({ tags: tags, tag: "" });
  }

  deleteAllTags() {
    this.setState({ tags: [] });
  }

  getShopData() {
    const shopObj = {
      name: this.state.name,
      description: this.state.description,
      picture: this.state.picture,
      tags: this.state.tags,
    };

    return shopObj;
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
          <Alert variant="filled" severity="warning">
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
            onClick={this.closeDialog}
            style={{ background: PRIMARY_THEME_COLOR, color: "white" }}
          />
          <Chip
            label="Discard Changes"
            onClick={this.closeDialog}
            style={{ background: "#ff9800", color: "white" }}
          />
          <Chip
            label="Delete Shop"
            onClick={this.closeDialog}
            color="secondary"
          />
        </DialogActions>
      </Dialog>
    );
  }
}

export default EditShop;
