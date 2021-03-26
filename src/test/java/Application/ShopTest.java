package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.Test;
import models.Shop;


public class ShopTest {
	Shop shop;
	String name = "Orange Store";
	String ID = "testID";
	String description = "A store to sell oranges";
	String picture = "picture url";
	String ownerEmail = "demo@minishopify.com";
	ArrayList<String> tags =  new ArrayList<>(Arrays.asList("Orange", "Circle", "Fruits"));
	
	@Test
	public void testName() {
		shop = new Shop();
		shop.setName(name);
		assertEquals(name, shop.getName());
	}
	
	@Test
	public void testID() {
		shop = new Shop();
		shop.setShopID(ID);
		assertEquals(ID, shop.getShopID());
	}

	@Test
	public void testDescription() {
		shop = new Shop();
		shop.setDescription(description);
		assertEquals(description, shop.getDescription());
	}
	
	@Test
	public void testPicture() {
		shop = new Shop();
		shop.setPicture(picture);
		assertEquals(picture, shop.getPicture());
	}
	
	@Test
	public void testUserEmail() {
		shop = new Shop();
		shop.setOwnerEmail(ownerEmail);
		assertEquals(ownerEmail, shop.getOwnerEmail());
	}
	
	@Test
	public void testTags() {
		shop = new Shop();
		shop.setTags(tags);
		assertEquals(tags, shop.getTags());
	}
}







