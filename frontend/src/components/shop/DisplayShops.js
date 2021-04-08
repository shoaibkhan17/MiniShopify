import React from "react";
import { Grid, TextField } from "@material-ui/core";
import Shop from "./Shop";
import Select from "@material-ui/core/Select";

class DisplayShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addingShop: false,
      shops: [],
      tags: [],
      selectedTag: "",
      searchValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.setShopAndShopTags = this.setShopAndShopTags.bind(this);
  }

  componentDidMount() {
    if (this.props.shops) {
      this.setShopAndShopTags();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.shops !== this.props.shops) {
      this.setShopAndShopTags();
    }
  }

  setShopAndShopTags() {
    var tagsList = new Set();
    this.props.shops.forEach((shop) => {
      shop.tags.forEach((tag) => {
        tagsList.add(tag);
      });
    });
    this.setState({ shops: this.props.shops, tags: Array.from(tagsList) });
  }

  handleChange(event) {
    this.setState({ selectedTag: "", searchValue: event.target.value });
    if (event.target.value === "") {
      this.setState({ shops: this.props.shops });
    } else {
      const filteredData = this.props.shops.filter(
        (shop) => shop.name === event.target.value
      );
      this.setState({ shops: filteredData });
    }
  }

  handleSelectChange(event) {
    this.setState({ selectedTag: event.target.value, searchValue: "" });
    if (event.target.value === "") {
      this.setState({ shops: this.props.shops });
    } else {
      const filteredData = this.props.shops.filter((shop) =>
        shop.tags.includes(event.target.value)
      );
      this.setState({ shops: filteredData });
    }
  }

  render() {
    return (
      <div>
        <TextField
          value={this.state.searchValue}
          onChange={(event) => {
            this.handleChange(event);
          }}
        />
        <Select
          value={this.state.selectedTag}
          native
          onChange={(event) => {
            this.handleSelectChange(event);
          }}
        >
          <option aria-label="None" value="" />
          {this.state.tags &&
            this.state.tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
        </Select>
        <Grid
          container
          justify="center"
          spacing={3}
          style={{
            margin: "2%",
            width: "96%",
          }}
        >
          {this.state.shops &&
            this.state.shops.map((shop) => (
              <Grid item key={shop.shopID}>
                <Shop
                  canEdit={
                    this.props.canEdit
                    // firebase.auth().currentUser &&
                    // firebase.auth().currentUser.email === shop.ownerEmail
                    //   ? true
                    //   : false
                  }
                  canOpen={true}
                  shop={shop}
                />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default DisplayShops;
