import { Component } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Vet Manager';
  agenda  = true;

  nav(page: string): void {
    if(page == 'agenda' && !this.agenda){
      this.agenda = true;
    }
    else if(page == 'gestion' && this.agenda){
      this.agenda = false;
    }
  }

  current = 'clients';

  setCurrent(page: string) {
    if (this.current == page) { return '#002288' }
    else { return 'transparent'; }
  }
}
