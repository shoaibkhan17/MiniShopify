package Application;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class FirebaseService {
    public String saveUser(User user) throws ExecutionException, InterruptedException {
        Firestore firebaseDB = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = firebaseDB.collection("users").document(user.getName()).set(user);
        return collectionsApiFuture.get().getUpdateTime().toString();
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
