package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.google.firebase.auth.FirebaseAuthException;

import config.FirebaseService;
import models.Product;
import models.Shop;

import java.io.IOException;
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
	
	@PostMapping("protected/createShop")
    public ResponseEntity<String> createShop(Shop shop) throws ExecutionException, InterruptedException {
		Shop shopAdded = firebaseService.addShop(shop);
		return new ResponseEntity<String>("Shop added: " + shopAdded, HttpStatus.OK);
    }
	
	@PostMapping("protected/createTestShop")
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
	
	@PostMapping("protected/deleteShop")
    public boolean deleteShop(@RequestBody String shopID) throws ExecutionException, InterruptedException, FirebaseAuthException, IOException {
		shopID = shopID.substring(0, shopID.length() - 1);
		return firebaseService.deleteShop(shopID);
    }

	@PostMapping("protected/updateShop")
    public ResponseEntity<Shop> updateShop(@RequestBody Shop shop) throws ExecutionException, InterruptedException {
		Shop shopUpdated = firebaseService.updateShop(shop);
		return new ResponseEntity<Shop>(shopUpdated, HttpStatus.OK);
    }
	
	@PostMapping("protected/updateProduct")
	public Product updateProduct(@RequestBody Product product) throws ExecutionException, InterruptedException{
		Product updatedProduct = firebaseService.updateProduct(product);
		return updatedProduct;
	}

	@GetMapping("/getProducts/{shopID}")
    public List<Product> getProducts(@PathVariable String shopID) throws ExecutionException, InterruptedException {
		return firebaseService.getProducts(shopID);
    }
	
	@PostMapping("protected/addProduct")
    public Product addProduct(@RequestBody Product product) throws ExecutionException, InterruptedException {
		Product productAdded = firebaseService.addProduct(product);
		return productAdded;
    }
	
	@PostMapping("protected/deleteProduct")
    public ResponseEntity<String> deleteProduct(@RequestBody String productID) throws ExecutionException, InterruptedException {
		productID = productID.substring(0, productID.length() - 1);
		boolean productDeleted = firebaseService.deleteProduct(productID);
		return new ResponseEntity<String>("Product deleted: " + productDeleted, HttpStatus.OK);
    }
}
