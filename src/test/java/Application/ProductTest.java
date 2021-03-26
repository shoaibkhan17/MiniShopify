package Application;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import models.Product;

public class ProductTest {
	Product product;
	String name = "Apple";
	String description = "Fresh";
	int quantity = 1;
	double cost = 2.0;

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

