package models;

public class User{
	    private String name;
	    private String email;
	    private String UID;

	    public User() {
	        name = "";
	        email = "";
	        UID = "";
	    };

	    public User(String name, String email)
	    {
	        this.name = name;
	        this.email = email;
	    }

	    public User(User user) {
	        this.name = user.name;
	        this.email = user.email;
	        this.UID = user.UID;
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

	    public String getUID() {
	        return UID;
	    }

	    public void setUID(String UID) {
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