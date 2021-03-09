package Application;

import java.util.ArrayList;

public class Shop {

    private String name;
    private String description;
    private int shopID;
    private ArrayList<Item> shopItems;

    public Shop(String name, String description, int shopID, ArrayList<Item> shopItems) {
        this.name = name;
        this.description = description;
        this.shopID = shopID;
        this.shopItems = shopItems;
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
