package Application;
import java.util.concurrent.ExecutionException;
import org.json.JSONArray;
import org.json.JSONObject;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@WebMvcTest
@ComponentScan(basePackages  = {"config"})
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class CartTestAPI {

    @Autowired
	private MockMvc mvc;
    private JSONObject jsonObject;

    @BeforeAll
	public void init() throws Exception{
        jsonObject = new JSONObject();
	}
    
    /**
	 * Tests an checking out an invalid product.
	 * @throws ExecutionException
	 * @throws InterruptedException
	 */
	@Test
	public void testInvalidProductsCheckout() throws Exception {
        jsonObject.put("productID", "moela");
        jsonObject.put("quantity", 69);
        JSONArray jsonList = new JSONArray();
        jsonList.put(jsonObject);

        mvc.perform(post("/api/cart/checkout")
            .contentType(MediaType.APPLICATION_JSON)
            .content(jsonList.toString()))
            .andDo(print())
            .andExpect(status().isOk())
            .andExpect(content().string("[]"));
	}
}
