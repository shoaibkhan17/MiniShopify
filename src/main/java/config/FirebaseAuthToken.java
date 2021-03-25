package config;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class FirebaseAuthToken extends UsernamePasswordAuthenticationToken {
    private static final long serialVersionUID = 1L;
    private final String token;

    public FirebaseAuthToken(final String token) {
        super(null, null);
        this.token = token;
    }

    public String getToken() {
        return token;
    }
}