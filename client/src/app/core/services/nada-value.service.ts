import { Injectable, ViewChild } from '@angular/core';
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
  getMakes(): Observable<any> {
    let query = `${this.apibase}/Manufacturers`;
    return this.http.get(query, { responseType: 'text' })
      .map(
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

          return makes;
        });
  }
  getModels(makename: string, year: number) {
    if (makename && year > 0) {
      let query = `${this.apibase}/${year}/${makename}`;
      console.log(`calling ${query}...`);
      this.http.get(query, { responseType: 'text' })
        .subscribe(
          (res) => {
            let models = [];
            let start = 'js-ad-module row model-image-list__row';
            let end = '<div class="row make-header visible-xs">';

            res = res.substr(res.indexOf(start) + start.length, res.indexOf(end));

            //console.log(res)
            let root = `/Cars/${year}/${makename}/`;
            let subroot = `title="${year} ${makename} `;

            let rootLength = root.length;
            let subrootLength = subroot.length;

            let currentIndex = 0;
            while (currentIndex >= 0) {
              currentIndex = res.indexOf(root);
              if (currentIndex > 0) currentIndex += rootLength;
              else break;

              res = res.substring(currentIndex);
              let modelid = res.substring(0, res.indexOf('"'));
              res = res.substring(res.indexOf(subroot) + subrootLength);
              let modelname = res.substring(0, res.indexOf('"'));
              let vehicle: Vehicle = {
                make: {
                  makeName: makename
                },
                model: {
                  modelid: modelid,
                  modelname: modelname
                }
              }
              models.push(vehicle);

              currentIndex = res.indexOf(start)
              if (currentIndex > 0) res = res.substring(currentIndex);
            }
            console.log(models);
            //console.log(res);

          }
        )
      // let res: string = acura2012res;
      // // res.split('')
      // //   .map()
      // //   .filter()
      // //   .reduce()


    }
  }
  getTrim(input: any): Observable<Vehicle> {
    throw new Error("Method not implemented.");
  }
  getValue(input: Vehicle) {
    if (!input.year || input.year < 1) return new Error('input.year must be a number > 0');
    if (!input.make.makeid) return new Error('makeid must be passed');
    if (!input.model.modelid) return new Error('modelid must be passed in');
    if (!input.trim) return new Error('trim must be passed in.');

    let query =
      `${this.apibase}/${input.year}/${input.make.makeid}/${input.model.modelid}/${input.trim}/Values`;

    this.http.get(query, { responseType: 'text' })
      .subscribe(
        (res) => {

        }
      )


  }


}


