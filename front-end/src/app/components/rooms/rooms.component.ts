import { Component, OnInit } from '@angular/core';
import { Rooms } from '../../rooms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})

export class RoomsComponent implements OnInit {
  showdetails = false;
  rooms: Rooms[];
  selectedroom: Rooms;

  constructor(private dataService: DataService) { }

  getRooms(){
    this.dataService.get('rooms').then(rooms => this.rooms = rooms);
  }

  ngOnInit(): void {
    this.getRooms();
  }

  onSelect(roo: Rooms): void {
    this.selectedroom = roo;  
  }

  delete(roo: Rooms): void{
    console.log(roo.id);
    this.dataService.delete('room', roo.id).then(() => this.reload());
  }

  reload(): void {
    window.location.reload();
  }
}
