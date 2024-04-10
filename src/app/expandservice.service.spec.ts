import { TestBed } from '@angular/core/testing';

import { ExpandserviceService } from './expandservice.service';

describe('ExpandserviceService', () => {
  let service: ExpandserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpandserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
