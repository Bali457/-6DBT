import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseTechnologyQuestionsComponent } from './database-technology-questions.component';

describe('DatabaseTechnologyQuestionsComponent', () => {
  let component: DatabaseTechnologyQuestionsComponent;
  let fixture: ComponentFixture<DatabaseTechnologyQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabaseTechnologyQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseTechnologyQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
