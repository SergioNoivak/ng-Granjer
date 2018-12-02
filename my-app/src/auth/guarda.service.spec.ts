import { TestBed } from '@angular/core/testing';

import { GuardaService } from './guarda.service';

describe('GuardaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuardaService = TestBed.get(GuardaService);
    expect(service).toBeTruthy();
  });
});
