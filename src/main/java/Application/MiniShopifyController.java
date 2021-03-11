package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("api/")
public class MiniShopifyController {

	@Autowired
	private repo merchants;

	@Autowired
	private shopRepo shopRepo;

	@GetMapping("merchants")
    public List<Merchant> getMerchants() {
	    return merchants.findAll();
    }

    @PostMapping("addMerchant")
	public ResponseEntity addMerchant(@RequestBody Merchant merchant) {
		if (merchant != null) {
			merchants.save(merchant);
			return ResponseEntity.ok().body("{\"merchantAdded\": true, \"authenticate\": true}");
		}
		return ResponseEntity.ok().body("{\"merchantAdded\": false, \"authenticate\": false}");
	}

	@PostMapping("authenticate")
	public ResponseEntity authenticate(@RequestBody Merchant merchant) {
		if (merchant != null) {
			Merchant m = merchants.findByUsername(merchant.getUsername());
			if (m != null && m.getPassword().equals(merchant.getPassword())) {
				return ResponseEntity.ok().body("{\"authenticate\": true}");
			}
		}
		return ResponseEntity.ok().body("{\"authenticate\": false}");
	}

	@GetMapping("getShops")
	public List<Shop> getShops() {
		return shopRepo.findAll();
	}

	@GetMapping("getShopByID")
	public Shop getShopByID(long id) {
		return shopRepo.findById(id);
	}


}
