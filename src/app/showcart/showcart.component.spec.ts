import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcartComponent } from './showcart.component';

describe('ShowcartComponent', () => {
  let component: ShowcartComponent;
  let fixture: ComponentFixture<ShowcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
