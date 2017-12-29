import { Component, OnInit } from '@angular/core';
import { Animal } from '../../animal';
import { Doctors } from '../../doctors';
import { Clients } from '../../clients';
import { DataService } from '../../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css'],
})
export class AddAnimalComponent implements OnInit {
  
  animal= new Animal;
  vetos: Doctors[];
  public selectedVet: Doctors;
  client: Clients;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    //we get all the veterinaries to display them in the combobox
    this.getAllVeterinaries();

    //this subscribe to the variable currentClient that is in the DataService
    this.dataService.currentClient.subscribe(cli => this.client = cli);
  }

  save(){
    //we set the id of the owner in our animal object
    this.animal.numOwner = this.client.id;

    //we set the id of the veterinary in our animal object
    this.animal.numVet = this.selectedVet.id;

    //we save the animal object and we got back to the client infos component
    this.dataService.createAnimal(this.animal).then(() => this.goBack());  
  }

  goBack(){
    window.location.replace("#/clients/infos");
  }

  //this method will get all the veterinaries in the db
  getAllVeterinaries(){
    this.dataService.get('doctor').then(vetos => this.vetos = vetos);
  }

  vetSelected(event){
    console.log('selected vet : ' + event);
  }

}
