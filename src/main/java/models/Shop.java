package models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class Shop {

    private Long shopID;
    private String name;
    private String description;
    private String picture;
    private ArrayList<String> tags;
    private User owner;

    public Shop() {
    }

    public Shop(Long shopID, String name, String description, String picture, ArrayList<String> tags, User owner) {
        this.shopID = shopID;
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.tags = tags;
        this.owner = owner;
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

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public ArrayList<String> getTags() {
        return tags;
    }

    public void setTags(ArrayList<String> tags) {
        this.tags = tags;
    }

    public User getOwner() {
        return owner;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    @Id
    @GeneratedValue
    public Long getShopId() {
        return shopID;
    }

    public void setShopId(Long id) {
        shopID = id;
    }


    @Override
    public String toString() {
        return "Shop{" +
                "shopID=" + shopID +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", picture='" + picture + '\'' +
                ", tags=" + tags +
                ", owner=" + owner +
                '}';
    }
}
