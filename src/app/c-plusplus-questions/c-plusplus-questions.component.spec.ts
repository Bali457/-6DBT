import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CPlusplusQuestionsComponent } from './c-plusplus-questions.component';

describe('CPlusplusQuestionsComponent', () => {
  let component: CPlusplusQuestionsComponent;
  let fixture: ComponentFixture<CPlusplusQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CPlusplusQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CPlusplusQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
