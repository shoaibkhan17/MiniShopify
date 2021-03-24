import React from "react";
import { Box, Section } from "react-bulma-components";
import "react-bulma-components/dist/react-bulma-components.min.css";

class TopMenu extends React.Component {
  render() {
    return (
      <div>
        <Section className="has-background-black-ter">
          <Box>
            <h1 className="title">Mini Shopify</h1>
            <p className="subtitle">{this.props.title}</p>
          </Box>
        </Section>
      </div>
    );
  }
}

export default TopMenu;
