import { Avatar, Chip, Grid, IconButton, Typography } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";
import { useState } from "react";

const CartItem = (props) => {
  const item = props.item;
  const [quantity, setQuantity] = useState(item.quantitySelected);
  return (
    <Grid
      container
      style={{
        backgroundColor: "#FAFAFA",
        height: "50px",
        width: "100%",
        alignItems: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginTop: "10px",
      }}
    >
      <Grid
        item
        xs={5}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Avatar src={item.picture} />
        <Typography style={{ fontSize: "12px", paddingLeft: "5px" }}>
          {item.name}
        </Typography>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography style={{ fontSize: "12px" }}>{item.cost}</Typography>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          justifyContent: "center",
          borderRadius: "5px",
          backgroundColor: "#EEF1F1",
          height: "20px",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => {
            setQuantity(quantity - 1);
            props.setTotal(props.total - item.cost);
          }}
        >
          <RemoveIcon fontSize="small" />
        </IconButton>
        <Typography style={{ fontSize: "12px" }}>{quantity}</Typography>
        <IconButton
          onClick={() => {
            setQuantity(quantity + 1);
            props.setTotal(props.total + item.cost);
          }}
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid
        item
        xs={2}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography style={{ fontSize: "12px" }}>
          {quantity * item.cost}
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          onClick={() => {
            const items = props.items.filter(
              (_item) => _item.name != item.name
            );

            props.setItems([...items]);
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartItem;
