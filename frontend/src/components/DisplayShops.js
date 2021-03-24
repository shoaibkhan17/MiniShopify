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
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { shopsResponse } from "../responses/shopsResponse";
import DisplayShopTags from "./displayShopTags";

class DisplayShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: false,
      anchorEl: null,
    };

    this.openShop = this.openShop.bind(this);
    this.editShop = this.editShop.bind(this);
  }

  componentDidMount() {}

  openShop(shop) {
    console.log("open shop: " + shop.name);
  }

  editShop(shop) {
    console.log("edit shop: " + shop.name);
  }

  render() {
    return (
      <Grid container spacing={5} style={{ flexGrow: 1, margin: "10px" }}>
        {shopsResponse.map((shop) => (
          <Grid item key={shop.ID}>
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
                  <IconButton onClick={() => this.editShop(shop)}>
                    <MoreVertIcon />
                  </IconButton>
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
    );
  }
}

export default connect(null, {})(DisplayShops);
