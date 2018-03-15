import { Component, OnInit } from '@angular/core';
import { VehicleDataService } from '../core/services/vehicle-data.service';
import { VehicleActions } from './vehicle.actions';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../core/store';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

  constructor(
    private _ngRedux: NgRedux<IAppState>,
    private _vehicleDataService: VehicleDataService,
    private _vehicleActions: VehicleActions
  ) {
    // this._ngRedux.subscribe(() => {

    // })
   }

  ngOnInit() {
    //this._vehicleDataService.getAllYears();
  }


}