package config;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import com.google.common.collect.ImmutableList;

import lombok.Data;

@Component
@ConfigurationProperties("security")
@Data
public class SecurityProperties {

	private CookieProperties cookieProps;
	private FirebaseProperties firebaseProps;
	private boolean allowCredentials = false;
	private List<String> allowedOrigins;
	private List<String> allowedHeaders;
	private List<String> exposedHeaders;
	private List<String> allowedMethods;
	private List<String> allowedPublicApis;
	private List<String> superAdmins;
	private List<String> validApplicationRoles;
	
	public FirebaseProperties getFirebaseProps() {
		return firebaseProps;
	}
	public void setFirebaseProps(FirebaseProperties firebaseProps) {
		this.firebaseProps = firebaseProps;
	}
	public CookieProperties getCookieProps() {
		return cookieProps;
	}
	public void setCookieProps(CookieProperties cookieProps) {
		this.cookieProps = cookieProps;
	}
	public boolean isAllowCredentials() {
		return allowCredentials;
	}
	public void setAllowCredentials(boolean allowCredentials) {
		this.allowCredentials = allowCredentials;
	}
	public List<String> getAllowedOrigins() {
		return allowedOrigins;
	}
	public void setAllowedOrigins(List<String> allowedOrigins) {
		this.allowedOrigins = allowedOrigins;
	}
	public List<String> getAllowedHeaders() {
		return allowedHeaders;
	}
	public void setAllowedHeaders(List<String> allowedHeaders) {
		this.allowedHeaders = allowedHeaders;
	}
	public List<String> getAllowedMethods() {
		return allowedMethods;
	}
	public void setAllowedMethods(List<String> allowedMethods) {
		this.allowedMethods = allowedMethods;
	}
	public List<String> getAllowedPublicApis() {
		return allowedPublicApis;
	}
	public void setAllowedPublicApis(List<String> allowedPublicApis) {
		this.allowedPublicApis = allowedPublicApis;
	}
	public List<String> getExposedHeaders() {
		return exposedHeaders;
	}
	public void setExposedHeaders(List<String> exposedHeaders) {
		this.exposedHeaders = exposedHeaders;
	}
	public List<String> getSuperAdmins() {
		return superAdmins;
	}
	public void setSuperAdmins(List<String> superAdmins) {
		this.superAdmins = superAdmins;
	}
	public List<String> getValidApplicationRoles() {
		return validApplicationRoles;
	}
	public void setValidApplicationRoles(List<String> validApplicationRoles) {
		this.validApplicationRoles = validApplicationRoles;
	}

}