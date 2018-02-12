import { TestBed, inject } from '@angular/core/testing';

import { VehicleDataService } from './vehicle-data.service';

describe('VehicleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleDataService]
    });
  });

  it('should be created', inject([VehicleDataService], (service: VehicleDataService) => {
    expect(service).toBeTruthy();
  }));
});
