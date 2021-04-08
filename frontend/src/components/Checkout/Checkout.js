import { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import Summary from "./Summary";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const cartItems = useSelector(state => [state.cartProducts]);
  
  const [items, setItems] = useState([cartItems]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    var t = 0;
    items?.map((item) => {
      t = t + item.cost;
    });
    setTotal(t);
  }, [items]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        paddingTop: "10%",
      }}
    >
      <Grid>
        <Card
          variant="outlined"
          style={{
            minWidth: "40vw",
            minHeight: "50vh",
            borderRadius: "5px",
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
            >{`Cart (${items.length} items)`}</Typography>
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
                    <Typography style={{ fontSize: "12px" }}>
                      Products
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
                    <Typography style={{ fontSize: "12px" }}>
                      Quantity
                    </Typography>
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
                    <CartItem
                      item={item}
                      items={items}
                      total={total}
                      setTotal={setTotal}
                    />
                  );
                })}
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid style={{ paddingLeft: "20px" }}>
        <Summary items={items} total={total} />
      </Grid>
    </div>
  );
};

export default Checkout;
