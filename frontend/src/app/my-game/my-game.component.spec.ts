import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModelComponent } from './my-model.component';

describe('MyModelComponent', () => {
  let component: MyModelComponent;
  let fixture: ComponentFixture<MyModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
