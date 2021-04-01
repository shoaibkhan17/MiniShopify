import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
  CardMedia,
  CardContent,
  Zoom,
} from "@material-ui/core";
import StorefrontIcon from "@material-ui/icons/Storefront";

const mapStateToProps = (state) => {
  return { shops: state.shops };
};

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopID: this.props.match ? this.props.match.params.shopID : "",
      myShop: null,
    };
  }

  componentDidUpdate(prevProps, nextState) {}

  render() {
    return (
      <div>
        {/* {this.props.canEditShop && this.state.currentShop && (
          <EditShop
            selectedShop={this.state.currentShop}
            onClose={() => this.closeEditShop()}
          />
        )} */}
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
            title={this.props.product && this.props.product.name}
            // action={
            //   this.props.canEditShop && (
            //     <Tooltip TransitionComponent={Zoom} title="Edit Shop">
            //       <IconButton
            //         onClick={() => this.openEditShop(this.props.shop)}
            //       >
            //         <MoreVertIcon color="secondary" />
            //       </IconButton>
            //     </Tooltip>
            //   )
            // }
          />
          <CardMedia
            style={{ height: 0, paddingTop: "56.25%" }}
            image={this.props.product && this.props.product.picture}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.props.product && this.props.product.description}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps, {})(Product);
