import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Animal } from '../../animal';


@Component({
  selector: 'app-animal-infos',
  templateUrl: './animal-infos.component.html',
  styleUrls: ['./animal-infos.component.css'],
})
export class AnimalInfosComponent implements OnInit {

  animal: Animal;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.currentAnimal.subscribe(animal => this.animal = animal);
  }

  delete(animal: Animal){
    this.dataService.delete(animal.id, 'animal').then(() => this.back());
  }

  back(){
    window.location.replace("#/clients/infos");
  }

}
