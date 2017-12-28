import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Clients } from '../../clients';
import { ClientsComponent } from '../clients/clients.component';

@Component({
  selector: 'clients-infos',
  templateUrl: './clients-infos.component.html',
  styleUrls: ['./clients-infos.component.css']
})
export class ClientsInfosComponent implements OnInit {
  //this is the client that is selected on the component Clients
  cli: Clients;

  constructor(private dataService: DataService) { }

  ngOnInit() { 
    //this subscribe to the variable currentClient that is in the DataService
    this.dataService.currentClient.subscribe(cli => this.cli = cli);
  }
}