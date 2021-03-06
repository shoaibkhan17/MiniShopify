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
		this.password = password;
	}
	
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
	
	public String getName() {
		return username;
	}

	public void setName(String name) {
		username = name;
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
}
