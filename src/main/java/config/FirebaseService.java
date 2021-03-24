package config;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;

import models.User;

import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class FirebaseService {

    public boolean addUser(User user) throws ExecutionException, InterruptedException {
        Firestore firebaseDB = FirestoreClient.getFirestore();
        DocumentReference documentReference = firebaseDB.collection("users").document(user.getEmail());
        ApiFuture<DocumentSnapshot> future = documentReference.get();
        DocumentSnapshot document = future.get();

        if (!document.exists()) {
            documentReference.set(user);
            return true;
        }

        return false;
    }

    public User getUserDetails(String email) throws ExecutionException, InterruptedException {
        Firestore firebaseDB = FirestoreClient.getFirestore();
        DocumentReference documentReference = firebaseDB.collection("users").document(email);
        ApiFuture<DocumentSnapshot> future = documentReference.get();

        DocumentSnapshot document = future.get();

        if (document.exists()) {
            User user = document.toObject(User.class);
            return user;
        }

        else {
            return null;
        }
    }
}
