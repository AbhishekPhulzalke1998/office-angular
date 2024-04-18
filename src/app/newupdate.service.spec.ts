import { TestBed } from '@angular/core/testing';

import { NewupdateService } from './newupdate.service';

describe('NewupdateService', () => {
  let service: NewupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
