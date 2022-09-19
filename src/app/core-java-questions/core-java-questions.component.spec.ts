import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreJavaQuestionsComponent } from './core-java-questions.component';

describe('CoreJavaQuestionsComponent', () => {
  let component: CoreJavaQuestionsComponent;
  let fixture: ComponentFixture<CoreJavaQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreJavaQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreJavaQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
