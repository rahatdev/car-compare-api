import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../models/vehicle';

@Injectable()
export class VehicleDataService {
  private _apibase = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';
  private _years: number[]; //to avoid unneccesary api calls.
  // not available from api. Need to generate and store.  May need to Generate Dynamically as optional
  // filter for results.
  private _bodyStyles: string[] = ['Coupe', 'Sedan', 'SUV', 'Pickup', 'Crossover', 'Minivan'];



  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this.initializeYears();
  }
  //apiusage:  http://www.carqueryapi.com/documentation/api-usage/ 

  private initializeYears(): void {
    let query = this._apibase + 'getYears';
    this._http.get(query, { observe: 'response' })
      .subscribe(res => {
        const raw = res.body['Years'],
          minYear = raw.min_year || 1972, //arbitray default
          maxYear = raw.max_year || (new Date()).getFullYear();

        for (let year = minYear; year <= maxYear; year++) {
          this._years.push(year);
        }
      }, err => {
        this.handleError(err);
      });
  }

  getAllYears() {
    // GetYears:  https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears
    return new Observable<number>((observer) => {
      this._years.forEach((year, i, arr) => {
        observer.next(year);
        if (i => arr.length - 1) observer.complete();
      })
    })

  }

  getMakes(year, soldInUS, onlyCommonMakes?: boolean, makeCountry?: string): Observable<Vehicle> {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=1
    let query = this._apibase + 'getMakes';
    if (year > 0) query += '&year=' + year;
    if (typeof soldInUS === 'boolean') query += soldInUS ? '&sold_in_us=1' : '&sold_in_us=0';

    //execute query
    return new Observable<Vehicle>((observer) => {
      this._http.get(query)
        .map(res => {
          let makes = res['Makes'];
          makes.map((make) => {
            let vehicle: Vehicle = {
              make: {
                makeid: make['make_id'],
                makeName: make['make_display'],
                makeCountry: make['make_country'],
                makeIsCommon: (make['make_is_common'] === '1') ? true : false
              }
            };
            return vehicle;
          }).filter((vehicle) => onlyCommonMakes ? vehicle.make.makeIsCommon : true)
            .filter((vehicle) => makeCountry ? vehicle.make.makeCountry === makeCountry : true)
            .map((vehicle) => observer.next(vehicle));
          observer.complete();
        }, (err) => {
          this.handleError(err);
        })
    })
  }

  getModels(make, year, soldInUS, body) {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford&year=2005&sold_in_us=1&body=SUV
    //TODO
    let query = this._apibase + 'getModels';
    if (make) query += '&make=' + make.toLowerCase;
    if (year > 0) query += '&year=' + year;
    if (typeof soldInUS === 'boolean') query += soldInUS ? '&sold_in_us=1' : '&sold_in_us=0';
    if (body) query += '&body=' + body.toLowerCase;

    return new Observable<Vehicle>((observer) => {
      this._http.get(query)
        .map((res) => {
          let models = res['Models'];
          models.map((model) => {
            let vehicle: Vehicle = {
              model: model['model_name'],
              make: {
                makeid: model['model_make_id']
              }
            };
            observer.next(vehicle);
          });
          observer.complete();
        }, (err) => {
          this.handleError(err);
        })
    })

  }

  getTrim() {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&[params]
  }

  getModelDetail() {
    // https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459
  }

  handleError(err) {
    //placeholder for now
    console.log(err);
    return Observable.throw(err.message);
  }

}

// TODO:
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
