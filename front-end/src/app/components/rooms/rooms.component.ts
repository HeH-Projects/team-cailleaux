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

  onSelect(room: Rooms): void{
    this.dataService.changeRoomSelected(room);
  }

  getRooms(): void{
    this.dataService.get('room').then(rooms => this.rooms = rooms);
  }

  ngOnInit(): void{
    this.getRooms();
  }

  delete(room: Rooms): void{
    this.dataService.delete(room.id, 'room').then(() => this.reload());
  }

  reload(): void{
    window.location.reload();
  }

}
