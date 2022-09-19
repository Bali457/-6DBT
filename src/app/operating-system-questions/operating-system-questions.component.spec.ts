import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatingSystemQuestionsComponent } from './operating-system-questions.component';

describe('OperatingSystemQuestionsComponent', () => {
  let component: OperatingSystemQuestionsComponent;
  let fixture: ComponentFixture<OperatingSystemQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatingSystemQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatingSystemQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
