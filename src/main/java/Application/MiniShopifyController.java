package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import org.springframework.ui.Model;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class MiniShopifyController {

	@Autowired
	private repo merchants;

	@GetMapping("merchants")
    public List<Merchant> getMerchants() {
	    return merchants.findAll();
    }

    @PostMapping("addMerchant")
	public void addMerchant(@RequestBody Merchant merchant) {
		if (merchant != null) {
			merchants.save(merchant);
		}
	}

	@PostMapping("authenticate")
	public ResponseEntity authenticate(@RequestBody Merchant merchant) {
		if (merchant != null) {
			Merchant m = merchants.findByUsername(merchant.getUsername());
			if (m != null && m.getPassword().equals(merchant.getPassword())) {
				return ResponseEntity.ok().body("{'authenticate': true}");
			}
		}
		return ResponseEntity.ok().body("{'authenticate': false}");
	}
}
