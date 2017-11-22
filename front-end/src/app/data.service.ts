import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Clients } from './clients';
import { Doctors } from './doctors';
import { Rooms } from './rooms';

@Injectable()
export class DataService {
  private clientsUrl = 'clients';
  private doctorsUrl = 'doctors';
  private roomsUrl = 'rooms';
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { }

  //fetch all the clients
  get(type: string): Promise<any> {

    let url;

    switch (type) {
      case 'client' :
        url = this.http.get(this.clientsUrl).toPromise().then(response=> response.json() as Clients[]).catch(this.handleError);
        break;
      case 'doctor' :
        url = this.http.get(this.doctorsUrl).toPromise().then(response=> response.json() as Doctors[]).catch(this.handleError);
        break;
      case 'room' :
        url = this.http.get(this.roomsUrl).toPromise().then(response=> response.json() as Rooms[]).catch(this.handleError);
        break;
    }

    return url;
  }

  //fetch clients by lastname
  getByLastName(type: string, lastName: string): Promise<any> {
    const url = `findbylastname/${lastName}`;
    let getUrl;

    switch (type) {
      case 'client' :
        getUrl = this.http.get(url).toPromise().then(response => response.json() as Clients[]).catch(this.handleError);
        break;
      case 'doctors' :
        getUrl = this.http.get(url).toPromise().then(response => response.json() as Doctors[]).catch(this.handleError);
        break;
      case 'rooms' :
        getUrl = this.http.get(url).toPromise().then(response => response.json() as Rooms[]).catch(this.handleError);
        break;
    }

    return getUrl;
  }

  //Add clients to the database
  create(type: string, item: object): Promise<any> {
    let created;

    switch (type) {
      case 'client' :
        created = this.http.post("postclient", JSON.stringify(item), {headers: this.headers}).toPromise().then(res => res.json() as Clients).catch(this.handleError);
        break;
      case 'doctors' :
        created = this.http.post("postdoctor", JSON.stringify(item), {headers: this.headers}).toPromise().then(res => res.json() as Doctors).catch(this.handleError);
        break;
      case 'rooms' :
        created = this.http.post("postroom", JSON.stringify(item), {headers: this.headers}).toPromise().then(res => res.json() as Rooms).catch(this.handleError);
        break;
    }

    return created;
  }

  //delete client
  delete(type: string, id: number): Promise<void>{
    const url = `${this.clientsUrl}/${id}`;
    let deleted;
    console.log(url);

    switch (type) {
      case 'client' :
        deleted = this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
        break;
      case 'doctors' :
        deleted = this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
        break;
      case 'rooms' :
        deleted = this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
        break;
    }

    return deleted;
  }

  private handleError(error: any): Promise<any>{
    console.error('Error ', error);
    return Promise.reject(error.message || error);
  }
}
