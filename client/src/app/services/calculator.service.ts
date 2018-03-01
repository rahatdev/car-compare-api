import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  fuelCost(miles, mpg, fuelPrice){
    return miles * fuelPrice / mpg;
  }

  annualDepreciation(originalValue, currentValue, years){
    return this.totalDepreciation(originalValue, currentValue) / years;
  }

  totalDepreciation(originalValue, currentValue){
    return originalValue - currentValue;
  }

  // annualCost(fuelCost, depreciation, years){
  //   return
  // }

  totalCost(annualFuelCost, annualDepreciation, years){
    return(annualFuelCost + annualDepreciation) * years;
  }
}
