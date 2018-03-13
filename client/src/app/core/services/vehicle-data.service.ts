import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VehicleDataService {
  /*
  Alternative API: carqueryapi
  GetMakes:  https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=1
  GetModels: https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford&year=2005&sold_in_us=1&body=SUV
  GetTrims:  https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&[params]
  GetModel:  https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459
  */
  private _apibase = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';

  constructor(
    private _http: HttpClient
  ) { }

  //apiusage:  http://www.carqueryapi.com/documentation/api-usage/ 

  getAllYears() {
    // GetYears:  https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears
    let query = this._apibase + 'getYears'
    this._http.get('https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears').subscribe(res => {
      console.log(res);
    })

    // execute query
    let years = [];
    for (let i = 1970; i <= new Date().getFullYear(); i++) years.push(i);
    return years;
  }

  getMakes(year, soldInUS, makeIsCommon) {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=1
    let query = this._apibase + 'getMakes';
    if (year > 0) query += '&year=' + year;
    if (typeof soldInUS === 'boolean') query += soldInUS ? '&sold_in_us=1' : '&sold_in_us=0';

    //execute query

    //filter results
    // make_is_common
    // make_country

  }

  getModels(make, year, soldInUS, body) {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford&year=2005&sold_in_us=1&body=SUV
    //TODO
    let query = this._apibase + 'getModels';
    if (make) query += '&make=' + make.toLowerCase;

  }

  getTrim() {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&[params]
  }

  getModelDetail() {
    // https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459
  }

}


//fuel cost
// value
// depreciation
// total cost

/*
  // private apibase = "https://vpic.nhtsa.dot.gov/api/vehicles";  
  // private apiModelForMakeID = "";
  // // /GetModelsForMakeId/498?format=json  
  // private apiMakeForVehicleType = "/GetMakesForVehicleType/car?format=json";
  // // /GetMakesForVehicleType/car?format=json

  // private apiModelForMakeYear = "/getmodelsformakeyear/";
  // // /vehicles/GetModelsForMakeYear/make/honda/modelyear/2015?format=csv
  // // /vehicles/GetModelsForMakeYear/make/honda/vehicletype/truck?format=csv
  // // /vehicles/GetModelsForMakeYear/make/honda/modelyear/2015/vehicletype/truck?format=csv
  // private apiModelForMakeIDYear = "";
  // // /vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015?format=csv
  // // /vehicles/GetModelsForMakeIdYear/makeId/474/vehicletype/truck?format=csv
  // // /vehicles/GetModelsForMakeIdYear/makeId/474/modelyear/2015/vehicletype/truck?format=csv

*/
