package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import config.FirebaseService;
import models.Product;
import models.Shop;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.ExecutionException;

@CrossOrigin
@RestController
@RequestMapping("api/shop")
public class ShopController {
	
	@Autowired
	FirebaseService firebaseService;

	@GetMapping("/getShops")
    public List<Shop> getShops() throws ExecutionException, InterruptedException {
		return firebaseService.getShops();
    }
	
	@PostMapping("/createShop")
    public ResponseEntity<String> createShop(@RequestBody Shop shop) throws ExecutionException, InterruptedException {
		boolean shopAdded = firebaseService.addShop(shop);
		return new ResponseEntity<String>("Shop added: " + shopAdded, HttpStatus.OK);
    }
	
	@PostMapping("/createTestShop")
    public ResponseEntity<String> createTestShop() throws ExecutionException, InterruptedException {
		//test shop fields
		String name = "Kamal Store";
		String description = "A store to sell kamal";
		String picture = "https://avatars.githubusercontent.com/u/55768486?v=4";
		String ownerEmail = "kamal@minishopify.com";
		ArrayList<String> tag =  new ArrayList<>(Arrays.asList("Cute", "Illegal"));
		
		//create test shop
		Shop shop = new Shop(name,description,picture,tag,ownerEmail);
		
		//add test shop to fire store
		firebaseService.addShop(shop);
		
		return new ResponseEntity<String>("Shop added: " + true, HttpStatus.OK);
    }
	
	@PostMapping("/deleteShop")
    public ResponseEntity<String> deleteShop(@RequestBody String shopID) throws ExecutionException, InterruptedException {
		shopID = shopID.substring(0, shopID.length() - 1);
		boolean shopRemoved = firebaseService.deleteShop(shopID);
		return new ResponseEntity<String>("Shop removed: " + shopRemoved, HttpStatus.OK);
    }

	@PostMapping("/updateShop")
    public ResponseEntity<String> updateShop(@RequestBody Shop shop) throws ExecutionException, InterruptedException {
		boolean shopUpdated = firebaseService.updateShop(shop);
		return new ResponseEntity<String>("Shop updated: " + shopUpdated, HttpStatus.OK);
    }
	
	@GetMapping("/getProducts")
    public List<Product> getProducts(@RequestBody String ShopID) throws ExecutionException, InterruptedException {
		return firebaseService.getProducts(ShopID);
    }
	
	@PostMapping("/addProduct")
    public ResponseEntity<String> addProduct(@RequestBody Product product) throws ExecutionException, InterruptedException {
		boolean productAdded = firebaseService.addProduct(product);
		return new ResponseEntity<String>("Product added: " + productAdded, HttpStatus.OK);
    }
	
	@PostMapping("/deleteProduct")
    public ResponseEntity<String> deleteProduct(@RequestBody String productID) throws ExecutionException, InterruptedException {
		boolean productDeleted = firebaseService.deleteProduct(productID);
		return new ResponseEntity<String>("Product deleted: " + productDeleted, HttpStatus.OK);
    }
}
