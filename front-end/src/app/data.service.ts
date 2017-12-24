import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Clients } from './clients';
import { Doctors } from './doctors';
import { Rooms } from './rooms';

@Injectable()
export class DataService {
  private clientsUrl='clients';
  private doctorsUrl='vet';
  private animalUrl='animal';
  private roomUrl='room';
  private appointmentUrl='appointment';

  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { }

  //fetch all the clients
  get(type: string): Promise<any>{
    switch(type){
      case 'client':
        return this.http.get(this.clientsUrl).toPromise().then(response=> response.json() as Clients[]).catch(this.handleError);
      case 'doctor':
        return this.http.get(this.doctorsUrl).toPromise().then(response=> response.json() as Doctors[]).catch(this.handleError);
      case 'animal':
        //return this.http.get(this.animalUrl).toPromise().then(response => response.json() as ).catch(this.handleError);
      case 'room':
        return this.http.get(this.roomUrl).toPromise().then(response => response.json() as Rooms[]).catch(this.handleError);
      case 'appointment':
        //return this.http.get(this.appointmentUrl).toPromise().then(response => response.json() as ).catch(this.handleError);

    }
  }

  //fetch clients or veterinaries by lastname
  getByLastName(type: string,lastName: string): Promise<any>{
    const url = `findbylastname/${lastName}`;
    switch(type){
      case 'client':
        return this.http.get(url).toPromise().then(response => response.json() as Clients[]).catch(this.handleError);
      case 'doctor':
        return this.http.get(url).toPromise().then(response => response.json() as Doctors[]).catch(this.handleError);
    }
  }

  //delete client
  delete(id: number, type: string): Promise<void>{
    var url;
    switch(type){
      case 'client':
        url = `${this.clientsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
      case 'doctor':
        url = `${this.doctorsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
    }
  }

  //THESE METHODS ADD THE DIFFRENT INFOS TO THE DATABASE
  
  //Add clients to the database
  createClient(client: Clients): Promise<Clients> {
    console.log(JSON.stringify(client));
    return this.http.post("postclient", JSON.stringify(client), {headers: this.headers}).toPromise().then(res => res.json() as Clients).catch(this.handleError);
  }

  //Add doctor to the database
  createDoctor(doctor: Doctors): Promise<Doctors>{
    return this.http.post("postvet", JSON.stringify(doctor), {headers: this.headers}).toPromise().then(res => res.json() as Doctors).catch(this.handleError);
  }

  createRooms(room: Rooms): Promise<Rooms>{
    return this.http.post("postroom", JSON.stringify(room), {headers: this.headers}).toPromise().then(res => res.json() as Rooms).catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('Error ', error);
    return Promise.reject(error.message || error);
  }
}
