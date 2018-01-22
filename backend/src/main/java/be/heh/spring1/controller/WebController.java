package be.heh.spring1.controller;


import be.heh.spring1.model.*;
import be.heh.spring1.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class WebController {

    @Autowired
    ClientsRepository repoClient;

    @Autowired
    VeterinaryRepository repoVet;

    @Autowired
    RoomsRepository repoRoom;

    @Autowired
    AnimalRepository repoAnimal;

    @Autowired
    AppointmentRepository repoAppointment;


    /*
     *CLIENTS
     */

    @GetMapping(value="/clients", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Clients> getAll(){
        List<Clients> list = new ArrayList<>();


        //we get all the clients
        Iterable<Clients> clients=repoClient.findAll();

        //we add each elements of "clients" to the list
        clients.forEach(list::add);
        return list;
    }

    @GetMapping(value="/findbylastname/{lastName}", produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Clients> findByLastName(@PathVariable String lastName){
        //we use the method of the inteface ClientsRepository
        List<Clients> clients = repoClient.findByLastName(lastName);
        return clients;
    }

    @PostMapping(value="/postclient")
    public Clients postClient(@RequestBody Clients client){
        repoClient.save(new Clients(client.getFirstName(), client.getLastName(), client.getPhoneNumber(), client.getAddress()));
        return client;
    }

    @PostMapping(value="/updateclient/{id}")
    public Clients updateClient(@RequestBody Clients client, @PathVariable long id){
        Clients clientToUpdate = repoClient.findById(id);
        clientToUpdate.setFirstName(client.getFirstName());
        clientToUpdate.setLastName(client.getLastName());
        clientToUpdate.setAddress(client.getAddress());
        clientToUpdate.setPhoneNumber(client.getPhoneNumber());

        repoClient.save(clientToUpdate);
        return clientToUpdate;
    }

    @DeleteMapping(value="/clients/{id}")
    public void deleteClients(@PathVariable long id){
        repoClient.delete(id);
    }


    /*
     *VETERINARY
     */

    @GetMapping(value="/vet", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Veterinary> getAllVeterinary(){
        List<Veterinary> list = new ArrayList<>();

        //we get all the veterinaries
        Iterable<Veterinary> veterinaries = repoVet.findAll();

        //we add each elements of "veterinaries" to the list
        veterinaries.forEach(list::add);
        return list;
    }

    @GetMapping(value="/findvetbyname/{lastName}", produces=MediaType.APPLICATION_JSON_VALUE)
    public List<Veterinary> findVetByLastName(@PathVariable String lastName){
        //we use the method of the inteface ClientsRepository
        List<Veterinary> vet = repoVet.findByLastName(lastName);
        return vet;
    }

    @GetMapping(value="/findvetbyid/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
    public Veterinary findVetByid(@PathVariable long id){
        Veterinary vet = repoVet.findById(id);

        return vet;
    }

    @PostMapping(value="/postvet")
    public Veterinary postVet(@RequestBody Veterinary vet){
        repoVet.save(new Veterinary(vet.getFirstName(), vet.getLastName()));
        return vet;
    }

    @PostMapping(value="/updatevet/{id}")
    public Veterinary updateVet(@RequestBody Veterinary vet, @PathVariable long id){
        Veterinary vetToUpdate = repoVet.findById(id);

        vetToUpdate.setFirstName(vet.getFirstName());
        vetToUpdate.setLastName(vet.getLastName());

        repoVet.save(vetToUpdate);
        return vet;
    }

    @DeleteMapping(value="/vet/{id}")
    public void deleteVet(@PathVariable long id){ repoVet.delete(id); }

    /*
    *ROOMS
     */

    @GetMapping(value="/room", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Room> getAllRooms(){
        List<Room> list = new ArrayList<>();

        //we get all the rooms
        Iterable<Room> rooms = repoRoom.findAll();

        //we add each elements of "rooms" to the list
        rooms.forEach(list::add);
        return list;
    }

    @GetMapping(value="/findroombyid/{id}", produces=MediaType.APPLICATION_JSON_VALUE)
    public Room findRoomById(@PathVariable long id){
        //we use the method of the inteface ClientsRepository
        Room rooms = repoRoom.findById(id);
        return rooms;
    }

    @PostMapping(value="/postroom")
    public Room postRoom(@RequestBody Room room){
        repoRoom.save(new Room(room.getMaterial()));
        return room;
    }

    @PostMapping(value="/updateroom/{id}")
    public Room updateRoom(@RequestBody Room room, @PathVariable long id){
        Room roomToUpdate = repoRoom.findById(id);

        roomToUpdate.setMaterial(room.getMaterial());

        repoRoom.save(roomToUpdate);
        return room;
    }

    @DeleteMapping(value="/room/{id}")
    public void deleteRomm(@PathVariable long id){
        repoRoom.delete(id);
    }

    /*
    *ANIMAL
     */

    @GetMapping(value="/animal", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Animal> getAllAnimals(){
        List<Animal> list = new ArrayList<>();

        //we get all the animals
        Iterable<Animal> animals = repoAnimal.findAll();

        //we add each elements of "animals" to the list
        animals.forEach(list::add);
        return list;
    }

    @GetMapping(value="/findanimalbyname/{name}", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Animal> getAnimalByName(@PathVariable String name){
        List<Animal> animals = repoAnimal.findByName(name);
        return animals;
    }

    //this mapping will get the animals of a client that is determined by the id in the HTTP request GET
    @GetMapping(value="/clients/infos/animals/{idCli}", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Animal> getClientsAnimals(@PathVariable long idCli){
        List<Animal> list = new ArrayList<>();
        List<Animal> listTemp = new ArrayList<>();

        Iterable<Animal> animals = repoAnimal.findAll();
        
        animals.forEach(listTemp::add);

        for(Animal a : listTemp){
            if(a.getNumOwner() == idCli){
                list.add(a);
            }
        }

        return list;
    }

    @PostMapping(value="/postanimal")
    public Animal postAnimal(@RequestBody Animal animal){
        repoAnimal.save(new Animal(animal.getNumOwner(), animal.getNumVet(), animal.getName(), animal.getSex(), animal.getSpecies(), animal.getBirthDate()));
        return animal;
    }

    @PostMapping(value="/updateanimal/{id}")
    public Animal updateAnimal(@RequestBody Animal animal, @PathVariable long id){
        Animal animalToUpdate = repoAnimal.findById(id);

        animalToUpdate.setNumVet(animal.getNumVet());
        animalToUpdate.setName(animal.getName());
        animalToUpdate.setSex(animal.getSex());
        animalToUpdate.setSpecies(animal.getSpecies());
        animalToUpdate.setBirthDate(animal.getBirthDate());

        repoAnimal.save(animalToUpdate);
        return animal;
    }

    @DeleteMapping(value="/animal/{id}")
    public void deleteAnimal(@PathVariable long id){
        repoAnimal.delete(id);
    }

    /*
    *APPOINTMENTS
     */
    @GetMapping(value="/appointment", produces= MediaType.APPLICATION_JSON_VALUE)
    public List<Appointment> getAllAppointments(){
        List<Appointment> list = new ArrayList<>();

        //we get all the Appointements
        Iterable<Appointment> appointments = repoAppointment.findAll();

        //we add each elements of "appointments" to the list
        appointments.forEach(list::add);
        return list;
    }

    @GetMapping(value="/findappointmentbyid/{id}", produces= MediaType.APPLICATION_JSON_VALUE)
    public Appointment getAppointmentById(@PathVariable long id){
        Appointment appointments = repoAppointment.findById(id);
        return appointments;
    }

    @PostMapping(value="/postappointment")
    public Appointment postAppointment(@RequestBody Appointment appointment){
        repoAppointment.save(new Appointment(appointment.getNumRoom(), appointment.getNumVet(), appointment.getNumAnimal(), appointment.getDate()));
        return appointment;
    }

    @PostMapping(value="/updateappointment/{id}")
    public Appointment updateAppointment(@RequestBody Appointment appointment, @PathVariable long id){
        Appointment appointmentToUpdate = repoAppointment.findById(id);
        
        appointmentToUpdate.setNumRoom(appointment.getNumRoom());
        appointmentToUpdate.setNumVet(appointment.getNumVet());
        appointmentToUpdate.setNumAnimal(appointment.getNumAnimal());
        appointmentToUpdate.setDate(appointment.getDate());

        repoAppointment.save(appointmentToUpdate);
        return appointment;
    }

    @DeleteMapping(value="/appointment/{id}")
    public void deleteAppointment(@PathVariable long id){
        repoAppointment.delete(id);
    }
}
