package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Product {
    private Long productID;
    private String description;
    private String name;
    private String picture;
    private int quantity;
    private double cost;
    private Long shopID;


    public Product(String name, String description, int quantity, double cost) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.cost = cost;
    }

    public Product() {

    }

    @Id
    @GeneratedValue
    public Long getProductID() {
        return productID;
    }

    public void setProductID(Long productID) {

    }

    public Long getShopID() {
        return shopID;
    }

    public void setShopID(Long shopID) {
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

    }

    public double getCost() {
        return cost;
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


