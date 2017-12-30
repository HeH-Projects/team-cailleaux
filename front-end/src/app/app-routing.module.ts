import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaComponent } from './components/agenda/agenda.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';
import { CreateDoctorsComponent } from './components/create-doctors/create-doctors.component';
import { CreateRoomsComponent } from './components/create-rooms/create-rooms.component';
import { ClientsInfosComponent } from './components/clients-infos/clients-infos.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { AnimalInfosComponent } from './components/animal-infos/animal-infos.component';
import { DoctorInfosComponent } from './components/doctor-infos/doctor-infos.component';
import { RoomInfosComponent } from './components/room-infos/room-infos.component';

const routes: Routes = [
    {path:'', redirectTo: 'agenda', pathMatch: 'full'},
    {path:'agenda', component:AgendaComponent},
    {path:'clients', component:ClientsComponent},
    {path:'doctors', component:DoctorsComponent},
    {path:'rooms', component:RoomsComponent},
    {path:'clients/create', component:CreateClientsComponent},
    {path:'doctors/create', component:CreateDoctorsComponent},
    {path: 'rooms/create', component:CreateRoomsComponent},
    {path:'clients/infos', component:ClientsInfosComponent},
    {path:'clients/infos/addanimal', component:AddAnimalComponent},
    {path:'clients/infos/animal', component:AnimalInfosComponent},
    {path:'doctors/infos', component:DoctorInfosComponent},
    {path:'rooms/infos', component:RoomInfosComponent},
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
  
  export class AppRoutingModule{}