import { Injectable } from '@angular/core';
import { IVehicleDataService } from './ivehicle-data-service';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../models/vehicle';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NadaValueService implements IVehicleDataService {
  private apibase = 'http://www.nadaguides.com/Cars/';
  constructor(private http: HttpClient) { }

  getAllYears() {
    throw new Error("Method not implemented.");
  }

  // future add year filter
  getMakes(): Observable<Vehicle> {
    let query = this.apibase + 'Manufacturers';
    this.http.get(query, { responseType: 'text' })
      .subscribe(
        (res) => {
          return new Observable((observer) => {
            //let makes = [];
            // cut above 'Select A Car Manufacturer'
            res = res.substring(res.indexOf('Select A Car Manufacturer'));
            // cycle logic below until
            res = res
              .substring(res.indexOf('<a href="/Cars/'))
              .substring(res.indexOf('>'));
            let vehicle: Vehicle = { make: { makeName: res.substring(0, res.indexOf('<')) } };
            observer.next(vehicle)
            // end cylce 
            observer.complete();
          })
        },
        (err) => Observable.throw(err)
      )

  }
  getModels(make: any, year?): Observable<Vehicle> {
    throw new Error("Method not implemented.");
  }
  getTrim(input: any): Observable<Vehicle> {
    throw new Error("Method not implemented.");
  }
  getValue(input: Vehicle): Observable<any> {
    throw new Error("Method not implemented.");
  }

}
