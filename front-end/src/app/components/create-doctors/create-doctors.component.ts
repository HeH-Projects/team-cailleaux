import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Location } from '@angular/common';
import { Doctors } from '../../doctors';

@Component({
  selector: 'app-create-doctors',
  templateUrl: './create-doctors.component.html',
  styleUrls: ['./create-doctors.component.css'],
})
export class CreateDoctorsComponent implements OnInit {

  doctor = new Doctors;

  constructor(private dataService: DataService, private location: Location) { }

  ngOnInit(): void{
  }

  //this is used to save a veterinary in the database
  public save(): void{
    this.dataService.createDoctor(this.doctor).then(() => this.goBack());
  }

  goBack(): void{
    window.location.replace("#/doctors");
  }

}
