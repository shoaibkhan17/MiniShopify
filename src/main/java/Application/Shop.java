package Application;

import javax.persistence.Entity;

@Entity
public class Shop {
    private String name;
    private String description;
    private int storeId;


    public Shop(String name, String description, int storeId) {
        this.name = name;
        this.description = description;
        this.storeId = storeId;
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
