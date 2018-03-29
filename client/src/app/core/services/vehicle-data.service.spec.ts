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

  describe('filterResponse', () => {
    it('should return JSON', () => {
      let jsonObj = '{ "Makes": [{ "make_id": "ac" }, { "make_id": "Toyota" }] }';
      let inputs = [
        '?(' + jsonObj + ');',
        jsonObj,
        'catyl' + jsonObj,
        jsonObj + 'blatty',
        'catyl' + jsonObj + 'blat'
      ];
      let expectedProperty = 'Makes';
      inputs.forEach((input) => {
        let actual = service.filterResponse(input)
        expect(actual).not.toBeNull();
        expect(actual['Makes']).toBeTruthy();
        expect(actual['Makes'].length).toBeGreaterThan(0);
      })
    })
  })

  describe('getAllYears', () => {
    let result = [];
    beforeAll(() => {
      service.getAllYears().subscribe((res) => {
        result.push(res);
      });
    })

    it('should return multiple entries', () => {
      expect(result.length).toBeGreaterThan(30);
    });

    it('should contain certain years', () => {
      expect(result).toContain(1970);
      expect(result).toContain(2000);
      expect(result).toContain(2018);
    });

    it('should contain current year as last item', () => {
      let currentYear = (new Date()).getFullYear();
      expect(result[result.length - 1]).toBe(currentYear);
    })
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


