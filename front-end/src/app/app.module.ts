//import all the modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//Ces 2 imports permettent de réafficher la page lorsque l'on la refresh
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

//import all the components
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';

//import all the services
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    DoctorsComponent,
    RoomsComponent,
    AgendaComponent,
    CreateClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
