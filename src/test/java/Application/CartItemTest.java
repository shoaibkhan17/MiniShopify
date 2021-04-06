package Application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import models.CartItem;

public class CartItemTest {
    CartItem cartItem;
    int quantity = 11;
    String productID = "DASDAD2SDSADHASOIUH2";

    @Test
    public void testSetQuantity() {
        cartItem = new CartItem();
        cartItem.setQuantity(quantity);
        assertEquals(quantity, cartItem.getQuantity());
    }

    @Test
    public void testGetQuantity() {
        cartItem = new CartItem(productID, quantity);
        assertEquals(quantity, cartItem.getQuantity());
    }

    @Test
    public void testSetProductID() {
        cartItem = new CartItem();
        cartItem.setProductID(productID);
        assertEquals(productID, cartItem.getProductID());
    }

    @Test
    public void testGetProductID() {
        cartItem = new CartItem(productID, quantity);
        assertEquals(productID, cartItem.getProductID());
    }
}
