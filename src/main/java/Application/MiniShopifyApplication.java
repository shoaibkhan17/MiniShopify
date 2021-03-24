package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import models.Item;
import models.Shop;

import java.util.ArrayList;

@Service
@SpringBootApplication(scanBasePackages = {"controllers"})
public class MiniShopifyApplication implements  CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(MiniShopifyApplication.class);
    }
    
	@Override
	public void run(String... args) throws Exception {
		Shop tamersShop = new Shop("Tamer's Bakery", "Finest delicacies in town!", 1, new ArrayList<Item>());
		Shop abdisShop = new Shop("Abdi's Corner Store", "For your quick convenience!", 2, new ArrayList<Item>());
		
//		Item donuts = new Item("Glazed Donuts", "A dozen donuts glazed using our secret recipe",100, 10.00);
//		Item cookies = new Item("Chocolate Chip Cookies", "A half dozen chocolate chip cookies that are sure to leave you craving some more",250, 7.50);
	}
}
