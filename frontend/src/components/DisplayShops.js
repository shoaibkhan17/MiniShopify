import React from "react";
import { connect } from "react-redux";
import { Grid, TextField } from "@material-ui/core";
import { setShops } from "../redux/actions";
import ShopService from "../services/ShopService";
import Shop from "./Shop";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const mapStateToProps = (state) => {
  return { shops: state.shops };
};
class DisplayShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
      tags: [],
      selectedTag: "",
      searchValue: "",
    };

    this.getShops = this.getShops.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  componentDidMount() {
    var tagsList = new Set();
    this.props.shops.forEach((shop) => {
      shop.tags.forEach((tag) => {
        tagsList.add(tag);
      });
    });
    console.log(...tagsList);
    this.setState({ shops: this.props.shops, tags: Array.from(tagsList) });
  }

  async getShops() {
    await ShopService.getAllShops();
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
    console.log("update");
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
                {" "}
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
                <Shop canEditShop={true} shop={shop} />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, { setShops })(DisplayShops);
