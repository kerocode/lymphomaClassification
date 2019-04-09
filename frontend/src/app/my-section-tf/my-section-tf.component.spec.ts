import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySectionTfComponent } from './my-section-tf.component';

describe('MySectionTfComponent', () => {
  let component: MySectionTfComponent;
  let fixture: ComponentFixture<MySectionTfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySectionTfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySectionTfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
