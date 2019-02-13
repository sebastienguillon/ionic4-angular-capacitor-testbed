import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyPage } from './sticky.page';

describe('StickyPage', () => {
  let component: StickyPage;
  let fixture: ComponentFixture<StickyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
