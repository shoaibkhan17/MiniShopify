package config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.FirestoreOptions;
import com.google.common.collect.ImmutableList;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.FirebaseDatabase;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class FirebaseInitialize {
	
	@Autowired
	private SecurityProperties secProps;
	
	@Autowired
	private FirebaseProperties firebaseProps;
	
	public static final List<String> publicAPIS = ImmutableList.of("/api/shop/getShops","/api/auth/signIn","/api/auth/createAccount");
	public static final List<String> allowedMethods = ImmutableList.of("GET","POST");
	public static final List<String> allowedOrigins = ImmutableList.of("*");
	public static final List<String> allowedHeaders = ImmutableList.of("*");
	public static final List<String> exposedHeaders = ImmutableList.of("*");
	
	@Primary
	@Bean
	public FirebaseApp getfirebaseApp() throws IOException {
		secProps.setAllowedPublicApis(publicAPIS);
		secProps.setFirebaseProps(firebaseProps);
		secProps.setAllowedMethods(allowedMethods);
		secProps.setAllowedOrigins(allowedOrigins);
		secProps.setAllowedHeaders(allowedHeaders);
		secProps.setExposedHeaders(exposedHeaders);
		
		FileInputStream serviceAccount = new FileInputStream("firebase-config.json");

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.setDatabaseUrl(secProps.getFirebaseProps().getDatabaseUrl()).build();

		if (FirebaseApp.getApps().isEmpty()) {
			FirebaseApp.initializeApp(options);
		}

		return FirebaseApp.getInstance();
	}

	@Bean
	public FirebaseAuth getAuth() throws IOException {
		return FirebaseAuth.getInstance(getfirebaseApp());
	}

	@Bean
	public FirebaseDatabase firebaseDatabase() throws IOException {
		return FirebaseDatabase.getInstance();
	}

	@Bean
	public Firestore getDatabase() throws IOException {
		FileInputStream serviceAccount = new FileInputStream("firebase-config.json");

		FirestoreOptions firestoreOptions = FirestoreOptions.newBuilder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount)).build();

		return firestoreOptions.getService();
	}
}
