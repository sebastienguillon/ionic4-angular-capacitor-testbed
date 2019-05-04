import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitchDemoPage } from './toggle-switch-demo.page';

describe('ToggleSwitchDemoPage', () => {
  let component: ToggleSwitchDemoPage;
  let fixture: ComponentFixture<ToggleSwitchDemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSwitchDemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSwitchDemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
