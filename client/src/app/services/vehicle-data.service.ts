import { Injectable } from '@angular/core';

@Injectable()
export class VehicleDataService {

  constructor() { }

  fuelCost(mpg, miles, costPerGallon) {
    return miles / mpg * costPerGallon;
  }

}

export function fuelCost(mpg, miles, costPerGallon) {
  return miles / mpg * costPerGallon;
}

//fuel cost
// value
// depreciation
// total cost
