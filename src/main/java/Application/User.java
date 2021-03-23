package Application;

public class User {
    private String name;
    private String password;
    private String email;

    public User() {
        name = "";
        email = "";
        password = "";
    };

    public User(String name, String email, String password)
    {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public User(User user) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }

    public void setAll(String name, String number, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
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
        String string =  "\n";
        string += "Name: " + name + "\n";
        string += "Email: " + email + "\n";
        string += "Password: " + password + "\n";
        return string;
    }
}