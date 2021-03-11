package Application;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

@Service
@SpringBootApplication
public class MiniShopifyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MiniShopifyApplication.class);
    }
    
	@Bean
	public CommandLineRunner demo(repo repository) {
		return (args) -> {
			// save a few customers
			Merchant meet = new Merchant("Meet123", "meet", "test", "12323132", "email");
			Merchant shoaib = new Merchant("Shoaib123", "shoaib", "test", "12323132", "email");
			Merchant abdi = new Merchant("Abdi123", "abdi", "test", "12323132", "email");

			repository.save(meet);
			repository.save(shoaib);
			repository.save(abdi);
		};
	}
}
