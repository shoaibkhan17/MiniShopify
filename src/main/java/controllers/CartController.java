package controllers;

import java.util.Map;
import java.util.concurrent.ExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import config.FirebaseService;

@CrossOrigin
@RestController
@RequestMapping("api/cart")
public class CartController {
	
	@Autowired
	FirebaseService firebaseService;

	@GetMapping("/checkOut")
    public Map<String, Integer> checkOutProducts(@RequestBody Map<String,Integer> cartProducts) throws ExecutionException, InterruptedException {
		return firebaseService.checkOutProducts(cartProducts);
    }
}