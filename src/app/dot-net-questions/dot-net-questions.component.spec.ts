import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetQuestionsComponent } from './dot-net-questions.component';

describe('DotNetQuestionsComponent', () => {
  let component: DotNetQuestionsComponent;
  let fixture: ComponentFixture<DotNetQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotNetQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotNetQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
