package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import models.Shop;


public class ShopTest {
	Shop shop;
	String name ="Kamal2";
	String description = "Good";
	Long shopID = Long.valueOf(55);

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
		shop.setShopId(shopID);
		assertEquals(shopID, shop.getShopId());
	}

}







