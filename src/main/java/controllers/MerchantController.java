package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.concurrent.ExecutionException;

@CrossOrigin
@RestController
@RequestMapping("api/merchant")
public class MerchantController {
	
	@GetMapping("/")
    public String merchantHome() {
	    return "<h1>Welcome Merchant</h1>";
    }
	
}
