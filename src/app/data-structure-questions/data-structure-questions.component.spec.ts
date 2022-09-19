import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataStructureQuestionsComponent } from './data-structure-questions.component';

describe('DataStructureQuestionsComponent', () => {
  let component: DataStructureQuestionsComponent;
  let fixture: ComponentFixture<DataStructureQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataStructureQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataStructureQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
