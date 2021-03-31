import { useState } from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

const staticItems = [
  {
    name: "Strawberry Cake",
    description: "Made with milk and natural ingrediants",
    cost: 50,
    quantity: 1,
    quantitySelected: 1,
    picture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/strawberry-cake-jpg-1522267153.jpg",
  },
  {
    name: "chocolate chip cookies",
    description: "Delicious Cookies made with milk",
    cost: 30,
    quantity: 10,
    quantitySelected: 4,
    picture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2GCYX2WAkr1UsFJBLvO0Vzaa81MVgWUySrAG-uDFOH3vD8gYonaN6rFuZ7Suq9V3vVI&usqp=CAU",
  },
];

const Checkout = () => {
  const [items, setItems] = useState([...staticItems]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        variant="outlined"
        style={{
          minWidth: "40vw",
          minHeight: "50vh",
          boxShadow: "-2px 0px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        <CardContent>
          <Typography
            style={{
              display: "flex",
              justifyContent: "flex-start",
            }}
            variant="body1"
          >{`Card (0 items)`}</Typography>
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              <Grid
                container
                style={{
                  backgroundColor: "#EEF1F1",
                  height: "40px",
                  width: "100%",
                  borderRadius: "5px",
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
                  }}
                >
                  <Typography style={{ fontSize: "12px" }}>Products</Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography style={{ fontSize: "12px" }}>Price</Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <Typography style={{ fontSize: "12px" }}>Quantity</Typography>
                </Grid>
                <Grid
                  item
                  xs={2}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography style={{ fontSize: "12px" }}>Total</Typography>
                </Grid>
              </Grid>
              {items.map((item) => {
                return (
                  <CartItem item={item} items={items} setItems={setItems} />
                );
              })}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Checkout;
