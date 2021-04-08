package config;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.FirestoreOptions;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.database.FirebaseDatabase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import java.io.FileInputStream;
import java.io.IOException;

@Configuration
public class FirebaseInitialize {

	private static final String FIREBASE_CONFIG_FILE_PATH = "firebase-config.json";
	private static final String FIREBASE_DATABASE_URL = "https://minishopify-sysc4806-default-rtdb.firebaseio.com";
	
	@Primary
	@Bean
	public FirebaseApp firebaseInit() throws IOException {
		FileInputStream serviceAccount = new FileInputStream(FIREBASE_CONFIG_FILE_PATH);

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.setDatabaseUrl(FIREBASE_DATABASE_URL).build();

		if (FirebaseApp.getApps().isEmpty()) {
			FirebaseApp.initializeApp(options);
		}

		return FirebaseApp.getInstance();
	}

	@Bean
	public FirebaseAuth getAuth() throws IOException {
		return FirebaseAuth.getInstance(firebaseInit());
	}

	@Bean
	public FirebaseDatabase firebaseDatabase() throws IOException {
		return FirebaseDatabase.getInstance();
	}

	@Bean
	public Firestore getDatabase() throws IOException {
		FileInputStream serviceAccount = new FileInputStream(FIREBASE_CONFIG_FILE_PATH);

		FirestoreOptions firestoreOptions = FirestoreOptions.newBuilder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount)).build();

		return firestoreOptions.getService();
	}
}
