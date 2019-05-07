import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerGameComponent } from './timer-game.component';

describe('TimerGameComponent', () => {
  let component: TimerGameComponent;
  let fixture: ComponentFixture<TimerGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
