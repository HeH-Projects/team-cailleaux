import { Component, OnInit } from '@angular/core';
import { Clients } from '../../clients';
import { DataService } from '../../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-clients.component.html',
  styleUrls: ['./create-clients.component.css']
})
export class CreateClientsComponent implements OnInit {

  client = new Clients;

  constructor(private dataService: DataService, private location: Location) { }

  ngOnInit(): void{
  }

  public save(): void{
    this.dataService.createClient(this.client).then(() => this.goBack());
  }

  goBack(): void{
    window.location.replace("#/clients");
  }

}
