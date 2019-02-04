import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { Plugins } from '@capacitor/core';

import { Platform } from '@ionic/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let platformReadySpy, platformSpy;
  let statusBarSpy;

  beforeEach(async(() => {
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', {
      ready: platformReadySpy,
      is: Boolean,
    });
    statusBarSpy = jasmine.createSpyObj('StatusBar', {
      setStyle: Promise.resolve(),
    });

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Platform, useValue: platformSpy },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
  });
/*
  it('statusBarSpy.setStyle', async () => {
    expect(statusBarSpy.setStyle).toHaveBeenCalled();
    await Promise.resolve();
  });
*/
  // it('should set StatusBar Style to Dark if running in Capacitor', () => {
  //   expect(platformSpy.is('capacitor')).toBe(true);
  // });

});
