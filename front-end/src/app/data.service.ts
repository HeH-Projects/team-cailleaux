import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Clients } from './clients';
import { Doctors } from './doctors';

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

      case 'room':

      case 'appointment':


    }
  }

  //fetch clients by lastname
  getByLastName(type: string,lastName: string): Promise<any>{
    const url = `findbylastname/${lastName}`;
    switch(type){
      case 'client':
        return this.http.get(url).toPromise().then(response => response.json() as Clients[]).catch(this.handleError);
      case 'doctor':
        return this.http.get(url).toPromise().then(response => response.json() as Doctors[]).catch(this.handleError);
    }
  }

  //Add clients to the database
  create(client: Clients): Promise<Clients> {
    console.log(JSON.stringify(client));
    return this.http.post("postclient", JSON.stringify(client), {headers: this.headers}).toPromise().then(res => res.json() as Clients).catch(this.handleError);
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

  private handleError(error: any): Promise<any>{
    console.error('Error ', error);
    return Promise.reject(error.message || error);
  }
}
