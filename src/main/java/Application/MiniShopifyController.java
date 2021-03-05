package Application;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;

@Controller
public class MiniShopifyController {

    @GetMapping("/")
    public String getAddressBookContents(Model model) {
        return "welcome";
    }
}
