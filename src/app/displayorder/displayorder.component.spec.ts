import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayorderComponent } from './displayorder.component';

describe('DisplayorderComponent', () => {
  let component: DisplayorderComponent;
  let fixture: ComponentFixture<DisplayorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
