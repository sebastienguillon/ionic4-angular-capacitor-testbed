import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StencilBasicPage } from './stencil-basic.page';

describe('StencilBasicPage', () => {
  let component: StencilBasicPage;
  let fixture: ComponentFixture<StencilBasicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StencilBasicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StencilBasicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
