package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import config.FirebaseService;
import models.User;

import java.util.concurrent.ExecutionException;

@CrossOrigin
@RestController
@RequestMapping("api/auth")
@ComponentScan(basePackages = {"config"})
public class AuthenticateController {
	
	@Autowired
	FirebaseService firebaseService;

	@PostMapping("/signIn")
	public ResponseEntity signIn(@RequestBody User user) {
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
	
	@PostMapping("/signOut")
	public ResponseEntity signOut(@RequestBody User user) {
		return ResponseEntity.ok().body("{\"authenticate\": true}");
	}
	
	 @PostMapping("/createAccount")
		public ResponseEntity createAccount(@RequestBody User user) throws ExecutionException, InterruptedException {
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
	
}