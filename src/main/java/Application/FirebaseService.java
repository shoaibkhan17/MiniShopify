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
    public String saveUser(Merchant merchant) throws ExecutionException, InterruptedException {
        Firestore firebaseDB = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionsApiFuture = firebaseDB.collection("users").document(merchant.getName()).set(merchant);
        return collectionsApiFuture.get().getUpdateTime().toString();
    }

    public Merchant getUserDetails(String email) throws ExecutionException, InterruptedException {
        Firestore firebaseDB = FirestoreClient.getFirestore();
        DocumentReference documentReference = firebaseDB.collection("users").document(email);
        ApiFuture<DocumentSnapshot> future = documentReference.get();

        DocumentSnapshot document = future.get();

        if (document.exists()) {
            Merchant merchant = document.toObject(Merchant.class);
            return merchant;
        }

        else {
            return null;
        }
    }
}
