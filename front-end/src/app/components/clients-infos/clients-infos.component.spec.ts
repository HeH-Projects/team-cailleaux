import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsInfosComponent } from './clients-infos.component';

describe('ClientsInfosComponent', () => {
  let component: ClientsInfosComponent;
  let fixture: ComponentFixture<ClientsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
