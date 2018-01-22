import { Component, OnInit } from '@angular/core';
import { Rooms } from '../../rooms'
import { DataService } from '../../data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: Rooms[];

  constructor(private dataService: DataService) { }

  //this is used to change the value of the selected room stored in the service data.service
  onSelect(room: Rooms): void{
    this.dataService.changeRoomSelected(room);
  }

  //this is used to fetch all the rooms of the table
  getRooms(): void{
    this.dataService.get('room').then(rooms => this.rooms = rooms);
  }
  
  ngOnInit(): void{
    this.getRooms();
  }

}
