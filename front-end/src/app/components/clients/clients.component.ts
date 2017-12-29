import { Component, OnInit } from '@angular/core';
import { Clients } from '../../clients';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  showdetails = false;
  clients: Clients[];
  selectedClient: Clients;

  constructor(private dataService: DataService) { }

  getClients(){
    this.dataService.get('client').then(clients => this.clients = clients);
  }

  ngOnInit(): void {
    this.getClients();
  }

  onSelect(cli: Clients): void {
    this.dataService.changeClientSelected(cli); //this line is used to change the client selected in the dataservice
  }
}