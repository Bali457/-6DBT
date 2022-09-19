import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanStackQuestionsComponent } from './mean-stack-questions.component';

describe('MeanStackQuestionsComponent', () => {
  let component: MeanStackQuestionsComponent;
  let fixture: ComponentFixture<MeanStackQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeanStackQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeanStackQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
