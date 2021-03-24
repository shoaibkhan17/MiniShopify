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
@RequestMapping("api/user")
public class UserController {

	@GetMapping("/")
    public String userHome() {
	    return "<h1>Welcome User</h1>";
    }


}
