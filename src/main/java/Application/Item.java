package Application;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Item {
    private String name;
    private String description;
    private int quantity;
    private double price;
    private Long id;

    public Item() {
        this.name = "";
        this.description = "";
        this.quantity = 0;
        this.price = 0;
    }

    public Item(String name, String description, int quantity, double price) {
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }

    public Item(Item item) {
        this.name = item.name;
        this.description = item.description;
        this.quantity = item.quantity;
        this.price = item.price;
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return "Item{" +
                "name ='" + name + '\'' +
                ", description ='" + description + '\'' +
                ", quantity =" + quantity +
                ", price =" + price +
                '}';
    }
}
