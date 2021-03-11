package Application;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class Shop {

    private String name;
    private String description;
    private int shopID;
    private ArrayList<Item> shopItems;
    private Long id;

    public Shop() {
        this.name = "";
        this.description = "";
        this.shopID = 0;
        this.shopItems = new ArrayList<>();
    }

    public Shop(Shop shop) {
        this.name = shop.name;
        this.description = shop.description;
        this.shopID = shop.shopID;
        this.shopItems = shop.shopItems;
    }

    public Shop(String name, String description, int shopID, ArrayList<Item> shopItems) {
        this.name = name;
        this.description = description;
        this.shopID = shopID;
        this.shopItems = shopItems;
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

    public int getShopID() {
        return shopID;
    }

    public void setShopID(int shopID) {
        this.shopID = shopID;
    }

    public ArrayList<Item> getShopItems() {
        return shopItems;
    }

    public void setShopItems(ArrayList<Item> shopItems) {
        this.shopItems = shopItems;
    }

    @Override
    public String toString() {
        return "Shop{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", shopID=" + shopID +
                ", shopItems=" + shopItems +
                '}';
    }
}
