import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashGameComponent } from './dash-game.component';

describe('DashGameComponent', () => {
  let component: DashGameComponent;
  let fixture: ComponentFixture<DashGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
