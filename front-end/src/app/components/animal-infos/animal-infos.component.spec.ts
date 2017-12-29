import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalInfosComponent } from './animal-infos.component';

describe('AnimalInfosComponent', () => {
  let component: AnimalInfosComponent;
  let fixture: ComponentFixture<AnimalInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
