package models;

import java.util.ArrayList;


public class Shop {

    private String shopID;
    private String name;
    private String description;
    private String picture;
    private ArrayList<String> tags;
    private String ownerEmail;

    public Shop() {
    	shopID = "";
    	name = "";
    	description = "";
    	picture = "";
    	tags = new ArrayList<String>();
    	ownerEmail = "";
    }

    public Shop(String name, String description, String picture, ArrayList<String> tags, String ownerEmail) {
        this.name = name;
        this.description = description;
        this.picture = picture;
        this.tags = tags;
        this.ownerEmail = ownerEmail;
    }
    
    public boolean isShopNotEmpty() {
    	return !name.isEmpty() && !ownerEmail.isEmpty() && !description.isEmpty();
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

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public void setOwnerEmail(String ownerEmail) {
        this.ownerEmail = ownerEmail;
    }

    
    public String getShopID() {
        return shopID;
    }

    public void setShopID(String id) {
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
                ", ownerEmail=" + ownerEmail +
                '}';
    }
}
