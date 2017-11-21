package be.heh.spring1.controller;


import be.heh.spring1.model.Clients;
import be.heh.spring1.repo.ClientsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class WebController {

    @Autowired
    ClientsRepository repo;

    @GetMapping(value="/clients", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Clients> getAll(){
        List<Clients> list = new ArrayList<>();


        //we get all the clients
        Iterable<Clients> clients=repo.findAll();

        //we add each elements of "clients" to the list
        clients.forEach(list::add);
        return list;
    }

    @PostMapping(value="/postclient")
    public Clients postClient(@RequestBody Clients client){
        repo.save(new Clients(client.getFirstName(), client.getLastName(), client.getPhoneNumber(), client.getAddress()));
        return client;
    }

    @GetMapping(value="/findbylastname/{lastName}", produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Clients> findByLastName(@PathVariable String lastName){
        //we use the method of the inteface ClientsRepository
        List<Clients> clients = repo.findByLastName(lastName);
        return clients;
    }

    @DeleteMapping(value="/clients/{id}")
    public void deleteClients(@PathVariable long id){
        repo.delete(id);
    }

}
