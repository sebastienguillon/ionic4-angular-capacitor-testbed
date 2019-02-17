import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonModalPage } from './ion-modal.page';

describe('IonModalPage', () => {
  let component: IonModalPage;
  let fixture: ComponentFixture<IonModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
