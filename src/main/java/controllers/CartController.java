package controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import config.FirebaseService;
import models.CartItem;

@CrossOrigin
@RestController
@RequestMapping("api/cart")
public class CartController {
	
	@Autowired
	FirebaseService firebaseService;

	@PostMapping("/checkout")
    public ArrayList<CartItem> checkOutProducts(@RequestBody ArrayList<CartItem> cartItems) throws ExecutionException, InterruptedException {
		return firebaseService.checkOutProducts(cartItems);
    }
}