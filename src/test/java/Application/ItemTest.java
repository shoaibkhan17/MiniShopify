package Application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class ItemTest {
	Item item;
	String name;
	String description;
	int quantity;
	double price;
	
	@Test
	public void testName() {
		item = new Item();
		item.setName(name);
		assertEquals(name, item.getName());
	}
	
	@Test
	public void testDescription() {
		item = new Item();
		item.setDescription(description);
		assertEquals(description, item.getDescription());
	}
	
	@Test
	public void testQuantity() {
		item = new Item();
		item.setQuantity(quantity);
		assertEquals(quantity, item.getQuantity());
	}
	
	@Test
	public void testPrice() {
		item = new Item();
		item.setPrice(price);
		assertEquals(price, item.getPrice());
	}
}

