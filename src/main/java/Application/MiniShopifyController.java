package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import org.springframework.ui.Model;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class MiniShopifyController {

	@Autowired
	private repo merchants;

	@GetMapping("merchants")
    public List<Merchant> getMerchants() {
		System.out.println("GETTING MERCHANTS");
	    return merchants.findAll();
    }
}
