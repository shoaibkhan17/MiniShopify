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

import javax.servlet.http.Cookie;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Configuration
public class FirebaseInitialize {

	@Primary
	@Bean
	public FirebaseApp firebaseInit() throws IOException {
		FileInputStream serviceAccount = new FileInputStream("firebase-config.json");

		FirebaseOptions options = new FirebaseOptions.Builder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount))
				.setDatabaseUrl("https://minishopify-sysc4806-default-rtdb.firebaseio.com").build();

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
		FileInputStream serviceAccount = new FileInputStream("firebase-config.json");

		FirestoreOptions firestoreOptions = FirestoreOptions.newBuilder()
				.setCredentials(GoogleCredentials.fromStream(serviceAccount)).build();

		return firestoreOptions.getService();
	}
}
