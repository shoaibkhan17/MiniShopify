package config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception{
		//set the configuration on the auth object
		auth.inMemoryAuthentication()
			.withUser("user")
			.password("pass")
			.roles("USER");
	}
	
	@Bean
	public PasswordEncoder getPasswordEncode() {
		return NoOpPasswordEncoder.getInstance();
	}

    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	//permit all requests to public
        http.authorizeRequests()
        	.antMatchers("/api/user/**").hasRole("USER")
        	.antMatchers("/api/shop/createShop").hasRole("USER")
        	.antMatchers("/api/shop/updateShop").hasRole("USER")
        	.antMatchers("/api/auth/signOut").hasRole("USER")
        	.antMatchers("/api/shop/getShops").permitAll()
        	.antMatchers("/api/auth/signIn").permitAll()
        	.antMatchers("/api/auth/createAccount").permitAll()
        	.and().formLogin();
    }  
}