package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.concurrent.ExecutionException;

@CrossOrigin
@RestController
@RequestMapping("api/shop")
public class ShopController {
	
	@GetMapping("/getShops")
    public String getShops() {
	    return "<h1>List of Shops</h1>";
    }
	
	@PostMapping("/createShop")
    public String createShop() {
	    return "<h1>Create Shop</h1>";
    }
	
	@PostMapping("/updateShop")
    public String updateShop() {
	    return "<h1>Update Shop</h1>";
    }
}
