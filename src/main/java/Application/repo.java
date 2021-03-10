package Application;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "Merchants", path = "merchant")
public interface repo extends CrudRepository<Merchant, Long> {

    List<Merchant> findAll();
    Merchant findByUsername(String username);
    List<Merchant> findByName(String name);
    List<Merchant> findByEmail(String email);
    List<Merchant> findByNumber(String number);
    Merchant findById(long id);
}
