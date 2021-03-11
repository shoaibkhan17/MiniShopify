package Application;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Merchant {
	private String username;
	private String name;
	private String password;
	private String number;
	private String email;
	private Long id;

	public Merchant() {
		username = "";
		name = "";
		password = "";
		number = "";
		email = "";
	};

	public Merchant(String username, String password) {
		this.username = username;
		this.password = password;
	}
	
	public Merchant(String username, String name, String password, String number, String email)
	{
		this.username = username;
		this.name = name;
		this.password = password;
		this.number = number;
		this.email = email;
	}

	public Merchant(Merchant merchant) {
		this.username = merchant.username;
		this.name = merchant.name;
		this.password = merchant.password;
		this.number = merchant.number;
		this.email = merchant.email;
	}

	public void setAll(String username, String name, String password, String number, String email) {
		this.username = username;
		this.name = name;
		this.password = password;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public String toString() {
		String string = "Username: " + username + "\n";
		string += "Name: " + name + "\n";
		string += "Number: " + number + "\n";
		string += "Email: " + email + "\n";
		string += "Password: " + password + "\n";
		return string;
	}
}
