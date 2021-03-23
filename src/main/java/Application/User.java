package Application;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class User {

    private String name;
    private String password;
    private String number;
    private String email;
    private Long id;

    public User() {
        name = "";
        number = "";
        email = "";
        password = "";
    };

    public User(String name, String number, String email, String password)
    {
        this.name = name;
        this.number = number;
        this.email = email;
        this.password = password;
    }

    public User(User user) {
        this.name = user.name;
        this.number = user.number;
        this.email = user.email;
        this.password = user.password;
    }

    public void setAll(String name, String number, String email, String password) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.password = password;
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
        string += "Password: " + password + "\n";
        return string;
    }
}