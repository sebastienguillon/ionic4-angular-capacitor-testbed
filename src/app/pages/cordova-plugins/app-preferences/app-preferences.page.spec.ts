import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';

import { AppPreferencesPage } from './app-preferences.page';

describe('AppPreferencesPage', () => {
  let component: AppPreferencesPage;
  let fixture: ComponentFixture<AppPreferencesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPreferencesPage ],
      providers: [AppPreferences],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPreferencesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
