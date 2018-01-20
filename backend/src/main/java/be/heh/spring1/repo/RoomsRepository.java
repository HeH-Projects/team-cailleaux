package be.heh.spring1.repo;

import be.heh.spring1.model.Room;
import java.util.List;
import org.springframework.data.repository.CrudRepository;

public interface RoomsRepository extends CrudRepository<Room, Long>{
    Room findById(long id);
}
