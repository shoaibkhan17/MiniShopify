package Application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.ui.Model;

@Controller
public class MiniShopifyController {

	@Autowired
	private repo merchants;
	
    @GetMapping("/")
    public String getAddressBookContents(Model model) {
        return "welcome";
    }
    
    @GetMapping("/merchants")
    public String getMerchants(Model model) {
    	model.addAttribute("merchants",merchants.findAll());
        return "merchants-page";
    }
    
}
