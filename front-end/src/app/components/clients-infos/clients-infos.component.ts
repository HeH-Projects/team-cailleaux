import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Clients } from '../../clients';
import { Animal } from '../../animal';

@Component({
  selector: 'clients-infos',
  templateUrl: './clients-infos.component.html',
  styleUrls: ['./clients-infos.component.css']
})
export class ClientsInfosComponent implements OnInit {
  //this is the client that is selected on the component Clients
  cli: Clients;

  clientAnimals: Animal[];
  tempAnimals: Animal[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void{
    //this subscribe to the variable currentClient that is in the DataService
    this.dataService.currentClient.subscribe(cli => this.cli = cli);
    this.getClientAnimals();
  }


  //this method fetch all the animals of an animal
  getClientAnimals(): void{
    this.dataService.getAnimals(this.cli.id).then(animals => this.clientAnimals = animals);
  }

  //this will delete the client
  delete(cli: Clients): void{
    this.dataService.delete(cli.id, 'client').then(() => this.back());
  }

  //this method will make the user go back to the client list
  back(): void{
    window.location.replace("#/clients");
  }

  onSelect(animal: Animal): void{
    //we change the selected animal in the dataservice
    this.dataService.changeAnimalSelected(animal);
  }

}