package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import models.User;

public class UserTest {
	User user;
	String name = "Kamal";
	String email = "kamalshakiri@gmail.com";
	String UID = "";

	@Test
	public void testSetName() {
		user = new User();
		user.setName(name);
		assertEquals(name, user.getName());
	}
	
	@Test
	public void testEmail() {
		user = new User();
		user.setEmail(email);
		assertEquals(email, user.getEmail());
	}

	@Test
	public void testSetUID() {
		user = new User();
		user.setUID(UID);
		assertEquals(UID, user.getUID());
	}
}
