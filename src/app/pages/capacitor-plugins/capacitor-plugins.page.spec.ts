import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitorPluginsPage } from './capacitor-plugins.page';

describe('CapacitorPluginsPage', () => {
  let component: CapacitorPluginsPage;
  let fixture: ComponentFixture<CapacitorPluginsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacitorPluginsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitorPluginsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
