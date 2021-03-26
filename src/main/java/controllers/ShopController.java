package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import config.FirebaseService;
import models.Shop;
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
	
	@PostMapping("/updateShop")
    public ResponseEntity<String> updateShop(@RequestBody Shop shop) throws ExecutionException, InterruptedException {
		boolean shopUpdated = firebaseService.updateShop(shop);
		return new ResponseEntity<String>("Shop updated: " + shopUpdated, HttpStatus.OK);
    }
}
