import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerQuestionPageComponent } from './timer-question-page.component';

describe('TimerQuestionPageComponent', () => {
  let component: TimerQuestionPageComponent;
  let fixture: ComponentFixture<TimerQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerQuestionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
