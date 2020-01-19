import { TestBed } from '@angular/core/testing';

import { OrderseService } from './orderse.service';

describe('OrderseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderseService = TestBed.get(OrderseService);
    expect(service).toBeTruthy();
  });
});
