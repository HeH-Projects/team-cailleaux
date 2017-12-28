import { Component, OnInit } from '@angular/core';
import { Animal } from '../../animal';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-add-animal',
  templateUrl: './add-animal.component.html',
  styleUrls: ['./add-animal.component.css'],
})
export class AddAnimalComponent implements OnInit {
  

  constructor(dataService: DataService) { }

  ngOnInit() {
  }

}
