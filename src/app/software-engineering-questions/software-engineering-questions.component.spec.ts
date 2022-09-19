import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareEngineeringQuestionsComponent } from './software-engineering-questions.component';

describe('SoftwareEngineeringQuestionsComponent', () => {
  let component: SoftwareEngineeringQuestionsComponent;
  let fixture: ComponentFixture<SoftwareEngineeringQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwareEngineeringQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwareEngineeringQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
