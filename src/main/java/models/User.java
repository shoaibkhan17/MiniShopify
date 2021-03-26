package models;

public class User{
	    private String name;
	    private String email;
	    private Long UID;

	    public User() {
	        name = "";
	        email = "";
	        UID = 0L;
	    };

	    public User(String name, String email, Long UID)
	    {
	        this.name = name;
	        this.email = email;
	        this.UID = UID;
	    }

	    public User(User user) {
	        this.name = user.name;
	        this.email = user.email;
	        this.UID = user.UID;
	    }

	    public void setAll(String name, String username, Long UID) {
	        this.name = name;
	        this.email = username;
	        this.UID = UID;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getEmail() {
	        return email;
	    }

	    public void setEmail(String username) {
	        this.email = username;
	    }

	    public Long getUID() {
	        return UID;
	    }

	    public void setUID(Long UID) {
	        this.UID = UID;
	    }

	    public String toString() {
	        String string =  "\n";
	        string += "Name: " + name + "\n";
	        string += "Email: " + email + "\n";
	        string += "UID: " + UID + "\n";
	        return string;
	    }
	}