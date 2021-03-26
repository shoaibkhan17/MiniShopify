package models;
import java.io.Serializable;


@Data
public class User implements Serializable{
	    private String name;
	    private String username;
	    private Long UID;

	    public User() {
	        name = "";
	        username = "";
	        UID = 0L;
	    };

	    public User(String name, String username, Long UID)
	    {
	        this.name = name;
	        this.username = username;
	        this.UID = UID;
	    }

	    public User(User user) {
	        this.name = user.name;
	        this.username = user.username;
	        this.UID = user.UID;
	    }

	    public void setAll(String name, String username, Long UID) {
	        this.name = name;
	        this.username = username;
	        this.UID = UID;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getUsername() {
	        return username;
	    }

	    public void setUsername(String username) {
	        this.username = username;
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
	        string += "Email: " + username + "\n";
	        string += "Password: " + UID + "\n";
	        return string;
	    }
	}