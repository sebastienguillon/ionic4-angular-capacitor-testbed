import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationPositionsComponent } from './geolocation-positions.component';

describe('GeolocationPositionsComponent', () => {
  let component: GeolocationPositionsComponent;
  let fixture: ComponentFixture<GeolocationPositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationPositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationPositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
