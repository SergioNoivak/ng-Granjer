import { TestBed } from '@angular/core/testing';

import { AuthGuardaService } from './auth-guarda.service';

describe('AuthGuardaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuardaService = TestBed.get(AuthGuardaService);
    expect(service).toBeTruthy();
  });
});
