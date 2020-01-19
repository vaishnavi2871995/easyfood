import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateordernoComponent } from './generateorderno.component';

describe('GenerateordernoComponent', () => {
  let component: GenerateordernoComponent;
  let fixture: ComponentFixture<GenerateordernoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateordernoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateordernoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
