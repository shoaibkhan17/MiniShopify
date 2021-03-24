import React from "react";
import { Grid, Chip } from "@material-ui/core";

class DisplayShopTags extends React.Component {
  render() {
    return (
      <Grid container justify="center" spacing={1} style={{ flexGrow: 1 }}>
        {this.props.tags.length !== 0 ? (
          this.props.tags.map((tag) => (
            <Grid item key={tag}>
              <Chip
                label={tag}
                size="small"
                style={{
                  background:
                    "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                  color: "black",
                }}
              />
            </Grid>
          ))
        ) : (
          <Grid item>
            <Chip
              label="no tags"
              size="small"
              style={{
                background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                color: "black",
              }}
            />
          </Grid>
        )}
      </Grid>
    );
  }
}

export default DisplayShopTags;
