import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceJavaQuestionsComponent } from './advance-java-questions.component';

describe('AdvanceJavaQuestionsComponent', () => {
  let component: AdvanceJavaQuestionsComponent;
  let fixture: ComponentFixture<AdvanceJavaQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceJavaQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceJavaQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
