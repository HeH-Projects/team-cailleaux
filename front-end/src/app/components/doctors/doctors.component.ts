import { Component, OnInit } from '@angular/core';
import { Doctors } from '../../doctors';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctors[];

  constructor(private dataService: DataService) { }

  //this is used to update the selected vet variable in the service data.service
  onSelect(vet: Doctors): void{
    this.dataService.changeVetSelected(vet);
  }

  //this is used to fetch all the veterinaries of the database
  getDoctors(): void{
    this.dataService.get('doctor').then(doctors => this.doctors = doctors);
  }

  ngOnInit(): void {
    this.getDoctors();
  }

}
