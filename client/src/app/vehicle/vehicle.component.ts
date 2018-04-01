import { Component, OnInit } from '@angular/core';
import { VehicleDataService } from '../core/services/vehicle-data.service';
import { VehicleActions } from './vehicle.actions';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../core/store';
import { NadaValueService } from '../core/services/nada-value.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
  makes;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private vehicleDataService: VehicleDataService,
    private nadaValueService: NadaValueService,
    private vehicleActions: VehicleActions
  ) {
    // this._ngRedux.subscribe(() => {

    // })
  }

  ngOnInit() {
    console.log('vehicle initialized...');

    this.nadaValueService.getMakes()
      .subscribe(
        (res) => {
          this.makes = res;
          console.log(res);
        });
    //.subscribe(res => console.log(res));
    //this.nadaValueService.getModels('Hyundai', 2012);
  }


}