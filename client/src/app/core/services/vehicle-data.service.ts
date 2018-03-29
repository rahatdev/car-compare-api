import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../models/vehicle';
import { IVehicleDataService } from './ivehicle-data-service';

@Injectable()
export class VehicleDataService implements IVehicleDataService {
  
  private apibase = 'https://www.carqueryapi.com/api/0.3/?callback=?&cmd=';
  private years: number[] = []; //to avoid unneccesary api calls.

  // Data below not available from api. Need to generate and store.  May need to Generate Dynamically as optional
  // filter for results.
  private bodyStyles: string[] = ['Coupe', 'Sedan', 'SUV', 'Pickup', 'Crossover', 'Minivan'];
  // private _doors: number[] = [];
  private drive: string[] = ['Front', 'Rear', 'AWD', '4WD'];
  private fuelType: string[] = ['Gasoline', 'Diesel', 'Hybrid', 'Electric'];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.initializeYears();
  }
  //apiusage:  http://www.carqueryapi.com/documentation/api-usage/ 

  private initializeYears(): void {
    console.log('initializing years...')
    let query = this.apibase + 'getYears';
    this.http.get(query, { responseType: 'text' })
      .map(this.filterResponse)
      .subscribe(res => {
        const raw = res.body['Years'],
          minYear = raw.min_year || 1972, //arbitray default
          maxYear = raw.max_year || (new Date()).getFullYear();
        console.log('min:', minYear)
        console.log('max:', maxYear)
        for (let year = minYear; year <= maxYear; year++) {
          this.years.push(year);
        }
      }, err => {
        this.handleError(err);
      });
  }

  getAllYears() {
    // GetYears:  https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getYears
    return new Observable<number>((observer) => {
      this.years.forEach((year, i, arr) => {
        observer.next(year);
        if (i => arr.length - 1) observer.complete();
      })
    })

  }

  getMakes(year?, soldInUS?, onlyCommonMakes?: boolean, makeCountry?: string): Observable<any> {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getMakes&year=2000&sold_in_us=1
    let query = this.apibase + 'getMakes';
    if (year > 0) query += '&year=' + year;
    if (typeof soldInUS === 'boolean') query += soldInUS ? '&sold_in_us=1' : '&sold_in_us=0';

    //execute query
    return this.http.get(query, { responseType: 'text' })
      .map(this.filterResponse)
      .map(res => {
        // console.log(res);
        // console.log('--------------------------------------------------------------');
        // console.log(this.filterResponse(res));
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
      }, (err) => {
        this.handleError(err);
      });
  }

  getModels(make, year, soldInUS?, body?): Observable<Vehicle> {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=ford&year=2005&sold_in_us=1&body=SUV
    //TODO
    let query = this.apibase + 'getModels';
    if (make) query += '&make=' + make.toLowerCase;
    if (year > 0) query += '&year=' + year;
    if (typeof soldInUS === 'boolean') query += soldInUS ? '&sold_in_us=1' : '&sold_in_us=0';
    if (body) query += '&body=' + body.toLowerCase;

    return new Observable<Vehicle>((observer) => {
      this.http.get(query)
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
        });
    });
  }

  getTrim(input: Vehicle, min_year?, max_year?, fullResults?: boolean): Observable<Vehicle> {
    //https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getTrims&[params]
    let query = this.handleError + 'getTrims';
    if (input && min_year > this.years[0]) {
      query += '&min_year=' + min_year;
      query += '&max_year=' +
        (max_year > min_year) ? max_year : this.years[this.years.length - 1];
      query += '&full_results=' +
        (fullResults) ? 1 : 0;
      if (input.make.makeid) query += '&make=' + input.make.makeid;
      if (input.model) query += '&model=' + input.model;
      if (input.bodyStyle && this.bodyStyles.indexOf(input.bodyStyle) > -1) query += '&body=' + input.bodyStyle;
      if (input.drive && this.drive.indexOf(input.drive) > -1) query += '&drive=' + input.drive;
      if (input.engine.fuel && this.fuelType.indexOf(input.engine.fuel) > -1) query += '&fuel_type' + input.engine.fuel;

      return new Observable<Vehicle>((observer) => {
        this.http.get(query)
          .map((res) => {
            let trims = res['Trims'];
            trims.map((trim) => {
              let vehicle: Vehicle = {
                id: trim['model_id'],
                year: trim['model_year'],
                make: {
                  makeid: trim['model_make_id'],
                  makeName: trim['make_display'],
                  makeCountry: trim['make_country']
                },
                model: trim['model_name'],
                trim: trim['model_trim'],
                bodyStyle: trim['model_body'],
                transmission: trim['model_transmission_type'],
                drive: trim['model_drive'],
                seats: trim['model_seats'],
                doors: trim['model_doors'],
                mpg: { //despite it being lkm, the data is actually in mpg. smh
                  city: trim['model_lkm_city'],
                  hwy: trim['model_lkm_hwy'],
                  mixed: trim['model_lkm_mixed']
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
    else {
      return null;
    }

  }

  // Is this method neccesary with al lthe relevant details provided by above?
  getModelDetail() {
    // https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModel&model=11459
  }

  getValue(input: Vehicle): Observable<any> {
    throw new Error("Method not implemented.");
  }

  // private methods

  filterResponse(res: string) {
    if (!res.startsWith('{') || !res.endsWith('}')) {
      let startIndex = res.indexOf('{');
      let endIndex = res.lastIndexOf('}') + 1;
      res = res.substring(startIndex, endIndex);
    }
    console.log(res);
    return JSON.parse(res);
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
