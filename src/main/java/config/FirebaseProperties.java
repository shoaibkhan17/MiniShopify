package config;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class FirebaseProperties {

	private int sessionExpiryInDays = 1;
	private String databaseUrl = "https://minishopify-sysc4806-default-rtdb.firebaseio.com";
	private boolean enableStrictServerSession = false;
	private boolean enableCheckSessionRevoked = false;
	private boolean enableLogoutEverywhere = false;
	
	public int getSessionExpiryInDays() {
		return sessionExpiryInDays;
	}
	public void setSessionExpiryInDays(int sessionExpiryInDays) {
		this.sessionExpiryInDays = sessionExpiryInDays;
	}
	public String getDatabaseUrl() {
		return databaseUrl;
	}
	public void setDatabaseUrl(String databaseUrl) {
		this.databaseUrl = databaseUrl;
	}
	public boolean isEnableStrictServerSession() {
		return enableStrictServerSession;
	}
	public void setEnableStrictServerSession(boolean enableStrictServerSession) {
		this.enableStrictServerSession = enableStrictServerSession;
	}
	public boolean isEnableCheckSessionRevoked() {
		return enableCheckSessionRevoked;
	}
	public void setEnableCheckSessionRevoked(boolean enableCheckSessionRevoked) {
		this.enableCheckSessionRevoked = enableCheckSessionRevoked;
	}
	public boolean isEnableLogoutEverywhere() {
		return enableLogoutEverywhere;
	}
	public void setEnableLogoutEverywhere(boolean enableLogoutEverywhere) {
		this.enableLogoutEverywhere = enableLogoutEverywhere;
	}

}
