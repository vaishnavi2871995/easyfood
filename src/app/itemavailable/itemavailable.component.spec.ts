import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemavailableComponent } from './itemavailable.component';

describe('ItemavailableComponent', () => {
  let component: ItemavailableComponent;
  let fixture: ComponentFixture<ItemavailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemavailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
