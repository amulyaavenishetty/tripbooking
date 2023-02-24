import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripBookingComponent } from './trip-booking.component';

describe('TripBookingComponent', () => {
  let component: TripBookingComponent;
  let fixture: ComponentFixture<TripBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
