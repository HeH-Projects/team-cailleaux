import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Rooms } from '../../rooms';

@Component({
  selector: 'app-room-infos',
  templateUrl: './room-infos.component.html',
  styleUrls: ['./room-infos.component.css'],
})
export class RoomInfosComponent implements OnInit {

  updatedRoom = new Rooms;

  room: Rooms;

  constructor(private dataService: DataService) { }

  ngOnInit(): void{
    this.dataService.currentRoom.subscribe(room => this.room = room);
  }

  //this is used to delete a room from the db
  delete(room: Rooms): void{
    this.dataService.delete(room.id, 'room').then(() => this.back());
  }

  back(): void{
    window.location.replace("#/rooms");
  }

  //this is used to update a room in the database.
  update(): void{
    if(this.updatedRoom.material==null){
      this.updatedRoom.material=this.room.material;
    }

    this.dataService.updateRoom(this.updatedRoom, this.room.id).then(() => this.back());
  }

}
