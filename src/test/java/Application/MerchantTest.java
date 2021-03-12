package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class MerchantTest {
	Merchant merchant;
	String name = "Kamal";
	String username = "Kamalshakiri";
	Long id = 1234L;
	String email = "kamal@gmail.com";
	String password = "test";
	String number = "4321";

	@Test
	public void testSetName() {
		merchant = new Merchant();
		merchant.setName(name);
		assertEquals(name, merchant.getName());
	}
	
	@Test
	public void testSetUsername() {
		merchant = new Merchant();
		merchant.setUsername(username);
		assertEquals(username, merchant.getUsername());
	}
	
	@Test
	public void testSetId() {
		merchant = new Merchant();
		merchant.setId(id);
		assertEquals(id, merchant.getId());	
	}
	
	@Test
	public void testSetEmail() {
		merchant = new Merchant();
		merchant.setEmail(email);
		assertEquals(email, merchant.getEmail());
	}
	
	@Test
	public void testSetPassword() {
		merchant = new Merchant();
		merchant.setPassword(password);
		assertEquals(password, merchant.getPassword());
	}
	
	@Test
	public void testSetNumber() {
		merchant = new Merchant();
		merchant.setNumber(number);
		assertEquals(number, merchant.getNumber());
		
	}
	
	@Test
	public void setTestAll() {
		merchant = new Merchant();
		merchant.setAll(username, name, password, number, email);
		assertEquals(name, merchant.getName());
		assertEquals(username, merchant.getUsername());	
		assertEquals(email, merchant.getEmail());
		assertEquals(password, merchant.getPassword());
		assertEquals(number, merchant.getNumber());
	}
}
