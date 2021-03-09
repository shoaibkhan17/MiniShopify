package Application;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "Shop", path = "items")
public interface shopRepo extends CrudRepository<Shop, Long>{

    ArrayList<Shop> findAll();
        ArrayList<Shop> findByName(String name);
        Shop findById(long id);
}
