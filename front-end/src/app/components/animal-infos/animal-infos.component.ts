import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Animal } from '../../animal';
import { Doctors } from '../../doctors';


@Component({
  selector: 'app-animal-infos',
  templateUrl: './animal-infos.component.html',
  styleUrls: ['./animal-infos.component.css'],
})
export class AnimalInfosComponent implements OnInit {

  vetos: Doctors[];
  selectedVet: Doctors;
  vet: Doctors;

  updatedAnimal = new Animal;
  animal: Animal;

  constructor(private dataService: DataService) { }

  ngOnInit(): void{
    this.dataService.currentAnimal.subscribe(animal => this.animal = animal);

    //we get all the veterinaries to display them in the combobox
    this.getAllVeterinaries();
  }

  //this is used to get the veterinary that is in charge of the animal
  getAnimalVet(): void{
    this.dataService.getVetByid(this.animal.numVet).then(vet => this.vet = vet);
  }

  //this is used to fetch all the veterinaries of the database
  getAllVeterinaries(): void{
    this.dataService.get('doctor').then(vetos => this.vetos = vetos).then(() => this.getAnimalVet());
  }

  //this is used to delete the animal of the database
  delete(animal: Animal): void{
    this.dataService.delete(animal.id, 'animal').then(() => this.back());
  }

  back(): void{
    window.location.replace("#/clients/infos");
  }

  //this is used to update the animal in the database
  update(): void{
    if(this.selectedVet == null){
      this.updatedAnimal.numVet = this.animal.numVet;
    }else{
      this.updatedAnimal.numVet = this.selectedVet.id;
    }

    if(this.updatedAnimal.name == null){
      this.updatedAnimal.name=this.animal.name;
    }
    if(this.updatedAnimal.sex == null){
      this.updatedAnimal.sex=this.animal.sex;
    }
    if(this.updatedAnimal.species==null){
      this.updatedAnimal.species=this.animal.species;
    }
    if(this.updatedAnimal.birthDate==null){
      this.updatedAnimal.birthDate=this.animal.birthDate;
    }

    this.dataService.updateAnimal(this.updatedAnimal, this.animal.id).then(() => this.back());
  }

}
