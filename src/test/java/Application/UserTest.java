package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class UserTest {
	User merchant;
	String name = "Kamal";
	Long id = 1234L;
	String email = "kamal@gmail.com";
	String number = "4321";

	@Test
	public void testSetName() {
		merchant = new User();
		merchant.setName(name);
		assertEquals(name, merchant.getName());
	}
	
	
	
	@Test
	public void testSetId() {
		merchant = new User();
		merchant.setId(id);
		assertEquals(id, merchant.getId());	
	}
	
	@Test
	public void testSetEmail() {
		merchant = new User();
		merchant.setEmail(email);
		assertEquals(email, merchant.getEmail());
	}
	
	
	
	
	@Test
	public void testSetNumber() {
		merchant = new User();
		merchant.setNumber(number);
		assertEquals(number, merchant.getNumber());
		
	}
	
	/*
	@Test
	public void setTestAll() {
		merchant = new User();
		merchant.setAll(name, number, email);
		assertEquals(name, merchant.getName());
		
		assertEquals(email, merchant.getEmail());
	
		assertEquals(number, merchant.getNumber());
	}
	*/
	
}
