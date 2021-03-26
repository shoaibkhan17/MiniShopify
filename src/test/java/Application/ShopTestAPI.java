package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.concurrent.ExecutionException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import config.FirebaseInitialize;
import config.FirebaseService;
import models.Shop;

public class ShopTestAPI {

	FirebaseService firebaseService = new FirebaseService();
	FirebaseInitialize firebaseInit = new FirebaseInitialize();

	//test shop fields
	String name = "Test Store";
	String description = "A test store";
	String picture = "https://avatars.githubusercontent.com/u/55768486?v=4";
	String ownerEmail = "test@minishopify.com";
	String shopID = "TEST ID";
	ArrayList<String> tag =  new ArrayList<>(Arrays.asList("test"));

	ArrayList<Shop> allShops;
	boolean shopsEmpty = false;

	@BeforeEach
	public void setUp() throws Exception {
		firebaseInit.firebaseInit();
	}

	/**
	 * Get all shops, check if the list of shops returned from firestore is not null.
	 * @throws ExecutionException
	 * @throws InterruptedException
	 */
	@Test
	public void testGetShops() throws ExecutionException, InterruptedException {
		allShops = firebaseService.getShops();
		assertEquals(shopsEmpty, allShops.isEmpty());
	}

//	/**
//	 * Create a test shop
//	 * @throws ExecutionException
//	 * @throws InterruptedException
//	 */
//	@Test
//	public void testCreateShop() throws ExecutionException, InterruptedException {
//		//create test shop
//		Shop shop = new Shop(name,description,picture,tag,ownerEmail);
//		shop.setShopID(shopID);
//		
//		//add test shop to fire store
//		boolean shopAdded = firebaseService.addShop(shop);
//
//		assertEquals(true, shopAdded);
//	}
//
//	/**
//	 * Delete the test shop
//	 * @throws ExecutionException
//	 * @throws InterruptedException
//	 */
//	@Test
//	public void deleteTestShop() throws ExecutionException, InterruptedException {
//		//create test shop
//		Shop shop = new Shop(name,description,picture,tag,ownerEmail);
//
//		//add test shop to fire store
//		boolean shopAdded = firebaseService.addShop(shop);
//
//		assertEquals(true, shopAdded);
//	}
	
}
