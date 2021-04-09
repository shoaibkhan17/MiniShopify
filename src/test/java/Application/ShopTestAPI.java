package Application;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.concurrent.ExecutionException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.google.firebase.auth.FirebaseAuth;
import com.google.gson.JsonObject;

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
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

import config.FirebaseInitialize;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

import controllers.ShopController;
import models.Shop;

@WebMvcTest
@ComponentScan(basePackages  = {"config"})
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ShopTestAPI {

	@Autowired
	private MockMvc mvc;

	private Shop shop1;
	private String shopID1;
    private JSONObject shopJsonBody;

	@Autowired
	FirebaseInitialize fbInit;

	@BeforeAll
	public void init() throws Exception{
		//test shop 1
		//test this shop with create and delete shop methods
		String name = "Test Store";
		String description = "A test store";
		String picture = "https://avatars.githubusercontent.com/u/55768486?v=4";
		String ownerEmail = "test@minishopify.com";

		ArrayList<String> tags =  new ArrayList<>(Arrays.asList("test"));
		shop1 = new Shop(name, description, picture, tags, ownerEmail);

		//test shop 1
		//test this shop ID for getting a shop 
		shopID1 = "5NlVezyfgEN3AeBbpKvI";

		shopJsonBody = new JSONObject();
		shopJsonBody.put("description", shop1.getDescription());
		shopJsonBody.put("picture", shop1.getPicture());
		shopJsonBody.put("ownerEmail", shop1.getOwnerEmail());
		shopJsonBody.put("tags", shop1.getTags());
	}

	@Test
    public void testInvalidGetShopProducts() throws Exception{
        String invalidShopID = "2";
         mvc.perform(get("/api/shop/getProducts/" + invalidShopID))
                .andDo(print())
                .andExpect(status().isBadRequest());
    }
	
	/**
	 * Get all shops, check if the list of shops returned from firestore is not null.
	 * @throws ExecutionException
	 * @throws InterruptedException
	 */
	@Test
	public void testGetShops() throws Exception {
		 mvc.perform(get("/api/shop/getShops"))
                .andDo(print())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk());
	}
	
	/**
	 * Test create an invalid shop
	 * @throws ExecutionException
	 * @throws InterruptedException
	 */
	@Test
	public void testUnauthorizedCreateShop() throws Exception {
		FirebaseAuth fbAuth = fbInit.getAuth();
		String token = fbAuth.createCustomToken("lhWmYNDzkbdR5z1zRsLvAm0lHDg1");

		  	mvc.perform(post("/api/shop/protected/createShop")
		  		.header("X-Firebase-Auth", token)
                .contentType(MediaType.APPLICATION_JSON)
                .content(shopJsonBody.toString()))
                .andDo(print())
                .andExpect(status().isUnauthorized());
	}

	/**
	 * Get all shops, check if the list of shops returned from firestore is not null.
	 * @throws ExecutionException
	 * @throws InterruptedException
	 */
	@Test
	public void testGetShopProducts() throws Exception {
		 mvc.perform(get("/api/shop/getProducts/" + shopID1))
                .andDo(print())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
                .andExpect(status().isOk());
	}
	
}
