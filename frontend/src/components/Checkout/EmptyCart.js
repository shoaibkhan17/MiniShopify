import { Typography } from "@material-ui/core";

const EmptyCart = () => {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/44167/screenshots/4199208/empty-cart-rappi.png?compress=1&resize=400x300"
        alt="Empty Cart"
        style={{ width: "50%", height: "50%" }}
      ></img>
      <Typography
        variant="body1"
        style={{ fontWeight: 600, paddingTop: "10px" }}
      >
        Cart is Empty
      </Typography>
      <Typography
        variant="body5"
        style={{ fontWeight: 200, paddingTop: "10px" }}
      >
        Look like you have no items in your shopping cart.
      </Typography>
    </div>
  );
};

export default EmptyCart;
