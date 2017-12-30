import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Location } from '@angular/common';
import { Rooms } from '../../rooms';

@Component({
  selector: 'app-create-rooms',
  templateUrl: './create-rooms.component.html',
  styleUrls: ['./create-rooms.component.css'],
})
export class CreateRoomsComponent implements OnInit {

  room = new Rooms;

  constructor(private dataService: DataService, private location: Location) { }

  ngOnInit(): void{
  }

  private save(): void{
    this.dataService.createRooms(this.room).then(() => this.goBack());
  }

  goBack(): void{
    window.location.replace("#/rooms");
  }

}
