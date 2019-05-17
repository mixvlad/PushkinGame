import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommaQuestionPageComponent } from './comma-question-page.component';

describe('QuestionPageComponent', () => {
  let component: CommaQuestionPageComponent;
  let fixture: ComponentFixture<CommaQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommaQuestionPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommaQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
