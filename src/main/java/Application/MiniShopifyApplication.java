package Application;

import models.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;

import config.FirebaseService;
import models.Shop;
import models.User;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
@SpringBootApplication(scanBasePackages = {"controllers"})
public class MiniShopifyApplication implements  CommandLineRunner {

	@Autowired
	FirebaseService firebaseService;
	
    public static void main(String[] args) {
        SpringApplication.run(MiniShopifyApplication.class);
    }
    
	@Override
	public void run(String... args) throws Exception {
		
//		String name = "Orange Store";
//		String description = "A store to sell oranges";
//		String picture = "https://images.unsplash.com/photo-1569442130407-8d2d49e741db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80";
//		String userEmail = "demo@minishopify.com";
//		ArrayList<String> tag =  new ArrayList<>(Arrays.asList("Orange", "Circle", "Fruits"));
//		
//		String name1 = "Banana Store";
//		String description1 = "A store to sell bananas";
//		String picture1 = "https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80";
//		String userEmail1 = "demo@minishopify.com";
//		ArrayList<String> tag1 =  new ArrayList<>(Arrays.asList("Banana", "Fruits"));
//		
//		String name2 = "Mango Store";
//		String description2 = "A store to sell mangos";
//		String picture2 = "https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80";
//		String userEmail2 = "demo@minishopify.com";
//		ArrayList<String> tag2 =  new ArrayList<>(Arrays.asList("Mango"));
//		
//		String name3 = "Watermelon Store";
//		String description3 = "A store to sell watermelon";
//		String picture3 = "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80";
//		String userEmail3 = "demo@minishopify.com";
//		ArrayList<String> tag3 =  new ArrayList<>(Arrays.asList());
//		
//		firebaseService.addShop(new Shop(name, description, picture, tag, userEmail));
//		firebaseService.addShop(new Shop(name1, description1, picture1, tag1, userEmail1));
//		firebaseService.addShop(new Shop(name2, description2, picture2, tag2, userEmail2));
//		firebaseService.addShop(new Shop(name3, description3, picture3, tag3, userEmail3));
		
	}
}
