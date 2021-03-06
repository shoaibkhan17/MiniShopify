package Application;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Merchant {
	private String username;
	private String password;
	private String number;
	private String email;
	
	private Long id;
	
	public Merchant(String username, String password) {
		this.username = username;
		this.setPassword(password);
	}
	
	public Merchant() {};
	
	public void setAll(String name, String number, String email)
	{
		this.username = name;
		this.number = number;
		this.email = email;
	}
	
	@Id
	@GeneratedValue
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
