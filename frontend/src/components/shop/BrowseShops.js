import React from "react";
import DisplayShops from "./DisplayShops";

class BrowseShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <DisplayShops shops={this.props.shops} canEdit={this.props.canEdit} />
      </div>
    );
  }
}

export default BrowseShops;
