package controllers;

import config.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

import models.User;

@CrossOrigin
@RestController
@RequestMapping("api/auth")
@ComponentScan(basePackages = { "config" })
public class AuthenticateController {

	@Autowired
	FirebaseInitialize firebase;
	
	@PostMapping("/signOut")
	public void signOut(@RequestBody User user) {
	}

}