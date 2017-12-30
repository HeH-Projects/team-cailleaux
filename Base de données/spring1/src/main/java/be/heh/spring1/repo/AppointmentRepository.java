package be.heh.spring1.repo;

import org.springframework.data.repository.CrudRepository;
import java.util.List;
import be.heh.spring1.model.Appointment;

public interface AppointmentRepository extends CrudRepository<Appointment, Long>{
    Appointment findById(long id);
}
