package Application;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import java.util.ArrayList;

@RepositoryRestResource(collectionResourceRel = "Item", path = "items")
public interface itemRepo extends CrudRepository<Item, Long> {

    ArrayList<Item> findByName(String name);
    Item findById(long id);

}