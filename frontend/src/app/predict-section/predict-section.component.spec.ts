import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictSectionComponent } from './predict-section.component';

describe('PredictSectionComponent', () => {
  let component: PredictSectionComponent;
  let fixture: ComponentFixture<PredictSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
