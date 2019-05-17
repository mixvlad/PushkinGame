import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashQuestionPageComponent } from './dash-question-page.component';

describe('DashPageComponent', () => {
  let component: DashQuestionPageComponent;
  let fixture: ComponentFixture<DashQuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashQuestionPageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashQuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
