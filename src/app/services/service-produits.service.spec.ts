import { TestBed } from '@angular/core/testing';

import { ServiceProduitsService } from './service-produits.service';

describe('ServiceProduitsService', () => {
  let service: ServiceProduitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProduitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
