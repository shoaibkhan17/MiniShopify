import React from "react";
import UserService from "../services/UserService";
import "react-bulma-components/dist/react-bulma-components.min.css";
import { Box, Button } from "react-bulma-components";
import TopMenu from "./TopMenu";

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
    };

    this.test = this.test.bind(this);
    this.getByID = this.getByID.bind(this);
  }

  componentDidMount() {
    this.test();
  }

  test() {
    UserService.getShops().then((response) => {
      this.setState({ shops: response.data });
    });
  }

  getByID() {
    const value = this.state.shopidvalue;
    const temp = this.state.shops.find(
      (shop) => shop.shopID === parseInt(value)
    );
    console.log(temp);
  }

  render() {
    return (
      <div>
        <TopMenu title={"Shops"} />

        <Box className="box has-text-white has-background-black-ter">
          <div class="field">
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Search by Merchant ID"
                onChange={(event) =>
                  this.setState({ shopidvalue: event.target.value })
                }
              ></input>
              <Button onClick={this.getByID} className="is-primary">
                Search
              </Button>
            </div>
          </div>
        </Box>
        <h1> Shops Table </h1>
        <table class="table">
          <thead>
            <tr>
              <td> Shop Name </td>
              <td> Shop Description </td>
              <td> Shop ID </td>
              <td> Shop Items </td>
            </tr>
          </thead>
          <tbody>
            {this.state.shops.map((shop) => (
              <tr key={shop.shopID}>
                <td> {shop.name} </td>
                <td> {shop.description} </td>
                <td> {shop.shopID} </td>
                <td> {shop.shopItems} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Shop;
