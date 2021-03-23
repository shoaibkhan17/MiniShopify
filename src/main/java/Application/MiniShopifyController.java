package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.ExecutionException;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class MiniShopifyController {

	@Autowired
	FirebaseService firebaseService;

	@Autowired
	private repo merchants;

	@Autowired
	private shopRepo shopRepo;

	@GetMapping("merchants")
    public List<User> getMerchants() {
	    return merchants.findAll();
    }

    @PostMapping("addMerchant")
	public Merchant addMerchant(@RequestBody Merchant merchant) throws ExecutionException, InterruptedException {
		firebaseService.saveUser(merchant);
		return firebaseService.getUserDetails(merchant.getEmail());


//		return ResponseEntity.ok().body("{\"merchantAdded\": false,\"message\": \"Error: Unable to add merchant.\" ,\"authenticate\": false}");

//		if (merchant != null && !merchant.getUsername().isEmpty()) {
//			//check the repo if the username already exists
//			Merchant m = merchants.findByUsername(merchant.getUsername());
//
//			//username already exists
//			if(m != null) {
//				return ResponseEntity.ok().body("{\"merchantAdded\": false, \"message\": \"Error: Username already exists!\" , \"authenticate\": false}");
//			}
//
//			merchants.save(merchant);
//			return ResponseEntity.ok().body("{\"merchantAdded\": true,\"message\": \"Success!\"  ,\"authenticate\": true}");
//		}
//		return ResponseEntity.ok().body("{\"merchantAdded\": false,\"message\": \"Error: Unable to add merchant.\" ,\"authenticate\": false}");
	}

	@PostMapping("authenticate")
	public ResponseEntity authenticate(@RequestBody User merchant) {
		if (merchant != null) {
			User m = merchants.findByUsername(merchant.getUsername());
			if (m != null && m.getPassword().equals(merchant.getPassword())) {
				return ResponseEntity.ok().body("{\"authenticate\": true}");
			}
		}
		return ResponseEntity.ok().body("{\"authenticate\": false}");
	}

	@GetMapping("getShops")
	public List<Shop> getShops() {
		return shopRepo.findAll();
	}




}
