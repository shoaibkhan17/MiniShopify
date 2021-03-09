package Application;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.ArrayList;


@Entity
public class Shop {
    private String name;
    private String description;
    private ArrayList<Item> shopItems;
    private int storeId;

    public Shop(String name, String description, int storeId) {
        this.name = name;
        this.description = description;
        this.storeId = storeId;
        shopItems = new ArrayList<Item>();
    }

    @OneToMany(cascade = CascadeType.PERSIST, fetch = FetchType.EAGER)
    public ArrayList<Item> getShopItems() {
        return shopItems;
    }

    public void setShopItems(ArrayList<Item> shopItems) {
        this.shopItems = shopItems;
    }

    public void addShopItems(Item item){
        shopItems.add(item);
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

    public int getStoreId() {
        return storeId;
    }

    public void setStoreId(int storeId) {
        this.storeId = storeId;
    }

    @Override
    public String toString() {
        return "Shop{" +
                "name ='" + name + '\'' +
                ", description ='" + description + '\'' +
                ", storeId =" + storeId +
                '}';
    }
}
