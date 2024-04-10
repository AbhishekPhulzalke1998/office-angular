import { TestBed } from '@angular/core/testing';

import { ExpselserviceService } from './expselservice.service';

describe('ExpselserviceService', () => {
  let service: ExpselserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpselserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
