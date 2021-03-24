package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import models.User;

public class UserTest {
	User merchant;
	String name = "Kamal";
	String email = "kamal@gmail.com";
	String number = "4321";
	String password = "test";

	@Test
	public void testSetName() {
		merchant = new User();
		merchant.setName(name);
		assertEquals(name, merchant.getName());
	}
	
	@Test
	public void testSetEmail() {
		merchant = new User();
		merchant.setEmail(email);
		assertEquals(email, merchant.getEmail());
	}

	@Test
	public void testSetPassword() {
		merchant = new User();
		merchant.setPassword(password);
		assertEquals(password, merchant.getPassword());
	}

	@Test
	public void setTestAll() {
		merchant = new User();
		merchant.setAll(name, number, email, password);
		assertEquals(name, merchant.getName());
		assertEquals(email, merchant.getEmail());
		assertEquals(password, merchant.getPassword());
	}
}
