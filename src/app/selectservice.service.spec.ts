import { TestBed } from '@angular/core/testing';

import { SelectserviceService } from './selectservice.service';

describe('SelectserviceService', () => {
  let service: SelectserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
