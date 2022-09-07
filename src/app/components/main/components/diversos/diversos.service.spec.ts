import { TestBed } from '@angular/core/testing';

import { DiversosService } from './diversos.service';

describe('DiversosService', () => {
  let service: DiversosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiversosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
