import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilPage } from './stencil.page';

describe('StencilPage', () => {
  let component: StencilPage;
  let fixture: ComponentFixture<StencilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StencilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StencilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
