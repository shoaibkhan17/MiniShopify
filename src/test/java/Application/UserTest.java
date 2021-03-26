package Application;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

import models.User;

public class UserTest {
	User user;
	String name = "Kamal";
	String username = "kamalshakiri";
	Long UID = 0L;

	@Test
	public void testSetName() {
		user = new User();
		user.setName(name);
		assertEquals(name, user.getName());
	}
	
	@Test
	public void testUserName() {
		user = new User();
		user.setUsername(username);
		assertEquals(username, user.getUsername());
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
		user.setAll(name, username, UID);
		assertEquals(name, user.getName());
		assertEquals(username, user.getUsername());
		assertEquals(UID, user.getUID());
	}
}
