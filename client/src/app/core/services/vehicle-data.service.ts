import { Injectable } from '@angular/core';

@Injectable()
export class VehicleDataService {
  private apibase = "https://vpic.nhtsa.dot.gov/api/vehicles";  
  private apiModelForMakeID = "";
  // /GetModelsForMakeId/498?format=json  
  private apiMakeForVehicleType = "/GetMakesForVehicleType/car?format=json";
  // /GetMakesForVehicleType/car?format=json

  private apiModelForMakeYear = "/getmodelsformakeyear/";
  // /vehicles/GetModelsForMakeYear/make/honda/modelyear/2015?format=csv
  // /vehicles/GetModelsForMakeYear/make/honda/vehicletype/truck?format=csv
  // /vehicles/GetModelsForMakeYear/make/honda/modelyear/2015/vehicletype/truck?format=csv
  private apiModelForMakeIDYear = "";
  // /vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=csv
  // /vehicles/GetModelsForMakeIdYear/makeId/474/vehicletype/truck?format=csv
  // /vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015/vehicletype/truck?format=csv



  constructor() { }

  //apiusage:  http://www.carqueryapi.com/documentation/api-usage/ 

  getAllYears() {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears
    let years = [];
    for (let i = 1970; i <= new Date().getFullYear(); i++) years.push(i);
    return years;
  }

  getMakes(vehicleType) {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=1
    //TODO
  }

  getModelsForMake(make) {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford&year=2005&sold_in_us=1&body=SUV
    //TODO
  }

  getTrim(){
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&[params]
  }

  getModelDetail(){
    // https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459
  }

}


//fuel cost
// value
// depreciation
// total cost


/*

Alternative API: carqueryapi
GetYears: https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears
GetMakes: https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=1
GetModels: https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford&year=2005&sold_in_us=1&body=SUV
GetTrims: https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&[params]
GetModel: https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459

*/
