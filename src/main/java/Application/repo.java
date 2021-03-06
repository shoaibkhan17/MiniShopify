package Application;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "AddressBook", path = "books")
public interface repo extends CrudRepository<Merchant, Long> {

    List<Merchant> findAll();
    List<Merchant> findByUsername(String username);
    Merchant findById(long id);
}
