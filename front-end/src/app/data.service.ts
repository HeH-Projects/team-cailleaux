import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Clients } from './clients';

@Injectable()
export class DataService {
  private clientsUrl='clients';
  private headers = new Headers({'Content-Type': 'application/json'});
  
  constructor(private http: Http) { }

  //fetch all the clients
  getClients(): Promise<Clients[]>{
    return this.http.get(this.clientsUrl).toPromise().then(response=> response.json() as Clients[]).catch(this.handleError);
  }

  //fetch clients by lastname
  getClientsByLastName(lastName: string): Promise<Clients[]>{
    const url = `findbylastname/${lastName}`;
    return this.http.get(url).toPromise().then(response => response.json() as Clients[]).catch(this.handleError);
  }

  //Add clients to the database
  create(client: Clients): Promise<Clients> {
    console.log(JSON.stringify(client));
    return this.http.post("postclient", JSON.stringify(client), {headers: this.headers}).toPromise().then(res => res.json() as Clients).catch(this.handleError);
  }

  //delete client
  delete(id: number): Promise<void>{
    const url = `${this.clientsUrl}/${id}`;
    console.log(url);
    return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('Error ', error);
    return Promise.reject(error.message || error);
  }
}
