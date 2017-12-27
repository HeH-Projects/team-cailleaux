import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';
import { Clients } from '../../clients';
import { ClientsComponent } from '../clients/clients.component';

@Component({
  selector: 'clients-infos',
  templateUrl: './clients-infos.component.html',
  styleUrls: ['./clients-infos.component.css']
})
export class ClientsInfosComponent implements OnInit {

  clientsComponent: ClientsComponent;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
}