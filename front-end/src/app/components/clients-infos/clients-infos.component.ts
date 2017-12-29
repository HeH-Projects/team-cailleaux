import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Clients } from '../../clients';
import { ClientsComponent } from '../clients/clients.component';
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

  getClientAnimals(){
    this.dataService.getAnimals(this.cli.id).then(animals => this.clientAnimals = animals);
  }

  back(): void {
    window.location.replace("#/clients");
  }

  delete(cli: Clients): void{
    this.dataService.delete(cli.id, 'client').then(() => this.back());
  }

  ngOnInit() {
    //this subscribe to the variable currentClient that is in the DataService
    this.dataService.currentClient.subscribe(cli => this.cli = cli);
    this.getClientAnimals();
  }

}