package Application;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "Merchants", path = "merchant")
public interface repo extends CrudRepository<User, Long> {

    List<User> findAll();
    User findByUsername(String username);
    List<User> findByName(String name);
    List<User> findByEmail(String email);
    List<User> findByNumber(String number);
    User findById(long id);
}
