package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MiniShopifyController {

	@Autowired
	private repo merchants;
	
    @GetMapping("/")
    public String indexContents(Model model) {
        return "index";
    }
   
    @GetMapping("/merchants")
    public String getMerchants(Model model) {
    	model.addAttribute("merchants",merchants.findAll());
        return "merchants-page";
    }

    @PostMapping("/home")
    public String createAccount(@ModelAttribute Merchant merchant, Model model) {
        System.out.println(merchant);
        merchants.save(merchant);
        return "home";
    }
    
    @PostMapping("/")
    public String signIn(@ModelAttribute Merchant merchant, Model model) {
    	Merchant m = merchants.findByUsername(merchant.getUsername());
   
    	if(m != null) {
    		if(m.getPassword().equals(merchant.getPassword())) {
    			return "home";
    		}
    	}
        return "index";
    }

    @GetMapping("/createAccount")
    public String accountPage(Model model) {
        model.addAttribute("merchant", new Merchant());
        return "createAccount";
    }
}
