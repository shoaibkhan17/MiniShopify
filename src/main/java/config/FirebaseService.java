package config;

import com.google.api.core.ApiFuture;
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
import models.Product;
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
		//check if the given shop has all the required fields
		if(shop != null && shop.isShopNotEmpty()) {
			Firestore firebaseDB = FirestoreClient.getFirestore();
			DocumentReference documentReference = firebaseDB.collection("shops").document();

			if(shop.getShopID() == null) {
				//set shop id from document (auto-generated from firebase)
				shop.setShopID(documentReference.getId());
			}

			//add a new shop
			documentReference.set(shop);
			return true;
		}

		return false;
	}

	public boolean deleteShop(String shopID, String userID) throws ExecutionException, InterruptedException, FirebaseAuthException, IOException {
		Firestore firebaseDB = FirestoreClient.getFirestore();
		DocumentReference shopReference = firebaseDB.collection("shops").document(shopID);
		ApiFuture<DocumentSnapshot> shopSnapshot = shopReference.get();
		DocumentSnapshot shopDocument = shopSnapshot.get();
		
		Shop shop = null;
		if(shopDocument.exists()) {
			//get the shop object
			shop = shopDocument.toObject(Shop.class);
			String ownerEmail = shop.getOwnerEmail();
			
			//check if the userID is the equal to the shop owner's email
			if(userID.equals(ownerEmail)) {
				//asynchronously retrieve all documents
				ApiFuture<QuerySnapshot> productQuerySnapshot = firebaseDB.collection("products").get();
				List<QueryDocumentSnapshot> productDocuments = productQuerySnapshot.get().getDocuments();
				
				for (QueryDocumentSnapshot productDoc : productDocuments) {
					Product product = productDoc.toObject(Product.class);
					
					//check the shopID of the product
					if(product.getShopID().equals(shopID)) {
						//delete the product associated to the shop
						firebaseDB.collection("products").document(product.getProductID()).delete();
					}
				}
				
				shopReference.delete();
				return true;
			}
		}
		return false;
	}

	public boolean updateShop(Shop shop) throws ExecutionException, InterruptedException {
		//check if the given shop has all the required fields
		if(shop != null && shop.isShopNotEmpty()) {
			Firestore firebaseDB = FirestoreClient.getFirestore();
			DocumentReference documentReference = firebaseDB.collection("shops").document(shop.getShopID());

			//update the shop with the new fields
			documentReference.set(shop);			
			return true;
		}

		return false;
	}


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


	public ArrayList<Product> getProducts(String ShopID) throws ExecutionException, InterruptedException {
		ArrayList<Product> allProducts = new ArrayList<Product>();

		Firestore firebaseDB = FirestoreClient.getFirestore();
		//get all products
		ApiFuture<QuerySnapshot> future = firebaseDB.collection("products").get();

		List<QueryDocumentSnapshot> documents = future.get().getDocuments();

		//go through all the products and only return the products specific to the shop
		for (QueryDocumentSnapshot document : documents) {
			System.out.println(document.getId() + " => " + document.toObject(Shop.class));

			Product product = document.toObject(Product.class);
			//check if product exists
			if(product != null && product.isProductNotEmpty()) {
				if(product.getShopID().equals(ShopID)) {  
					allProducts.add(product);
				}
			}
		}
		return allProducts;
	}

	public boolean addProduct(Product product) throws ExecutionException, InterruptedException {
		//check if the given product has all the required fields
		if(product != null && product.isProductNotEmpty()) {
			Firestore firebaseDB = FirestoreClient.getFirestore();
			DocumentReference documentReference = firebaseDB.collection("products").document();

			//add a new product
			documentReference.set(product);
			return true;
		}

		return false;
	}

	public boolean deleteProduct(String productID) throws ExecutionException, InterruptedException {
		Firestore firebaseDB = FirestoreClient.getFirestore();
		DocumentReference documentReference = firebaseDB.collection("products").document(productID);

		if(documentReference != null) {
			documentReference.delete();
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
