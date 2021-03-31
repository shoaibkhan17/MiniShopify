package models;
public class Product {
	private String productID;
	private String description;
	private String name;
	private String picture;
	private int quantity;
	private double cost;
	private String shopID;

	public Product() {
		this.name = "";
		this.description = "";
		this.quantity = 0;
		this.cost = 0;
		this.picture = "";
	}

	public Product(String name, String description, int quantity, double cost, String picture, String shopID) {
		this.name = name;
		this.description = description;
		this.quantity = quantity;
		this.cost = cost;
		this.shopID = shopID;
		this.setPicture(picture);
	}

	public boolean isProductNotEmpty() {
		return !shopID.isEmpty() && !name.isEmpty() && !description.isEmpty() && cost != 0;
	}

	public String getProductID() {
		return productID;
	}

	public void setProductID(String productID) {
		this.productID = productID;
	}

	public String getShopID() {
		return shopID;
	}

	public void setShopID(String shopID) {
		this.shopID = shopID;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setCost(double cost){
		this.cost = cost;
	}

	public double getCost() {
		return cost;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	@Override
	public String toString() {
		return "Item{" +
				"name ='" + name + '\'' +
				", description ='" + description + '\'' +
				", quantity =" + quantity +
				", cost =" + cost +
				'}';
	}
}


