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

	/*
	@GetMapping("merchants")
    public List<User> getMerchants() {
	    return merchants.findAll();
    }
    */

    @PostMapping("addMerchant")
	public User addUser(@RequestBody User user) throws ExecutionException, InterruptedException {
		System.out.println("Got a request to add a user: " + user);
    	firebaseService.saveUser(user);
		return firebaseService.getUserDetails(user.getEmail());


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
	public ResponseEntity authenticate(@RequestBody User user) {
		/*
		if (user != null) {
			User m = merchants.findByUsername(user.getUsername());
			if (m != null && m.getPassword().equals(user.getPassword())) {
				return ResponseEntity.ok().body("{\"authenticate\": true}");
			}
		}
		*/
		
		//AUTHENTICATING EVERYONE, FIREBASE WILL TAKE CARE OF THIS
		return ResponseEntity.ok().body("{\"authenticate\": true}");
	}

	/*
	@GetMapping("getShops")
	public List<Shop> getShops() {
		return shopRepo.findAll();
	}
	*/

}
