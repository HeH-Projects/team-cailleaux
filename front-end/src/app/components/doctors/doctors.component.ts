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

  getDoctors(): void{
    this.dataService.get('doctor').then(doctors => this.doctors = doctors);
  }

  ngOnInit(): void {
    this.getDoctors();
  }

  delete(doc: Doctors): void{
    this.dataService.delete(doc.id, 'doctor').then(() => this.reload());
  }

  reload(): void{
    window.location.reload();
  }
}
