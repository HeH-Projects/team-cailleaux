import { Component, OnInit } from '@angular/core';
import { Rooms } from '../../rooms';
import { DataService } from '../../data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-rooms',
  templateUrl: './create-rooms.component.html',
  styleUrls: ['./create-rooms.component.css'],
})
export class CreateRoomsComponent implements OnInit {

  room = new Rooms;

  constructor(private dataService: DataService, private location: Location) { }

  ngOnInit() {
  }
  
  private save(): void{
    this.dataService.create('room', this.room).then(() => this.goBack());
  }
  
  goBack(): void{
    window.location.replace("#/rooms");
  }

}
