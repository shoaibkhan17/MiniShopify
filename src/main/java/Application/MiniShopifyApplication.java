package Application;

import models.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Service;

import config.FirebaseService;
import models.Shop;
import models.User;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
@SpringBootApplication(scanBasePackages = {"controllers", "config"})
public class MiniShopifyApplication implements  CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(MiniShopifyApplication.class);
    }
    
	@Override
	public void run(String... args) throws Exception {
		
//		String name = "Pineapple";
//		String description = "A Pineapple";
//		String picture = "https://images.unsplash.com/photo-1521997888043-aa9c827744f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
//		String shopID = "5NlVezyfgEN3AeBbpKvI";
//		int quantity = 2;
//		int cost = 2;
//		
//		String name1 = "Mango";
//		String description1 = "A Mango";
//		String picture1 = "https://images.unsplash.com/photo-1591073113125-e46713c829ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80";
//		String shopID1 = "5NlVezyfgEN3AeBbpKvI";
//		int quantity1 = 3;
//		int cost1 = 4;
//		
//		String name2 = "Kiwi";
//		String description2 = "A Kiwi";
//		String picture2 = "https://images.unsplash.com/photo-1521997888043-aa9c827744f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
//		String shopID2 = "5NlVezyfgEN3AeBbpKvI";
//		int quantity2 = 4;
//		int cost2 = 6;
//		
//		String name3 = "Watermelon";
//		String description3 = "A Watermelon";
//		String picture3 = "https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80";
//		String shopID3 = "5NlVezyfgEN3AeBbpKvI";
//		int quantity3 = 1;
//		int cost3 = 3;
//		
//		//String name, String description, int quantity, double cost, String picture
//		firebaseService.addProduct(new Product( name,  description,  quantity,  cost,  picture,shopID));
//		firebaseService.addProduct(new Product( name1,  description1,  quantity1,  cost1,  picture1,shopID1));
//		firebaseService.addProduct(new Product( name2,  description2,  quantity2,  cost2,  picture2,shopID2));
//		firebaseService.addProduct(new Product( name3,  description3,  quantity3,  cost3,  picture3,shopID3));
	}
}
