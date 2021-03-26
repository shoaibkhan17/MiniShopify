package Application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import models.Product;

public class ProductTest {
	Product product;
	String name;
	String description;
	int quantity;
	double cost;

	@Test
	public void testName() {
		product = new Product();
		product.setName(name);
		assertEquals(name, product.getName());
	}

	@Test
	public void testDescription() {
		product = new Product();
		product.setDescription(description);
		assertEquals(description, product.getDescription());
	}

	@Test
	public void testQuantity() {
		product = new Product();
		product.setQuantity(quantity);
		assertEquals(quantity, product.getQuantity());
	}

	@Test
	public void testPrice() {
		product = new Product();
		product.setCost(cost);
		assertEquals(cost, product.getCost());
	}
}

