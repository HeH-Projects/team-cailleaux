package be.heh.spring1;

import org.springframework.data.repository.CrudRepository;
import java.util.List;


public interface ClientRepository extends CrudRepository<Client, Long> {
    List<Client> findByNom (String nom);
}