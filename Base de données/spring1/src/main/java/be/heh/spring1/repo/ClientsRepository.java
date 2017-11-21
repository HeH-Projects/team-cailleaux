package be.heh.spring1.repo;

import be.heh.spring1.model.Clients;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ClientsRepository extends CrudRepository<Clients, Long>{
    List<Clients> findByLastName(String lastName);
}
