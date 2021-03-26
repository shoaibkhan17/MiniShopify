package controllers;

import com.google.firebase.auth.*;
import config.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

import models.User;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin
@RestController
@RequestMapping("api/auth")
@ComponentScan(basePackages = { "config" })
public class AuthenticateController {

	@Autowired
	FirebaseInitialize firebase;

	@PostMapping("/signIn")
	public void signIn(@RequestBody User user) {

//
//		System.out.println("HELLO TRYING TO SIGN IN");
//
//
//
//		String idToken = securityService.getBearerToken(request);
//		int sessionExpiryDays = secProps.getFirebaseProps().getSessionExpiryInDays();
//		long expiresIn = TimeUnit.DAYS.toMillis(sessionExpiryDays);
//		SessionCookieOptions options = SessionCookieOptions.builder().setExpiresIn(expiresIn).build();
//
//		try {
//			String sessionCookieValue = FirebaseAuth.getInstance().createSessionCookie(idToken, options);
//			cookieUtils.setSecureCookie("session", sessionCookieValue, sessionExpiryDays);
//			cookieUtils.setCookie("authenticated", Boolean.toString(true), sessionExpiryDays);
//			System.out.println("Signed IN");
//		} catch (FirebaseAuthException e) {
//			e.printStackTrace();
//		} catch (Exception e) {
//			e.printStackTrace();
//			System.out.println("didn't make it bois");
//		}
	}

	@PostMapping("/signOut")
	public void signOut(@RequestBody User user) {
//		if (securityService.getCredentials().getType() == CredentialType.SESSION
//				&& secProps.getFirebaseProps().isEnableLogoutEverywhere()) {
//			try {
//				FirebaseAuth.getInstance().revokeRefreshTokens(securityService.getUser().getUid());
//			} catch (FirebaseAuthException e) {
//				e.printStackTrace();
//			}
//		}
//		cookieUtils.deleteSecureCookie("session");
//		cookieUtils.deleteCookie("authenticated");
	}

//	@PostMapping("/createAccount")
//	public String createAccount(@RequestBody User user) throws ExecutionException, InterruptedException, IOException {
//
//		UserRecord.CreateRequest newUser = new UserRecord.CreateRequest();
//		newUser.setEmail(user.getEmail());
//		newUser.setDisplayName(user.getName());
//		newUser.setPassword(user.getPassword());
//
//		try {
//			UserRecord createdUser = firebase.getAuth().createUser(newUser);
//			System.out.println("created user: " + user);
//
//			// Generate JWT token for the given user
//			return firebase.getAuth().createCustomToken(createdUser.getUid());
//
//		} catch (FirebaseAuthException e) {
//			System.out.println("unable to create: " + e);
//			e.printStackTrace();
//			return "";
//		}
//	}


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
		
//		System.out.println("Creating user: " + user);
//
//		try {
//			UserRecord.CreateRequest temp = new UserRecord.CreateRequest();
//			temp.setEmail(user.getEmail());
//			temp.setDisplayName(user.getName());
//			temp.setPassword(user.getPassword());
//
//			UserRecord test = firebase.getAuth().createUser(temp);
//
//			Long testTokenTimeStamp = test.getTokensValidAfterTimestamp();
//
//			System.out.println(test.getTokensValidAfterTimestamp());
//			String myToken = firebase.getAuth().createCustomToken(test.getUid());
//			System.out.println("token:" + myToken);
//			System.out.println("created user: " + test.toString());
////			System.out.println("did something: " + test);
//
//		} catch (Exception e) {
//			System.out.println("error: " + e);
//		}

//		FirebaseInitialize firebase = new FirebaseInitialize();
//	}
}