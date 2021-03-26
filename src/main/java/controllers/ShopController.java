package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import config.FirebaseInitialize;
import config.FirebaseService;
import models.Shop;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;

@CrossOrigin
@RestController
@RequestMapping("api/shop")
public class ShopController {
	
	@Autowired
	FirebaseService firebaseService;

	
	@GetMapping("/getShops")
    public String getShops() {
	    return "<h1>List of Shops</h1>";
    }
	
	@PostMapping("/createShop")
    public ResponseEntity<String> createShop(@RequestBody Shop shop) {
		return ResponseEntity.ok().body("{\"shopAdded\": false, \"message\": "
				+ "\"Shop could not be created.\"}");
    }
	
	@PostMapping("/updateShop")
    public String updateShop() {
	    return "<h1>Update Shop</h1>";
    }
}
