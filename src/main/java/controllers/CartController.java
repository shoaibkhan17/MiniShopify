package controllers;

import java.util.List;
import java.util.concurrent.ExecutionException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import config.FirebaseService;
import models.Product;
import models.Shop;

@CrossOrigin
@RestController
@RequestMapping("api/cart")
public class CartController {
	
	@Autowired
	FirebaseService firebaseService;

	@GetMapping("/getProducts")
    public List<Product> getProducts() throws ExecutionException, InterruptedException {
		return null;
    }
	
	@PostMapping("/addProduct")
    public ResponseEntity<String> removeProduct(@RequestBody Shop shop) throws ExecutionException, InterruptedException {
		return new ResponseEntity<String>("Product added: ", HttpStatus.OK);
    }
	
	@PostMapping("/removeProduct")
    public ResponseEntity<String> updateShop(@RequestBody Shop shop) throws ExecutionException, InterruptedException {
		
		return new ResponseEntity<String>("Product removed: ", HttpStatus.OK);
    }
}