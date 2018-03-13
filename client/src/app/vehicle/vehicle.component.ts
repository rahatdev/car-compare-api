import { Component, OnInit } from '@angular/core';
import { VehicleDataService } from '../core/services/vehicle-data.service';
import { VehicleActions } from './vehicle.actions';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {  

  constructor(
    private _vehicleDataService: VehicleDataService,
    //private _vehicleActions: VehicleActions
  ) { }

  ngOnInit() {
    this._vehicleDataService.getAllYears();
  }


}