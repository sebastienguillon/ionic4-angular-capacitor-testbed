import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordovaPluginsPage } from './cordova-plugins.page';

describe('CordovaPluginsPage', () => {
  let component: CordovaPluginsPage;
  let fixture: ComponentFixture<CordovaPluginsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordovaPluginsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordovaPluginsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
