package config;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.auth.ExportedUserRecord;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.ListUsersPage;
import com.google.firebase.cloud.FirestoreClient;

import models.Shop;
import models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class FirebaseService {

	@Autowired
	FirebaseInitialize firebase;

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


	public boolean deleteAllUsers() throws ExecutionException, InterruptedException, FirebaseAuthException, IOException{
		ListUsersPage page = firebase.getAuth().listUsers(null);

		while (page != null) {   
			for (ExportedUserRecord user : page.getValues()) {     
				firebase.getAuth().deleteUser(user.getUid());
			}
		}
		return false;
	}

	public boolean addShop(Shop shop) throws ExecutionException, InterruptedException {
		Firestore firebaseDB = FirestoreClient.getFirestore();
		DocumentReference documentReference = firebaseDB.collection("shops").document();
		
		//set shop id from document (auto-generated from firebase)
		shop.setShopId(documentReference.getId());
		
		//add a new shop
		documentReference.set(shop);
		
		ApiFuture<DocumentSnapshot> future = documentReference.get();
		DocumentSnapshot document = future.get();
		return true;
	}
	
	/**
	 * 
	 * @return all shops stored in firestore DB
	 * @throws ExecutionException
	 * @throws InterruptedException
	 */
	public ArrayList<Shop> getShops() throws ExecutionException, InterruptedException {
		ArrayList<Shop> allShops = new ArrayList<Shop>();
		
		Firestore firebaseDB = FirestoreClient.getFirestore();
		ApiFuture<QuerySnapshot> future = firebaseDB.collection("shops").get();
		
		List<QueryDocumentSnapshot> documents = future.get().getDocuments();
		
		for (QueryDocumentSnapshot document : documents) {
			  System.out.println(document.getId() + " => " + document.toObject(Shop.class));
			  allShops.add(document.toObject(Shop.class));
		}
		
		return allShops;
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
