import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocationSettingsPage } from './geolocation-settings.page';

describe('GeolocationSettingsPage', () => {
  let component: GeolocationSettingsPage;
  let fixture: ComponentFixture<GeolocationSettingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeolocationSettingsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
