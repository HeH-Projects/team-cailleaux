import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDoctorsComponent } from './create-doctors.component';

describe('CreateDoctorsComponent', () => {
  let component: CreateDoctorsComponent;
  let fixture: ComponentFixture<CreateDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
