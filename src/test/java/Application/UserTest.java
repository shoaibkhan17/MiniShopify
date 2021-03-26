package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import models.User;

public class UserTest {
	User user;
	String name = "Kamal";
	String email = "kamalshakiri@gmail.com";
	Long UID = 0L;

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

	@Test
	public void setTestAll() {
		user = new User();
		user.setAll(name, email, UID);
		assertEquals(name, user.getName());
		assertEquals(email, user.getEmail());
		assertEquals(UID, user.getUID());
	}
}
