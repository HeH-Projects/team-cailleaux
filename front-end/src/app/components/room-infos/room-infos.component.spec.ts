import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomInfosComponent } from './room-infos.component';

describe('RoomInfosComponent', () => {
  let component: RoomInfosComponent;
  let fixture: ComponentFixture<RoomInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
