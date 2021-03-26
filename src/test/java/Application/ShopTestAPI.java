package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import config.FirebaseInitialize;
import config.FirebaseService;
import models.Shop;

public class ShopTestAPI {

	FirebaseService firebaseService = new FirebaseService();
	FirebaseInitialize firebaseInit = new FirebaseInitialize();
	
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
	public void testGetShop() throws ExecutionException, InterruptedException {
		allShops = firebaseService.getShops();
		assertEquals(shopsEmpty, allShops.isEmpty());
	}
}
