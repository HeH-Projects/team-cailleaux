package be.heh.spring1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.beans.factory.annotation.Autowired;

import be.heh.spring1.ClientRepository;

@SpringBootApplication
public class Spring1Application implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(Spring1Application.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		//Delete des anciens enregistrements si il y en a eu avant
		//repository.deleteAll();
	}
}