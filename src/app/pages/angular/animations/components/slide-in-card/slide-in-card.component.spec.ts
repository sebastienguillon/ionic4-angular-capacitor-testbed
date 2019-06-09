import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideInCardComponent } from './slide-in-card.component';

describe('SlideInCardComponent', () => {
  let component: SlideInCardComponent;
  let fixture: ComponentFixture<SlideInCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideInCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideInCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
