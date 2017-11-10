package be.heh.spring1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import be.heh.spring1.Client;
import be.heh.spring1.ClientRepository;

@RestController
public class WebController {
    @Autowired
    ClientRepository repository;

    @RequestMapping("/save")
    public String process(){
        //Save un client
        repository.save(new Client("Jack", "Smith"));

        //save une liste de client
        repository.save(Arrays.asList(new Client("Adam","Johnson"), new Client("Kim","Smith"),
                new Client("David","Williams"), new Client("Peter","Davis")));

        return "Effectué";
    }

    @RequestMapping("/findall")
    public String findAll(){

        String result = "";

        for(Client client : repository.findAll()){
            result += client.toString() + "<br>";
        }

        return result;
    }

    @RequestMapping("/findbyid")
    public String findById(@RequestParam("id") long id){
        String result = "";
        result = repository.findOne(id).toString();
        return result;
    }

    @RequestMapping("/findbynom")
    public String fetchDataByNom(@RequestParam("nom") String nom){
        String result = "";

        for(Client client: repository.findByNom(nom)){
            result += client.toString() + "<br>";
        }

        return result;
    }
}