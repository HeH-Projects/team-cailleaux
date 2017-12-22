import { NgModule } from  '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaComponent } from './components/agenda/agenda.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';

const routes: Routes = [
    {path:'', redirectTo: 'agenda', pathMatch: 'full'},
    {path:'agenda', component:AgendaComponent},
    {path:'clients', component:ClientsComponent},
    {path:'doctors', component:DoctorsComponent},
    {path:'rooms', component:RoomsComponent},
    {path:'clients/create', component:CreateClientsComponent}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
  
  export class AppRoutingModule{}