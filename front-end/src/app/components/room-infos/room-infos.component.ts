import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Rooms } from '../../rooms';

@Component({
  selector: 'app-room-infos',
  templateUrl: './room-infos.component.html',
  styleUrls: ['./room-infos.component.css'],
})
export class RoomInfosComponent implements OnInit {

  room: Rooms;

  constructor(private dataService: DataService) { }

  ngOnInit(): void{
    this.dataService.currentRoom.subscribe(room => this.room = room);
  }

  delete(room: Rooms): void{
    this.dataService.delete(room.id, 'room').then(() => this.back());
  }

  back(): void{
    window.location.replace("#/rooms");
  }

}
