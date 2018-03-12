import { TestBed, inject } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeAll(() => {
    service = new CalculatorService();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService]
    });
  });

  it('should be created', inject([CalculatorService], (service: CalculatorService) => {
    expect(service).toBeTruthy();
  }));

 
  it('should return correct fuel cost based on miles, mpg and fuelPrice', () => {
    const result = service.fuelCost(15000, 30, 2.80); 

    expect(result).toBe(1400); //15000 miles, 2.80 fuel cost, 30 mpg
  })

  it('should return correct fuel cost based on miles, mpg and fuelPrice', () => {
    const result = service.fuelCost(60000, 25, 2.80); 

    expect(result).toBe(6720); //60000 miles, 2.80 fuel cost, 25 mpg
  })

  it('should return correct annual depreciation based on original value, current value and years', () => {
    const result = service.annualDepreciation(11500, 3000, 4); 
    
    expect(result).toBe(2125); //11500 original, 3000 current, 4 years
  })

  it('should return correct total depreciation based on original value, current value and years', () => {
    const result = service.totalDepreciation(11500, 3000); 
    
    expect(result).toBe(8500); //11500 original, 3000 current
  })

  it('should return correct total cost based on AnnualfuelCost, annualDepreciation and years', () => {
    const result = service.totalCost(1500, 2125, 4);

    expect(result).toBe(14500); // 1500 annual fuel, 2125 annual depreciation, 4 years
  })

  it('should be able to access depreciation data', () => {
    //TODO
  })


});


// return cost based on miles, mpg and cost per gallon

// 
