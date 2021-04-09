package Application;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;

@Service
@SpringBootApplication(scanBasePackages = { "controllers", "config" })
public class MiniShopifyApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(MiniShopifyApplication.class);
    }

    @Override
    public void run(String... args) throws Exception {
    }
}
