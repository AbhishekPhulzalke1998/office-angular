import { TestBed } from '@angular/core/testing';

import { RelationshipserviceService } from './relationshipservice.service';

describe('RelationshipserviceService', () => {
  let service: RelationshipserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RelationshipserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
