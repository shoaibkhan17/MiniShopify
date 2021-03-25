package controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.SessionCookieOptions;

import config.CookieService;
import config.Credentials.CredentialType;
import config.FirebaseService;
import config.SecurityProperties;
import config.SecurityService;
import models.User;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin
@RestController
@RequestMapping("api/auth")
@ComponentScan(basePackages = { "config" })
public class AuthenticateController {

	@Autowired
	SecurityService securityService;
	
	@Autowired
	CookieService cookieUtils;
	
	@Autowired
	SecurityProperties secProps;

	@PostMapping("/signIn")
	public void signIn(HttpServletRequest request) {
		String idToken = securityService.getBearerToken(request);
		int sessionExpiryDays = secProps.getFirebaseProps().getSessionExpiryInDays();
		long expiresIn = TimeUnit.DAYS.toMillis(sessionExpiryDays);
		SessionCookieOptions options = SessionCookieOptions.builder().setExpiresIn(expiresIn).build();

		try {
			String sessionCookieValue = FirebaseAuth.getInstance().createSessionCookie(idToken, options);
			cookieUtils.setSecureCookie("session", sessionCookieValue, sessionExpiryDays);
			cookieUtils.setCookie("authenticated", Boolean.toString(true), sessionExpiryDays);
		} catch (FirebaseAuthException e) {
			e.printStackTrace();
		}
	}

	@PostMapping("/signOut")
	public void signOut(@RequestBody User user) {
		if (securityService.getCredentials().getType() == CredentialType.SESSION
				&& secProps.getFirebaseProps().isEnableLogoutEverywhere()) {
			try {
				FirebaseAuth.getInstance().revokeRefreshTokens(securityService.getUser().getUid());
			} catch (FirebaseAuthException e) {
				e.printStackTrace();
			}
		}
		cookieUtils.deleteSecureCookie("session");
		cookieUtils.deleteCookie("authenticated");
	}

	
	@PostMapping("/createAccount")
	public void createAccount(@RequestBody User user) throws ExecutionException, InterruptedException {
//		
//		boolean successful = firebaseService.addUser(user);
//
//		if (successful) {
//			return ResponseEntity.ok().body("{\"userAdded\": true, \"message\": "
//					+ "\"Account successfully registered.\", \"authenticate\": true}");
//		}
//
//		else {
//			return ResponseEntity.ok().body("{\"userAdded\": false, \"message\": "
//					+ "\"Account Already Exists. Please try again with a different username!\", \"authenticate\": false}");
//		}
		
		System.out.println("Creating user: " + user);
	}
	

}