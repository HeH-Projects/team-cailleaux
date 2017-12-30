import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Doctors } from '../../doctors';

@Component({
  selector: 'app-doctor-infos',
  templateUrl: './doctor-infos.component.html',
  styleUrls: ['./doctor-infos.component.css'],
})
export class DoctorInfosComponent implements OnInit {
  updatedVet = new Doctors;

  vet: Doctors;

  constructor(private dataService: DataService) { }

  ngOnInit(): void{
    this.dataService.currentVet.subscribe(vet => this.vet = vet);
  }

  delete(vet: Doctors): void{
    this.dataService.delete(vet.id, 'doctor').then(() => this.back());
  }

  back(): void{
    window.location.replace("#/doctors");
  }

  //This method is used to update informations about the veterinary
  update(): void{
    if(this.updatedVet.firstName==null){
      this.updatedVet.firstName=this.vet.firstName;
    }

    if(this.updatedVet.lastName==null){
      this.updatedVet.lastName=this.vet.lastName;
    }

    this.dataService.updateDoctor(this.updatedVet, this.vet.id).then(() => this.back());
  }

}
