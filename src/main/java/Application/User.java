package Application;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {
	
	private String name;
	
	private String number;
	private String email;
	private Long id;

	public User() {
		
		name = "";
		
		number = "";
		email = "";
	};


	
	public User( String name,  String number, String email)
	{
		
		this.name = name;
	
		this.number = number;
		this.email = email;
	}

	public User(User user) {
		
		this.name = user.name;
	
		this.number = user.number;
		this.email = user.email;
	}

	public void setAll(String name, String number, String email) {
	
		this.name = name;
		
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


	public String toString() {
		String string =  "\n";
		string += "Name: " + name + "\n";
		string += "Number: " + number + "\n";
		string += "Email: " + email + "\n";
		return string;
	}
}
