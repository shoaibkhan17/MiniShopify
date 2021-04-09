import {
  Button,
  Card,
  CardContent,
  createMuiTheme,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import { SHIPPING_COST, PRIMARY_THEME_COLOR } from "../../constants/constants";

const theme = createMuiTheme({
  spacing: [0, 4, 8, 16, 32, 64],
});

class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Card
          variant="outlined"
          style={{
            minWidth: "15vw",
            maxHeight: "40vh",
            boxShadow:
              "rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px",
            borderRadius: "16px",
          }}
        >
          <CardContent>
            <Grid container>
              <Typography variant="h6">Cart Summary</Typography>
            </Grid>
            <Grid container style={{ paddingTop: "15px" }}>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontSize: "15px", fontWeight: "lighter" }}
                >
                  Sub Total
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  {this.props.total}
                </Typography>
              </Grid>
            </Grid>
            <Grid container style={{ paddingTop: "15px" }}>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontSize: "15px", fontWeight: "lighter" }}
                >
                  Tax
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  13%
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              style={{ paddingTop: "15px", paddingBottom: "10px" }}
            >
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontSize: "15px", fontWeight: "lighter" }}
                >
                  Shipping
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontSize: "15px", fontWeight: "bold" }}
                >
                  {SHIPPING_COST}
                </Typography>
              </Grid>
            </Grid>
            <Divider />
            <Grid container style={{ paddingTop: "15px" }}>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontSize: "15px", fontWeight: "lighter" }}
                >
                  Total
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Typography
                  variant="body1"
                  style={{ fontSize: "15px", fontWeight: "bold", color: "red" }}
                >
                  {(this.props.total * 1.13 + SHIPPING_COST).toFixed(2)}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          style={{
            padding: "10px",
            margin: theme.spacing(3, 0, 2),
            backgroundColor: PRIMARY_THEME_COLOR,
            borderRadius: "12px",
          }}
          onClick={this.props.checkoutProducts}
        >
          Checkout
        </Button>
      </>
    );
  }
}

export default Summary;
