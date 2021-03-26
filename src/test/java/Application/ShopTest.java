package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.ArrayList;

import models.Product;
import org.junit.jupiter.api.Test;

import models.Shop;

public class ShopTest {
	Shop shop;
	String name ="Kamal2";
	String description = "Good";
	int shopID = 55;
	ArrayList<Product> shopProducts;
	Long id = 5678L;

	@Test
	public void testName() {
		shop = new Shop();
		shop.setName(name);
		assertEquals(name, shop.getName());
	}
	
	@Test
	public void testDescription() {
		shop = new Shop();
		shop.setDescription(description);
		assertEquals(description, shop.getDescription());
	}
	
	@Test
	public void testShopID() {
		shop = new Shop();
		shop.setShopID(shopID);
		assertEquals(shopID, shop.getShopID());
	}
	
	@Test
	public void testShopItems() {
		shop = new Shop();
		shop.setShopItems(shopProducts);
		assertEquals(shopProducts, shop.getShopItems());
	}
}



