import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Clients } from './clients';
import { Doctors } from './doctors';
import { Rooms } from './rooms';
import { Animal } from './animal';
import { Appointment } from './appointment';

@Injectable()
export class DataService {
  private clientsUrl='clients';
  private doctorsUrl='vet';
  private animalUrl='animal';
  private roomUrl='room';
  private appointmentUrl='appointment';

  private headers = new Headers({'Content-Type': 'application/json'});
  
  //this will contain the client that is selected in the client list
  private clientSelected = new BehaviorSubject<Clients>(new Clients());
  //this will transform the client in an Observable
  currentClient = this.clientSelected.asObservable();

  constructor(private http: Http) { }

  //fetch all the clients
  get(type: string): Promise<any>{
    switch(type){
      case 'client':
        return this.http.get(this.clientsUrl).toPromise().then(response=> response.json() as Clients[]).catch(this.handleError);
      case 'doctor':
        return this.http.get(this.doctorsUrl).toPromise().then(response=> response.json() as Doctors[]).catch(this.handleError);
      case 'animal':
        return this.http.get(this.animalUrl).toPromise().then(response => response.json() as Animal[]).catch(this.handleError);
      case 'room':
        return this.http.get(this.roomUrl).toPromise().then(response => response.json() as Rooms[]).catch(this.handleError);
      case 'appointment':
        return this.http.get(this.appointmentUrl).toPromise().then(response => response.json() as Appointment[]).catch(this.handleError);
    }
  }

  getClientByid(id: number): Promise<Clients>{
    const url = `clients/infos/${id}`;
    return this.http.get(url).toPromise().then(response => response.json() as Clients).catch(this.handleError);
  }

  //fetch client by lastname
  getByLastName(lastName: string): Promise<Clients>{
    const url = `findbylastname/${lastName}`;
    return this.http.get(url).toPromise().then(response => response.json() as Clients[]).catch(this.handleError);
  }

  //fetch veterinary by lastname
  getVetByLastName(lastName: string): Promise<Doctors>{
    const url= `findvetbylastname/${lastName}`;
    return this.http.get(url).toPromise().then(response => response.json() as Doctors[]).catch(this.handleError);
  }

  //fetch animal by name
  getAnimalByName(name: string): Promise<Animal>{
    const url = `findanimalbyname/${name}`;
    return this.http.get(url).toPromise().then(response => response.json() as Animal[]).catch(this.handleError);
  }

  //fetch room by id
  getRoomById(id: number): Promise<Animal>{
    const url = `findroombyid/${id}`;
    return this.http.get(url).toPromise().then(response => response.json() as Rooms[]).catch(this.handleError);
  }

  //fetch appointment by id
  getAppointmentById(id: number): Promise<Appointment> {
    const url = `findappointmentbyid/${id}`;
    return this.http.get(url).toPromise().then(response => response.json() as Appointment[]).catch(this.handleError);
  }

  //delete an entry in the database
  delete(id: number, type: string): Promise<void>{
    var url;
    switch(type){
      case 'client':
        url = `${this.clientsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
      case 'doctor':
        url = `${this.doctorsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
      case 'room':
        url = `${this.roomUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
      case 'animal':
        url= `${this.animalUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
      case 'appointment':
        url = `${this.appointmentUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers}).toPromise().then(() => null).catch(this.handleError);
    }
  }

  //THESE METHODS ARE USED TO ADD THE DIFFERENT ENTRIES IN THE DB
  
  //Add clients to the database
  createClient(client: Clients): Promise<Clients> {
    console.log(JSON.stringify(client));
    return this.http.post("postclient", JSON.stringify(client), {headers: this.headers}).toPromise().then(res => res.json() as Clients).catch(this.handleError);
  }

  //Add doctor to the database
  createDoctor(doctor: Doctors): Promise<Doctors>{
    console.log(JSON.stringify(doctor));
    return this.http.post("postvet", JSON.stringify(doctor), {headers: this.headers}).toPromise().then(res => res.json() as Doctors).catch(this.handleError);
  }

  createRooms(room: Rooms): Promise<Rooms>{
    console.log(JSON.stringify(room));
    return this.http.post("postroom", JSON.stringify(room), {headers: this.headers}).toPromise().then(res => res.json() as Rooms).catch(this.handleError);
  }

  createAnimal(animal: Animal): Promise<Animal>{
    console.log(JSON.stringify(animal));
    return this.http.post("postanimal", JSON.stringify(animal), {headers: this.headers}).toPromise().then(res => res.json() as Animal).catch(this.handleError);
  }

  createAppointment(appointment: Appointment): Promise<Appointment>{
    console.log(JSON.stringify(appointment));
    return this.http.post("postappointment",JSON.stringify(appointment), {headers: this.headers}).toPromise().then(res => res.json() as Appointment).catch(this.handleError);
  }

  //this method handle the possible errors that could occur the others methods
  private handleError(error: any): Promise<any>{
    console.error('Error ', error);
    return Promise.reject(error.message || error);
  }


  //this method is used to change the variable "clientSelected"
  changeMessage(cli: Clients){
    this.clientSelected.next(cli);
  }

  getAnimals(id: number): Promise<Animal[]>{
    const url = `clients/infos/animals/${id}`;
    return this.http.get(url).toPromise().then(response => response.json() as Animal).catch(this.handleError);
  }
}
