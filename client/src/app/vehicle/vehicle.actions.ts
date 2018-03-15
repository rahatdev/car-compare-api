import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../core/store';
import { VehicleDataService } from '../core/services/vehicle-data.service';


export const GET_YEARS = 'vehicle/GET_YEARS',
             GET_MAKES = 'vehicle/GET_MAKES',
             GET_MODELS = 'vehicle/GET_MODELS',
             GET_TRIM = 'vehicle/GET_TRIMS',
             GET_MODEL_DETAILED = 'vehicle/GET_MODEL_DETAILED',
             UPDATE_VEHICLE1 = 'vehicle/UPDATE_VEHICLE1',
             UPDATE_VEHICLE2 = 'vehicle/UPDATE_VEHICLE2';

@Injectable()
export class VehicleActions {
    constructor(
        private _ngRedux: NgRedux<IAppState>,
        private _vehicleDataService: VehicleDataService
    ){}

    ngOnInit(){
        this._vehicleDataService.getAllYears().subscribe((res) => {
            console.log(res);
        })
    }
}

            

