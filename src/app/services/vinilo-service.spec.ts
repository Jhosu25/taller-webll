import { TestBed } from '@angular/core/testing';

import { ViniloService } from './vinilo-service';

describe('ViniloService', () => {
  let service: ViniloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViniloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
