import { TestBed, inject } from '@angular/core/testing';
import { VehicleDataService, fuelCost } from './vehicle-data.service';

describe('VehicleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehicleDataService]
    });
  });

  it('should be created', inject([VehicleDataService], (service: VehicleDataService) => {
    expect(service).toBeTruthy();
  }));

  // describe('fuelCost', () => {
  //   it('should return correct cost', () => {
  //     const result = fuelCost(30, 15000, 2.90);
  //     //const expected = 1450;

  //     expect(result).toBe(1450);
  //   })

  //   it('should return correct cost', () => {
  //     const result = fuelCost(42, 15000, 3.12);
  //     //const expected = 1450;

  //     expect(result).toBe(1450);
  //   })
  // })

  // describe('totalCost', () => {
    // TODO
    // Arrange 
    // Act
    // Assert
  // })

});


