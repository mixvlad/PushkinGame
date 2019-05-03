import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommaGameComponent } from './comma-game.component';

describe('CommaGameComponent', () => {
  let component: CommaGameComponent;
  let fixture: ComponentFixture<CommaGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommaGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommaGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
