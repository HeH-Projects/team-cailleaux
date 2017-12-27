package be.heh.spring1.repo;

import be.heh.spring1.model.Veterinary;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VeterinaryRepository extends CrudRepository<Veterinary, Long>{
	List<Veterinary> findByLastName(String lastName);
}