import { TestBed } from '@angular/core/testing';

import { AddpartsService } from './addparts.service';

describe('AddpartsService', () => {
  let service: AddpartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddpartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
