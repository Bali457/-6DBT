import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedWebProgrammingQuestionsComponent } from './advanced-web-programming-questions.component';

describe('AdvancedWebProgrammingQuestionsComponent', () => {
  let component: AdvancedWebProgrammingQuestionsComponent;
  let fixture: ComponentFixture<AdvancedWebProgrammingQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedWebProgrammingQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedWebProgrammingQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
