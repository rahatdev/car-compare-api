import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSelectionComponent } from './general-selection.component';

describe('GeneralSelectionComponent', () => {
  let component: GeneralSelectionComponent;
  let fixture: ComponentFixture<GeneralSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
