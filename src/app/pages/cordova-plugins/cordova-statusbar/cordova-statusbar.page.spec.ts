import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CordovaStatusBarPage } from './cordova-statusbar.page';

describe('StatusBarPage', () => {
  let component: CordovaStatusBarPage;
  let fixture: ComponentFixture<CordovaStatusBarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CordovaStatusBarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CordovaStatusBarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
