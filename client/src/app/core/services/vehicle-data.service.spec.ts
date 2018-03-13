import { TestBed, inject } from '@angular/core/testing';
import { VehicleDataService } from './vehicle-data.service';

describe('VehicleDataService', () => {
  let service: VehicleDataService;
  beforeAll(() => {
    service = new VehicleDataService(null);
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleDataService]
    });
  });

  it('should be created', inject([VehicleDataService], (service: VehicleDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('getAllYears', () => {
    let result;
    beforeAll(() => {
      result = service.getAllYears();
    })

    it('should return all correct number of entries', () => {
      const expectedEntries = new Date().getFullYear() - 1970 + 1;
      expect(result.length).toBe(49); //for 2018
      expect(result.length).toBe(expectedEntries);
    });
    it('should contain certain years', () => {
      expect(result).toContain(1970);
      expect(result).toContain(2000);
      expect(result).toContain(2018);
    });

  })


  it('should return all makes', () => {
    let result;
  })

  it('should return all makes available for specified year', () => {
    //TODO
  })

  it('should return all models available for specified make', () => {
    //TODO
  })

  it('should return all models available for specified make and year', () => {
    //TODO
  })

  it('should return all models aavailable for specified make and year, filtered by vehicle type', () => {
    //TODO
  })
});


