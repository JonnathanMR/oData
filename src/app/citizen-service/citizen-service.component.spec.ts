import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenServiceComponent } from './citizen-service.component';

describe('CitizenServiceComponent', () => {
  let component: CitizenServiceComponent;
  let fixture: ComponentFixture<CitizenServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
