import { TestBed } from '@angular/core/testing';

import { OperationService } from './operations/operation.service';

describe('OperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OperationService = TestBed.get(OperationService);
    expect(service).toBeTruthy();
  });
});
