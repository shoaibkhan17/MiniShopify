package Application;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class MiniShopifyApplication {

    public static void main(String[] args) {
        SpringApplication.run(MiniShopifyApplication.class);
    }
    
	@Bean
	public CommandLineRunner demo(repo repository) {
		return (args) -> {
			// save a few customers
			Merchant meet = new Merchant("Meet", "password");
			repository.save(meet);
		};
	}
}
