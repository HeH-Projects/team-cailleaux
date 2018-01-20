package be.heh.spring1.repo;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import be.heh.spring1.model.Animal;

public interface AnimalRepository extends CrudRepository<Animal, Long>{
    List<Animal> findByName(String name);
    Animal findById(long id);
}
