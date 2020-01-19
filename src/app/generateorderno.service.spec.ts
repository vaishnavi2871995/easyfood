import { TestBed } from '@angular/core/testing';

import { GenerateordernoService } from './generateorderno.service';

describe('GenerateordernoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateordernoService = TestBed.get(GenerateordernoService);
    expect(service).toBeTruthy();
  });
});
