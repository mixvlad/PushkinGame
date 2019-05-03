import { TestBed } from '@angular/core/testing';

import { CommaGameService } from './comma-game.service';

describe('CommaGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommaGameService = TestBed.get(CommaGameService);
    expect(service).toBeTruthy();
  });
});
