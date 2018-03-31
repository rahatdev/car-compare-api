import { Injectable } from '@angular/core';
import { IVehicleDataService } from './ivehicle-data-service';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../models/vehicle';
import { HttpClient } from '@angular/common/http';
import { acura2012res } from '../sample/acura2012res';

/*
  - Static data such as years and makes, should only run once and populate the state. 
  Minimized network traffic/calls. State can be filtered as needed.
  - this should probably be handled upstream come to think of it, in order to preserve
  memory - no point in state and this class holding duplicate data.
  
  Future 
  - Perhaps Each call can update the overall state, so if the user querys the same data
  multiple times, it will only update the first time. Essentially 'Building' the state 
  with each new call parameters of make, model, trim.  Potentially this would really cut
  down network traffic, and improve speed, especially since users will typically bounce
  between a few vehicles repeatedly.
*/

@Injectable()
export class NadaValueService implements IVehicleDataService {
  private apibase = 'http://www.nadaguides.com/Cars';
  //private res1 = acura2012res;

  constructor(private http: HttpClient) { }

  getAllYears() {
    throw new Error("Method not implemented.");
  }

  // future add year filter
  // rewrite as functional
  getMakes() {
    let query = `${this.apibase}/Manufacturers`;
    this.http.get(query, { responseType: 'text' })
      .subscribe(
        (res) => {
          let makes = []; // testing
          // cut above 'Select A Car Manufacturer'
          let startIndex = res.indexOf('Select A Car Manufacturer');
          let endIndex = res.indexOf('<span class="make-list__choose-text">Select from manufacturers</span>')
          res = res.substring(startIndex, endIndex);

          let root = '<a href="/Cars/';
          let rootLength = root.length; //just so it doesn't have to keep being recalculated.
          let subroot = 'title="';
          let subrootLength = subroot.length;

          let currentIndex = 0;
          // cycle logic below while currentIndex > 0
          while (currentIndex >= 0) {
            currentIndex = res.indexOf(root);
            if (currentIndex > 0) currentIndex += rootLength;
            else break

            //get makeid
            res = res.substring(currentIndex);
            let makeid = res.substring(0, res.indexOf('"'));

            // get make
            res = res.substring(res.indexOf(subroot) + subrootLength);
            let vehicle: Vehicle = {
              make: {
                makeid: makeid,
                makeName: res.substring(0, res.indexOf('"'))
              }
            };
            makes.push(vehicle);
          }

          console.log('finish line!');
          console.log(makes);
          /// end cycle
        });
  }
  getModels(make: any, year: number) {
    if (make && year > 0) {
      // let query = `${this.apibase}/${year}/${make}`;
      // this.http.get(query, {responseType: 'text'})
      //   .subscribe(
      //     (res) => {

      //     }
      //   )
      let res: string = acura2012res;
      res.split('')
        .map()
        .filter()
        .reduce()


    }
  }
  getTrim(input: any): Observable<Vehicle> {
    throw new Error("Method not implemented.");
  }
  getValue(input: Vehicle): Observable<any> {
    throw new Error("Method not implemented.");
  }

}


