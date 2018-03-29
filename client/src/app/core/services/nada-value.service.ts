import { Injectable } from '@angular/core';
import { IVehicleDataService } from './ivehicle-data-service';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../models/vehicle';

@Injectable()
export class NadaValueService implements IVehicleDataService {

  getAllYears() {
    throw new Error("Method not implemented.");
  }
  getMakes() {
    throw new Error("Method not implemented.");
  }
  getModels(make: any, year: any): Observable<Vehicle> {
    throw new Error("Method not implemented.");
  }
  getTrim(input: any): Observable<Vehicle> {
    throw new Error("Method not implemented.");
  }
  getValue(input: Vehicle): Observable<any> {
    throw new Error("Method not implemented.");
  }
  constructor() { }

}
