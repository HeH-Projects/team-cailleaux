import { Component, OnInit } from '@angular/core';
import { Doctors } from '../../doctors';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  showdetails = false;
  doctors: Doctors[];
  selectedDoctor: Doctors;

  constructor(private dataService: DataService) { }

  getDoctor() {
    this.dataService.get('doctor').then(Doctors => this.doctors = Doctors);
  }

  ngOnInit(): void {
    this.getDoctor();
  }

  onSelect(doc: Doctors): void {
    this.selectedDoctor = doc;
  }

  delete(doc: Doctors): void{
    console.log(doc.id);
    this.dataService.delete('doctor', doc.id).then(() => this.reload());
  }

  reload(): void {
    window.location.reload();
  }
}
