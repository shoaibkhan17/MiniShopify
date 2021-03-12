package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@SpringBootApplication
public class MiniShopifyApplication implements  CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(MiniShopifyApplication.class);
    }

	@Autowired
	private repo merchantRepo;

	@Autowired
	private shopRepo shopRepo;

	@Override
	public void run(String... args) throws Exception {
		merchantRepo.deleteAll();
		shopRepo.deleteAll();

		Merchant meet = new Merchant("Meet123", "meet", "test", "12323132", "email");
		Merchant shoaib = new Merchant("Shoaib123", "shoaib", "test", "12323132", "email");
		Merchant abdi = new Merchant("Abdi123", "abdi", "test", "12323132", "email");

		merchantRepo.save(meet);
		merchantRepo.save(shoaib);
		merchantRepo.save(abdi);

		Shop tamersShop = new Shop("Tamer's Bakery", "Finest delicacies in town!", 1, new ArrayList<Item>());
		Shop abdisShop = new Shop("Abdi's Corner Store", "For your quick convenience!", 2, new ArrayList<Item>());
//		Item donuts = new Item("Glazed Donuts", "A dozen donuts glazed using our secret recipe",100, 10.00);
//		Item cookies = new Item("Chocolate Chip Cookies", "A half dozen chocolate chip cookies that are sure to leave you craving some more",250, 7.50);
//		tamersShop.addItem(donuts);
//		tamersShop.addItem(cookies);
		shopRepo.save(tamersShop);
		shopRepo.save(abdisShop);
	}
}
