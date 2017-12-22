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
    this.dataService.getClients().then(clients => this.clients = clients);
  }

  ngOnInit(): void {
    this.getClients();
  }

  onSelect(cli: Clients): void {
    this.selectedClient = cli;  
  }

  delete(cli: Clients): void{
    console.log(cli.id);
    this.dataService.delete(cli.id).then(() => this.reload());
  }

  reload(): void {
    window.location.reload();
  }
}
