package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @PostMapping("addUser")
	public ResponseEntity addUser(@RequestBody User user) throws ExecutionException, InterruptedException {
    	boolean successful = firebaseService.addUser(user);

    	if (successful) {
			return ResponseEntity.ok().body("{\"userAdded\": true, \"message\": " +
					"\"Account successfully registered.\", \"authenticate\": true}");
		}

    	else {
			return ResponseEntity.ok().body("{\"userAdded\": false, \"message\": " +
					"\"Account Already Exists. Please try again with a different username!\", \"authenticate\": false}");
		}
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
